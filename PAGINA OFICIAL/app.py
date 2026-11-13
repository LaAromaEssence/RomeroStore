from pathlib import Path
import json
import os
import sqlite3
from functools import wraps
from flask import Flask, jsonify, request, send_from_directory

BASE = Path(__file__).resolve().parent
DB_PATH = BASE / 'LARØMA ESSENZÉ.db'
SEED_PATH = BASE / 'seed_products.json'
ADMIN_TOKEN = os.environ.get('LARØMA ESSENZÉ_ADMIN_TOKEN', 'cambiar-esta-clave')
VALID_STATES = {'Pendiente', 'Pagado', 'Rechazado'}
app = Flask(__name__, static_folder=None)


def db():
    con = sqlite3.connect(DB_PATH, timeout=15)
    con.row_factory = sqlite3.Row
    con.execute('PRAGMA foreign_keys = ON')
    con.execute('PRAGMA journal_mode = WAL')
    return con


def init_db():
    with db() as con:
        con.executescript('''
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            categoria TEXT NOT NULL,
            precio INTEGER NOT NULL CHECK(precio >= 0),
            precio_anterior INTEGER,
            descuento INTEGER,
            visual TEXT NOT NULL DEFAULT 'LX',
            image_url TEXT NOT NULL DEFAULT '',
            oferta INTEGER NOT NULL DEFAULT 0 CHECK(oferta IN (0,1)),
            descripcion TEXT NOT NULL DEFAULT '',
            stock INTEGER NOT NULL DEFAULT 0 CHECK(stock >= 0),
            activo INTEGER NOT NULL DEFAULT 1 CHECK(activo IN (0,1)),
            creado_en TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS compras (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente TEXT NOT NULL,
            telefono TEXT DEFAULT '',
            estado TEXT NOT NULL DEFAULT 'Pendiente'
                CHECK(estado IN ('Pendiente','Pagado','Rechazado')),
            total INTEGER NOT NULL DEFAULT 0 CHECK(total >= 0),
            creada_en TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS compra_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            compra_id INTEGER NOT NULL REFERENCES compras(id),
            producto_id INTEGER NOT NULL REFERENCES productos(id),
            nombre_producto TEXT NOT NULL,
            cantidad INTEGER NOT NULL CHECK(cantidad > 0),
            precio_unitario INTEGER NOT NULL CHECK(precio_unitario >= 0)
        );
        CREATE TABLE IF NOT EXISTS movimientos_stock (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            producto_id INTEGER NOT NULL REFERENCES productos(id),
            cambio INTEGER NOT NULL CHECK(cambio != 0),
            motivo TEXT NOT NULL,
            compra_id INTEGER REFERENCES compras(id),
            fecha TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        ''')
        columns = {row['name'] for row in con.execute('PRAGMA table_info(productos)').fetchall()}
        if 'image_url' not in columns:
            con.execute("ALTER TABLE productos ADD COLUMN image_url TEXT NOT NULL DEFAULT ''")
        count = con.execute('SELECT COUNT(*) FROM productos').fetchone()[0]
        if count == 0 and SEED_PATH.exists():
            seed = json.loads(SEED_PATH.read_text(encoding='utf-8'))
            for p in seed:
                # El stock inicial queda en cero para no inventar disponibilidad real.
                con.execute('''INSERT INTO productos
                    (id,nombre,categoria,precio,precio_anterior,descuento,visual,image_url,oferta,descripcion,stock)
                    VALUES (?,?,?,?,?,?,?,?,?,?,0)''',
                    (p['id'], p['name'].strip(), p['cat'], int(p['price']), p.get('old'),
                     p.get('discount'), p.get('visual') or 'LX', p.get('image_url',''),
                     int(bool(p.get('offer'))), p.get('desc','')))


def product_dict(row):
    p = dict(row)
    p.update({'name': p.pop('nombre'), 'cat': p.pop('categoria'),
              'price': p.pop('precio'), 'old': p.pop('precio_anterior'),
              'discount': p.pop('descuento'), 'offer': bool(p.pop('oferta')),
              'desc': p.pop('descripcion')})
    return p


def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = request.headers.get('X-Admin-Token', '')
        if not ADMIN_TOKEN or token != ADMIN_TOKEN:
            return jsonify({'error': 'No autorizado. Revisá la clave de administración.'}), 401
        return fn(*args, **kwargs)
    return wrapper


@app.get('/')
def home():
    return send_from_directory(BASE, 'index.html')

@app.get('/admin')
def admin_page():
    return send_from_directory(BASE, 'admin.html')

@app.get('/<path:filename>')
def frontend_files(filename):
    if filename in {'style.css', 'styles.css', 'script.js', 'admin.js'}:
        return send_from_directory(BASE, filename)
    return jsonify({'error': 'No encontrado'}), 404

@app.get('/api/productos')
def get_products():
    with db() as con:
        rows = con.execute('SELECT * FROM productos WHERE activo=1 ORDER BY id').fetchall()
    return jsonify([product_dict(r) for r in rows])

@app.post('/api/compras')
def create_purchase():
    data = request.get_json(silent=True) or {}
    cliente = str(data.get('cliente', '')).strip()
    telefono = str(data.get('telefono', '')).strip()
    items = data.get('items') or []
    if not cliente or not isinstance(items, list) or not items:
        return jsonify({'error': 'Falta el nombre del cliente o los productos.'}), 400
    try:
        with db() as con:
            total = 0
            validated = []
            # Agrupar IDs repetidos para validar el total real solicitado.
            quantities = {}
            for item in items:
                pid, qty = int(item['producto_id']), int(item['cantidad'])
                if qty < 1:
                    raise ValueError('La cantidad debe ser mayor que cero.')
                quantities[pid] = quantities.get(pid, 0) + qty
            for pid, qty in quantities.items():
                p = con.execute('SELECT * FROM productos WHERE id=? AND activo=1', (pid,)).fetchone()
                if not p:
                    raise ValueError(f'El producto #{pid} ya no está disponible.')
                if p['stock'] < qty:
                    raise ValueError(f'Stock insuficiente para {p["nombre"]}. Disponible: {p["stock"]}.')
                total += p['precio'] * qty
                validated.append((p, qty))
            cur = con.execute('INSERT INTO compras(cliente,telefono,total) VALUES(?,?,?)', (cliente, telefono, total))
            purchase_id = cur.lastrowid
            for p, qty in validated:
                con.execute('''INSERT INTO compra_items(compra_id,producto_id,nombre_producto,cantidad,precio_unitario)
                               VALUES(?,?,?,?,?)''', (purchase_id, p['id'], p['nombre'], qty, p['precio']))
        return jsonify({'id': purchase_id, 'estado': 'Pendiente', 'total': total}), 201
    except (ValueError, KeyError, TypeError) as exc:
        return jsonify({'error': str(exc)}), 400

@app.post('/api/admin/login')
def admin_login():
    data = request.get_json(silent=True) or {}
    if str(data.get('token', '')) != ADMIN_TOKEN:
        return jsonify({'error': 'Clave incorrecta.'}), 401
    return jsonify({'ok': True})

@app.get('/api/admin/productos')
@admin_required
def admin_products():
    with db() as con:
        rows = con.execute('SELECT * FROM productos ORDER BY activo DESC,id').fetchall()
    return jsonify([product_dict(r) for r in rows])

@app.post('/api/admin/productos')
@admin_required
def add_product():
    d = request.get_json(silent=True) or {}
    try:
        name = str(d.get('name', '')).strip()
        cat = str(d.get('cat', '')).strip()
        price = int(d.get('price', -1))
        stock = int(d.get('stock', 0))
        if not name or cat not in {'perfumes','gorras','accesorios'} or price < 0 or stock < 0:
            raise ValueError('Completá nombre, categoría, precio y stock válidos.')
        with db() as con:
            cur = con.execute('''INSERT INTO productos(nombre,categoria,precio,precio_anterior,descuento,visual,image_url,oferta,descripcion,stock)
                VALUES(?,?,?,?,?,?,?,?,?,?)''', (name,cat,price,d.get('old'),d.get('discount'),str(d.get('visual') or 'LX'),str(d.get('image_url') or ''),
                int(bool(d.get('offer'))),str(d.get('desc') or ''),stock))
            pid = cur.lastrowid
            if stock:
                con.execute('INSERT INTO movimientos_stock(producto_id,cambio,motivo) VALUES(?,?,?)', (pid,stock,'Stock inicial'))
        return jsonify({'id': pid}), 201
    except (ValueError, TypeError) as exc:
        return jsonify({'error': str(exc)}), 400

@app.patch('/api/admin/productos/<int:pid>/stock')
@admin_required
def change_stock(pid):
    d = request.get_json(silent=True) or {}
    try:
        change = int(d.get('cambio', 0))
        if change == 0: raise ValueError('El cambio de stock no puede ser cero.')
        with db() as con:
            p = con.execute('SELECT stock,activo FROM productos WHERE id=?', (pid,)).fetchone()
            if not p: raise ValueError('Producto inexistente.')
            if not p['activo']: raise ValueError('El producto está desactivado.')
            new_stock = p['stock'] + change
            if new_stock < 0: raise ValueError('No hay stock suficiente para esa salida.')
            con.execute('UPDATE productos SET stock=? WHERE id=?', (new_stock,pid))
            con.execute('INSERT INTO movimientos_stock(producto_id,cambio,motivo) VALUES(?,?,?)',
                        (pid,change,str(d.get('motivo') or 'Ajuste manual')))
        return jsonify({'stock': new_stock})
    except (ValueError, TypeError) as exc:
        return jsonify({'error': str(exc)}), 400

@app.delete('/api/admin/productos/<int:pid>')
@admin_required
def deactivate_product(pid):
    with db() as con:
        cur = con.execute('UPDATE productos SET activo=0 WHERE id=? AND activo=1', (pid,))
    if not cur.rowcount: return jsonify({'error':'Producto inexistente o ya desactivado.'}), 404
    return jsonify({'ok':True})

@app.get('/api/admin/compras')
@admin_required
def admin_orders():
    with db() as con:
        orders = con.execute('SELECT * FROM compras ORDER BY id DESC').fetchall()
        result = []
        for order in orders:
            o = dict(order)
            o['items'] = [dict(x) for x in con.execute('SELECT nombre_producto,cantidad,precio_unitario FROM compra_items WHERE compra_id=?', (o['id'],)).fetchall()]
            result.append(o)
    return jsonify(result)

@app.patch('/api/admin/compras/<int:purchase_id>/estado')
@admin_required
def update_order_state(purchase_id):
    d = request.get_json(silent=True) or {}
    state = d.get('estado')
    if state not in VALID_STATES: return jsonify({'error':'Estado inválido.'}), 400
    try:
        with db() as con:
            order = con.execute('SELECT estado FROM compras WHERE id=?', (purchase_id,)).fetchone()
            if not order: raise ValueError('Compra inexistente.')
            old_state = order['estado']
            if old_state == state: return jsonify({'ok':True,'estado':state})
            items = con.execute('SELECT producto_id,nombre_producto,cantidad FROM compra_items WHERE compra_id=?', (purchase_id,)).fetchall()
            if state == 'Pagado' and old_state != 'Pagado':
                for item in items:
                    p = con.execute('SELECT stock,activo FROM productos WHERE id=?', (item['producto_id'],)).fetchone()
                    if not p or p['stock'] < item['cantidad']:
                        raise ValueError(f'Stock insuficiente para {item["nombre_producto"]}.')
                for item in items:
                    con.execute('UPDATE productos SET stock=stock-? WHERE id=?', (item['cantidad'],item['producto_id']))
                    con.execute('INSERT INTO movimientos_stock(producto_id,cambio,motivo,compra_id) VALUES(?,?,?,?)',
                        (item['producto_id'],-item['cantidad'],f'Compra #{purchase_id} pagada',purchase_id))
            elif old_state == 'Pagado' and state != 'Pagado':
                for item in items:
                    con.execute('UPDATE productos SET stock=stock+? WHERE id=?', (item['cantidad'],item['producto_id']))
                    con.execute('INSERT INTO movimientos_stock(producto_id,cambio,motivo,compra_id) VALUES(?,?,?,?)',
                        (item['producto_id'],item['cantidad'],f'Devolución de compra #{purchase_id}',purchase_id))
            con.execute('UPDATE compras SET estado=? WHERE id=?', (state,purchase_id))
        return jsonify({'ok':True,'estado':state})
    except ValueError as exc:
        return jsonify({'error':str(exc)}), 400

@app.get('/api/admin/movimientos')
@admin_required
def stock_movements():
    with db() as con:
        rows = con.execute('''SELECT m.*,p.nombre FROM movimientos_stock m
            JOIN productos p ON p.id=m.producto_id ORDER BY m.id DESC LIMIT 100''').fetchall()
    return jsonify([dict(r) for r in rows])

init_db()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)

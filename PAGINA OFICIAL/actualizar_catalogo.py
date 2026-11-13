"""Actualiza el catálogo LARØMA ESSENZÉ sin borrar el historial de compras ni los movimientos."""
from pathlib import Path
import json
import sqlite3

BASE = Path(__file__).resolve().parent
DB = BASE / 'LARØMA ESSENZÉ.db'
SEED = BASE / 'seed_products.json'

items = json.loads(SEED.read_text(encoding='utf-8'))
con = sqlite3.connect(DB)
con.execute('PRAGMA foreign_keys=ON')
cols = {r[1] for r in con.execute('PRAGMA table_info(productos)')}
if not cols:
    raise SystemExit('No existe la tabla productos. Ejecutá primero py app.py para inicializar la base.')
if 'image_url' not in cols:
    con.execute("ALTER TABLE productos ADD COLUMN image_url TEXT NOT NULL DEFAULT ''")
# Desactivar los artículos que ya no forman parte del catálogo vigente.
con.execute('UPDATE productos SET activo=0')
for p in items:
    row = con.execute('SELECT id FROM productos WHERE lower(nombre)=lower(?) ORDER BY id DESC LIMIT 1', (p['name'],)).fetchone()
    if row:
        con.execute('''UPDATE productos SET categoria=?, image_url=?, visual=?, activo=1,
                       descripcion=? WHERE id=?''',
                    (p['cat'], p.get('image_url',''), p.get('visual','LX'), p.get('desc',''), row[0]))
    else:
        con.execute('''INSERT INTO productos
            (nombre,categoria,precio,precio_anterior,descuento,visual,image_url,oferta,descripcion,stock,activo)
            VALUES(?,?,0,NULL,NULL,?,?,0,?,0,1)''',
            (p['name'],p['cat'],p.get('visual','LX'),p.get('image_url',''),p.get('desc','')))
con.commit()
print(f"Catálogo actualizado: {con.execute('SELECT COUNT(*) FROM productos WHERE activo=1').fetchone()[0]} productos activos.")
print('Los productos anteriores se conservaron desactivados para no romper el historial de compras.')
print('Los precios y el stock de los productos nuevos quedaron en 0 porque no se proporcionaron esos datos.')
con.close()

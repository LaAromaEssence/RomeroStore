const $ = (s) => document.querySelector(s);
let token = sessionStorage.getItem('LARØMA ESSENZÉAdminToken') || '';
const headers = () => ({ 'Content-Type': 'application/json', 'X-Admin-Token': token });
const money = (n) => '$' + Number(n).toLocaleString('es-AR');
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function api(url, options = {}) {
  const response = await fetch(url, { ...options, headers: { ...headers(), ...(options.headers || {}) } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Ocurrió un error.');
  return data;
}

async function login() {
  token = $('#adminToken').value.trim();
  try {
    await fetch('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({token}) }).then(async r => { const d=await r.json(); if(!r.ok) throw new Error(d.error); });
    sessionStorage.setItem('LARØMA ESSENZÉAdminToken', token);
    showDashboard();
  } catch (e) { $('#loginMessage').textContent = e.message; }
}

function showDashboard() {
  $('#loginPanel').hidden = true;
  $('#dashboard').hidden = false;
  refreshAll();
}

function logout() {
  sessionStorage.removeItem('LARØMA ESSENZÉAdminToken'); token='';
  $('#dashboard').hidden=true; $('#loginPanel').hidden=false; $('#adminToken').value='';
}

async function loadProducts() {
  const products = await api('/api/admin/productos');
  $('#productsTable').innerHTML = products.map(p => `<tr>
    <td>${p.id}</td><td>${esc(p.name)}</td><td>${esc(p.cat)}</td><td>${money(p.price)}</td><td>${p.stock}</td>
    <td>${p.activo ? 'Activo' : 'Desactivado'}</td>
    <td>${p.activo ? `<button class="danger" data-deactivate="${p.id}">Desactivar</button>` : '—'}</td></tr>`).join('');
  const active = products.filter(p => p.activo);
  $('#stockProduct').innerHTML = '<option value="">Elegí un producto</option>' + active.map(p => `<option value="${p.id}">${esc(p.name)} · stock ${p.stock}</option>`).join('');
}

async function loadOrders() {
  const orders = await api('/api/admin/compras');
  $('#ordersTable').innerHTML = orders.map(o => {
    const detail = o.items.map(i => `${esc(i.nombre_producto)} × ${i.cantidad}`).join('<br>');
    return `<tr><td>#${o.id}</td><td>${esc(o.creada_en)}</td><td>${esc(o.cliente)}</td><td>${detail}</td><td>${money(o.total)}</td>
      <td>${esc(o.estado)}</td><td><select data-order-state="${o.id}"><option ${o.estado==='Pendiente'?'selected':''}>Pendiente</option><option ${o.estado==='Pagado'?'selected':''}>Pagado</option><option ${o.estado==='Rechazado'?'selected':''}>Rechazado</option></select> <button data-save-order="${o.id}">Guardar</button></td></tr>`;
  }).join('') || '<tr><td colspan="7">Todavía no hay compras.</td></tr>';
}

async function loadMovements() {
  const rows = await api('/api/admin/movimientos');
  $('#movementsTable').innerHTML = rows.map(m => `<tr><td>${esc(m.fecha)}</td><td>${esc(m.nombre)}</td><td>${m.cambio > 0 ? '+' : ''}${m.cambio}</td><td>${esc(m.motivo)}</td></tr>`).join('') || '<tr><td colspan="4">Sin movimientos registrados.</td></tr>';
}

async function refreshAll() {
  try { await Promise.all([loadProducts(), loadOrders(), loadMovements()]); }
  catch(e) { if (e.message.includes('No autorizado')) logout(); else alert(e.message); }
}

$('#loginBtn').addEventListener('click', login);
$('#adminToken').addEventListener('keydown', e => { if(e.key==='Enter') login(); });
$('#logoutBtn').addEventListener('click', logout);

$('#productForm').addEventListener('submit', async e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const data = Object.fromEntries(f.entries());
  data.price = Number(data.price); data.stock = Number(data.stock);
  data.discount = data.discount ? Number(data.discount) : null;
  data.offer = f.has('offer');
  try { await api('/api/admin/productos',{method:'POST',body:JSON.stringify(data)}); e.currentTarget.reset(); $('#productMessage').textContent='Producto agregado.'; await loadProducts(); }
  catch(err) { $('#productMessage').textContent=err.message; }
});

$('#stockForm').addEventListener('submit', async e => {
  e.preventDefault(); const f=new FormData(e.currentTarget); const id=f.get('product_id');
  try { const result=await api(`/api/admin/productos/${id}/stock`,{method:'PATCH',body:JSON.stringify({cambio:Number(f.get('change')),motivo:f.get('reason')})}); $('#stockMessage').textContent=`Stock actualizado: ${result.stock} unidades.`; e.currentTarget.reset(); await Promise.all([loadProducts(),loadMovements()]); }
  catch(err) { $('#stockMessage').textContent=err.message; }
});

document.addEventListener('click', async e => {
  const deactivate=e.target.closest('[data-deactivate]');
  if(deactivate && confirm('¿Desactivar este producto? Se conservará en el historial de compras.')) {
    try { await api(`/api/admin/productos/${deactivate.dataset.deactivate}`,{method:'DELETE'}); await loadProducts(); }
    catch(err) { alert(err.message); }
  }
  const save=e.target.closest('[data-save-order]');
  if(save) {
    const id=save.dataset.saveOrder; const state=$(`[data-order-state="${id}"]`).value;
    try { await api(`/api/admin/compras/${id}/estado`,{method:'PATCH',body:JSON.stringify({estado:state})}); $('#ordersMessage').textContent=`Pedido #${id}: ${state}.`; await Promise.all([loadOrders(),loadProducts(),loadMovements()]); }
    catch(err) { $('#ordersMessage').textContent=err.message; }
  }
});

if (token) showDashboard();

import { useCart } from '../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cart, add, remove, updateQty, total, count } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="text-white font-bold text-lg">Your Cart ({count})</div>
          <button onClick={onClose} className="text-slate-300 hover:text-white">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-slate-400">Your cart is empty.</div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="text-white font-semibold">{item.name}</div>
                  <div className="text-orange-300 text-sm">${item.price.toFixed(2)}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 py-1 bg-white/10 rounded">-</button>
                    <span className="text-white w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 bg-white/10 rounded">+</button>
                    <button onClick={() => remove(item.id)} className="ml-auto text-red-300 hover:text-red-400 text-sm">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex justify-between text-white font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <WhatsAppCheckout />
        </div>
      </div>
    </div>
  );
}

function WhatsAppCheckout() {
  const { cart, total, clear } = useCart();
  const phone = '+18768036062';
  const renderLines = () => cart.map(i => `• ${i.qty}x ${i.name} ($${i.price.toFixed(2)} ea) - $${(i.price * i.qty).toFixed(2)}`).join('\n');

  const buildMessage = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const address = String(fd.get('address') || '').trim();
    const phoneNumber = String(fd.get('phone') || '').trim();
    if (!name || !address || !phoneNumber) return alert('Please provide name, address, and phone number.');
    if (cart.length === 0) return alert('Cart is empty.');
    const message = `📦 NEW ORDER FROM MICROTUFF HARDWARE\nCustomer: ${name}\nPhone: ${phoneNumber}\nDelivery Address: ${address}\n----------------------------------\n${renderLines()}\n----------------------------------\nTotal Amount: $${total.toFixed(2)}`;
    const url = 'https://wa.me/' + phone.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(message);
    clear();
    onClose?.();
    window.open(url, '_blank');
  };

  return (
    <details className="bg-white/5 border border-white/10 rounded-xl p-3">
      <summary className="text-white font-semibold">Complete Order via WhatsApp</summary>
      <form onSubmit={buildMessage} className="mt-3 grid gap-2">
        <input name="name" placeholder="Full Name" className="rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
        <input name="phone" placeholder="Phone Number" className="rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
        <input name="address" placeholder="Delivery Address or Pickup Note" className="rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
        <button type="submit" className="w-full mt-1 px-4 py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold">Place Order on WhatsApp</button>
      </form>
    </details>
  );
}

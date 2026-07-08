import React, { useState } from 'react'
import { useCart } from '../CartContext'
import { STORE, PAYMENT } from '../data'

function buildMsg(cart, total, meta = {}) {
  const line = (i) => `- ${i.qty}x ${i.name} ($${(i.price * i.qty).toFixed(2)})`
  const body = cart.map(line).join('\n')
  const metaLines = [
    meta.name ? `Customer: ${meta.name}` : '',
    meta.phone ? `Phone: ${meta.phone}` : '',
    meta.location ? `Dispatch: ${STORE.locations.find(l => l.id === meta.location)?.label || meta.location}` : '',
    meta.paid ? `Payment: ${meta.paid}` : '',
  ].filter(Boolean)
  return `📦 ORDER REQUEST — ${STORE.name}\n${metaLines.join('\n')}\n${PAYMENT.note}\n\n----------------------------------\n${body}\n----------------------------------\nTotal Due: $${total.toFixed(2)}`
}

export default function CartDrawer({ open, onClose }) {
  const { cart, items, remove, updateQty, total, count } = useCart()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [paid, setPaid] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (cart.length === 0) return alert('Cart is empty.')
    const msg = buildMsg(cart, total, { name, phone, location, paid })
    const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`
    onClose()
    window.open(url, '_blank')
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="text-white font-bold text-lg">Your Cart ({count})</div>
          <button onClick={onClose} className="text-slate-300 hover:text-white">×</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-slate-400">Cart is empty.</div>
          ) : cart.map(item => (
            <div key={item.id} className="flex gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-navy-900/40 rounded-lg flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm leading-tight truncate">{item.name}</div>
                <div className="text-orange-300 text-sm">${item.price.toFixed(2)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2 py-1 bg-white/10 rounded text-white">-</button>
                  <span className="text-white w-6 text-center text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 bg-white/10 rounded text-white">+</button>
                  <button onClick={() => remove(item.id)} className="ml-auto text-red-300 hover:text-red-400 text-xs">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <form onSubmit={submit} className="p-4 border-t border-white/10 bg-slate-900/60 space-y-2">
            <div className="text-white font-semibold">Checkout</div>
            <div className="bg-navy-900/60 border border-gold-500/20 rounded-lg p-3 text-xs text-sky-300">
              <div className="font-bold text-gold-500 mb-2">Pick up & pay at:</div>
              <ul className="list-disc pl-4 space-y-1">
                {STORE.locations.map(l => <li key={l.id}>{l.label}</li>)}
              </ul>
              <div className="mt-2 pt-2 border-t border-white/10">
                <div className="font-bold text-gold-500 mb-1">Payment</div>
                <div>Cash App: <span className="text-white">{PAYMENT.cashapp}</span></div>
                <div>Zelle: <span className="text-white">{PAYMENT.zelle}</span></div>
                <div className="mt-1 italic">{PAYMENT.note}</div>
              </div>
              <div className="mt-2 pt-2 border-t border-white/10 text-white">
                Total: ${total.toFixed(2)}
              </div>
            </div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" required />
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" required />
            <select value={location} onChange={e => setLocation(e.target.value)} className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100" required>
              <option value="">Select pickup / dispatch location...</option>
              {STORE.locations.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
            <input value={paid} onChange={e => setPaid(e.target.value)} placeholder="Cash App / Zelle payment proof or handle (optional)" className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
            <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold">Place Order on WhatsApp</button>
          </form>
        )}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { STORE, PAYMENT } from '../data'

export default function CartDrawer({ open, onClose }) {
  const { cart, items, remove, updateQty, total, count } = useCart()

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
          <div className="p-4 border-t border-white/10 bg-slate-900/60">
            <OrderSummary cart={cart} total={total} onClose={onClose} />
          </div>
        )}
      </div>
    </div>
  )
}

function OrderSummary({ cart, total, onClose }) {
  return (
    <details className="bg-white/5 border border-white/10 rounded-xl" open>
      <summary className="px-3 py-2 text-white font-semibold">Checkout</summary>
      <div className="px-3 pb-3">
        <div className="bg-navy-900/60 border border-gold-500/20 rounded-lg p-3 text-xs text-sky-300">
          <div className="font-bold text-gold-500 mb-2">Pick up & pay at:</div>
          <ul className="list-disc pl-4 space-y-1">
            {STORE.locations.map(l => <li key={l.id}>{l.label}</li>)}
          </ul>
          <div className="mt-2 pt-2 border-t border-white/10">
            <div className="font-bold text-gold-500 mb-1">Payment</div>
            <div>Cash App: <span className="text-white">{PAYMENT.cashapp}</span></div>
            <div>Zelle: <span className="text-white">{PAYMENT.zelle}</span></div>
            <div className="mt-1 italic">Order is dispatched once payment clears.</div>
          </div>
        </div>

        <CheckoutForm cart={cart} total={total} onClose={onClose} />
      </div>
    </details>
  )
}

function CheckoutForm({ cart, total, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [paid, setPaid] = useState('')

  const renderLines = () => cart.map(i => `- ${i.qty}x ${i.name} ($${(i.price * i.qty).toFixed(2)})`).join('\n')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !location) return alert('Name, phone, and pickup location are required.')
    if (cart.length === 0) return alert('Cart is empty.')

    const locLabel = STORE.locations.find(l => l.id === location)?.label || location
    const msg = `📦 NEW ORDER — ${STORE.name}\nCustomer: ${name}\nPhone: ${phone}\nPickup/Dispatch: ${locLabel}\nPayment: ${paid.trim() || 'pending'}\n\n${PAYMENT.note}\n\n----------------------------------\n${renderLines()}\n----------------------------------\nTotal Due: $${total.toFixed(2)}`
    const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`
    onClose()
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={submit} className="mt-3 space-y-2">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name"
        className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number"
        className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
      <select value={location} onChange={e => setLocation(e.target.value)}
        className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100">
        <option value="">Select pickup / dispatch location...</option>
        {STORE.locations.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
      </select>
      <input value={paid} onChange={e => setPaid(e.target.value)} placeholder="Cash App / Zelle payment proof or handle (optional)"
        className="w-full rounded-lg bg-black/20 border border-white/10 p-2 text-slate-100 placeholder:text-slate-400" />
      <button type="submit" className="w-full py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold">
        Place Order on WhatsApp
      </button>
    </form>
  )
}

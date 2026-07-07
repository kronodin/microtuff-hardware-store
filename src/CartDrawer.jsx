import React from 'react'
import { useCart } from './CartContext'
import { WHATSAPP_NUMBER } from './data'

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, changeQty, total, clear } = useCart()

  const buildMsg = () => {
    const lines = ['C.G WOOLERY JR — Order Request:']
    items.forEach((i) =>
      lines.push(`- ${i.qty}x ${i.name} ($${(i.qty * i.price).toFixed(2)})`)
    )
    lines.push(`Total: $${total.toFixed(2)}`)
    return encodeURIComponent(lines.join('\n'))
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex justify-end" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-navy-900 h-full overflow-y-auto border-l-2 border-gold-500">
        <div className="flex items-center justify-between p-4 border-b border-gold-500/30">
          <h2 className="font-extrabold text-gold-500 text-lg">Your Cart</h2>
          <button onClick={onClose} className="text-slate-300 hover:text-white text-2xl leading-none">×</button>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {items.length === 0 && <p className="text-slate-400">Cart is empty.</p>}
          {items.map((i) => (
            <div key={i.id} className="flex items-center gap-3 bg-navy-800/70 rounded-lg p-2">
              <div className="text-2xl">{i.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-100">{i.name}</div>
                <div className="text-xs text-gold-500">${i.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => changeQty(i.id, i.qty - 1)} className="w-6 h-6 rounded bg-navy-700 text-slate-200">−</button>
                <span className="w-6 text-center text-sm">{i.qty}</span>
                <button onClick={() => changeQty(i.id, i.qty + 1)} className="w-6 h-6 rounded bg-navy-700 text-slate-200">+</button>
              </div>
              <button onClick={() => removeItem(i.id)} className="text-red-400 text-xs ml-1">Remove</button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-gold-500/30 mt-auto">
            <div className="flex justify-between font-extrabold text-slate-100 mb-3">
              <span>Total</span>
              <span className="text-gold-500">${total.toFixed(2)}</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildMsg()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-400 transition"
            >
              Checkout via WhatsApp
            </a>
            <button onClick={clear} className="block w-full text-center text-slate-400 text-xs mt-2 hover:text-slate-200">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

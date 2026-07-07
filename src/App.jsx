import React, { useState } from 'react'
import { CATEGORIES, PRODUCTS } from './data'
import { useCart } from './CartContext'
import CartDrawer from './CartDrawer'

const NAVY = 'from-navy-900 via-navy-800 to-navy-700'
const STORE = {
  name: 'C.G WOOLERY JR',
  tagline: 'Electrical and Plumbing Supplies',
  hours: 'Mon – Sat 8:00 AM – 7:00 PM · Sun 8:00 AM – 7:00 PM',
  whatsapp: '18763599983',
  locations: [
    { name: 'Garlands', parish: 'St. James' },
    { name: 'Maroon Town', parish: 'St. James' },
    { name: 'Bogue', parish: 'Montego Bay' },
  ],
}

export default function App() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const { count } = useCart()

  const filtered = PRODUCTS.filter((p) => {
    const catOk = category === 'all' || p.category === category
    const q = search.trim().toLowerCase()
    const searchOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    return catOk && searchOk
  })

  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
      <header className={`bg-gradient-to-r ${NAVY} border-b-2 border-gold-500 sticky top-0 z-20`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-500 to-gold-400 p-1 flex items-center justify-center">
              <img src="/logo.png" alt="C.G WOOLERY JR" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-extrabold text-gold-500 text-base leading-none">{STORE.name}</div>
              <div className="text-[10px] tracking-[0.2em] text-sky-200 uppercase">{STORE.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${STORE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-400 transition"
            >WhatsApp</a>
            <button
              onClick={() => setCartOpen(true)}
              className="relative bg-gold-500 text-navy-900 font-bold px-4 py-2 rounded-lg hover:bg-gold-400 transition"
            >
              Cart
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gold-500">{STORE.name}</h1>
        <p className="mt-2 text-sky-100 text-lg font-semibold">{STORE.tagline}</p>
        <p className="text-sky-200 text-sm">{STORE.hours}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${STORE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-green-400 transition"
          >💬 WhatsApp Us</a>
          <span className="text-xs text-sky-300">Call / WhatsApp: {STORE.whatsapp}</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-sky-300">
          {STORE.locations.map((loc) => (
            <span key={loc.name} className="bg-navy-900/60 border border-gold-500/20 rounded-lg px-3 py-1">
              📍 {loc.name}, {loc.parish}
            </span>
          ))}
        </div>
      </section>

      {/* Search */}
      <div className="max-w-6xl mx-auto w-full px-4 mt-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-navy-900/60 border border-gold-500/30 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-500"
        />
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto w-full px-4 mt-4 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition ${
              category === c.id
                ? 'bg-gold-500 text-navy-900'
                : 'bg-navy-900/50 text-slate-200 border border-gold-500/20 hover:border-gold-500/60'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <main className="max-w-6xl mx-auto w-full px-4 mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-slate-400 py-10">No products found.</div>
        )}
      </main>

      <footer className="bg-navy-900 border-t border-gold-500/30 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-400 text-sm">
          {STORE.name} · {STORE.tagline} · Hours: {STORE.hours}<br />
          WhatsApp: {STORE.whatsapp} · {STORE.locations.map(l => `${l.name}, ${l.parish}`).join(' · ')}
        </div>
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="bg-navy-800/70 border border-gold-500/20 rounded-xl overflow-hidden hover:border-gold-500/60 transition flex flex-col">
      <div className="h-28 bg-navy-900/60 flex items-center justify-center text-5xl">
        {product.icon}
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-slate-100 text-sm leading-tight">{product.name}</h3>
        <p className="text-slate-400 text-xs mt-1 flex-1">{product.desc}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gold-500 font-extrabold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gold-400 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

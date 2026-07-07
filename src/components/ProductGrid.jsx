import { products } from '../data/products';

export default function ProductGrid({ category, search, onAdd }) {
  let list = products;
  if (category && category !== 'All') list = list.filter(p => p.category === category);
  if (search.trim()) {
    const q = search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map(p => (
        <div key={p.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10 transition">
          <div className="aspect-[4/3] overflow-hidden bg-slate-900/40">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-orange-300 font-semibold tracking-wide">{p.category}</span>
              <span className="text-xs text-slate-400">★ {p.rating}</span>
            </div>
            <h3 className="text-white font-bold leading-snug">{p.name}</h3>
            <p className="text-slate-300 text-sm line-clamp-2">{p.description}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="text-white text-lg font-bold">${p.price.toFixed(2)}</div>
              <button onClick={() => onAdd(p)} className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-semibold transition">Add to Cart</button>
            </div>
            <div className="text-xs text-slate-400">{p.stock > 0 ? `In Stock: ${p.stock}` : 'Out of Stock'}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { categories } from '../data/products';

export default function CategoryNav({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${active === c ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10'}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

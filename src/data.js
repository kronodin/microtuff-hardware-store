// Product catalog + store config for C.G WOOLERY JR.

export const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'power', name: 'Power Tools' },
  { id: 'hand', name: 'Hand Tools' },
  { id: 'building', name: 'Building Materials' },
  { id: 'electrical', name: 'Electrical & Plumbing' },
  { id: 'safety', name: 'Safety & Gear' },
]

export const PRODUCTS = [
  { id: 1, name: 'Cordless Drill 18V', category: 'power', price: 89.99, icon: '🛠️', desc: '18V brushless cordless drill with 2 batteries.', stock: 12, stockLabel: 'In Stock' },
  { id: 2, name: 'Angle Grinder 115mm', category: 'power', price: 54.99, icon: '⚙️', desc: 'Compact 115mm angle grinder for cutting and grinding.', stock: 8, stockLabel: 'In Stock' },
  { id: 3, name: 'Circular Saw 7¼"', category: 'power', price: 119.99, icon: '🪚', desc: '7¼ inch circular saw, 1400W motor.', stock: 5, stockLabel: 'Limited' },
  { id: 4, name: 'Heat Gun 2000W', category: 'power', price: 39.99, icon: '🔥', desc: 'Variable temperature heat gun.', stock: 15, stockLabel: 'In Stock' },
  { id: 5, name: 'Claw Hammer 16oz', category: 'hand', price: 14.99, icon: '🔨', desc: 'Forged steel 16oz claw hammer.', stock: 20, stockLabel: 'In Stock' },
  { id: 6, name: 'Tape Measure 8m', category: 'hand', price: 9.99, icon: '📏', desc: '8m durable tape measure, magnetic tip.', stock: 3, stockLabel: 'Limited' },
  { id: 7, name: 'Adjustable Wrench 10"', category: 'hand', price: 12.99, icon: '🔧', desc: '10 inch chrome adjustable wrench.', stock: 10, stockLabel: 'In Stock' },
  { id: 8, name: 'Screwdriver Set 12pc', category: 'hand', price: 19.99, icon: '🪛', desc: '12-piece precision + standard set.', stock: 0, stockLabel: 'Out of Stock' },
  { id: 9, name: 'Cement 50lb Bag', category: 'building', price: 11.99, icon: '🧱', desc: 'General purpose 50lb Portland cement.', stock: 12, stockLabel: 'In Stock' },
  { id: 10, name: 'Plywood Sheet 4x8', category: 'building', price: 32.99, icon: '🪵', desc: '4x8 ft sanded plywood, 15mm.', stock: 6, stockLabel: 'Limited' },
  { id: 11, name: 'Galvanized Nails 1kg', category: 'building', price: 7.99, icon: '📌', desc: '1kg box galvanized framing nails.', stock: 25, stockLabel: 'In Stock' },
  { id: 12, name: 'Paint Bucket 5L', category: 'building', price: 16.99, icon: '🪣', desc: '5L interior/exterior paint, white.', stock: 8, stockLabel: 'In Stock' },
  { id: 13, name: 'LED Bulb 10W (4pk)', category: 'electrical', price: 8.99, icon: '💡', desc: '4-pack 10W LED, warm white.', stock: 30, stockLabel: 'In Stock' },
  { id: 14, name: 'PVC Pipe 1" 2m', category: 'electrical', price: 6.49, icon: '🚰', desc: '1 inch PVC pipe, 2 meter.', stock: 18, stockLabel: 'In Stock' },
  { id: 15, name: 'Surge Protector 6-out', category: 'electrical', price: 13.99, icon: '🔌', desc: '6 outlet surge protector + USB.', stock: 9, stockLabel: 'In Stock' },
  { id: 16, name: 'Wire Roll 1.5mm²', category: 'electrical', price: 21.99, icon: '🧵', desc: '25m roll 1.5mm² twin wire.', stock: 0, stockLabel: 'Out of Stock' },
  { id: 17, name: 'Safety Helmet', category: 'safety', price: 9.99, icon: '⛑️', desc: 'Ratchet adjustable helmet.', stock: 20, stockLabel: 'In Stock' },
  { id: 18, name: 'Work Gloves (Pair)', category: 'safety', price: 5.99, icon: '🧤', desc: 'Cut-resistant nitrile gloves.', stock: 35, stockLabel: 'In Stock' },
  { id: 19, name: 'Safety Goggles', category: 'safety', price: 4.99, icon: '🥽', desc: 'Anti-fog impact goggles.', stock: 22, stockLabel: 'In Stock' },
  { id: 20, name: 'Hi-Vis Vest', category: 'safety', price: 7.49, icon: '🦺', desc: 'Class 2 reflective vest.', stock: 11, stockLabel: 'In Stock' },
]

export const WHATSAPP_NUMBER = '18763599983'

export const STORE = {
  name: 'C.G WOOLERY JR',
  tagline: 'Electrical and Plumbing Supplies',
  hours: 'Mon - Sat 8:00 AM - 7:00 PM · Sun 8:00 AM - 7:00 PM',
  whatsapp: '18763599983',
  locations: [
    { id: 'garlands', label: 'Garlands — St. James' },
    { id: 'maroon', label: 'Maroon Town — St. James' },
    { id: 'bogue', label: 'Bogue — Montego Bay' },
  ],
  brand: 'Microtuff Solutions',
  supportEmail: 'mrmicrotuff@programmer.net',
  supportPhone: '+1(770)580-3927',
}

export const PAYMENT = {
  cashapp: '$MicrotuffSolutions',
  zelle: '+177****3927',
  note: 'Pay via Cash App handle above or Zelle to +177****3927. Order is dispatched once payment clears.',
}

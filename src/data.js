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
  { id: 9, name: 'Carib Cement 42.5kg', category: 'building', price: 18.99, icon: '🏗️', desc: '42.5kg Carib cement bag — preferred for Jamaican masonry and concrete.', stock: 18, stockLabel: 'In Stock' },
  { id: 10, name: 'Concrete Blocks 6" (100pc)', category: 'building', price: 29.99, icon: '🧱', desc: '100pc 6-inch concrete blocks for walls and foundations.', stock: 9, stockLabel: 'Limited' },
  { id: 11, name: 'Steel Rod 1/2" x 20ft', category: 'building', price: 24.99, icon: '⚙️', desc: '1/2 inch mild steel rod, 20ft — reinforcement and general construction.', stock: 14, stockLabel: 'In Stock' },
  { id: 12, name: 'Steel Rod 3/8" x 20ft', category: 'building', price: 16.99, icon: '⚙️', desc: '3/8 inch mild steel rod, 20ft — lighter reinforcement jobs.', stock: 22, stockLabel: 'In Stock' },
  { id: 13, name: 'Steel Sheet 4x8 Corrugated', category: 'building', price: 44.99, icon: '🔩', desc: 'Corrugated steel sheet 4x8 ft for roofing and siding.', stock: 7, stockLabel: 'Limited' },
  { id: 14, name: 'Plywood Sheet 4x8 15mm', category: 'building', price: 34.99, icon: '🌲', desc: '4x8 ft sanded plywood, 15mm — formwork and decking.', stock: 6, stockLabel: 'Limited' },
  { id: 15, name: 'Sand/aggregate Bag 1cu yd', category: 'building', price: 26.99, icon: '⏳', desc: '1 cubic yard washed sand/aggregate — concrete and mortar mix.', stock: 10, stockLabel: 'In Stock' },
  { id: 16, name: 'Galvanized Nails 1kg', category: 'building', price: 7.99, icon: '📌', desc: '1kg box galvanized framing nails.', stock: 25, stockLabel: 'In Stock' },
  { id: 17, name: 'Paint Bucket 5L', category: 'building', price: 16.99, icon: '🎨', desc: '5L interior/exterior paint, white.', stock: 8, stockLabel: 'In Stock' },
  { id: 13, name: 'LED Bulb 10W (4pk)', category: 'electrical', price: 8.99, icon: '💡', desc: '4-pack 10W LED, warm white.', stock: 30, stockLabel: 'In Stock' },
  { id: 14, name: 'PVC Pipe 1" 2m', category: 'electrical', price: 6.49, icon: '🚰', desc: '1 inch PVC pipe, 2 meter.', stock: 18, stockLabel: 'In Stock' },
  { id: 15, name: 'Surge Protector 6-out', category: 'electrical', price: 13.99, icon: '🔌', desc: '6 outlet surge protector + USB.', stock: 9, stockLabel: 'In Stock' },
  { id: 16, name: 'Wire Roll 1.5mm²', category: 'electrical', price: 21.99, icon: '🧵', desc: '25m roll 1.5mm² twin wire.', stock: 0, stockLabel: 'Out of Stock' },
  { id: 17, name: '2x4x8 Stud Pine', category: 'building', price: 12.49, icon: '🌲', desc: '2x4x8 treated pine stud for framing and general carpentry.', stock: 30, stockLabel: 'In Stock' },
  { id: 18, name: '2x6x12 Floor Joist', category: 'building', price: 22.99, icon: '🌲', desc: '2x6x12 treated pine joist for floor framing.', stock: 18, stockLabel: 'In Stock' },
  { id: 19, name: '4x4x8 Post', category: 'building', price: 17.49, icon: '🌲', desc: '4x4x8 treated post for deck posts and fence supports.', stock: 14, stockLabel: 'In Stock' },
  { id: 20, name: 'Cement Board 4x8 6mm', category: 'building', price: 27.99, icon: '🧱', desc: '4x8 ft 6mm cement board — tile backing and wet area lining.', stock: 9, stockLabel: 'Limited' },
  { id: 21, name: 'Sand/Aggregate Bag 1cu yd', category: 'building', price: 26.99, icon: '⏳', desc: '1 cubic yard washed sand/aggregate — concrete and mortar mix.', stock: 10, stockLabel: 'In Stock' },
  { id: 17, name: 'Safety Helmet', category: 'safety', price: 9.99, icon: '⛑️', desc: 'Ratchet adjustable helmet.', stock: 20, stockLabel: 'In Stock' },
  { id: 18, name: 'Work Gloves (Pair)', category: 'safety', price: 5.99, icon: '🧤', desc: 'Cut-resistant nitrile gloves.', stock: 35, stockLabel: 'In Stock' },
  { id: 21, name: 'Impact Driver 20V', category: 'power', price: 69.99, icon: '🔩', desc: '20V impact driver with quick-change chuck.', stock: 9, stockLabel: 'In Stock' },
  { id: 22, name: 'Jigsaw 650W', category: 'power', price: 49.99, icon: '〽️', desc: '650W variable-speed jigsaw with laser guide.', stock: 7, stockLabel: 'In Stock' },
  { id: 23, name: 'Reciprocating Saw', category: 'power', price: 64.99, icon: '⸕', desc: 'Heavy-duty reciprocating saw for demolition and rough cuts.', stock: 5, stockLabel: 'Limited' },
  { id: 24, name: 'Orbital Sander', category: 'power', price: 39.99, icon: '🔘', desc: '5-inch orbital sander with dust collection.', stock: 11, stockLabel: 'In Stock' },
  { id: 25, name: 'Router 1.5HP', category: 'power', price: 74.99, icon: '🛤️', desc: '1.5HP plunge router for edge and dado work.', stock: 4, stockLabel: 'Limited' },
  { id: 26, name: 'Multimeter', category: 'electrical', price: 19.99, icon: '📟', desc: 'Auto-ranging digital multimeter with continuity beep.', stock: 16, stockLabel: 'In Stock' },
  { id: 27, name: 'Wire Stripper/Crimper', category: 'hand', price: 9.99, icon: '✂️', desc: 'Self-adjusting wire stripper and crimper set.', stock: 21, stockLabel: 'In Stock' },
  { id: 28, name: 'Pipe Wrench 14"', category: 'hand', price: 15.99, icon: '🔧', desc: '14 inch heavy-duty pipe wrench.', stock: 13, stockLabel: 'In Stock' },
  { id: 29, name: 'Socket Set 1/2" 24pc', category: 'hand', price: 29.99, icon: '🖇️', desc: '24-piece 1/2-inch drive socket set with ratchet.', stock: 8, stockLabel: 'In Stock' },
  { id: 30, name: 'Quick Clamp 6" (2pk)', category: 'hand', price: 11.49, icon: '🗜️', desc: 'Pair of 6-inch quick-release clamps.', stock: 17, stockLabel: 'In Stock' },
  { id: 31, name: 'Spirit Level 24"', category: 'hand', price: 13.99, icon: '📏', desc: '24 inch aluminum box spirit level.', stock: 10, stockLabel: 'In Stock' },
  { id: 32, name: 'Pry Bar 18"', category: 'hand', price: 18.99, icon: '🔨', desc: '18 inch flat pry bar for demolition and prying.', stock: 6, stockLabel: 'Limited' },
  { id: 33, name: 'Safety Goggles', category: 'safety', price: 4.99, icon: '🥽', desc: 'Anti-fog impact goggles.', stock: 22, stockLabel: 'In Stock' },
  { id: 34, name: 'Hi-Vis Vest', category: 'safety', price: 7.49, icon: '🦺', desc: 'Class 2 reflective vest.', stock: 11, stockLabel: 'In Stock' },
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

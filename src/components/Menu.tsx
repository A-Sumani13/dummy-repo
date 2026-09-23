const menuData = [
  {
    category: 'Starters',
    items: [
      { name: 'Sourdough & Butter', description: 'House-made sourdough, cultured sea salt butter', price: '8' },
      { name: 'Heirloom Tomato', description: 'Basil emulsion, smoked olive oil, micro greens', price: '14' },
      { name: 'Charred Leek', description: 'Hazelnut vinaigrette, whipped ricotta', price: '12' },
    ]
  },
  {
    category: 'Mains',
    items: [
      { name: 'Wild Mushroom Risotto', description: 'Arborio rice, porcini dust, aged parmesan', price: '26' },
      { name: 'Pan-Seared Halibut', description: 'Celeriac purée, braised fennel, lemon beurre blanc', price: '32' },
      { name: 'Roasted Duck Breast', description: 'Plum reduction, chicory, parsnip crisps', price: '34' },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Dark Chocolate Ganache', description: 'Olive oil sponge, flaky sea salt', price: '12' },
      { name: 'Lemon Tart', description: 'Burnt meringue, thyme shortbread', price: '10' },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-4">The Menu</h2>
          <div className="w-12 h-1 bg-black mx-auto"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {menuData.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl md:text-2xl uppercase tracking-widest font-semibold text-gray-400 mb-8 pb-4 border-b border-gray-100">
                {section.category}
              </h3>
              <div className="space-y-8">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-8 group">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-black">{item.name}</h4>
                      <p className="text-gray-500 font-light mt-1">{item.description}</p>
                    </div>
                    <div className="relative overflow-hidden flex-1 hidden md:block">
                      <div className="w-full border-b border-dotted border-gray-300 opacity-50 group-hover:border-black transition-colors duration-300"></div>
                    </div>
                    <div className="text-lg font-medium text-black">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

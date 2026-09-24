import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  return (
    <section id="menu" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Menu</h2>
          
          <div className="flex gap-6 md:gap-12 overflow-x-auto pb-4 w-full justify-start md:justify-center no-scrollbar">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'text-stone-900 font-medium border-b border-stone-900 pb-1' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {menuData.map((category) => 
              category.id === activeCategory && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
                >
                  {category.items.map((item) => (
                    <div key={item.id} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-stone-900 font-serif">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-stone-500 text-sm font-light">
                          {item.description}
                        </p>
                        {item.dietary && (
                          <div className="flex gap-1">
                            {item.dietary.map(diet => (
                              <span key={diet} className="text-[10px] tracking-wider font-medium text-stone-400 border border-stone-300 px-1 rounded-sm">
                                {diet}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

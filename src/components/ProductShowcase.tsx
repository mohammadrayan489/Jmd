import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './ui/SectionHeader';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/content';
import { Button } from './ui/Button';
import { ShoppingCart, ExternalLink, Info } from 'lucide-react';

export const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.categoryId === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#0b0d10]">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Collection 2026"
          title="Find the Right Gift for Every Occasion"
          subtitle="Explore our curated collections of premium corporate gifts, from executive desk sets to custom team apparel."
        />

        {/* Categories Scroller */}
        <div className="flex items-center gap-3 overflow-x-auto pb-8 mb-12 scrollbar-hide no-scrollbar">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#dfb775] text-[#0b0d10] border-[#dfb775]'
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-[#dfb775]/30">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-white font-bold mb-2">Ideal for:</div>
                        <div className="text-gray-300 text-sm">{product.idealFor}</div>
                      </div>
                    </div>
                    
                    {/* Hover Reflections */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#dfb775] bg-[#dfb775]/10 px-3 py-1 rounded-full border border-[#dfb775]/20">
                        {product.category}
                      </span>
                      <span className="text-xs text-gray-500 font-bold">Min: {product.minimumQuantity}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#dfb775] transition-colors">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        className="flex-grow gap-2"
                        onClick={() => window.location.href = '#quote'}
                      >
                        <ShoppingCart size={16} />
                        Request Quote
                      </Button>
                      <button 
                        className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#dfb775] hover:text-[#0b0d10] transition-all"
                        onClick={() => window.location.href = '#quote'}
                        title="View Details"
                      >
                        <Info size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center glass-panel rounded-3xl">
            <div className="text-gray-500 text-xl font-bold mb-4">No products found in this category.</div>
            <Button variant="outline" onClick={() => setActiveCategory('all')}>View All Products</Button>
          </div>
        )}
      </div>
    </section>
  );
};

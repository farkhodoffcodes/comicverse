import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMICS } from '../constants';
import { Comic } from '../types';
import { Plus, Filter } from 'lucide-react';

interface CatalogProps {
    addToCart: (item: Comic) => void;
}

const Catalog: React.FC<CatalogProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', ...Array.from(new Set(COMICS.map(c => c.category)))];
  const filteredComics = filter === 'ALL' ? COMICS : COMICS.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-paperWhite pt-24 pb-20">
       <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
              <h2 className="font-display text-8xl text-black uppercase mb-8">Catalog</h2>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                  <div className="bg-black text-white p-2 mr-4">
                      <Filter size={24} />
                  </div>
                  {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 font-condensed text-xl uppercase border-2 border-black transition-all
                        ${filter === cat ? 'bg-comicRed text-white shadow-[4px_4px_0px_0px_black]' : 'bg-white text-black hover:bg-gray-200'}`}
                      >
                          {cat}
                      </button>
                  ))}
              </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
             {filteredComics.map((comic, index) => (
                 <motion.div
                    key={comic.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(255,59,48,1)] transition-all duration-300"
                 >
                    <div className="relative aspect-[2/3] overflow-hidden border-b-4 border-black">
                        <img 
                            src={comic.image} 
                            alt={comic.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-0 left-0 bg-comicRed text-white font-condensed font-bold px-3 py-1">
                            {comic.category}
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="font-condensed text-2xl font-bold leading-none uppercase pr-2">{comic.title}</h3>
                             <span className="font-display text-xl text-comicRed">${comic.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-sans font-bold mb-4">{comic.issue}</p>
                        
                        <button 
                            onClick={() => addToCart(comic)}
                            className="w-full bg-black text-white py-3 font-condensed uppercase tracking-widest hover:bg-comicRed transition-colors flex items-center justify-center gap-2"
                        >
                            <Plus size={18} /> Add To Cart
                        </button>
                    </div>
                 </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Catalog;
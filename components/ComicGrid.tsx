import React from 'react';
import { COMICS } from '../constants';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ComicGrid: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 relative">
       {/* Section Title */}
       <div className="max-w-7xl mx-auto mb-16 relative">
          <div className="absolute -top-10 -left-10 text-[10rem] md:text-[15rem] font-display text-gray-100 opacity-50 select-none overflow-hidden whitespace-nowrap z-0">
            COMICS COMICS COMICS
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-6xl md:text-9xl text-comicRed uppercase leading-none tracking-tighter">
                Wide Selection
            </h2>
            <h3 className="font-display text-5xl md:text-8xl text-black uppercase leading-none tracking-tighter ml-12 md:ml-32">
                Of Best Comics
            </h3>
          </div>
       </div>

       {/* Grid */}
       <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {COMICS.map((comic, index) => (
             <motion.div
                key={comic.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative cursor-pointer"
             >
                <div className="relative overflow-hidden shadow-lg aspect-[2/3] bg-gray-200">
                    <img 
                        src={comic.image} 
                        alt={comic.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-comicRed rounded-full p-3 text-white transform hover:scale-110 transition-transform">
                            <Plus size={24} />
                        </button>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black font-condensed font-bold px-2 py-1 text-sm -rotate-3 shadow-md">
                        ${comic.price}
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-xs text-comicRed font-bold uppercase tracking-widest">{comic.category}</p>
                    <h4 className="font-condensed text-xl leading-tight uppercase font-bold mt-1 group-hover:text-comicRed transition-colors">
                        {comic.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-sans">{comic.issue}</p>
                </div>
             </motion.div>
          ))}
       </div>
        
        <div className="flex justify-center mt-16">
            <button className="bg-black text-white px-12 py-4 font-condensed text-xl uppercase tracking-widest hover:bg-comicRed transition-colors skew-x-[-10deg]">
                <span className="skew-x-[10deg] block">View Full Catalog</span>
            </button>
        </div>
    </section>
  );
};

export default ComicGrid;
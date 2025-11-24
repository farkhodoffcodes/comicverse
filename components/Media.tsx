import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="min-h-screen bg-comicBlack text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display text-8xl text-white uppercase mb-12"
            >
                Media & <span className="text-comicRed">News</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Featured Article */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-2 relative group cursor-pointer overflow-hidden border-4 border-white"
                >
                    <div className="aspect-video overflow-hidden">
                        <img src="https://picsum.photos/seed/heroarticle/1200/800" alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-32">
                        <span className="bg-comicRed text-white px-4 py-1 font-condensed font-bold uppercase tracking-wider mb-4 inline-block">Featured</span>
                        <h3 className="font-display text-5xl md:text-7xl uppercase leading-none mb-4 drop-shadow-md">The Rise of Digital Comics</h3>
                        <p className="font-sans text-gray-300 text-lg max-w-2xl mb-4">Exploring how technology is reshaping the way we consume our favorite superhero stories.</p>
                        <span className="flex items-center text-comicRed font-condensed text-xl uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                            Read Story <ArrowRight className="ml-2" />
                        </span>
                    </div>
                </motion.div>

                {/* Article List */}
                {ARTICLES.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-900 border-2 border-gray-700 hover:border-comicRed transition-colors group flex flex-col md:flex-row overflow-hidden h-full"
                    >
                         <div className="w-full md:w-1/2 overflow-hidden">
                             <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                         </div>
                         <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
                             <div>
                                <div className="flex justify-between items-center mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <span>{article.category}</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="font-condensed text-3xl uppercase leading-tight mb-3 group-hover:text-comicRed transition-colors">{article.title}</h3>
                                <p className="text-gray-400 font-sans text-sm line-clamp-3">{article.excerpt}</p>
                             </div>
                             <button className="mt-6 text-left text-white font-bold uppercase tracking-widest text-sm hover:text-comicRed transition-colors">
                                 Read More
                             </button>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Media;
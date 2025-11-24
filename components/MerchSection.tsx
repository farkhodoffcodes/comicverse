import React from 'react';
import { motion } from 'framer-motion';

const MerchSection: React.FC = () => {
  return (
    <section className="relative w-full bg-comicBlack text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="z-10 relative">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-display text-6xl md:text-8xl leading-none uppercase mb-6">
                    We Have A Wide <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Selection</span>
                </h2>
                <h3 className="font-condensed text-4xl md:text-5xl uppercase tracking-wider mb-8">
                    Of Merchandise, <br/>
                    Including <span className="text-comicRed font-bold italic">Figures,</span> <br/>
                    <span className="text-comicOrange font-bold italic">Posters,</span> <br/>
                    And Accessories
                </h3>
                <p className="font-sans text-gray-400 max-w-md mb-8 text-lg">
                    Explore our vast collection of digital comics, from timeless classics to the latest indie hits. With new titles added regularly, there's always something fresh to discover!
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                    className="border-2 border-white px-8 py-3 font-condensed text-xl uppercase tracking-widest"
                >
                    See More
                </motion.button>
            </motion.div>
        </div>

        {/* Visual Chaos/Collage */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
             <div className="absolute w-[500px] h-[500px] bg-comicRed rounded-full opacity-10 blur-[100px]"></div>
             
             {/* Floating Items */}
             <motion.div 
                className="absolute z-20 w-48 md:w-64 border-4 border-white shadow-2xl rotate-[-6deg] top-10 left-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
             >
                <img src="https://picsum.photos/seed/actionfigure/400/500" alt="Merch 1" className="w-full" />
             </motion.div>

             <motion.div 
                className="absolute z-10 w-56 md:w-72 border-4 border-comicRed shadow-2xl rotate-[12deg] bottom-10 right-10"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
             >
                <img src="https://picsum.photos/seed/poster/400/600" alt="Merch 2" className="w-full" />
             </motion.div>

             <motion.div 
                className="absolute z-30 w-40 md:w-52 border-4 border-black bg-black p-2 shadow-2xl rotate-[-15deg] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
             >
                 <div className="text-center">
                    <h4 className="font-bebas text-4xl text-comicOrange">EXCLUSIVE</h4>
                    <img src="https://picsum.photos/seed/sticker/300/300" alt="Sticker" className="w-full" />
                 </div>
             </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MerchSection;
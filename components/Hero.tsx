import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
    onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const imageLeftY = useTransform(scrollY, [0, 500], [0, -100]);
  const imageRightY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative w-full min-h-screen bg-paperWhite overflow-hidden pt-20 flex items-center justify-center">
      {/* Background Texture Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[120%] bg-[url('https://picsum.photos/seed/comictexture/1600/900')] bg-cover bg-center mix-blend-multiply grayscale"></div>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 flex flex-col items-center justify-center min-h-[85vh]">
        
        {/* Main Headline - Constructed to match design */}
        <div className="text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-condensed text-2xl md:text-4xl font-bold tracking-[0.3em] mb-6 text-black bg-white inline-block px-4 py-1 rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              WELCOME TO THE
            </h2>
          </motion.div>
          
          <motion.h1 
            style={{ y: textY }}
            className="font-display text-[6rem] sm:text-[9rem] md:text-[11rem] lg:text-[14rem] leading-[0.8] text-comicRed uppercase tracking-tighter drop-shadow-2xl mix-blend-multiply"
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
              className="block hover:text-black transition-colors duration-500"
            >
              BEST COMIC
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
              className="block text-black hover:text-comicRed transition-colors duration-500 relative"
            >
              <span className="relative z-10">BOOK STORE</span>
              {/* Decorative underline */}
              <div className="absolute -bottom-4 left-0 w-full h-4 bg-comicOrange skew-x-[-20deg] -z-10"></div>
            </motion.div>
             <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
              className="block text-comicOrange text-outline-black hover:text-comicOrange hover:text-outline-none transition-all duration-300"
            >
              EVER SEEN
            </motion.div>
          </motion.h1>
        </div>

        {/* Floating Comic Cards - Parallax */}
        <motion.div 
            style={{ y: imageLeftY }}
            className="absolute top-20 lg:top-32 left-4 lg:left-20 w-40 md:w-64 lg:w-80 rotate-[-12deg] z-10 opacity-90"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            <div className="bg-white p-2 pb-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-4 border-black transition-transform hover:scale-105 duration-300">
                <img src="https://picsum.photos/seed/hulk/400/600" alt="Comic 1" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="mt-2 font-condensed font-bold text-center text-xl">THE INCREDIBLE HULK</div>
            </div>
        </motion.div>

        <motion.div 
            style={{ y: imageRightY }}
            className="absolute bottom-32 right-4 lg:right-20 w-40 md:w-64 lg:w-80 rotate-[12deg] z-30"
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 1.0, duration: 0.8 }}
        >
             <div className="bg-black p-2 pb-8 shadow-[-10px_10px_0px_0px_rgba(255,59,48,1)] border-4 border-white transition-transform hover:scale-105 duration-300">
                 <img src="https://picsum.photos/seed/wolverine/400/600" alt="Comic 2" className="w-full h-auto" />
                 <div className="mt-2 font-condensed font-bold text-center text-white text-xl">WOLVERINE #1</div>
             </div>
        </motion.div>

         {/* Call to action */}
         <motion.button
            onClick={onExplore}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 bg-black text-white px-12 py-5 font-condensed text-3xl uppercase tracking-widest hover:bg-comicRed transition-colors duration-300 shadow-[8px_8px_0px_0px_rgba(255,59,48,1)] z-40 relative"
         >
            Start Exploring
         </motion.button>
      </div>

      {/* Grunge Borders */}
      <div className="absolute top-0 left-0 w-full h-8 bg-comicBlack z-50 grunge-border rotate-180"></div>
      <div className="absolute bottom-[-1px] left-0 w-full h-12 bg-comicBlack z-50 grunge-border"></div>
    </div>
  );
};

export default Hero;
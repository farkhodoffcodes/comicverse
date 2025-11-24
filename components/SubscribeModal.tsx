import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-comicRed/90 backdrop-blur-md flex items-center justify-center p-4"
        >
           <motion.div 
             initial={{ scale: 0.5, rotate: -5 }}
             animate={{ scale: 1, rotate: 0 }}
             exit={{ scale: 0.5, rotate: 5 }}
             className="w-full max-w-lg bg-white border-4 border-black p-10 relative shadow-[20px_20px_0px_0px_black]"
           >
              <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-comicRed transition-colors">
                  <X size={32} />
              </button>

              <div className="text-center">
                  <div className="bg-comicOrange w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                      <Zap size={40} className="text-white fill-current" />
                  </div>
                  <h2 className="font-display text-6xl uppercase mb-2 leading-none">Join The <br/><span className="text-comicRed">Squad</span></h2>
                  <p className="font-condensed text-xl text-gray-600 mb-8 uppercase">Get exclusive deals, early access, and geeky news delivered to your inbox.</p>
                  
                  <form className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="ENTER YOUR EMAIL" 
                        className="w-full p-4 bg-gray-100 border-4 border-black font-condensed text-xl focus:outline-none focus:border-comicRed"
                      />
                      <button className="w-full bg-black text-white py-4 font-condensed text-2xl uppercase tracking-widest hover:bg-comicRed hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] transition-all">
                          Subscribe
                      </button>
                  </form>
                  <p className="mt-4 text-xs text-gray-400 font-sans">No spam, only Bam! Pow! Zap!</p>
              </div>
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
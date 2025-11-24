import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Comic } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Comic[];
  removeFromCart: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-paperWhite border-l-4 border-black shadow-2xl flex flex-col"
          >
            <div className="p-6 bg-black text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ShoppingBag size={24} />
                    <h2 className="font-condensed text-3xl uppercase tracking-wider">Your Stash</h2>
                </div>
                <button onClick={onClose} className="hover:text-comicRed transition-colors">
                    <X size={28} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                        <ShoppingBag size={64} className="mb-4" />
                        <p className="font-condensed text-2xl uppercase">Your cart is empty</p>
                        <p className="font-sans text-center max-w-xs mt-2">Time to stock up on some reading material, hero.</p>
                    </div>
                ) : (
                    cartItems.map((item, idx) => (
                        <motion.div 
                            key={`${item.id}-${idx}`}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="flex gap-4 bg-white p-4 border-2 border-black shadow-md"
                        >
                            <img src={item.image} alt={item.title} className="w-20 h-28 object-cover border border-gray-200" />
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-condensed text-lg font-bold leading-tight uppercase">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{item.issue}</p>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-display text-xl text-comicRed">${item.price}</span>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            <div className="p-6 bg-white border-t-4 border-black">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-condensed text-2xl uppercase font-bold">Total</span>
                    <span className="font-display text-4xl text-comicRed">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-comicRed text-white py-4 font-condensed text-2xl uppercase tracking-widest hover:bg-black transition-colors shadow-[4px_4px_0px_0px_black]">
                    Checkout
                </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
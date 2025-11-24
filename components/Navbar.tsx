import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  cartCount: number;
  openCart: () => void;
  openSearch: () => void;
  openSubscribe: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount, openCart, openSearch, openSubscribe }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: View }[] = [
    { label: 'MAIN', value: 'HOME' },
    { label: 'CATALOG', value: 'CATALOG' },
    { label: 'MEDIA', value: 'MEDIA' },
    { label: 'CONTACTS', value: 'CONTACTS' },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-comicBlack text-white border-b-4 border-comicRed shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setView('HOME')}>
            <h1 className="font-display text-4xl tracking-tighter uppercase italic select-none hover:text-comicRed transition-colors">
              Comic<span className="text-comicRed">Verse</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setView(item.value)}
                  className={`font-condensed text-xl transition-all duration-200 tracking-wider relative group ${currentView === item.value ? 'text-comicRed' : 'text-white hover:text-comicRed'}`}
                >
                  {item.label}
                  {currentView === item.value && (
                    <motion.div 
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-1 bg-comicRed"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={openSearch} className="hover:text-comicRed transition-colors">
                <Search className="w-6 h-6" />
            </button>
            <button onClick={openCart} className="relative group hover:text-comicRed transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-comicRed text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                        {cartCount}
                    </span>
                )}
            </button>
            <button 
                onClick={openSubscribe}
                className="bg-white text-black font-condensed font-bold px-6 py-2 hover:bg-comicRed hover:text-white transition-all uppercase skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(255,59,48,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            >
              <span className="skew-x-[10deg] inline-block">Subscribe</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-comicRed focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-comicBlack border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                      setView(item.value);
                      setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 font-condensed text-2xl uppercase hover:bg-gray-800 hover:text-comicRed border-b border-gray-800"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-4">
                 <button onClick={() => { openSearch(); setIsOpen(false); }} className="flex items-center space-x-2 hover:text-comicRed">
                    <Search className="w-6 h-6" /> <span>Search</span>
                 </button>
                 <button onClick={() => { openCart(); setIsOpen(false); }} className="flex items-center space-x-2 hover:text-comicRed">
                    <ShoppingCart className="w-6 h-6" /> <span>Cart ({cartCount})</span>
                 </button>
              </div>
              <button 
                onClick={() => { openSubscribe(); setIsOpen(false); }}
                className="w-full bg-comicRed text-white font-condensed font-bold px-4 py-3 uppercase text-xl"
               >
                  Subscribe Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
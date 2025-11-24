import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MerchSection from './components/MerchSection';
import ComicGrid from './components/ComicGrid';
import PricingPlans from './components/PricingPlans';
import AIChat from './components/AIChat';
import Catalog from './components/Catalog';
import Media from './components/Media';
import Contacts from './components/Contacts';
import SearchModal from './components/SearchModal';
import CartDrawer from './components/CartDrawer';
import SubscribeModal from './components/SubscribeModal';
import { View, Comic } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [cart, setCart] = useState<Comic[]>([]);

  const addToCart = (item: Comic) => {
      setCart([...cart, item]);
      setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
      const index = cart.findIndex(i => i.id === id);
      if (index > -1) {
          const newCart = [...cart];
          newCart.splice(index, 1);
          setCart(newCart);
      }
  };

  return (
    <div className="min-h-screen bg-paperWhite overflow-x-hidden selection:bg-comicRed selection:text-white flex flex-col">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
        openSearch={() => setIsSearchOpen(true)}
        openSubscribe={() => setIsSubscribeOpen(true)}
      />
      
      <main className="flex-grow">
          <AnimatePresence mode='wait'>
             {currentView === 'HOME' && (
                 <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                 >
                    <Hero onExplore={() => setCurrentView('CATALOG')} />
                    <MerchSection />
                    <ComicGrid />
                    <PricingPlans />
                 </motion.div>
             )}
             
             {currentView === 'CATALOG' && (
                 <motion.div
                    key="catalog"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                 >
                    <Catalog addToCart={addToCart} />
                 </motion.div>
             )}

            {currentView === 'MEDIA' && (
                 <motion.div
                    key="media"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                 >
                    <Media />
                 </motion.div>
             )}

            {currentView === 'CONTACTS' && (
                 <motion.div
                    key="contacts"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                 >
                    <Contacts />
                 </motion.div>
             )}
          </AnimatePresence>
      </main>
      
      <footer className="bg-comicBlack text-white py-12 border-t-8 border-comicRed relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <h2 className="font-display text-5xl mb-2 uppercase italic">Comic Verse</h2>
                <p className="font-condensed text-gray-500 uppercase tracking-widest">
                    © {new Date().getFullYear()} ComicVerse Inc. All Rights Reserved.
                </p>
            </div>
            <div className="flex space-x-8">
                {['Privacy', 'Terms', 'Cookies'].map(link => (
                    <a key={link} href="#" className="font-condensed uppercase text-gray-400 hover:text-comicRed transition-colors">
                        {link}
                    </a>
                ))}
            </div>
        </div>
      </footer>

      <AIChat />
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} removeFromCart={removeFromCart} />
      <SubscribeModal isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  );
};

export default App;
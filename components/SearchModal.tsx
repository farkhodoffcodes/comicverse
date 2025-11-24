import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight } from 'lucide-react';
import { COMICS } from '../constants';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(COMICS);

  useEffect(() => {
      if (query === '') {
          setResults([]);
      } else {
          setResults(COMICS.filter(c => c.title.toLowerCase().includes(query.toLowerCase())));
      }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
           <motion.div 
             initial={{ scale: 0.9, y: 50 }}
             animate={{ scale: 1, y: 0 }}
             exit={{ scale: 0.9, y: 50 }}
             className="w-full max-w-4xl bg-white border-4 border-comicRed shadow-[0_0_50px_rgba(255,59,48,0.3)] p-8 relative"
           >
              <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-comicRed transition-colors">
                  <X size={32} />
              </button>

              <h2 className="font-display text-5xl uppercase mb-8">Search Catalog</h2>
              
              <div className="relative mb-8">
                  <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size={24} />
                  <input 
                    type="text" 
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find your next adventure..." 
                    className="w-full pl-12 pr-4 py-4 text-2xl font-condensed border-b-4 border-black focus:outline-none focus:border-comicRed transition-colors bg-transparent"
                  />
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                  {results.length > 0 ? (
                      <div className="space-y-4">
                          {results.map(comic => (
                              <div key={comic.id} className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer group border-2 border-transparent hover:border-black transition-all">
                                  <img src={comic.image} alt={comic.title} className="w-16 h-24 object-cover" />
                                  <div className="flex-1">
                                      <h4 className="font-condensed text-xl font-bold uppercase group-hover:text-comicRed">{comic.title}</h4>
                                      <p className="text-sm text-gray-500">{comic.category} • {comic.issue}</p>
                                  </div>
                                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-comicRed" />
                              </div>
                          ))}
                      </div>
                  ) : (
                      query !== '' && <p className="text-center text-xl font-condensed text-gray-400">No results found in this universe.</p>
                  )}
              </div>

           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
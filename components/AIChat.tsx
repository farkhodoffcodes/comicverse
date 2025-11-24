import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { getComicRecommendation } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm Stan. Ask me anything about comics or tell me what mood you're in, and I'll find your next read!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getComicRecommendation(input);
      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Oof! Hit a snag in the multiverse. Try again!", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-comicBlack text-white rounded-full shadow-2xl border-4 border-comicRed hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ rotate: 15 }}
      >
        <Sparkles className="w-8 h-8 text-comicRed mr-2" />
        <span className="font-condensed font-bold uppercase hidden md:inline">Ask the Oracle</span>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full md:w-[400px] h-[500px] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-comicRed p-4 flex justify-between items-center border-b-4 border-black">
              <div className="flex items-center space-x-2">
                 <div className="bg-white p-1 rounded-full border-2 border-black">
                     <Sparkles className="w-5 h-5 text-comicBlack" />
                 </div>
                 <h3 className="font-display text-white text-xl uppercase tracking-wider">Comic Oracle</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paperWhite">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] 
                    ${msg.role === 'user' ? 'bg-comicOrange text-white' : 'bg-white text-black'}`}
                  >
                    <p className="font-sans text-sm font-semibold">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white p-3 border-2 border-black flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-comicRed" />
                        <span className="text-xs font-bold uppercase">Consulting the archives...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-100 border-t-4 border-black">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Recommend a dark sci-fi comic..."
                  className="flex-1 p-2 border-2 border-black font-sans focus:outline-none focus:border-comicRed"
                />
                <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-black text-white p-2 border-2 border-black hover:bg-comicRed transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
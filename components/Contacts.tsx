import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts: React.FC = () => {
  return (
    <div className="min-h-screen bg-comicOrange pt-24 pb-20">
         <div className="max-w-7xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 text-black">Get In <span className="text-comicRed">Touch</span></h2>
                        <p className="font-sans text-xl mb-12 max-w-md">
                            Questions about your order? Want to pre-order the latest issue? Or just want to geek out? Stop by or drop us a line.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-black text-white p-3 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-condensed text-2xl uppercase font-bold">Location</h3>
                                    <p className="font-sans text-lg">123 Hero Lane, Gotham City, NY 10012</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-black text-white p-3 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-condensed text-2xl uppercase font-bold">Phone</h3>
                                    <p className="font-sans text-lg">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-black text-white p-3 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-condensed text-2xl uppercase font-bold">Email</h3>
                                    <p className="font-sans text-lg">hello@comicverse.com</p>
                                </div>
                            </div>
                            
                             <div className="flex items-start">
                                <div className="bg-black text-white p-3 mr-4">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-condensed text-2xl uppercase font-bold">Hours</h3>
                                    <p className="font-sans text-lg">Mon-Sat: 10am - 9pm <br/> Sun: 11am - 7pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-100 p-8 border-2 border-black">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-condensed text-xl uppercase font-bold mb-2">Name</label>
                                <input type="text" className="w-full p-3 border-2 border-black focus:outline-none focus:border-comicRed transition-colors" placeholder="Clark Kent" />
                            </div>
                            <div>
                                <label className="block font-condensed text-xl uppercase font-bold mb-2">Email</label>
                                <input type="email" className="w-full p-3 border-2 border-black focus:outline-none focus:border-comicRed transition-colors" placeholder="clark@dailyplanet.com" />
                            </div>
                            <div>
                                <label className="block font-condensed text-xl uppercase font-bold mb-2">Message</label>
                                <textarea rows={4} className="w-full p-3 border-2 border-black focus:outline-none focus:border-comicRed transition-colors" placeholder="I need to find a kryptonite resistant suit..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-black text-white py-4 font-condensed text-2xl uppercase tracking-widest hover:bg-comicRed hover:shadow-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </motion.div>
         </div>
    </div>
  );
};

export default Contacts;
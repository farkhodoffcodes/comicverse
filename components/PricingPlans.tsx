import React from 'react';
import { PLANS } from '../constants';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingPlans: React.FC = () => {
  return (
    <section className="py-24 bg-comicOrange relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="font-display text-7xl md:text-9xl text-white uppercase drop-shadow-md">
            Choose Your Plan
          </h2>
          <p className="font-sans text-white text-xl max-w-2xl mx-auto mt-4">
             Unlock the full potential of your comic reading experience. Flexible subscription plans for every type of hero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? -2 : 2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${plan.color} ${plan.textColor} relative p-6 md:p-8 shadow-2xl flex flex-col h-full border-4 border-black`}
            >
                {/* Comic Image Header within card */}
                <div className="h-40 mb-6 overflow-hidden border-b-4 border-black -mx-6 -mt-6 md:-mx-8 md:-mt-8 relative">
                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover grayscale opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h3 className="absolute bottom-2 left-4 font-display text-4xl uppercase tracking-wide text-white drop-shadow-[2px_2px_0px_#000]">
                        {plan.name}
                    </h3>
                </div>

                <div className="mb-6">
                    <span className="font-display text-5xl">${Math.floor(plan.price)}</span>
                    <span className="font-condensed text-xl opacity-80">.{((plan.price % 1) * 100).toFixed(0)}/MONTH</span>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                            <span className="font-condensed text-lg uppercase">{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-4 font-condensed font-bold text-xl uppercase tracking-wider border-2 border-current hover:bg-black hover:text-white transition-colors duration-300 ${plan.textColor === 'text-white' ? 'hover:bg-white hover:text-black' : ''}`}>
                    Select Plan
                </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
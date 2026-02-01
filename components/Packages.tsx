
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Ready to <span className="gradient-text">Level Up?</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Simple, transparent pricing designed for brands at every stage of their growth journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PACKAGES.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative p-8 md:p-12 rounded-[2.5rem] border-2 flex flex-col ${pkg.isPopular ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-100 bg-white'}`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center space-x-1">
                <Zap size={14} />
                <span>Most Popular</span>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-black text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 font-semibold">/ {pkg.duration}</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-10">
              {pkg.deliverables.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${pkg.isPopular ? 'gradient-bg text-white shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
              Book Package
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;

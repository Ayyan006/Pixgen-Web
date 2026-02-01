
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-40 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            <span>Digital Marketing Redefined</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] mb-8"
          >
            We help your brand <br />
            <span className="gradient-text">grow online.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            PixGen is a full-stack digital marketing agency focused on measurable results. 
            We blend creativity with data to build brands that matter.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#packages" 
              className="group w-full sm:w-auto px-8 py-4 gradient-bg text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-200 flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Floating elements simulation */}
        <div className="mt-20 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
             {[
               { label: "10x", sub: "Growth Rate" },
               { label: "50+", sub: "Brands Scaled" },
               { label: "24/7", sub: "Active Support" },
               { label: "100%", sub: "Tailored Plans" }
             ].map((stat, i) => (
               <div key={i} className="glass-effect p-6 rounded-3xl border border-white shadow-sm text-center">
                 <div className="text-3xl font-black gradient-text">{stat.label}</div>
                 <div className="text-sm font-semibold text-slate-500">{stat.sub}</div>
               </div>
             ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

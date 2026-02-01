
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings2, Sliders, Workflow } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Your Growth, <br />
            <span className="text-indigo-400">Your Way.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            We don't believe in one-size-fits-all. Digital marketing is dynamic, and our approach reflects that. 
            We build custom workflows that align perfectly with your internal processes and goals.
          </p>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center space-x-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-500 transition-colors">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-0.5">{step.title}</h4>
                  <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider">{step.tagline}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center space-x-3 text-indigo-400 font-black text-lg group">
              <span>Contact us for a custom plan</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-indigo-600/10 rounded-[4rem] border border-white/10 flex items-center justify-center p-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-4 border-dashed border-indigo-500/30 rounded-full flex items-center justify-center"
            >
              <div className="w-4/5 h-4/5 border-2 border-dashed border-indigo-400/20 rounded-full"></div>
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 gradient-bg rounded-3xl shadow-2xl flex items-center justify-center">
                <Workflow size={48} className="text-white" />
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl text-slate-900"
            >
               <Settings2 className="text-indigo-600 mb-2" />
               <div className="text-xs font-bold text-slate-400">AGILE</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl text-slate-900"
            >
               <Sliders className="text-purple-600 mb-2" />
               <div className="text-xs font-bold text-slate-400">FLUID</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

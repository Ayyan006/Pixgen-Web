
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Meet the <span className="gradient-text">Avengers.</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collective of specialists dedicated to turning your brand into a digital powerhouse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group flex flex-col items-center ${idx === 6 ? 'lg:col-span-2 lg:flex-row lg:bg-slate-50 lg:p-8 lg:rounded-[3rem] lg:max-w-xl lg:mx-auto' : ''}`}
          >
            <div className={`relative mb-6 ${idx === 6 ? 'lg:mb-0 lg:mr-8' : ''}`}>
               <div className="w-48 h-48 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="absolute -bottom-4 -right-4 w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                 <div className="font-black">P</div>
               </div>
            </div>
            
            <div className={idx === 6 ? 'lg:text-left text-center' : 'text-center'}>
              <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
              <div className="text-indigo-600 font-bold mb-2 text-sm uppercase tracking-wider">{member.role}</div>
              <p className="text-slate-500 text-sm max-w-[200px] lg:max-w-none">{member.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

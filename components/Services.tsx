
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Full-Service Digital <br />
          <span className="gradient-text">Dominance.</span>
        </h2>
        <p className="text-lg text-slate-600">
          From the first sketch to the final analytics report, we handle every aspect of your online presence with precision and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all cursor-default"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="w-8 h-1 bg-slate-100 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

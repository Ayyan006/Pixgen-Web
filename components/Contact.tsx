
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Contact Info Sidebar */}
        <div className="lg:w-1/3 gradient-bg p-12 text-white">
          <h3 className="text-3xl font-black mb-8">Let's Talk!</h3>
          <p className="text-white/80 mb-12 font-medium">
            Ready to scale your brand? Drop us a line and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Email Us</div>
                <div className="font-bold">hello@pixgen.agency</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Call Us</div>
                <div className="font-bold">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Visit Us</div>
                <div className="font-bold">B-6, Cyber Hub, Gurugram</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="flex-grow p-8 md:p-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none"
              ></textarea>
            </div>
            <button className="w-full md:w-auto px-12 py-5 gradient-bg text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all">
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

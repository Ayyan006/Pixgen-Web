
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
            <span className="text-2xl font-extrabold tracking-tight">
              Pix<span className="text-indigo-400">Gen</span>
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} PixGen Agency. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

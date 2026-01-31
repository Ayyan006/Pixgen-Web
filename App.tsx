
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-24 bg-slate-50">
          <Services />
        </section>

        <section id="packages" className="py-24 bg-white">
          <Packages />
        </section>

        <section id="process" className="py-24 bg-slate-900 text-white">
          <Process />
        </section>

        <section id="team" className="py-24 bg-white">
          <Team />
        </section>

        <section id="contact" className="py-24 bg-slate-50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

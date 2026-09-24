import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-tight text-stone-900">
          AURA.
        </a>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-stone-500 transition-colors">About</a>
          <a href="#menu" className="hover:text-stone-500 transition-colors">Menu</a>
          <a href="#reserve" className="hover:text-stone-500 transition-colors">Reserve</a>
        </nav>

        <button 
          className="md:hidden text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-stone-50 shadow-md py-6 px-6 flex flex-col gap-4 text-center"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">About</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Menu</a>
          <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Reserve</a>
        </motion.div>
      )}
    </header>
  );
}

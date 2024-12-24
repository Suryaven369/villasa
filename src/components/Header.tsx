import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContactFormContext } from './contact/ContactFormContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useContactFormContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gold"
          >
            Viilasa
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {['Services', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                className="text-sm tracking-wide"
              >
                <button 
                  onClick={item === 'Contact' ? openForm : undefined}
                  className="hover:text-gold transition-colors"
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm"
          >
            <ul className="py-4 px-6 space-y-4">
              {['Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      if (item === 'Contact') {
                        openForm();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-2 hover:text-gold transition-colors w-full text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}
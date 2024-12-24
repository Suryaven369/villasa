import React from 'react';
import { motion } from 'framer-motion';
import { useContactFormContext } from './ContactFormContext';

export function ContactButton() {
  const { openForm } = useContactFormContext();

  return (
    <motion.button
      onClick={openForm}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
    >
      Get Started
    </motion.button>
  );
}
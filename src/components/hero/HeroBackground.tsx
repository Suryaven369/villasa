import React from 'react';
import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-30" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
    </>
  );
}
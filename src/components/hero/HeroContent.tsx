import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          className="h-0.5 bg-gold mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl"
        >
          We craft bespoke digital experiences that transform brands into digital masterpieces.
        </motion.p>
        <motion.a
          href="#premium-offer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
        >
          Explore Our Services <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  );
}
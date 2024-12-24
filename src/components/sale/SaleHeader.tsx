import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export function SaleHeader() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-flex items-center gap-2 bg-gold/20 text-gold px-6 py-2 rounded-full mb-6"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="font-semibold">Limited Time Offer</span>
      </motion.div>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Flash Sale
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Get our premium website package at an unbeatable price
      </motion.p>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Percent } from 'lucide-react';

export function DiscountBadge() {
  return (
    <motion.div
      initial={{ scale: 0.9, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      className="relative"
    >
      <div className="w-64 h-64 bg-gold rounded-full flex items-center justify-center transform rotate-12">
        <div className="w-56 h-56 border-4 border-dashed border-black rounded-full flex items-center justify-center -rotate-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Tag className="w-6 h-6" />
              <Percent className="w-6 h-6" />
            </div>
            <div className="text-5xl font-bold text-black mb-1">50%</div>
            <div className="text-xl font-bold text-black">OFF</div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-4 border-gold rounded-full opacity-20"
      />
    </motion.div>
  );
}
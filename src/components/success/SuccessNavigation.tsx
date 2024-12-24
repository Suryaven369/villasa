import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SuccessNavigation() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
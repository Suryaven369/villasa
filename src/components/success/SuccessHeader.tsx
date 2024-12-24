import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function SuccessHeader() {
  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="inline-block mb-6"
      >
        <CheckCircle className="w-16 h-16 text-gold" />
      </motion.div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Thank You for Reaching Out!
      </h1>
      <p className="text-gray-400">
        Your message has been successfully received.
      </p>
    </div>
  );
}
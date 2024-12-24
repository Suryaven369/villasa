import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-8"
        >
          <CheckCircle className="w-20 h-20 text-gold mx-auto" />
        </motion.div>
        
        <h1 className="text-3xl font-bold mb-4">
          Message Sent Successfully!
        </h1>
        
        <p className="text-gray-400 mb-8">
          Thank you for reaching out. We'll get back to you shortly.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-gold text-black px-8 py-3 hover:bg-gold/90 transition-colors"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
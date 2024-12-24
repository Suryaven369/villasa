import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10"
        style={{
          background: 'conic-gradient(from 0deg, #D4AF37, transparent)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
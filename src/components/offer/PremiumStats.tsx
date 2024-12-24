import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Satisfied Clients' },
  { value: '100%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
];

export function PremiumStats() {
  return (
    <div className="mt-24 grid md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
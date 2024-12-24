import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  'Custom Responsive Design',
  'SEO Optimization',
  'Fast Loading Speed',
  'Social Media Integration',
  'Contact Form Setup',
  'Google Analytics Integration',
  '3 Rounds of Revisions',
  'Basic SEO Setup',
];

export function PremiumFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 p-4 border border-gold/20 bg-black/50"
        >
          <CheckCircle className="w-5 h-5 text-gold" />
          <span>{feature}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
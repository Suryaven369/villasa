import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Gift } from 'lucide-react';

const features = [
  { icon: Gift, text: 'Bonus SEO Package' },
  { icon: Clock, text: '48-Hour Delivery' },
  { icon: CheckCircle, text: 'Premium Support' },
];

export function SaleFeatures() {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.text}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 bg-white/5 p-4 rounded-lg"
        >
          <feature.icon className="w-6 h-6 text-gold" />
          <span className="text-lg">{feature.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
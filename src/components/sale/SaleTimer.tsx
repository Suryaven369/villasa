import React from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export function SaleTimer() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-16 text-center"
    >
      <div className="inline-flex items-center gap-2 text-gold mb-6">
        <Timer className="w-5 h-5" />
        <span className="font-semibold">Offer ends in</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        {[
          { value: '24', label: 'Hours' },
          { value: '59', label: 'Minutes' },
          { value: '59', label: 'Seconds' },
        ].map((time, index) => (
          <React.Fragment key={time.label}>
            {index > 0 && <span className="text-2xl font-bold">:</span>}
            <div className="bg-gold/10 px-4 py-3 rounded-lg">
              <div className="text-2xl font-bold text-gold">{time.value}</div>
              <div className="text-sm text-gray-400">{time.label}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
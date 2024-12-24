import React from 'react';
import { motion } from 'framer-motion';
import { PremiumFeatures } from './PremiumFeatures';
import { PremiumStats } from './PremiumStats';
import { ContactButton } from '../contact/ContactButton';
import { ContactForm } from '../contact/ContactForm';
import { AnimatedGraphic } from './AnimatedGraphic';

export function PremiumOffer() {
  return (
    <section id="premium-offer" className="py-32 bg-black relative overflow-hidden">
      <AnimatedGraphic />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Website Package</h2>
          <div className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold text-gold mb-8">
            <span className="text-2xl">₹</span>6,000
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence, carefully crafted to perfection.
          </p>
        </motion.div>

        <PremiumFeatures />
        <PremiumStats />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <ContactButton />
          <ContactForm />
          <p className="mt-4 text-sm text-gray-400">14-day money-back guarantee</p>
        </motion.div>
      </div>
    </section>
  );
}
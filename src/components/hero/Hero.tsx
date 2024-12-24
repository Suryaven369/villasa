import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
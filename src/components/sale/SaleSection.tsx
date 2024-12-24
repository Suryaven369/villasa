import React from 'react';
import { SaleHeader } from './SaleHeader';
import { DiscountBadge } from './DiscountBadge';
import { SaleFeatures } from './SaleFeatures';
import { SaleTimer } from './SaleTimer';

export function SaleSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SaleHeader />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <DiscountBadge />
          <SaleFeatures />
        </div>
        <SaleTimer />
      </div>
    </section>
  );
}
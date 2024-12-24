import React from 'react';
import { Header } from './Header';
import { Hero } from './hero/Hero';
import { SaleSection } from './sale/SaleSection';
import { PremiumOffer } from './offer/PremiumOffer';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <SaleSection />
        <PremiumOffer />
      </main>
      <Footer />
    </div>
  );
}
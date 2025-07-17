'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SellHero from '@/components/SellHero';
import SellProcess from '@/components/SellProcess';
import PropertyValuation from '@/components/PropertyValuation';

export default function SellPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SellHero />
      <SellProcess />
      <PropertyValuation />
      <Footer />
    </div>
  );
}
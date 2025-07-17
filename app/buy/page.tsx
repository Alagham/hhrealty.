'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertySearch from '@/components/PropertySearch';
import PropertyGrid from '@/components/PropertyGrid';

export default function BuyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Buy Properties in Nigeria</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect home from our extensive collection of properties across Nigeria
            </p>
          </div>
          
          <PropertySearch />
        </div>
      </section>
      
      <PropertyGrid />
      <Footer />
    </div>
  );
}
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertySearch from '@/components/PropertySearch';
import RentalGrid from '@/components/RentalGrid';

export default function RentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Rental Properties in Nigeria</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover quality rental properties across major Nigerian cities
            </p>
          </div>
          
          <PropertySearch isRental={true} />
        </div>
      </section>
      
      <RentalGrid />
      <Footer />
    </div>
  );
}
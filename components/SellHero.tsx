
'use client';

import Link from 'next/link';

export default function SellHero() {
  const scrollToValuation = () => {
    const valuationSection = document.getElementById('property-valuation');
    if (valuationSection) {
      valuationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Successful%20Nigerian%20property%20sale%2C%20real%20estate%20agent%20with%20sold%20sign%2C%20modern%20Nigerian%20house%20exterior%2C%20happy%20homeowners%20with%20keys%2C%20professional%20real%20estate%20photography%2C%20property%20transaction%20success&width=1920&height=800&seq=sellhero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sell Your Property
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          Get the best value for your property with our expert marketing and professional service
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToValuation}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calculator-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
            Get Free Valuation
          </button>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
              Speak to an Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}


'use client';

import Link from 'next/link';

export default function AppPromotion() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Started with HH Realty Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who have found their dream homes through our platform. Create your account now and start your property journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth">
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-user-add-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                  Get Started Today
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                  Contact Us
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5K+</div>
                <div className="text-blue-100">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20Nigerian%20real%20estate%20team%20celebrating%20success%2C%20happy%20customers%20with%20property%20keys%2C%20modern%20Nigerian%20office%20environment%2C%20business%20achievement%2C%20professional%20photography%2C%20diverse%20Nigerian%20team&width=600&height=500&seq=apppromo&orientation=landscape"
              alt="HH Realty Success"
              className="rounded-lg shadow-lg object-cover object-top w-full h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

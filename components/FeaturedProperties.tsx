
'use client';

import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: '$685,000',
    location: 'Downtown, New York',
    beds: 3,
    baths: 2,
    sqft: 1250,
    image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20apartment%20interior%20with%20contemporary%20design%2C%20clean%20white%20walls%2C%20large%20windows%2C%20hardwood%20floors%2C%20minimalist%20furniture%2C%20bright%20natural%20lighting%2C%20high-end%20finishes%2C%20real%20estate%20photography%20style%2C%20professional%20staging&width=400&height=300&seq=prop1&orientation=landscape',
    type: 'Apartment',
    featured: true
  },
  {
    id: 2,
    title: 'Suburban Family Home',
    price: '$850,000',
    location: 'Westfield, New Jersey',
    beds: 4,
    baths: 3,
    sqft: 2100,
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20suburban%20family%20home%20exterior%20with%20manicured%20lawn%2C%20traditional%20architecture%2C%20brick%20facade%2C%20large%20windows%2C%20front%20porch%2C%20professional%20real%20estate%20photography%2C%20bright%20daylight%2C%20residential%20neighborhood%20setting&width=400&height=300&seq=prop2&orientation=landscape',
    type: 'House',
    featured: true
  },
  {
    id: 3,
    title: 'Luxury Waterfront Condo',
    price: '$1,200,000',
    location: 'Miami Beach, Florida',
    beds: 2,
    baths: 2,
    sqft: 1450,
    image: 'https://readdy.ai/api/search-image?query=Luxury%20waterfront%20condominium%20with%20ocean%20view%2C%20modern%20glass%20balcony%2C%20high-rise%20building%2C%20sunset%20lighting%2C%20premium%20real%20estate%20photography%2C%20Miami%20Beach%20architecture%2C%20contemporary%20design%20elements&width=400&height=300&seq=prop3&orientation=landscape',
    type: 'Condo',
    featured: true
  },
  {
    id: 4,
    title: 'Cozy Studio Loft',
    price: '$425,000',
    location: 'Brooklyn, New York',
    beds: 1,
    baths: 1,
    sqft: 650,
    image: 'https://readdy.ai/api/search-image?query=Cozy%20studio%20loft%20apartment%20with%20exposed%20brick%20walls%2C%20high%20ceilings%2C%20industrial%20design%20elements%2C%20modern%20kitchen%2C%20urban%20living%20space%2C%20professional%20interior%20photography%2C%20warm%20lighting&width=400&height=300&seq=prop4&orientation=landscape',
    type: 'Loft',
    featured: false
  },
  {
    id: 5,
    title: 'Victorian Townhouse',
    price: '$950,000',
    location: 'San Francisco, California',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://readdy.ai/api/search-image?query=Victorian%20townhouse%20exterior%20with%20classic%20architecture%2C%20bay%20windows%2C%20painted%20lady%20style%2C%20San%20Francisco%20residential%20street%2C%20historic%20charm%2C%20professional%20real%20estate%20photography%2C%20clear%20blue%20sky&width=400&height=300&seq=prop5&orientation=landscape',
    type: 'Townhouse',
    featured: false
  },
  {
    id: 6,
    title: 'Modern Penthouse',
    price: '$2,100,000',
    location: 'Manhattan, New York',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://readdy.ai/api/search-image?query=Luxury%20penthouse%20apartment%20with%20city%20skyline%20view%2C%20floor-to-ceiling%20windows%2C%20modern%20interior%20design%2C%20high-end%20finishes%2C%20rooftop%20terrace%2C%20Manhattan%20cityscape%2C%20premium%20real%20estate%20photography&width=400&height=300&seq=prop6&orientation=landscape',
    type: 'Penthouse',
    featured: true
  }
];

export default function FeaturedProperties() {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProperties(prev => 
      prev.includes(id) 
        ? prev.filter(propId => propId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="featured-properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover object-top"
                />
                <button
                  onClick={() => toggleLike(property.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                >
                  <i className={`${likedProperties.includes(property.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} w-5 h-5 flex items-center justify-center`}></i>
                </button>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <i className="ri-hotel-bed-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-drop-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-building-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {property.type}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}

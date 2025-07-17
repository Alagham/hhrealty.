'use client';

import { useState } from 'react';
import PropertyModal from './PropertyModal';

const rentalProperties = [
  {
    id: 1,
    title: 'Luxury 3-Bedroom Apartment',
    price: '₦800,000/month',
    location: 'Victoria Island, Lagos',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20luxury%20apartment%20for%20rent%2C%20Victoria%20Island%20Lagos%2C%20contemporary%20interior%20design%2C%20well-furnished%20living%20space%2C%20professional%20rental%20property%20photography%2C%20upscale%20residential%20building&width=400&height=300&seq=rental1&orientation=landscape',
    type: 'Apartment',
    featured: true,
    description: 'Fully furnished luxury 3-bedroom apartment in the heart of Victoria Island. Perfect for expatriates and professionals.',
    amenities: ['Fully Furnished', 'Generator', '24/7 Security', 'Parking', 'Swimming Pool', 'Gym', 'Air Conditioning']
  },
  {
    id: 2,
    title: '2-Bedroom Serviced Flat',
    price: '₦450,000/month',
    location: 'Lekki Phase 1, Lagos',
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20serviced%20apartment%20for%20rent%2C%20Lekki%20Phase%201%2C%20modern%20furnished%20flat%2C%20contemporary%20kitchen%20and%20living%20area%2C%20professional%20rental%20photography%2C%20gated%20estate%20environment&width=400&height=300&seq=rental2&orientation=landscape',
    type: 'Serviced Flat',
    featured: true,
    description: 'Modern 2-bedroom serviced flat in gated estate. Includes housekeeping and maintenance services.',
    amenities: ['Serviced', 'Generator', 'Security', 'Parking', 'Water Treatment', 'Housekeeping', 'WiFi']
  },
  {
    id: 3,
    title: 'Executive 4-Bedroom Duplex',
    price: '₦1,200,000/month',
    location: 'Banana Island, Lagos',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://readdy.ai/api/search-image?query=Luxury%20Nigerian%20duplex%20rental%20property%2C%20Banana%20Island%20Lagos%2C%20high-end%20residential%20area%2C%20modern%20architecture%2C%20executive%20housing%2C%20professional%20rental%20photography%2C%20upscale%20neighborhood&width=400&height=300&seq=rental3&orientation=landscape',
    type: 'Duplex',
    featured: true,
    description: 'Premium 4-bedroom duplex on exclusive Banana Island. Ideal for executives and diplomats.',
    amenities: ['Fully Furnished', 'Generator', '24/7 Security', 'Parking', 'Swimming Pool', 'Garden', 'Study Room', 'Gym']
  },
  {
    id: 4,
    title: 'Cozy 1-Bedroom Studio',
    price: '₦250,000/month',
    location: 'Ikeja GRA, Lagos',
    beds: 1,
    baths: 1,
    sqft: 800,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20studio%20apartment%20for%20rent%2C%20Ikeja%20GRA%20Lagos%2C%20compact%20living%20space%2C%20contemporary%20design%2C%20furnished%20studio%20flat%2C%20professional%20rental%20photography%2C%20urban%20residential%20setting&width=400&height=300&seq=rental4&orientation=landscape',
    type: 'Studio',
    featured: false,
    description: 'Comfortable 1-bedroom studio perfect for young professionals. Modern amenities in prime location.',
    amenities: ['Furnished', 'Generator', 'Security', 'Parking', 'Water Supply', 'Air Conditioning']
  },
  {
    id: 5,
    title: '3-Bedroom Bungalow',
    price: '₦600,000/month',
    location: 'Gwarinpa, Abuja',
    beds: 3,
    baths: 2,
    sqft: 1600,
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20bungalow%20rental%20property%2C%20Gwarinpa%20Abuja%2C%20single-story%20house%20with%20compound%2C%20family-friendly%20neighborhood%2C%20contemporary%20residential%20architecture%2C%20professional%20rental%20photography&width=400&height=300&seq=rental5&orientation=landscape',
    type: 'Bungalow',
    featured: false,
    description: 'Spacious 3-bedroom bungalow with large compound. Perfect for families seeking peaceful environment.',
    amenities: ['Generator', 'Security', 'Parking', 'Garden', 'Water Treatment', 'Air Conditioning']
  },
  {
    id: 6,
    title: '2-Bedroom Terrace House',
    price: '₦350,000/month',
    location: 'Wuse 2, Abuja',
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20terrace%20house%20for%20rent%2C%20Wuse%202%20Abuja%2C%20modern%20row%20house%2C%20contemporary%20residential%20development%2C%20well-maintained%20estate%2C%20professional%20rental%20photography%2C%20urban%20setting&width=400&height=300&seq=rental6&orientation=landscape',
    type: 'Terrace',
    featured: true,
    description: 'Modern 2-bedroom terrace house in central Abuja. Great access to business district and amenities.',
    amenities: ['Generator', 'Security', 'Parking', 'Water Supply', 'Air Conditioning', 'Garden']
  }
];

export default function RentalGrid() {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<typeof rentalProperties[0] | null>(null);

  const toggleLike = (id: number) => {
    setLikedProperties(prev => 
      prev.includes(id) 
        ? prev.filter(propId => propId !== id)
        : [...prev, id]
    );
  };

  const openModal = (property: typeof rentalProperties[0]) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Rental Properties</h2>
          <p className="text-xl text-gray-600">
            {rentalProperties.length} rental properties available
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentalProperties.map((property) => (
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
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <span className="text-xl font-bold text-green-600">{property.price}</span>
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
                  <button 
                    onClick={() => openModal(property)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
    </section>
  );
}
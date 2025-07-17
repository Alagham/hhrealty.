'use client';

import { useState } from 'react';
import PropertyModal from './PropertyModal';

const properties = [
  {
    id: 1,
    title: 'Luxury 4-Bedroom Duplex',
    price: '₦85,000,000',
    location: 'Victoria Island, Lagos',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20luxury%20duplex%20house%20exterior%2C%20contemporary%20architecture%2C%20compound%20with%20gate%2C%20tropical%20landscaping%2C%20Nigerian%20residential%20area%2C%20professional%20real%20estate%20photography%2C%20clear%20sky%2C%20well-maintained%20property&width=400&height=300&seq=ngprop1&orientation=landscape',
    type: 'Duplex',
    featured: true,
    description: 'Stunning 4-bedroom duplex in the heart of Victoria Island. Features modern amenities, spacious rooms, and excellent security.',
    amenities: ['Swimming Pool', 'Generator', 'Security', 'Parking', 'Garden', 'Air Conditioning']
  },
  {
    id: 2,
    title: 'Executive 3-Bedroom Flat',
    price: '₦45,000,000',
    location: 'Lekki Phase 1, Lagos',
    beds: 3,
    baths: 2,
    sqft: 1500,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20apartment%20building%20exterior%2C%20gated%20estate%2C%20Lekki%20architecture%2C%20tropical%20setting%2C%20professional%20real%20estate%20photography%2C%20well-maintained%20compound%2C%20contemporary%20design&width=400&height=300&seq=ngprop2&orientation=landscape',
    type: 'Apartment',
    featured: true,
    description: 'Beautiful 3-bedroom flat in a serene gated estate. Perfect for families with modern finishes and amenities.',
    amenities: ['Generator', 'Security', 'Parking', 'Water Treatment', 'Gym', 'Playground']
  },
  {
    id: 3,
    title: 'Luxury 5-Bedroom Detached House',
    price: '₦120,000,000',
    location: 'Banana Island, Lagos',
    beds: 5,
    baths: 4,
    sqft: 3500,
    image: 'https://readdy.ai/api/search-image?query=Ultra-modern%20Nigerian%20luxury%20mansion%2C%20Banana%20Island%20architecture%2C%20gated%20compound%2C%20swimming%20pool%2C%20manicured%20garden%2C%20professional%20real%20estate%20photography%2C%20upscale%20residential%20area&width=400&height=300&seq=ngprop3&orientation=landscape',
    type: 'Detached House',
    featured: true,
    description: 'Exquisite 5-bedroom detached house on Banana Island. Premium location with world-class amenities and finishes.',
    amenities: ['Swimming Pool', 'Generator', '24/7 Security', 'Parking', 'Garden', 'Study Room', 'Gym', 'Cinema']
  },
  {
    id: 4,
    title: 'Modern 2-Bedroom Apartment',
    price: '₦25,000,000',
    location: 'Ikeja GRA, Lagos',
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20apartment%20complex%2C%20Ikeja%20residential%20area%2C%20contemporary%20design%2C%20gated%20estate%2C%20tropical%20environment%2C%20professional%20real%20estate%20photography%2C%20well-maintained%20building&width=400&height=300&seq=ngprop4&orientation=landscape',
    type: 'Apartment',
    featured: false,
    description: 'Contemporary 2-bedroom apartment in the heart of Ikeja GRA. Great for young professionals and small families.',
    amenities: ['Generator', 'Security', 'Parking', 'Water Supply', 'Elevator']
  },
  {
    id: 5,
    title: 'Spacious 4-Bedroom Bungalow',
    price: '₦55,000,000',
    location: 'Gwarinpa, Abuja',
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20bungalow%20house%20exterior%2C%20Abuja%20residential%20architecture%2C%20single-story%20home%2C%20compound%20with%20garden%2C%20contemporary%20design%2C%20professional%20real%20estate%20photography%2C%20clear%20sky%20background&width=400&height=300&seq=ngprop5&orientation=landscape',
    type: 'Bungalow',
    featured: false,
    description: 'Spacious 4-bedroom bungalow in Gwarinpa. Features large compound and modern amenities in a peaceful neighborhood.',
    amenities: ['Generator', 'Security', 'Parking', 'Garden', 'Water Treatment', 'Solar Panel']
  },
  {
    id: 6,
    title: 'Executive 3-Bedroom Terrace',
    price: '₦38,000,000',
    location: 'Maitama, Abuja',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20terrace%20house%20exterior%2C%20Maitama%20Abuja%20architecture%2C%20row%20of%20contemporary%20houses%2C%20gated%20estate%2C%20professional%20real%20estate%20photography%2C%20upscale%20residential%20development&width=400&height=300&seq=ngprop6&orientation=landscape',
    type: 'Terrace',
    featured: true,
    description: 'Executive 3-bedroom terrace house in prestigious Maitama district. Perfect blend of luxury and affordability.',
    amenities: ['Generator', 'Security', 'Parking', 'Water Supply', 'Garden', 'Air Conditioning']
  },
  {
    id: 7,
    title: 'Luxury Penthouse Apartment',
    price: '₦95,000,000',
    location: 'Ikoyi, Lagos',
    beds: 3,
    baths: 3,
    sqft: 2500,
    image: 'https://readdy.ai/api/search-image?query=Modern%20Nigerian%20high-rise%20apartment%20building%2C%20Ikoyi%20Lagos%20architecture%2C%20luxury%20residential%20tower%2C%20contemporary%20design%2C%20professional%20real%20estate%20photography%2C%20upscale%20urban%20setting&width=400&height=300&seq=ngprop7&orientation=landscape',
    type: 'Penthouse',
    featured: true,
    description: 'Spectacular penthouse with panoramic views of Lagos. Premium finishes and exclusive amenities.',
    amenities: ['Swimming Pool', 'Generator', '24/7 Security', 'Parking', 'Gym', 'Rooftop Access', 'Concierge']
  },
  {
    id: 8,
    title: 'Family 4-Bedroom Semi-Detached',
    price: '₦62,000,000',
    location: 'Magodo GRA, Lagos',
    beds: 4,
    baths: 3,
    sqft: 2100,
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20semi-detached%20house%20exterior%2C%20Magodo%20estate%20architecture%2C%20duplex-style%20home%2C%20gated%20community%2C%20tropical%20landscaping%2C%20professional%20real%20estate%20photography%2C%20residential%20neighborhood&width=400&height=300&seq=ngprop8&orientation=landscape',
    type: 'Semi-Detached',
    featured: false,
    description: 'Beautiful 4-bedroom semi-detached house in Magodo GRA. Perfect for growing families with excellent facilities.',
    amenities: ['Generator', 'Security', 'Parking', 'Garden', 'Water Treatment', 'Study Room']
  }
];

export default function PropertyGrid() {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = properties.slice(startIndex, startIndex + propertiesPerPage);

  const toggleLike = (id: number) => {
    setLikedProperties(prev => 
      prev.includes(id) 
        ? prev.filter(propId => propId !== id)
        : [...prev, id]
    );
  };

  const openModal = (property: typeof properties[0]) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Properties</h2>
          <p className="text-xl text-gray-600">
            {properties.length} properties found
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProperties.map((property) => (
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
                  <button 
                    onClick={() => openModal(property)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
      
      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={closeModal} />
      )}
    </section>
  );
}
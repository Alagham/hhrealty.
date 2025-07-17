
'use client';

import { useState } from 'react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: string;
  description: string;
  amenities: string[];
}

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const propertyImages = [
    property.image,
    `https://readdy.ai/api/search-image?query=Modern%20Nigerian%20house%20interior%20living%20room%2C%20contemporary%20furniture%2C%20elegant%20design%2C%20bright%20natural%20lighting%2C%20spacious%20layout%2C%20professional%20interior%20photography&width=600&height=400&seq=interior1&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=Nigerian%20house%20kitchen%20interior%2C%20modern%20appliances%2C%20granite%20countertops%2C%20contemporary%20cabinet%20design%2C%20bright%20lighting%2C%20professional%20interior%20photography&width=600&height=400&seq=interior2&orientation=landscape`,
    `https://readdy.ai/api/search-image?query=Nigerian%20house%20bedroom%20interior%2C%20master%20bedroom%2C%20modern%20furniture%2C%20elegant%20bedding%2C%20natural%20lighting%2C%20contemporary%20design%2C%20spacious%20room&width=600&height=400&seq=interior3&orientation=landscape`
  ];

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailData = {
      to: 'hamzahalagbe27@gmail.com',
      subject: `Property Inquiry: ${property.title}`,
      body: `
        New Property Inquiry

        Property: ${property.title}
        Location: ${property.location}
        Price: ${property.price}

        Customer Details:
        Name: ${inquiryData.name}
        Email: ${inquiryData.email}
        Phone: ${inquiryData.phone}
        
        Message:
        ${inquiryData.message}
      `
    };
    
    // Create mailto link
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    window.location.href = mailtoLink;
    
    setShowInquiryForm(false);
    setInquiryData({ name: '', email: '', phone: '', message: '' });
  };

  const handlePhoneCall = () => {
    setShowPhoneModal(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <i className="ri-close-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative mb-4">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-80 object-cover rounded-lg object-top"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
                >
                  <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
                >
                  <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {propertyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative cursor-pointer ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover rounded object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-blue-600">{property.price}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {property.type}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="ri-map-pin-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span>{property.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-hotel-bed-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <p className="text-sm text-gray-600">{property.beds} Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-drop-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <p className="text-sm text-gray-600">{property.baths} Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-building-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <p className="text-sm text-gray-600">{property.sqft} sqft</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowInquiryForm(true)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-message-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                    Inquire Now
                  </button>
                  <button 
                    onClick={handlePhoneCall}
                    className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-phone-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {showInquiryForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Property Inquiry</h3>
                <button
                  onClick={() => setShowInquiryForm(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-close-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <form onSubmit={handleInquiry}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="I'm interested in this property..."
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                      maxLength={500}
                    />
                    <p className="text-xs text-gray-500 mt-1">{inquiryData.message.length}/500 characters</p>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowInquiryForm(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {showPhoneModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-sm w-full p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-blue-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-6">Ready to discuss this property? Call us now!</p>
              <div className="text-2xl font-bold text-blue-600 mb-6">
                +2347046441783
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPhoneModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="tel:+2347046441783"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

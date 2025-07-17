
'use client';

import { useState } from 'react';

const nigerianStates = [
  'Lagos', 'Abuja', 'Kano', 'Kaduna', 'Port Harcourt', 'Ibadan', 'Benin City',
  'Maiduguri', 'Zaria', 'Aba', 'Jos', 'Ilorin', 'Oyo', 'Enugu', 'Abeokuta',
  'Akure', 'Sokoto', 'Onitsha', 'Warri', 'Okene', 'Calabar', 'Uyo', 'Katsina',
  'Gombe', 'Minna', 'Bauchi', 'Dutse', 'Yola', 'Lafia', 'Makurdi', 'Asaba',
  'Awka', 'Owerri', 'Umuahia', 'Abakaliki', 'Yenagoa'
];

const propertyTypes = [
  'Any Type', 'Detached House', 'Semi-Detached', 'Terrace House', 'Bungalow',
  'Duplex', 'Apartment', 'Flat', 'Penthouse', 'Studio', 'Commercial', 'Land'
];

const priceRanges = [
  'Any Price', '₦5M - ₦10M', '₦10M - ₦20M', '₦20M - ₦50M', 
  '₦50M - ₦100M', '₦100M - ₦200M', '₦200M+'
];

interface PropertySearchProps {
  isRental?: boolean;
  onSearch?: (searchData: any) => void;
}

export default function PropertySearch({ isRental = false, onSearch }: PropertySearchProps) {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: 'Any Type',
    priceRange: 'Any Price',
    beds: 'Any',
    baths: 'Any'
  });

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const rentalPriceRanges = [
    'Any Price', '₦50K - ₦100K', '₦100K - ₦200K', '₦200K - ₦500K',
    '₦500K - ₦1M', '₦1M - ₦2M', '₦2M+'
  ];

  const currentPriceRanges = isRental ? rentalPriceRanges : priceRanges;

  const handleLocationSelect = (location: string) => {
    setSearchData({...searchData, location});
    setShowLocationDropdown(false);
    setSearchError('');
  };

  const handleTypeSelect = (type: string) => {
    setSearchData({...searchData, propertyType: type});
    setShowTypeDropdown(false);
  };

  const handlePriceSelect = (price: string) => {
    setSearchData({...searchData, priceRange: price});
    setShowPriceDropdown(false);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchError('');
    
    // Check if location is provided and valid
    if (!searchData.location) {
      setSearchError('Please select a location to search');
      setIsSearching(false);
      return;
    }
    
    // Check if location exists in Nigerian states
    const locationExists = nigerianStates.some(state => 
      state.toLowerCase().includes(searchData.location.toLowerCase()) ||
      searchData.location.toLowerCase().includes(state.toLowerCase())
    );
    
    if (!locationExists) {
      setSearchError(`Sorry, we couldn't find properties in "${searchData.location}". Please select from available Nigerian states.`);
      setIsSearching(false);
      return;
    }
    
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      if (onSearch) {
        onSearch(searchData);
      } else {
        // Scroll to properties section if no custom handler
        const propertiesSection = document.getElementById('properties-section');
        if (propertiesSection) {
          propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white cursor-pointer"
          >
            <div className="flex items-center">
              <i className="ri-map-pin-line mr-2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-gray-700">{searchData.location || 'Select State'}</span>
            </div>
            <i className="ri-arrow-down-s-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
          </button>
          
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {nigerianStates.map((state) => (
                <button
                  key={state}
                  onClick={() => handleLocationSelect(state)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <button
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
            className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white cursor-pointer"
          >
            <span className="text-gray-700">{searchData.propertyType}</span>
            <i className="ri-arrow-down-s-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
          </button>
          
          {showTypeDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeSelect(type)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isRental ? 'Monthly Rent' : 'Price Range'}
          </label>
          <button
            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
            className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white cursor-pointer"
          >
            <span className="text-gray-700">{searchData.priceRange}</span>
            <i className="ri-arrow-down-s-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
          </button>
          
          {showPriceDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {currentPriceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() => handlePriceSelect(price)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  {price}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none bg-white"
            value={searchData.beds}
            onChange={(e) => setSearchData({...searchData, beds: e.target.value})}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 appearance-none bg-white"
            value={searchData.baths}
            onChange={(e) => setSearchData({...searchData, baths: e.target.value})}
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
      
      {searchError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <i className="ri-error-warning-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
          {searchError}
        </div>
      )}
      
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
      >
        {isSearching ? (
          <>
            <i className="ri-loader-4-line mr-2 w-5 h-5 inline-flex items-center justify-center animate-spin"></i>
            Searching...
          </>
        ) : (
          <>
            <i className="ri-search-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
            Search Properties
          </>
        )}
      </button>
    </div>
  );
}

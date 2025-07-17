'use client';

import { useState } from 'react';

const agents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    experience: '8 years',
    sales: '250+ Properties Sold',
    rating: 4.9,
    reviews: 127,
    image: 'https://readdy.ai/api/search-image?query=Professional%20female%20real%20estate%20agent%20portrait%2C%20business%20attire%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20clean%20white%20background%2C%20confident%20expression%2C%20real%20estate%20professional&width=300&height=300&seq=agent1&orientation=squarish',
    specialties: ['Luxury Homes', 'First-Time Buyers', 'Investment Properties'],
    testimonial: 'Sarah made our home buying process incredibly smooth. Her expertise and dedication are unmatched!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Commercial Real Estate Specialist',
    experience: '12 years',
    sales: '400+ Properties Sold',
    rating: 4.8,
    reviews: 203,
    image: 'https://readdy.ai/api/search-image?query=Professional%20male%20real%20estate%20agent%20portrait%2C%20business%20suit%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20clean%20white%20background%2C%20experienced%20professional%2C%20real%20estate%20specialist&width=300&height=300&seq=agent2&orientation=squarish',
    specialties: ['Commercial Properties', 'Office Spaces', 'Retail Locations'],
    testimonial: 'Michael\'s knowledge of the commercial market is exceptional. He helped us find the perfect office space.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Residential Sales Manager',
    experience: '6 years',
    sales: '180+ Properties Sold',
    rating: 4.9,
    reviews: 89,
    image: 'https://readdy.ai/api/search-image?query=Professional%20female%20real%20estate%20agent%20portrait%2C%20business%20blazer%2C%20warm%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20clean%20white%20background%2C%20approachable%20demeanor%2C%20residential%20specialist&width=300&height=300&seq=agent3&orientation=squarish',
    specialties: ['Family Homes', 'Condominiums', 'Rental Properties'],
    testimonial: 'Emily understood exactly what we were looking for and found us the perfect family home.'
  }
];

export default function AgentSpotlight() {
  const [currentAgent, setCurrentAgent] = useState(0);

  const nextAgent = () => {
    setCurrentAgent((prev) => (prev + 1) % agents.length);
  };

  const prevAgent = () => {
    setCurrentAgent((prev) => (prev - 1 + agents.length) % agents.length);
  };

  const agent = agents[currentAgent];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Agents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work with experienced professionals who understand the local market
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-48 h-48 rounded-full object-cover object-top mx-auto lg:mx-0 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {agent.rating}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">{agent.title}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-gray-900">{agent.experience}</p>
                    <p className="text-gray-600">Experience</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-gray-900">{agent.sales}</p>
                    <p className="text-gray-600">Track Record</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {agent.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
                  Contact {agent.name.split(' ')[0]}
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-xl">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 text-gray-600">({agent.reviews} reviews)</span>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic">
                    "{agent.testimonial}"
                  </blockquote>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Client Reviews</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">"Excellent service and professional approach!"</p>
                        <p className="text-xs text-gray-500 mt-1">- John D.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">"Made the whole process stress-free!"</p>
                        <p className="text-xs text-gray-500 mt-1">- Maria S.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevAgent}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer"
          >
            <i className="ri-arrow-left-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <button
            onClick={nextAgent}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer"
          >
            <i className="ri-arrow-right-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAgent(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentAgent ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
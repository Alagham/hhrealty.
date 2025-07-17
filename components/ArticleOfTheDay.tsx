
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const articlesOfTheDay = [
  {
    id: 1,
    title: 'Nigerian Real Estate Market Shows Strong Growth in 2024',
    excerpt: 'The Nigerian property market continues to demonstrate resilience with significant growth in Lagos, Abuja, and Port Harcourt. Investment opportunities are expanding across residential and commercial sectors.',
    author: 'Adebayo Okonkwo',
    date: 'March 15, 2024',
    readTime: '7 min read',
    category: 'Market Analysis',
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20real%20estate%20market%20analysis%2C%20Lagos%20skyline%2C%20modern%20buildings%2C%20business%20district%2C%20economic%20growth%20visualization%2C%20professional%20business%20photography%2C%20urban%20development%2C%20contemporary%20architecture&width=800&height=400&seq=articleday1&orientation=landscape',
    content: `The Nigerian real estate market has shown remarkable resilience and growth throughout 2024. Key indicators point to a robust recovery across major metropolitan areas, with Lagos leading the charge in both residential and commercial developments.

Investment in infrastructure has been a major driver, with new road networks, power improvements, and water supply projects enhancing property values across target areas. The government's housing initiatives have also contributed significantly to market stability.

Foreign investment continues to flow into the sector, particularly in luxury residential projects and commercial real estate. This trend is expected to continue as Nigeria maintains its position as Africa's largest economy.`,
    tags: ['Market Analysis', 'Investment', 'Growth', 'Nigeria', 'Real Estate']
  },
  {
    id: 2,
    title: 'Top 5 Emerging Neighborhoods for Property Investment in Lagos',
    excerpt: 'Discover the fastest-growing areas in Lagos offering excellent investment potential. From Ajah to Epe, these neighborhoods are transforming the property landscape with modern developments and infrastructure.',
    author: 'Fatima Ibrahim',
    date: 'March 16, 2024',
    readTime: '6 min read',
    category: 'Investment Guide',
    image: 'https://readdy.ai/api/search-image?query=Emerging%20Lagos%20neighborhoods%2C%20modern%20residential%20development%2C%20new%20housing%20estates%2C%20infrastructure%20development%2C%20aerial%20view%20of%20growing%20communities%2C%20Nigerian%20urban%20expansion%2C%20contemporary%20property%20development&width=800&height=400&seq=articleday2&orientation=landscape',
    content: `Lagos continues to expand beyond traditional high-value areas, creating exciting opportunities for savvy investors. These emerging neighborhoods offer the perfect combination of affordability and growth potential.

Ajah has become a hotspot for young professionals, with new shopping centers and improved transportation links. The area offers excellent value for money while maintaining proximity to business districts.

Epe is experiencing rapid transformation with government-backed infrastructure projects. The proposed Fourth Mainland Bridge will significantly impact property values in this corridor.

Other notable mentions include Ibeju-Lekki, which benefits from the new international airport project, and Magodo Phase 2, where luxury developments are setting new standards for suburban living.`,
    tags: ['Lagos', 'Investment', 'Neighborhoods', 'Property', 'Growth Areas']
  },
  {
    id: 3,
    title: 'Smart Home Technology Trends in Nigerian Properties',
    excerpt: 'Explore how smart home technology is revolutionizing Nigerian real estate. From automated security systems to energy-efficient solutions, discover the latest trends shaping modern Nigerian homes.',
    author: 'Chinedu Okeke',
    date: 'March 17, 2024',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://readdy.ai/api/search-image?query=Smart%20home%20technology%20in%20Nigerian%20houses%2C%20modern%20automation%20systems%2C%20security%20cameras%2C%20smart%20lighting%2C%20contemporary%20Nigerian%20interior%20with%20technology%20integration%2C%20futuristic%20home%20design&width=800&height=400&seq=articleday3&orientation=landscape',
    content: `The integration of smart home technology in Nigerian properties is accelerating, driven by increasing security concerns and the desire for energy efficiency. Modern developments now feature sophisticated automation systems as standard.

Security remains the primary driver, with smart surveillance systems, automated gates, and biometric access control becoming increasingly common. These systems offer peace of mind in urban areas while adding significant value to properties.

Energy management is another key area, with solar panel integration, smart meters, and automated lighting systems helping homeowners reduce electricity costs. This is particularly relevant given Nigeria's power supply challenges.

Home automation platforms that can be controlled via smartphone apps are gaining popularity, allowing residents to manage lighting, air conditioning, and security systems remotely.`,
    tags: ['Smart Home', 'Technology', 'Security', 'Energy Efficiency', 'Innovation']
  }
];

export default function ArticleOfTheDay() {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articlesOfTheDay.length);
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const article = articlesOfTheDay[currentArticle];

  const handleReadMore = () => {
    setShowModal(true);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Article of the Day
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Story</h2>
          <p className="text-xl text-gray-600">
            Stay informed with our daily featured real estate insights
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 lg:h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{article.author}</p>
                    <p className="text-sm text-gray-600">Real Estate Analyst</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleReadMore}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Read Full Article
                <i className="ri-arrow-right-line ml-2 w-5 h-5 inline-flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {articlesOfTheDay.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentArticle(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentArticle ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  {article.category}
                </span>
                <div className="text-sm text-gray-500">
                  {article.date} • {article.readTime}
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <i className="ri-close-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>

            <div className="p-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-6 object-top"
              />

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-gray-600 w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{article.author}</p>
                  <p className="text-sm text-gray-600">Real Estate Analyst</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{article.excerpt}</p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

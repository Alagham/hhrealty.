
'use client';

import { useState } from 'react';

export default function BlogHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const allArticles = [
    {
      id: 1,
      title: 'Complete Guide to Buying Your First Home in Nigeria',
      excerpt: 'Everything you need to know about purchasing your first property in Nigeria, from documentation to financing options.',
      content: 'Buying your first home in Nigeria can be overwhelming, but with proper planning and knowledge, it becomes manageable. First, determine your budget including down payment, closing costs, and monthly expenses. Research different neighborhoods in Lagos, Abuja, or your preferred city. Get pre-approved for a mortgage from Nigerian banks like GTBank, First Bank, or Access Bank. Work with licensed real estate agents and lawyers. Ensure all documentation is proper including Certificate of Occupancy, Survey Plan, and Building Approval. Consider factors like proximity to work, schools, hospitals, and infrastructure. Inspect the property thoroughly for structural issues, plumbing, and electrical systems.',
      author: 'Kemi Adebayo',
      date: 'March 14, 2024',
      readTime: '8 min read',
      category: 'Buying Guide',
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20first-time%20home%20buyers%2C%20young%20couple%20with%20real%20estate%20agent%2C%20property%20documents%2C%20modern%20Nigerian%20house%20exterior%2C%20professional%20consultation%2C%20happy%20buyers%20with%20keys&width=400&height=250&seq=blog1ng&orientation=landscape',
      tags: ['First Time Buyers', 'Nigeria', 'Property Purchase', 'Real Estate Guide']
    },
    {
      id: 2,
      title: 'Lagos Property Market: Investment Hotspots for 2024',
      excerpt: 'Discover the most promising areas for real estate investment in Lagos, with detailed analysis of growth potential and returns.',
      content: 'Lagos remains Nigeria\'s prime real estate investment destination. Key investment areas include Lekki Phase 1 & 2, Victoria Island, Ikoyi, and emerging areas like Ajah, Sangotedo, and Epe. The Lekki-Epe Expressway corridor shows tremendous growth potential due to infrastructure development. Consider factors like accessibility, planned developments, population growth, and rental yield potential. Luxury properties in Banana Island and Park View Estate offer high-end investment opportunities. Commercial real estate in Victoria Island and Lagos Island provides steady rental income.',
      author: 'Tunde Okafor',
      date: 'March 13, 2024',
      readTime: '6 min read',
      category: 'Investment',
      image: 'https://readdy.ai/api/search-image?query=Lagos%20property%20investment%20analysis%2C%20modern%20Lagos%20skyline%2C%20construction%20cranes%2C%20new%20developments%2C%20investment%20charts%20and%20graphs%2C%20business%20analytics%2C%20urban%20growth&width=400&height=250&seq=blog2ng&orientation=landscape',
      tags: ['Lagos', 'Investment', 'Property Market', 'Growth Areas']
    },
    {
      id: 3,
      title: 'Understanding Nigerian Property Laws and Documentation',
      excerpt: 'A comprehensive overview of property laws, required documents, and legal processes for real estate transactions in Nigeria.',
      content: 'Nigerian property law is complex but understanding key documents is crucial. Certificate of Occupancy (C of O) is the most important title document, issued by state governments. Survey Plan shows property boundaries and must be current. Building Approval from relevant authorities is required for construction. Deed of Assignment transfers ownership between parties. Governor\'s Consent is required for property transfers in some states. Always engage qualified lawyers and ensure proper due diligence. Verify ownership chain and check for encumbrances at the Land Registry.',
      author: 'Barrister Aisha Mohammed',
      date: 'March 12, 2024',
      readTime: '10 min read',
      category: 'Legal Guide',
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20property%20legal%20documents%2C%20Certificate%20of%20Occupancy%2C%20property%20law%20books%2C%20legal%20consultation%2C%20Nigerian%20lawyer%20with%20documents%2C%20professional%20legal%20setting&width=400&height=250&seq=blog3ng&orientation=landscape',
      tags: ['Property Law', 'Legal Documents', 'Nigeria', 'Real Estate Legal']
    },
    {
      id: 4,
      title: 'CEO Insights: Building Nigeria\'s Real Estate Future',
      excerpt: 'Exclusive insights from our CEO Alagbe Hamzah Adegbola on the future of Nigerian real estate and market trends.',
      content: 'As CEO of HH Realty, I\'ve witnessed remarkable transformation in Nigeria\'s property market. Technology integration, improved infrastructure, and increasing urbanization are driving growth. We\'re seeing increased foreign investment, especially in Lagos and Abuja. The future lies in sustainable development, smart cities, and affordable housing solutions. Our company focuses on bridging the gap between traditional real estate and modern digital solutions. We believe in transparency, professionalism, and creating value for all stakeholders in the property ecosystem.',
      author: 'Alagbe Hamzah Adegbola',
      date: 'March 15, 2024',
      readTime: '7 min read',
      category: 'CEO Insights',
      image: 'https://static.readdy.ai/image/87f1b62ce72b08234c29855b674cf598/4b64b9ae1e22e0f2d1b4345a03670dff.jfif',
      tags: ['CEO Insights', 'Market Trends', 'Real Estate Future', 'Nigeria']
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      const results = allArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Nigerian%20real%20estate%20blog%20header%2C%20modern%20Lagos%20cityscape%2C%20professional%20business%20environment%2C%20contemporary%20architecture%2C%20urban%20development%2C%20Nigerian%20property%20market%2C%20clean%20minimalist%20background%20design&width=1920&height=800&seq=bloghero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Real Estate Insights
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          Stay informed with expert analysis, market trends, and practical guides for the Nigerian property market
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-80 pl-12 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
          </div>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            {isSearching ? (
              <>
                <i className="ri-loader-4-line mr-2 w-5 h-5 inline-flex items-center justify-center animate-spin"></i>
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>
        
        {showResults && (
          <div className="mt-8 bg-white rounded-lg p-6 text-left max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Search Results ({searchResults.length} found)
              </h3>
              <button
                onClick={() => setShowResults(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.map((article) => (
                  <div key={article.id} className="border-b pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h4>
                    <p className="text-gray-600 mb-2">{article.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No articles found matching your search query.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

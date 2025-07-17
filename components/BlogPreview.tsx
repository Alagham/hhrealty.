'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for First-Time Home Buyers in 2024',
    excerpt: 'Navigate the real estate market with confidence using these expert tips for first-time buyers.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Buying Tips',
    image: 'https://readdy.ai/api/search-image?query=First-time%20home%20buyers%20looking%20at%20property%20documents%2C%20young%20couple%20meeting%20with%20real%20estate%20agent%2C%20modern%20office%20setting%2C%20professional%20consultation%2C%20real%20estate%20paperwork%2C%20bright%20lighting%2C%20contemporary%20interior&width=400&height=250&seq=blog1&orientation=landscape',
    slug: 'first-time-home-buyers-tips-2024'
  },
  {
    id: 2,
    title: 'Real Estate Market Trends: What to Expect This Year',
    excerpt: 'Comprehensive analysis of current market conditions and predictions for the upcoming months.',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    readTime: '8 min read',
    category: 'Market Analysis',
    image: 'https://readdy.ai/api/search-image?query=Real%20estate%20market%20analysis%20charts%20and%20graphs%2C%20financial%20data%20visualization%2C%20property%20market%20trends%2C%20business%20analytics%2C%20modern%20office%20setting%2C%20professional%20presentation%2C%20clean%20white%20background&width=400&height=250&seq=blog2&orientation=landscape',
    slug: 'real-estate-market-trends-2024'
  },
  {
    id: 3,
    title: 'How to Stage Your Home for a Quick Sale',
    excerpt: 'Professional staging techniques that can help your property sell faster and for a better price.',
    author: 'Emily Rodriguez',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Selling Tips',
    image: 'https://readdy.ai/api/search-image?query=Beautifully%20staged%20home%20interior%2C%20modern%20living%20room%20with%20neutral%20colors%2C%20professional%20home%20staging%2C%20clean%20and%20minimalist%20design%2C%20bright%20natural%20lighting%2C%20ready%20for%20real%20estate%20photography&width=400&height=250&seq=blog3&orientation=landscape',
    slug: 'home-staging-quick-sale-tips'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate news, tips, and market insights from our experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/blog/${post.slug}`} className="cursor-pointer">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <i className="ri-calendar-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    
                    <span className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
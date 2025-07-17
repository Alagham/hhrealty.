
'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Buying Your First Home in Nigeria',
    excerpt: 'Everything you need to know about purchasing your first property in Nigeria, from documentation to financing options.',
    author: 'Kemi Adebayo',
    authorImage: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20female%20real%20estate%20expert%20wearing%20hijab%2C%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20setting%2C%20professional%20headshot%20photography&width=60&height=60&seq=author1&orientation=squarish',
    date: 'March 14, 2024',
    readTime: '8 min read',
    category: 'Buying Guide',
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20first-time%20home%20buyers%2C%20young%20couple%20with%20real%20estate%20agent%2C%20property%20documents%2C%20modern%20Nigerian%20house%20exterior%2C%20professional%20consultation%2C%20happy%20buyers%20with%20keys&width=400&height=250&seq=blog1ng&orientation=landscape',
    slug: 'first-home-buying-guide-nigeria'
  },
  {
    id: 2,
    title: 'Lagos Property Market: Investment Hotspots for 2024',
    excerpt: 'Discover the most promising areas for real estate investment in Lagos, with detailed analysis of growth potential and returns.',
    author: 'Tunde Okafor',
    authorImage: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20technology%20executive%20CTO%20portrait%2C%20business%20casual%20attire%2C%20modern%20tech%20office%20background%2C%20professional%20headshot%20photography&width=60&height=60&seq=cto1&orientation=squarish',
    date: 'March 13, 2024',
    readTime: '6 min read',
    category: 'Investment',
    image: 'https://readdy.ai/api/search-image?query=Lagos%20property%20investment%20analysis%2C%20modern%20Lagos%20skyline%2C%20construction%20cranes%2C%20new%20developments%2C%20investment%20charts%20and%20graphs%2C%20business%20analytics%2C%20urban%20growth&width=400&height=250&seq=blog2ng&orientation=landscape',
    slug: 'lagos-property-investment-hotspots-2024'
  },
  {
    id: 3,
    title: 'Understanding Nigerian Property Laws and Documentation',
    excerpt: 'A comprehensive overview of property laws, required documents, and legal processes for real estate transactions in Nigeria.',
    author: 'Barrister Aisha Mohammed',
    authorImage: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20female%20lawyer%20wearing%20hijab%2C%20business%20suit%2C%20law%20office%20background%2C%20professional%20headshot%20photography%2C%20legal%20professional&width=60&height=60&seq=legal1hijab&orientation=squarish',
    date: 'March 12, 2024',
    readTime: '10 min read',
    category: 'Legal Guide',
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20property%20legal%20documents%2C%20Certificate%20of%20Occupancy%2C%20property%20law%20books%2C%20legal%20consultation%2C%20Nigerian%20lawyer%20with%20documents%2C%20professional%20legal%20setting&width=400&height=250&seq=blog3ng&orientation=landscape',
    slug: 'nigerian-property-laws-documentation-guide'
  },
  {
    id: 4,
    title: 'Abuja Real Estate: Government District Opportunities',
    excerpt: 'Explore investment opportunities in Nigeria\'s capital city, focusing on government districts and emerging commercial areas.',
    author: 'Ibrahim Yakubu',
    authorImage: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20businessman%20government%20district%20analyst%2C%20business%20attire%2C%20Abuja%20background%2C%20professional%20headshot%20photography&width=60&height=60&seq=author4&orientation=squarish',
    date: 'March 11, 2024',
    readTime: '7 min read',
    category: 'Market Analysis',
    image: 'https://readdy.ai/api/search-image?query=Abuja%20Federal%20Capital%20Territory%2C%20government%20buildings%2C%20modern%20Abuja%20architecture%2C%20Central%20Business%20District%2C%20Nigerian%20capital%20city%20development%2C%20official%20buildings%20and%20infrastructure&width=400&height=250&seq=blog4ng&orientation=landscape',
    slug: 'abuja-real-estate-government-district-opportunities'
  },
  {
    id: 5,
    title: 'Rental Property Management in Nigerian Cities',
    excerpt: 'Best practices for managing rental properties in Nigeria, from tenant screening to maintenance and legal compliance.',
    author: 'Funmi Adeyemi',
    authorImage: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20female%20property%20manager%20wearing%20hijab%2C%20business%20attire%2C%20confident%20expression%2C%20modern%20office%20background%2C%20professional%20headshot&width=60&height=60&seq=author5hijab&orientation=squarish',
    date: 'March 10, 2024',
    readTime: '9 min read',
    category: 'Property Management',
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20rental%20property%20management%2C%20property%20manager%20with%20tenants%2C%20modern%20apartment%20building%2C%20maintenance%20work%2C%20property%20inspection%2C%20professional%20property%20management&width=400&height=250&seq=blog5ng&orientation=landscape',
    slug: 'rental-property-management-nigerian-cities'
  },
  {
    id: 6,
    title: 'CEO Insights: Building Nigeria\'s Real Estate Future',
    excerpt: 'Exclusive insights from our CEO Alagbe Hamzah Adegbola on transforming the Nigerian real estate landscape.',
    author: 'Alagbe Hamzah Adegbola',
    authorImage: 'https://static.readdy.ai/image/87f1b62ce72b08234c29855b674cf598/4b64b9ae1e22e0f2d1b4345a03670dff.jfif',
    date: 'March 15, 2024',
    readTime: '7 min read',
    category: 'CEO Insights',
    image: 'https://readdy.ai/api/search-image?query=Nigerian%20real%20estate%20CEO%20in%20modern%20office%2C%20business%20leadership%2C%20property%20development%2C%20executive%20meeting%2C%20professional%20business%20environment&width=400&height=250&seq=blog6ceo&orientation=landscape',
    slug: 'ceo-insights-building-nigeria-real-estate-future'
  }
];

export default function BlogGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights and guides on Nigerian real estate market
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
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
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
      </div>
    </section>
  );
}

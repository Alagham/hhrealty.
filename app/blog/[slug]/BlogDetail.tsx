
'use client';

import Link from 'next/link';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 leading-relaxed ml-4">
            {paragraph.replace('- ', '')}
          </li>
        );
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            <strong>{paragraph.replace(/\*\*/g, '')}</strong>
          </p>
        );
      } else if (paragraph.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            <i className="ri-arrow-left-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
            Back to Blog
          </Link>
        </div>
        
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
              {post.category}
            </span>
            <div className="text-sm text-gray-500">
              {post.date} • {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900 text-lg">{post.author}</p>
              <p className="text-gray-600">
                {post.author === 'Alagbe Hamzah Adegbola' ? 'Chief Executive Officer' : 'Real Estate Expert'}
              </p>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>
        </header>
        
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg object-top"
          />
        </div>
        
        <div className="prose max-w-none">
          {formatContent(post.content)}
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">
                  {post.author === 'Alagbe Hamzah Adegbola' ? 'Chief Executive Officer' : 'Real Estate Expert'}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                <i className="ri-share-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">
                <i className="ri-heart-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Real Estate Advice?</h3>
          <p className="text-gray-600 mb-6">
            Contact our expert team for personalized guidance on your property needs
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

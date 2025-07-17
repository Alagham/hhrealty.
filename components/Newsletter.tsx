'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-mail-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Market Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest property listings, market trends, and expert tips delivered straight to your inbox. Join over 10,000 subscribers.
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex items-center justify-center">
                <i className="ri-check-line text-green-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-green-800 font-semibold">Successfully subscribed!</span>
              </div>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time. No spam, we promise.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-8 text-gray-400">
            <div className="flex items-center">
              <i className="ri-shield-check-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm">Privacy Protected</span>
            </div>
            <div className="flex items-center">
              <i className="ri-time-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm">Weekly Updates</span>
            </div>
            <div className="flex items-center">
              <i className="ri-user-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm">10K+ Subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
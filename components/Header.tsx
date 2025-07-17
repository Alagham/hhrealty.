
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/87f1b62ce72b08234c29855b674cf598/0830df793a0b00a63dd59dc3c8608110.png" 
              alt="HH Realty Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/buy" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Buy
            </Link>
            <Link href="/rent" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Rent
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Sell
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Blog
            </Link>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Home
            </Link>
            <Link href="/buy" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Buy
            </Link>
            <Link href="/rent" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Rent
            </Link>
            <Link href="/sell" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Sell
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

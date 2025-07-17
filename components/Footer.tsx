
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://static.readdy.ai/image/87f1b62ce72b08234c29855b674cf598/0830df793a0b00a63dd59dc3c8608110.png" 
                alt="HH Realty Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and renters with experienced professionals to make real estate transactions seamless.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/buy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Buy Properties
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Rent Properties
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                <span>+2347046441783</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                <span>hhrealty.ng@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-400">
                <i className="ri-map-pin-line mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                <span>8, Oluwo dejuwogbo Ave<br />Oke Ota Ona, Ikorodu<br />Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="ri-time-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              2024 Real Estate Site. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

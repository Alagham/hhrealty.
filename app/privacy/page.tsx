import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                This Privacy Policy describes how we collect, use, and protect your personal information when you use our real estate services. We are committed to protecting your privacy and ensuring the security of your personal data.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Property preferences and search criteria</li>
                <li>Financial information for property transactions</li>
                <li>Communication records and inquiry history</li>
                <li>Location data when you use our services</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide and improve our real estate services</li>
                <li>Match you with suitable properties</li>
                <li>Communicate with you about properties and services</li>
                <li>Process transactions and provide customer support</li>
                <li>Send relevant market updates and newsletters</li>
                <li>Comply with legal requirements</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell your personal information. We may share your information with trusted partners, service providers, and real estate professionals to facilitate your property transactions. We ensure all parties maintain appropriate data protection standards.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent at any time</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> hamzahalagbe27@gmail.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +2347046441783</p>
                <p className="text-gray-700"><strong>Address:</strong> 8, Oluwo dejuwogbo Ave, Oke Ota Ona, Ikorodu, Lagos State, Nigeria</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
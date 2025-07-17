import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using our real estate services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 mb-4">We provide real estate services including:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Property search and listing services</li>
                <li>Property buying, selling, and rental assistance</li>
                <li>Real estate consultation and advice</li>
                <li>Market analysis and property valuation</li>
                <li>Connection with real estate professionals</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect the rights of other users and third parties</li>
                <li>Not engage in fraudulent or misleading activities</li>
                <li>Maintain the confidentiality of your account information</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Information</h2>
              <p className="text-gray-700 mb-6">
                While we strive to provide accurate property information, we cannot guarantee the completeness or accuracy of all listings. Property details, prices, and availability are subject to change without notice. We recommend verifying all information independently.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Transactions</h2>
              <p className="text-gray-700 mb-6">
                All real estate transactions are subject to separate agreements between buyers, sellers, and relevant parties. We facilitate connections but are not responsible for the terms or completion of any transaction. Professional legal and financial advice is recommended for all property transactions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                All content, trademarks, and intellectual property on our platform are owned by us or our licensors. You may not use, copy, or distribute our content without explicit permission.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to terminate or suspend your access to our services at any time for violation of these terms or other reasonable grounds. Upon termination, your right to use our services will cease immediately.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms shall be subject to the jurisdiction of Nigerian courts.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
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
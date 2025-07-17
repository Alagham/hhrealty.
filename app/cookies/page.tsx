import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better user experience by remembering your preferences and analyzing how you use our real estate services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting Cookies:</strong> Show you relevant property advertisements</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-6">
                These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-6">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and provide better property search experiences. These cookies collect information anonymously.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preference Cookies</h3>
              <p className="text-gray-700 mb-6">
                These cookies remember your choices and preferences, such as your preferred language, currency, or property search criteria. They help provide a more personalized experience.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-700 mb-6">
                We use marketing cookies to show you relevant property advertisements and track the effectiveness of our marketing campaigns. These cookies may be set by third-party advertising partners.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                Our website may contain content from third-party services such as Google Maps, social media platforms, and analytics providers. These services may set their own cookies on your device.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Browser Settings: Configure your browser to block or delete cookies</li>
                <li>Opt-out Tools: Use industry opt-out tools for advertising cookies</li>
                <li>Privacy Settings: Adjust your privacy preferences on our website</li>
                <li>Mobile Settings: Control cookies through your mobile device settings</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
              <p className="text-gray-700 mb-6">
                When you first visit our website, we will ask for your consent to use cookies. You can change your cookie preferences at any time by accessing the cookie settings on our website.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-6">
                Disabling cookies may affect your experience on our website. Some features may not work properly, and you may need to re-enter information each time you visit. Essential cookies cannot be disabled as they are necessary for basic functionality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to Cookie Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. Please check this page periodically for updates.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
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
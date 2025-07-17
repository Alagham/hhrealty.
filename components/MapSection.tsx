
'use client';

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Properties Across Nigeria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse available properties in different states and find your perfect location across Nigeria
          </p>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4026492.5183642623!2d6.5243793!3d9.081999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1635959471879!5m2!1sen!2sng"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nigeria Property Locations Map"
          ></iframe>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-building-line text-blue-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lagos</h3>
            <p className="text-gray-600">2,340 Properties Available</p>
            <p className="text-sm text-gray-500">Victoria Island, Lekki, Ikeja, Surulere</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-government-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Abuja</h3>
            <p className="text-gray-600">1,680 Properties Available</p>
            <p className="text-sm text-gray-500">Maitama, Asokoro, Wuse, Garki</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-2-line text-purple-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Other States</h3>
            <p className="text-gray-600">890 Properties Available</p>
            <p className="text-sm text-gray-500">Port Harcourt, Kano, Ibadan, Kaduna</p>
          </div>
        </div>
      </div>
    </section>
  );
}

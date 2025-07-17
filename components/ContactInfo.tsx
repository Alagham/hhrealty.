
'use client';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: 'ri-map-pin-line',
      title: 'Our Office',
      details: [
        '8, Oluwo dejuwogbo Ave',
        'Oke Ota Ona, Ikorodu',
        'Lagos State, Nigeria'
      ]
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone Number',
      details: [
        '+2347046441783'
      ]
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Address',
      details: [
        'hhrealty.ng@gmail.com'
      ]
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8AM - 6PM',
        'Saturday: 9AM - 4PM',
        'Sunday: Closed'
      ]
    }
  ];

  const socialLinks = [
    { icon: 'ri-facebook-fill', name: 'Facebook', url: '#' },
    { icon: 'ri-twitter-fill', name: 'Twitter', url: '#' },
    { icon: 'ri-instagram-fill', name: 'Instagram', url: '#' },
    { icon: 'ri-linkedin-fill', name: 'LinkedIn', url: '#' },
    { icon: 'ri-whatsapp-fill', name: 'WhatsApp', url: '#' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with our professional team. We're here to help you with all your real estate needs across Nigeria.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className={`${item.icon} text-blue-600 w-6 h-6 flex items-center justify-center`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-10 h-10 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              title={social.name}
            >
              <i className={`${social.icon} w-5 h-5 flex items-center justify-center`}></i>
            </a>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Quick Response</h3>
        <p className="text-gray-600 text-sm mb-4">
          Need immediate assistance? Call our hotline for urgent property inquiries.
        </p>
        <a
          href="tel:+2347046441783"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
        >
          <i className="ri-phone-fill mr-2 w-4 h-4 flex items-center justify-center"></i>
          Call Now
        </a>
      </div>
    </div>
  );
}

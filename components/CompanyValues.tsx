'use client';

export default function CompanyValues() {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct all our business with the highest level of honesty and transparency, ensuring trust in every transaction.',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from property selection to customer support.',
      icon: 'ri-star-line'
    },
    {
      title: 'Innovation',
      description: 'We embrace technology and innovative solutions to provide the best real estate experience in Nigeria.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Customer Focus',
      description: 'Our clients are at the center of everything we do. We listen, understand, and deliver beyond expectations.',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our commitment to excellence in Nigerian real estate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-blue-600 text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
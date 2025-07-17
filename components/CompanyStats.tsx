'use client';

export default function CompanyStats() {
  const stats = [
    {
      number: '5,000+',
      label: 'Properties Sold',
      icon: 'ri-home-line'
    },
    {
      number: '12',
      label: 'Years Experience',
      icon: 'ri-calendar-line'
    },
    {
      number: '25+',
      label: 'Cities Covered',
      icon: 'ri-map-pin-line'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: 'ri-star-line'
    }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

const steps = [
  {
    id: 1,
    title: 'Search Properties',
    description: 'Browse through thousands of verified listings using our advanced search filters',
    icon: 'ri-search-line',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Schedule Viewing',
    description: 'Book virtual or in-person tours with our certified real estate agents',
    icon: 'ri-calendar-line',
    color: 'green'
  },
  {
    id: 3,
    title: 'Make an Offer',
    description: 'Submit competitive offers with guidance from our experienced professionals',
    icon: 'ri-hand-coin-line',
    color: 'purple'
  },
  {
    id: 4,
    title: 'Close the Deal',
    description: 'Complete the purchase process with full legal and financial support',
    icon: 'ri-key-line',
    color: 'orange'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200'
  }
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes buying or renting your dream property simple and stress-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center">
              <div className={`w-16 h-16 ${colorClasses[step.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mx-auto mb-6 border-4 ${colorClasses[step.color as keyof typeof colorClasses].border}`}>
                <i className={`${step.icon} ${colorClasses[step.color as keyof typeof colorClasses].text} text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
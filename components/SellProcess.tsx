'use client';

export default function SellProcess() {
  const steps = [
    {
      step: '01',
      title: 'Property Valuation',
      description: 'Get a professional valuation of your property based on current market conditions and comparable sales in your area.',
      icon: 'ri-calculator-line'
    },
    {
      step: '02',
      title: 'Marketing Strategy',
      description: 'We create a comprehensive marketing plan including professional photography, online listings, and targeted advertising.',
      icon: 'ri-megaphone-line'
    },
    {
      step: '03',
      title: 'Show to Buyers',
      description: 'We handle all viewings and negotiations with potential buyers, ensuring you get the best possible price.',
      icon: 'ri-home-line'
    },
    {
      step: '04',
      title: 'Close the Deal',
      description: 'We manage all paperwork, legal requirements, and ensure a smooth transaction from offer to completion.',
      icon: 'ri-file-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Sell Your Property</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures you get maximum value for your property
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-blue-600 text-2xl w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            Start Selling Today
          </button>
        </div>
      </div>
    </section>
  );
}
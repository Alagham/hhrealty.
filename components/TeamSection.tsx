
'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Alagbe Hamzah Adegbola',
      position: 'Chief Executive Officer',
      experience: '15 years in real estate',
      image: 'https://static.readdy.ai/image/87f1b62ce72b08234c29855b674cf598/4b64b9ae1e22e0f2d1b4345a03670dff.jfif',
      bio: 'Hamzah leads our company with vision and expertise, having transformed the Nigerian real estate landscape over the past decade.'
    },
    {
      name: 'Kemi Adebola',
      position: 'Head of Sales',
      experience: '12 years in property sales',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20businesswoman%20head%20of%20sales%20portrait%20wearing%20hijab%2C%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20setting%2C%20professional%20headshot%20photography%2C%20female%20executive&width=300&height=400&seq=sales1hijab&orientation=portrait',
      bio: 'Kemi drives our sales excellence with unmatched market knowledge and a commitment to client satisfaction.'
    },
    {
      name: 'Tunde Okafor',
      position: 'Chief Technology Officer',
      experience: '10 years in PropTech',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20technology%20executive%20CTO%20portrait%2C%20business%20casual%20attire%2C%20modern%20tech%20office%20background%2C%20professional%20headshot%20photography%2C%20tech%20industry%20professional&width=300&height=400&seq=cto1&orientation=portrait',
      bio: 'Tunde spearheads our technological innovations, bringing cutting-edge solutions to Nigerian real estate.'
    },
    {
      name: 'Fatima Mohammed',
      position: 'Legal Director',
      experience: '14 years in property law',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Nigerian%20female%20lawyer%20legal%20director%20portrait%20wearing%20hijab%2C%20business%20suit%2C%20law%20office%20background%2C%20professional%20headshot%20photography%2C%20legal%20professional%2C%20confident%20expression&width=300&height=400&seq=legal1hijab&orientation=portrait',
      bio: 'Fatima ensures all our transactions meet the highest legal standards and protects our clients\' interests.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving Nigeria's real estate innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20Nigerian%20real%20estate%20office%20building%2C%20modern%20corporate%20headquarters%2C%20glass%20facade%20architecture%2C%20business%20district%20Lagos%2C%20contemporary%20commercial%20building%2C%20professional%20photography%2C%20urban%20setting&width=1920&height=800&seq=contacthero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          Ready to find your dream property? Our expert team is here to help you every step of the way
        </p>
      </div>
    </section>
  );
}
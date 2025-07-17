'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20Nigerian%20real%20estate%20company%20office%20building%2C%20professional%20corporate%20architecture%2C%20contemporary%20glass%20facade%2C%20business%20district%20setting%2C%20urban%20Nigerian%20cityscape%2C%20corporate%20headquarters%20design&width=1920&height=800&seq=abouthero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About Our Company
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
          Leading Nigeria's real estate revolution with innovative solutions, expert guidance, and unwavering commitment to excellence
        </p>
      </div>
    </section>
  );
}
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import MapSection from '@/components/MapSection';
import HowItWorks from '@/components/HowItWorks';
import AgentSpotlight from '@/components/AgentSpotlight';
import BlogPreview from '@/components/BlogPreview';
import AppPromotion from '@/components/AppPromotion';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <MapSection />
      <HowItWorks />
      <AgentSpotlight />
      <BlogPreview />
      <AppPromotion />
      <Newsletter />
      <Footer />
    </div>
  );
}
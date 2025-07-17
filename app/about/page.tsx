'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import TeamSection from '@/components/TeamSection';
import CompanyStats from '@/components/CompanyStats';
import CompanyValues from '@/components/CompanyValues';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <CompanyStats />
      <CompanyValues />
      <TeamSection />
      <Footer />
    </div>
  );
}
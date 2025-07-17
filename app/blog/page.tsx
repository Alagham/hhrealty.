'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import ArticleOfTheDay from '@/components/ArticleOfTheDay';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <ArticleOfTheDay />
      <BlogGrid />
      <Footer />
    </div>
  );
}
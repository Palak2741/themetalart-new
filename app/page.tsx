import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ServicesPreview />
      <PortfolioShowcase />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
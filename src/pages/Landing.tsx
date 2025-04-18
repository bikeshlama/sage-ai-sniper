
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <DemoSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;

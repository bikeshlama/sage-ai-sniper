
import React from 'react';
import Navigation from '@/components/Navigation';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;

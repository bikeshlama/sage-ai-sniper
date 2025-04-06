
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TokenomicsSection from '@/components/TokenomicsSection';

const Tokenomics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <TokenomicsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Tokenomics;

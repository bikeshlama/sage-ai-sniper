
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <DemoSection />
        <TokenomicsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;

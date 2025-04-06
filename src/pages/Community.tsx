
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommunitySection from '@/components/CommunitySection';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Community;

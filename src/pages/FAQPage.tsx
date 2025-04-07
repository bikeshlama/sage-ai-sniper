
import React from 'react';
import Navigation from '@/components/Navigation';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;

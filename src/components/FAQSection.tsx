
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-indigo-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently <span className="text-gradient-primary">Asked Questions</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about ChainSage AI and how it can revolutionize your memecoin trading experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glassmorphism rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-indigo-100">
                What is ChainSage AI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                ChainSage AI is an advanced platform that combines blockchain analytics with artificial intelligence to help traders identify early memecoin opportunities, avoid scams, and track whale wallets for better trading decisions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glassmorphism rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-indigo-100">
                How does the AI token scanner work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Our AI token scanner analyzes smart contracts, liquidity patterns, and developer wallet behaviors to generate a comprehensive risk score. It identifies potential red flags, helping you avoid rug pulls and honeypot schemes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glassmorphism rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-indigo-100">
                Can I get alerts for new opportunities?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Yes! ChainSage AI offers real-time alerts for promising tokens before they pump. You can customize notification settings to receive alerts via web push, email, or Discord based on your specific criteria.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glassmorphism rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-indigo-100">
                Do I need to connect my wallet?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Wallet connection is optional. You can use most features without connecting a wallet, but connecting allows for personalized recommendations and one-click trading once you've identified opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glassmorphism rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-indigo-100">
                Is there a mobile app available?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We currently offer a responsive web application that works on all devices. A native mobile app for iOS and Android is in development and scheduled for release in Q3 2023.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

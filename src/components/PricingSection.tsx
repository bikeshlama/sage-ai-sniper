
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <div className="py-20 px-4 bg-indigo-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient-primary">Trading Edge</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Start for free or upgrade to unlock premium features and get an edge in the memecoin market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="glassmorphism rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-2">Basic</h3>
              <p className="text-white/60 text-center mb-6">Perfect for beginners</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">Free</span>
              </div>
              <Button variant="outline" className="w-full border-indigo-400 text-indigo-200 hover:bg-indigo-700/30">
                Get Started
              </Button>
            </div>
            <div className="p-6 bg-indigo-950/30">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Basic memecoin scanner</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Limited daily searches</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Community access</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Basic AI risk analysis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="glassmorphism rounded-lg overflow-hidden border-2 border-indigo-400 relative transform md:scale-105 z-10">
            <div className="absolute top-0 left-0 right-0 bg-indigo-400 text-indigo-950 text-center text-sm font-semibold py-1">
              MOST POPULAR
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-xl font-semibold text-center mb-2">Pro</h3>
              <p className="text-white/60 text-center mb-6">For serious traders</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$39</span>
                <span className="text-white/60">/month</span>
              </div>
              <Button className="w-full bg-indigo-400 hover:bg-indigo-500 text-indigo-950">
                Start 7-Day Trial
              </Button>
            </div>
            <div className="p-6 bg-indigo-950/30">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Advanced memecoin scanner</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Unlimited searches</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Real-time whale alerts</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Full AI assistant access</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Email & Discord alerts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="glassmorphism rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-center mb-2">Enterprise</h3>
              <p className="text-white/60 text-center mb-6">For professionals</p>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-white/60">/month</span>
              </div>
              <Button variant="outline" className="w-full border-indigo-400 text-indigo-200 hover:bg-indigo-700/30">
                Contact Sales
              </Button>
            </div>
            <div className="p-6 bg-indigo-950/30">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">All Pro features</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Premium API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Custom alerts & webhooks</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-white/60 max-w-3xl mx-auto">
          <p className="mb-6">
            All plans include access to our basic platform features. Upgrade anytime as your trading needs grow.
          </p>
          <Link to="/register">
            <Button variant="link" className="text-indigo-300 hover:text-indigo-200">
              View full feature comparison →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

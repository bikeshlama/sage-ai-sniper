
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, ChartBar, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center text-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500 opacity-10 blur-[100px] animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-300 opacity-10 blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      {/* Main hero content */}
      <div className="max-w-4xl mx-auto z-10">
        <div className="inline-block mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 text-sm font-medium text-blue-200">
          <span className="inline-block animate-pulse mr-2">🔮</span>
          The Future of Memecoin Trading Is Here
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block mb-2">AI-Powered Insights for</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 neon-text">
            Memecoin Sniping
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          ChainSage AI combines blockchain analytics with artificial intelligence to help you spot early opportunities, avoid rug pulls, and track whale wallets.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 text-white px-8 relative overflow-hidden group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
          <Link to="/community">
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-700/20">
              Join Community
            </Button>
          </Link>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="glassmorphism p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-blue-300" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Early Sniping</h3>
            <p className="text-white/60">Get alerts for promising tokens before they pump.</p>
          </div>
          
          <div className="glassmorphism p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-blue-300" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Rug Protection</h3>
            <p className="text-white/60">Smart contract audits to avoid scams and honeypots.</p>
          </div>
          
          <div className="glassmorphism p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-300/20 rounded-lg flex items-center justify-center mb-4">
              <ChartBar className="text-blue-300" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Whale Tracking</h3>
            <p className="text-white/60">Follow smart money to make informed decisions.</p>
          </div>
          
          <div className="glassmorphism p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-200/20 rounded-lg flex items-center justify-center mb-4">
              <Bot className="text-blue-300" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
            <p className="text-white/60">Get research and advice from our AI crypto expert.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

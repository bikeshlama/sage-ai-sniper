
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-cs-darker pt-16 pb-8 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gradient-to-br from-cs-purple to-cs-blue p-[2px]">
                <div className="w-full h-full rounded-full bg-cs-darker flex items-center justify-center">
                  <Zap size={16} className="text-cs-purple" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight neon-text">
                Chain<span className="text-cs-blue neon-text-blue">Sage</span> AI
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Empowering memecoin traders with AI-powered insights and analysis for smarter trading decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-cs-purple/20 text-white/60 hover:text-cs-purple transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://discord.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-cs-blue/20 text-white/60 hover:text-cs-blue transition-colors">
                <MessageSquare size={16} />
              </a>
              <a href="mailto:info@chainsage.ai" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-cs-green/20 text-white/60 hover:text-cs-green transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/whitepaper" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-cs-blue transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Updates</h3>
            <p className="text-white/60 text-sm mb-4">
              Get the latest news and updates from ChainSage AI.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none border-r-0 bg-cs-dark border-white/10 focus-visible:ring-cs-purple"
              />
              <Button className="rounded-l-none bg-cs-purple hover:bg-cs-purple/90">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} ChainSage AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

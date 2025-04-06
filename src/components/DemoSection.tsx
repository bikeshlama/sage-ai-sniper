
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Percent, AlertTriangle, Users } from 'lucide-react';

const DemoSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-cs-dark to-cs-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text-blue">AI-Powered</span> Trading Tools
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how ChainSage AI analyzes social signals, on-chain data, and market sentiment to give you an edge in memecoin trading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Token Scanner Demo */}
          <Card className="glassmorphism p-6 border-cs-purple/20 hover:border-cs-purple/50 transition-all duration-300">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Token Scanner</h3>
              <Badge variant="outline" className="border-cs-purple text-cs-purple">LIVE</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-cs-purple/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">PS</span>
                  </div>
                  <div>
                    <div className="font-medium">PepeSage</div>
                    <div className="text-xs text-white/60">0x7e23...4f9a</div>
                  </div>
                </div>
                <div className="text-green-400 flex items-center">
                  <span className="font-medium">87</span>
                  <span className="text-xs ml-1">/100</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">MM</span>
                  </div>
                  <div>
                    <div className="font-medium">MoonMeme</div>
                    <div className="text-xs text-white/60">0x9f56...2c1b</div>
                  </div>
                </div>
                <div className="text-yellow-400 flex items-center">
                  <span className="font-medium">62</span>
                  <span className="text-xs ml-1">/100</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">RK</span>
                  </div>
                  <div>
                    <div className="font-medium">RugKing</div>
                    <div className="text-xs text-white/60">0x3a12...9e7d</div>
                  </div>
                </div>
                <div className="text-red-400 flex items-center">
                  <span className="font-medium">23</span>
                  <span className="text-xs ml-1">/100</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center text-white/60 text-sm">
              <ArrowUpRight size={14} className="mr-1" />
              <span>3 new tokens analyzed in the last hour</span>
            </div>
          </Card>
          
          {/* Whale Tracker Demo */}
          <Card className="glassmorphism p-6 border-cs-blue/20 hover:border-cs-blue/50 transition-all duration-300">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Whale Tracker</h3>
              <Badge variant="outline" className="border-cs-blue text-cs-blue">TRENDING</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-cs-blue/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium flex items-center">
                    <Users size={14} className="mr-1 text-cs-blue" />
                    Wallet 0x67f4...2e91
                  </div>
                  <div className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Buying</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">$PEPE</span>
                  <span className="text-green-400">+$452,000</span>
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium flex items-center">
                    <Users size={14} className="mr-1 text-cs-blue" />
                    Wallet 0x93a7...1f45
                  </div>
                  <div className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Buying</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">$SHIB</span>
                  <span className="text-green-400">+$183,000</span>
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium flex items-center">
                    <Users size={14} className="mr-1 text-cs-blue" />
                    Wallet 0x45c9...7bd3
                  </div>
                  <div className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">Selling</div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">$DOGE</span>
                  <span className="text-red-400">-$721,000</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center text-white/60 text-sm">
              <ArrowUpRight size={14} className="mr-1" />
              <span>15 whale movements detected recently</span>
            </div>
          </Card>
          
          {/* AI Sentiment Demo */}
          <Card className="glassmorphism p-6 border-cs-green/20 hover:border-cs-green/50 transition-all duration-300">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">AI Sentiment</h3>
              <Badge variant="outline" className="border-cs-green text-cs-green">HOT</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-cs-green/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">$CSAI</div>
                  <div className="flex items-center text-green-400">
                    <Percent size={14} className="mr-1" />
                    <span>92% Positive</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  "Extremely bullish sentiment across Twitter and Telegram. Significant increase in mentions in the last 24 hours."
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">$PEPE</div>
                  <div className="flex items-center text-green-400">
                    <Percent size={14} className="mr-1" />
                    <span>78% Positive</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  "Steady positive sentiment with strong community support. New developments contributing to optimism."
                </div>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">$MEME</div>
                  <div className="flex items-center text-yellow-400">
                    <AlertTriangle size={14} className="mr-1" />
                    <span>41% Negative</span>
                  </div>
                </div>
                <div className="text-xs text-white/60">
                  "Concerning trend in sentiment after recent team announcements. Monitor closely for changes."
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center text-white/60 text-sm">
              <ArrowUpRight size={14} className="mr-1" />
              <span>AI model updated 5 minutes ago</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;

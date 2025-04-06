
import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, MessageSquare, Users, ArrowUpRight } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-cs-darker to-cs-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our <span className="neon-text">Growing Community</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Connect with fellow traders, get support, and stay updated on the latest developments in the ChainSage AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism rounded-lg p-6 border-cs-purple/20 hover:border-cs-purple/50 transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-cs-purple/20 rounded-full mb-6 mx-auto">
              <Twitter className="text-cs-purple" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Twitter</h3>
            <p className="text-white/70 text-center mb-6">
              Follow us for the latest updates, announcements, and memecoin insights.
            </p>
            <div className="flex items-center justify-between text-sm text-white/60 mb-6">
              <span>@ChainSageAI</span>
              <span className="flex items-center">
                <Users size={14} className="mr-1" />
                15.2K followers
              </span>
            </div>
            <Button className="w-full bg-[#1DA1F2] hover:bg-[#1a8cd8]">
              Follow on Twitter
              <ArrowUpRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="glassmorphism rounded-lg p-6 border-cs-blue/20 hover:border-cs-blue/50 transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-cs-blue/20 rounded-full mb-6 mx-auto">
              <MessageSquare className="text-cs-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Discord</h3>
            <p className="text-white/70 text-center mb-6">
              Join our Discord server for community discussions and exclusive alpha.
            </p>
            <div className="flex items-center justify-between text-sm text-white/60 mb-6">
              <span>ChainSage HQ</span>
              <span className="flex items-center">
                <Users size={14} className="mr-1" />
                27.8K members
              </span>
            </div>
            <Button className="w-full bg-[#5865F2] hover:bg-[#4752c4]">
              Join Discord
              <ArrowUpRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="glassmorphism rounded-lg p-6 border-cs-green/20 hover:border-cs-green/50 transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-cs-green/20 rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cs-green">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Telegram</h3>
            <p className="text-white/70 text-center mb-6">
              Get instant updates and chat with our team and community members.
            </p>
            <div className="flex items-center justify-between text-sm text-white/60 mb-6">
              <span>@ChainSageOfficial</span>
              <span className="flex items-center">
                <Users size={14} className="mr-1" />
                42.5K members
              </span>
            </div>
            <Button className="w-full bg-[#0088cc] hover:bg-[#0077b5]">
              Join Telegram
              <ArrowUpRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 p-6 glassmorphism rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Earn Rewards with our Referral Program</h3>
              <p className="text-white/70 mb-6">
                Invite friends to join ChainSage AI and earn $CSAI tokens when they sign up and use our platform. The more friends you refer, the more rewards you can earn!
              </p>
              <Button className="bg-gradient-to-r from-cs-purple to-cs-blue text-white hover:opacity-90">
                Start Earning Now
              </Button>
            </div>
            
            <div className="glassmorphism p-6 rounded-lg border border-cs-purple/20">
              <h4 className="font-medium mb-4">Weekly Community Leaderboard</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-cs-purple/10 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cs-purple to-cs-blue flex items-center justify-center mr-3">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div className="font-medium">CryptoWhale</div>
                  </div>
                  <div className="text-cs-green font-medium">142 Referrals</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cs-purple to-cs-blue flex items-center justify-center mr-3 opacity-80">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div className="font-medium">MoonHunter</div>
                  </div>
                  <div className="text-cs-green font-medium">98 Referrals</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cs-purple to-cs-blue flex items-center justify-center mr-3 opacity-60">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div className="font-medium">ShibaLover</div>
                  </div>
                  <div className="text-cs-green font-medium">77 Referrals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;

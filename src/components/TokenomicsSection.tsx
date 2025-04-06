
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 2200 },
  { name: 'Mar', value: 1900 },
  { name: 'Apr', value: 3800 },
  { name: 'May', value: 5100 },
  { name: 'Jun', value: 4700 },
];

const TokenomicsSection = () => {
  return (
    <div className="py-20 px-4 bg-cs-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text-green">$CSAI</span> Tokenomics
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The ChainSage AI ecosystem is powered by our utility token $CSAI, enabling premium features, governance, and rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="glassmorphism rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Token Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Community Rewards</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-cs-purple h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Team & Development</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-cs-blue h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Liquidity Pool</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-cs-green h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Marketing</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-cs-pink h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Reserve</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Token Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-white/70 mb-1">Total Supply</div>
                  <div className="font-medium">1,000,000,000 CSAI</div>
                </div>
                
                <div>
                  <div className="text-sm text-white/70 mb-1">Initial Price</div>
                  <div className="font-medium">$0.00015</div>
                </div>
                
                <div>
                  <div className="text-sm text-white/70 mb-1">Network</div>
                  <div className="font-medium">Ethereum</div>
                </div>
                
                <div>
                  <div className="text-sm text-white/70 mb-1">Token Type</div>
                  <div className="font-medium">ERC-20</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/whitepaper">
                  <Button variant="outline" className="w-full border-cs-blue text-cs-blue hover:bg-cs-blue/10">
                    <FileText className="mr-2" size={16} />
                    Read Whitepaper
                  </Button>
                </Link>
                <Link to="/download-whitepaper">
                  <Button variant="outline" className="w-full border-cs-green text-cs-green hover:bg-cs-green/10">
                    <Download className="mr-2" size={16} />
                    Download PDF
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="glassmorphism rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Projected Growth</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.7)' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0D0E12',
                      borderColor: '#6E00FF',
                      color: 'white',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6E00FF"
                    strokeWidth={2}
                    dot={{ fill: '#6E00FF', strokeWidth: 2, r: 4 }}
                    activeDot={{ fill: '#00F0FF', strokeWidth: 0, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-cs-purple/10 rounded-lg border border-cs-purple/20">
              <h4 className="font-medium mb-2">Community-Driven Value</h4>
              <p className="text-sm text-white/70">
                The $CSAI token value is driven by utility within our ecosystem. Token holders get premium access to AI tools, token alerts, and exclusive community features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;

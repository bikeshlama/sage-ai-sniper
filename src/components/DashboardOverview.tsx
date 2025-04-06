
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, Users, AlertTriangle, Rocket, Sparkles } from 'lucide-react';

const activityData = [
  { name: 'Mon', value: 5 },
  { name: 'Tue', value: 8 },
  { name: 'Wed', value: 12 },
  { name: 'Thu', value: 7 },
  { name: 'Fri', value: 15 },
  { name: 'Sat', value: 21 },
  { name: 'Sun', value: 18 },
];

const trendingCoins = [
  { name: 'PEPE', change: '+42.5%', value: 42.5, status: 'up' },
  { name: 'SHIB', change: '+12.3%', value: 12.3, status: 'up' },
  { name: 'DOGE', change: '-3.7%', value: -3.7, status: 'down' },
  { name: 'FLOKI', change: '+8.1%', value: 8.1, status: 'up' },
];

const statsCards = [
  {
    title: 'Scanned Tokens',
    value: '2,457',
    change: '+18%',
    status: 'up',
    icon: Rocket,
    iconColor: 'bg-cs-purple/20 text-cs-purple',
  },
  {
    title: 'Detected Rugs',
    value: '412',
    change: '-5%',
    status: 'down',
    icon: AlertTriangle,
    iconColor: 'bg-red-500/20 text-red-400',
  },
  {
    title: 'Tracked Whales',
    value: '189',
    change: '+12%',
    status: 'up',
    icon: Users,
    iconColor: 'bg-cs-blue/20 text-cs-blue',
  },
  {
    title: 'AI Predictions',
    value: '1,824',
    change: '+32%',
    status: 'up',
    icon: Sparkles,
    iconColor: 'bg-cs-green/20 text-cs-green',
  },
];

const trendingTokensData = [
  { name: 'PEPE', value: 42 },
  { name: 'SHIB', value: 28 },
  { name: 'DOGE', value: 20 },
  { name: 'FLOKI', value: 15 },
  { name: 'BONK', value: 12 },
  { name: 'WIF', value: 10 },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          
          return (
            <Card key={index} className="glassmorphism border-white/10 hover:border-white/20 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${card.iconColor}`}>
                  <Icon size={18} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <div className="flex items-center space-x-2 text-xs mt-1">
                  {card.status === 'up' ? (
                    <span className="text-green-400 flex items-center">
                      <ArrowUp size={12} className="mr-0.5" />
                      {card.change}
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center">
                      <ArrowDown size={12} className="mr-0.5" />
                      {card.change}
                    </span>
                  )}
                  <span className="text-white/60">from last week</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glassmorphism border-white/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">AI Activity</CardTitle>
              <Badge variant="outline" className="border-cs-purple text-cs-purple">Last 7 Days</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={activityData}
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
          </CardContent>
        </Card>
        
        <Card className="glassmorphism border-white/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Trending Tokens</CardTitle>
              <Badge variant="outline" className="border-cs-blue text-cs-blue">AI Generated</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={trendingTokensData}
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
                      borderColor: '#00F0FF',
                      color: 'white',
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#00F0FF"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glassmorphism border-white/10 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-cs-purple/10 rounded-lg border border-cs-purple/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <AlertTriangle size={16} className="text-yellow-400 mr-2" />
                    <span className="font-medium">Suspicious Token Activity</span>
                  </div>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">1h ago</Badge>
                </div>
                <p className="text-sm text-white/70">
                  Unusual transfer patterns detected in token 0x7e23...4f9a. Developer wallet moving large amounts. Exercise caution.
                </p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Users size={16} className="text-cs-blue mr-2" />
                    <span className="font-medium">Whale Movement</span>
                  </div>
                  <Badge variant="outline" className="border-cs-blue text-cs-blue">3h ago</Badge>
                </div>
                <p className="text-sm text-white/70">
                  Whale wallet 0x93a7...1f45 accumulated $183,000 worth of $SHIB in the last 3 hours. Potential bullish signal.
                </p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Sparkles size={16} className="text-cs-green mr-2" />
                    <span className="font-medium">AI Prediction</span>
                  </div>
                  <Badge variant="outline" className="border-cs-green text-cs-green">5h ago</Badge>
                </div>
                <p className="text-sm text-white/70">
                  AI model predicts positive momentum for $PEPE based on on-chain data and social sentiment analysis. 87% confidence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glassmorphism border-white/10">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Top Movers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingCoins.map((coin, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      coin.status === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      <TrendingUp size={16} className={coin.status === 'up' ? 'text-green-400' : 'text-red-400'} />
                    </div>
                    <div>
                      <div className="font-medium">{'$' + coin.name}</div>
                      <div className={`text-xs ${
                        coin.status === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {coin.change}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {coin.status === 'up' ? (
                      <div className="h-10 w-20">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={[
                              { value: (Math.random() * 10) + 10 },
                              { value: (Math.random() * 10) + 15 },
                              { value: (Math.random() * 10) + 20 },
                              { value: (Math.random() * 10) + 25 },
                              { value: (Math.random() * 10) + 30 },
                            ]}
                          >
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#22c55e"
                              strokeWidth={2}
                              dot={false}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-10 w-20">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={[
                              { value: (Math.random() * 10) + 30 },
                              { value: (Math.random() * 10) + 25 },
                              { value: (Math.random() * 10) + 20 },
                              { value: (Math.random() * 10) + 15 },
                              { value: (Math.random() * 10) + 10 },
                            ]}
                          >
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#ef4444"
                              strokeWidth={2}
                              dot={false}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Zap, Mail, Lock, AlertTriangle, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      
      // Demo credentials for testing
      if (email === 'demo@chainsage.ai' && password === 'demo1234') {
        toast({
          title: "Login successful",
          description: "Welcome back to ChainSage AI!",
        });
        window.location.href = '/dashboard';
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          icon: <AlertTriangle className="h-5 w-5" />,
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cs-dark">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-white/70 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 relative overflow-hidden rounded-full bg-gradient-to-br from-cs-purple to-cs-blue p-[2px] animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-cs-darker flex items-center justify-center">
                <Zap size={20} className="text-cs-purple" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight neon-text">
              Chain<span className="text-cs-blue neon-text-blue">Sage</span> AI
            </span>
          </Link>
        </div>
        
        <Card className="glassmorphism border-cs-purple/20">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10 bg-cs-dark border-white/10 focus-visible:ring-cs-purple"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-cs-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-cs-dark border-white/10 focus-visible:ring-cs-purple"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cs-purple to-cs-blue hover:opacity-90"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative flex items-center justify-center">
                <Separator className="w-full bg-white/10" />
                <span className="absolute bg-cs-darker px-2 text-white/40 text-xs">OR CONTINUE WITH</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-6">
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </Button>
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 0-4.348-5.676.98.98 0 0 0-1.401.601 5.678 5.678 0 0 0-.323 1.072 9.829 9.829 0 0 0 5.298 8.343c1.43.794 3.28 1.583 3.28 1.583.15.074.232.117.308.176a.7.7 0 0 1 .268.591 2.472 2.472 0 0 1-2.56 2.491c-1.989-.006-3.282-1.512-4.724-1.512-1.441 0-2.766 1.571-4.828 1.571-2.063 0-3.956-2.06-5.254-5.304A15.932 15.932 0 0 1 2.328 7.62a3.273 3.273 0 0 1-.067-.238c-.176-.826.55-1.662 1.347-1.662.398 0 .876.19 1.39.391.595.232 1.23.477 1.732.477.445 0 .793-.16 1.146-.455.363-.302.695-.798 1.116-1.401a13.578 13.578 0 0 0 1.31-2.241c.213-.461.356-.85.45-1.153.165-.529.293-.948.58-1.252.348-.367.881-.38 1.247-.345 1.361.13 2.735.762 3.983 1.793a8.63 8.63 0 0 1 2.83 4.882c.331 1.559.304 3.061.174 3.946-.058.395-.207 1.005-.486 1.166a1.316 1.316 0 0 1-.656.152z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-white/60">Don't have an account?</span>{' '}
              <Link to="/register" className="text-cs-blue hover:underline">
                Sign up
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center text-xs text-white/40">
              <p>For demo, use: demo@chainsage.ai / demo1234</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

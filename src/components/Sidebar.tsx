
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Zap,
  LayoutDashboard,
  Radar,
  Shield,
  Users,
  BarChart3,
  Bot,
  Settings,
  LogOut,
  HelpCircle,
  Bell,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  badge?: string | number;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon: Icon, label, to, active, badge }) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={`w-full justify-start gap-3 px-3 ${
          active
            ? 'bg-cs-purple/20 text-white hover:bg-cs-purple/30'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        <Icon size={18} />
        <span>{label}</span>
        {badge && (
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-cs-purple text-xs text-white">
            {badge}
          </span>
        )}
      </Button>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    // Redirect to home page after logout
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  return (
    <aside className="hidden md:flex w-64 flex-col h-screen bg-cs-darker fixed left-0 border-r border-white/10">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gradient-to-br from-cs-purple to-cs-blue p-[2px]">
            <div className="w-full h-full rounded-full bg-cs-darker flex items-center justify-center">
              <Zap size={16} className="text-cs-purple" />
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight neon-text">
            Chain<span className="text-cs-blue neon-text-blue">Sage</span> AI
          </span>
        </Link>
        
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1">
            <SidebarLink
              icon={LayoutDashboard}
              label="Dashboard"
              to="/dashboard"
              active={location.pathname === '/dashboard'}
            />
            <SidebarLink
              icon={Radar}
              label="Token Scanner"
              to="/dashboard/token-scanner"
              active={location.pathname === '/dashboard/token-scanner'}
              badge={3}
            />
            <SidebarLink
              icon={Shield}
              label="Rug Detector"
              to="/dashboard/rug-detector"
              active={location.pathname === '/dashboard/rug-detector'}
            />
            <SidebarLink
              icon={Users}
              label="Whale Tracker"
              to="/dashboard/whale-tracker"
              active={location.pathname === '/dashboard/whale-tracker'}
            />
            <SidebarLink
              icon={BarChart3}
              label="AI Sentiment"
              to="/dashboard/sentiment"
              active={location.pathname === '/dashboard/sentiment'}
            />
            <SidebarLink
              icon={Bot}
              label="AI Assistant"
              to="/dashboard/assistant"
              active={location.pathname === '/dashboard/assistant'}
              badge="New"
            />
          </div>
          
          <Separator className="my-4 bg-white/10" />
          
          <div className="space-y-1">
            <SidebarLink
              icon={Bell}
              label="Notifications"
              to="/dashboard/notifications"
              active={location.pathname === '/dashboard/notifications'}
              badge={5}
            />
            <SidebarLink
              icon={Settings}
              label="Settings"
              to="/dashboard/settings"
              active={location.pathname === '/dashboard/settings'}
            />
            <SidebarLink
              icon={HelpCircle}
              label="Help & Support"
              to="/dashboard/support"
              active={location.pathname === '/dashboard/support'}
            />
          </div>
          
          <Separator className="my-4 bg-white/10" />
          
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10 gap-3 px-3"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default Sidebar;

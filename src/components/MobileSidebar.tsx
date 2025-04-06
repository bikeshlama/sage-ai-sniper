
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
  Search,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon: Icon, label, to, active, badge, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
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

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    onClose();
    
    // Redirect to home page after logout
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-cs-darker border-r border-white/10 animate-in slide-in-from-left">
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2 mb-6" onClick={onClose}>
            <div className="w-8 h-8 relative overflow-hidden rounded-full bg-gradient-to-br from-cs-purple to-cs-blue p-[2px]">
              <div className="w-full h-full rounded-full bg-cs-darker flex items-center justify-center">
                <Zap size={16} className="text-cs-purple" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight neon-text">
              Chain<span className="text-cs-blue neon-text-blue">Sage</span> AI
            </span>
          </Link>
          
          <div className="relative flex w-full mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
            <Input
              placeholder="Search..."
              className="pl-10 bg-cs-dark border-white/10 focus-visible:ring-cs-purple"
            />
          </div>
          
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1">
              <SidebarLink
                icon={LayoutDashboard}
                label="Dashboard"
                to="/dashboard"
                active={location.pathname === '/dashboard'}
                onClick={onClose}
              />
              <SidebarLink
                icon={Radar}
                label="Token Scanner"
                to="/dashboard/token-scanner"
                active={location.pathname === '/dashboard/token-scanner'}
                badge={3}
                onClick={onClose}
              />
              <SidebarLink
                icon={Shield}
                label="Rug Detector"
                to="/dashboard/rug-detector"
                active={location.pathname === '/dashboard/rug-detector'}
                onClick={onClose}
              />
              <SidebarLink
                icon={Users}
                label="Whale Tracker"
                to="/dashboard/whale-tracker"
                active={location.pathname === '/dashboard/whale-tracker'}
                onClick={onClose}
              />
              <SidebarLink
                icon={BarChart3}
                label="AI Sentiment"
                to="/dashboard/sentiment"
                active={location.pathname === '/dashboard/sentiment'}
                onClick={onClose}
              />
              <SidebarLink
                icon={Bot}
                label="AI Assistant"
                to="/dashboard/assistant"
                active={location.pathname === '/dashboard/assistant'}
                badge="New"
                onClick={onClose}
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
                onClick={onClose}
              />
              <SidebarLink
                icon={Settings}
                label="Settings"
                to="/dashboard/settings"
                active={location.pathname === '/dashboard/settings'}
                onClick={onClose}
              />
              <SidebarLink
                icon={HelpCircle}
                label="Help & Support"
                to="/dashboard/support"
                active={location.pathname === '/dashboard/support'}
                onClick={onClose}
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
      </div>
    </div>
  );
};

export default MobileSidebar;

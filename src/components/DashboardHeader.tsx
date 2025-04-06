
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Bell, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface DashboardHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { toast } = useToast();

  const showNotification = () => {
    toast({
      title: "New Alert",
      description: "Whale movement detected for $PEPE",
    });
  };

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
    <header className="h-16 fixed top-0 left-0 right-0 z-30 bg-cs-darker border-b border-white/10 md:pl-64">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2 text-white/70 hover:text-white"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <div className="relative hidden md:flex w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
            <Input
              placeholder="Search for tokens, addresses..."
              className="pl-10 bg-cs-dark border-white/10 focus-visible:ring-cs-purple"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white">
                <Bell size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-cs-purple text-white text-xs">
                  5
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start cursor-pointer" onClick={showNotification}>
                <div className="font-medium">Whale Movement Alert</div>
                <div className="text-sm text-muted-foreground">Whale wallet bought $452,000 of $PEPE</div>
                <div className="text-xs text-muted-foreground mt-1">Just now</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start">
                <div className="font-medium">Contract Analysis Complete</div>
                <div className="text-sm text-muted-foreground">$MEME token scored 87/100 safety rating</div>
                <div className="text-xs text-muted-foreground mt-1">30 minutes ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start">
                <div className="font-medium">New Token Detected</div>
                <div className="text-sm text-muted-foreground">AI found a potential gem: $CSAI</div>
                <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/dashboard/notifications" className="w-full">
                <DropdownMenuItem className="justify-center text-center cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="User" />
                  <AvatarFallback className="bg-cs-purple text-white">CT</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/dashboard/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <Link to="/dashboard/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <Link to="/dashboard/subscription">
                <DropdownMenuItem>
                  <div className="flex-1">Subscription</div>
                  <Badge className="bg-cs-purple">PRO</Badge>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-400 focus:text-red-400">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

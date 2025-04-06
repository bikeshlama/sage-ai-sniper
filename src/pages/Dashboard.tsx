
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MobileSidebar from '@/components/MobileSidebar';
import DashboardOverview from '@/components/DashboardOverview';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-cs-dark">
      <Sidebar />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <DashboardHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className="md:pl-64 pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="text-white/60 text-sm">Last updated: {new Date().toLocaleString()}</div>
          </div>
          
          <DashboardOverview />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

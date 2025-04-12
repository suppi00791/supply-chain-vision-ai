
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import MetricsCards from "@/components/Dashboard/MetricsCards";
import ChartSection from "@/components/Dashboard/ChartSection";
import RealtimeTracking from "@/components/Dashboard/RealtimeTracking";
import AIInsights from "@/components/Dashboard/AIInsights";
import ProcessAutomation from "@/components/Dashboard/ProcessAutomation";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex-1">
        <div className="container py-6">
          <DashboardHeader />
          <MetricsCards />
          <ChartSection />
          <RealtimeTracking />
          
          <div className="grid gap-6 md:grid-cols-2">
            <AIInsights />
            <ProcessAutomation />
          </div>
        </div>
      </div>
      
      <footer className="border-t py-4 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2025 UISCM - Unified Intelligent Supply Chain Management
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

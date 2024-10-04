import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";
import { useEffect } from "react";
import { initBackgroundAnimation } from "./utils/backgroundAnimation";
import { Home, FileText, Rocket, Newspaper, Users } from 'lucide-react';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initBackgroundAnimation();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
        <BrowserRouter>
          <div className="pb-16 md:pb-0"> {/* Add padding to bottom for mobile nav */}
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </div>
          <nav className="mobile-nav">
            <ul>
              <li><Link to="/"><Home size={24} /><span className="text-xs">ホーム</span></Link></li>
              <li><Link to="/custom-list"><FileText size={24} /><span className="text-xs">カスタムリスト</span></Link></li>
              <li><Link to="/trial-plan"><Rocket size={24} /><span className="text-xs">お試しプラン</span></Link></li>
              <li><Link to="/media2000"><Newspaper size={24} /><span className="text-xs">Media2000</span></Link></li>
              <li><Link to="/partner-recruitment"><Users size={24} /><span className="text-xs">パートナー募集</span></Link></li>
            </ul>
          </nav>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Landing from "./pages/Landing";
import { SpeedInsights } from "@vercel/speed-insights/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SpeedInsights />
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Landing />

        {/* Footer */}
        <footer className="py-8 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2025 Aqib Jawwad Nahin. Built with passion and modern web technologies.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

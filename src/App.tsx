import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Landing from "./pages/Landing";
import CustomCursor from "@/components/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-load heavy route pages for code splitting + faster initial load
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const ProjectCaseStudy = lazy(() => import("./pages/ProjectCaseStudy"));
const PhilosophyPage = lazy(() => import("./pages/PhilosophyPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    },
  },
});

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#080808] pt-20 flex items-center justify-center" aria-busy="true" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-muted-foreground text-xs font-mono">Loading…</p>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <SpeedInsights />
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <CustomCursor />
          <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden flex flex-col selection:bg-primary selection:text-black">
            <Navigation />
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/philosophy" element={<PhilosophyPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            {/* Redesigned Footer */}
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

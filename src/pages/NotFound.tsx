import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found · Aqib Jawwad Nahin</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-md text-center space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            Error 404
          </p>

          <h1 className="text-6xl sm:text-8xl font-light text-white">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-light text-white">
            Page Not Found
          </h2>

          <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
            The requested route <code className="px-2 py-0.5 rounded bg-[#161616] text-primary font-mono text-xs">{location.pathname}</code> does not exist or has moved.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-medium rounded-full px-8 text-sm gap-2"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                Return to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

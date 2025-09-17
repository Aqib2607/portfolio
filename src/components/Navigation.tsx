import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname === href) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-card backdrop-blur-xl border-b border-border/50" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/"
              className="text-2xl font-heading font-bold gradient-text hover:scale-105 transition-transform"
            >
              AJ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    isActivePage(item.href) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 font-medium px-6 rounded-full"
                asChild
              >
                <Link to="/contact">
                  Hire Me
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-heading font-medium transition-colors duration-300 ${
                    isActivePage(item.href) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 font-medium px-8 py-4 rounded-full mt-8"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link to="/contact">
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
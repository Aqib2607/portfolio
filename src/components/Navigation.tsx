import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About me", href: "/#about" },
  { name: "My work", href: "/#projects" },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Insights", href: "/blog" },
  { name: "Resume", href: "/resume" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("/#") && isHome) {
      return href.substring(1);
    }
    return href;
  };

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo / Personal Branding */}
          <a
            href={isHome ? "#top" : "/"}
            className="text-lg sm:text-xl font-medium tracking-tight text-white hover:text-primary transition-colors"
            aria-label="Aqib Jawwad Nahin Homepage"
          >
            <span>Aqib Jawwad Nahin</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isInternal = link.href.startsWith("/") && !link.href.includes("#");
              if (isInternal) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm font-normal text-[#B3B3B3] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  className="text-sm font-normal text-[#B3B3B3] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              className="bg-white hover:bg-white/90 text-black font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={getHref("#contact")}>
                Contact
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-[#B3B3B3] hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#111111] border-l border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <span className="text-lg font-medium text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[#B3B3B3] hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={getHref(link.href)}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl font-normal text-[#B3B3B3] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <Button
                className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 rounded-full text-sm"
                asChild
              >
                <a href={getHref("#contact")} onClick={() => setIsOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
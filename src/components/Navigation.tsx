import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? (window.location.hash || '#top') : '#top'
  );

  useEffect(() => {
    const onHash = () => setCurrentHash(window.location.hash || '#top');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

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
            <a
              href="#top"
              className="text-2xl font-heading font-bold gradient-text hover:scale-105 transition-transform"
            >
              AJ
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium ${
                    currentHash === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Contact CTA (styled like previous Hire Me) */}
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 font-medium px-6 rounded-full"
                asChild
              >
                <a href="#contact">Contact</a>
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-heading font-medium transition-colors duration-300 ${
                    currentHash === item.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 font-medium px-8 py-4 rounded-full mt-8"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
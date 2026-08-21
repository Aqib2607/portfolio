import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith("/#") && isHome) return href.substring(1);
    return href;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

          {/* Logo */}
          <a
            href={isHome ? "#top" : "/"}
            className="text-lg sm:text-xl font-medium tracking-tight text-white hover:text-primary transition-colors"
            aria-label="Aqib Jawwad Nahin Homepage"
          >
            Aqib Jawwad Nahin
          </a>

          {/* Desktop Nav Links with animated hover underline */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isInternal = link.href.startsWith("/") && !link.href.includes("#");
              const isActive = isInternal && location.pathname === link.href;
              const cls = `relative text-sm font-normal transition-colors group ${
                isActive ? "text-white" : "text-[#B3B3B3] hover:text-white"
              }`;
              const underline = (
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              );
              if (isInternal) {
                return (
                  <Link key={link.name} to={link.href} className={cls}>
                    {link.name}
                    {underline}
                  </Link>
                );
              }
              return (
                <a key={link.name} href={getHref(link.href)} className={cls}>
                  {link.name}
                  {underline}
                </a>
              );
            })}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden sm:inline-flex bg-white hover:bg-white/90 text-black font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={getHref("/#contact")}>Contact</a>
            </Button>

            <button
              type="button"
              className="lg:hidden p-2 text-[#B3B3B3] hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer — spring-animated, staggered items */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.8 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#111111] border-l border-white/10 p-8 flex flex-col justify-between"
            >
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

                <motion.ul
                  className="space-y-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 24 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                      }}
                    >
                      <a
                        href={getHref(link.href)}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-3 text-xl font-normal text-[#B3B3B3] hover:text-white border-b border-white/5 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="pt-6 border-t border-white/10"
              >
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-black font-medium py-3 rounded-full text-sm"
                  asChild
                >
                  <a href={getHref("/#contact")} onClick={() => setIsOpen(false)}>
                    Get in Touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getBrandIcon } from "./BrandIcons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-12 text-white" role="contentinfo">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Tagline */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Crafting engaging & reliable software experiences with passion.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#888888] hover:text-white transition-colors font-mono"
            aria-label="Scroll to top of page"
          >
            <span>Top of page</span>
            <ArrowUp className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10 text-sm">
          
          {/* Quick links */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Quick links
            </p>
            <ul className="space-y-2.5 text-[#B3B3B3] font-light">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">About me</a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition-colors">Recent work</a>
              </li>
              <li>
                <a href="/#capabilities" className="hover:text-white transition-colors">Capabilities</a>
              </li>
              <li>
                <Link to="/philosophy" className="hover:text-white transition-colors">Philosophy</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
              </li>
            </ul>
          </div>

          {/* Socials / Explore */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Connect & Explore
            </p>
            <ul className="space-y-2 text-[#B3B3B3] font-light">
              <li>
                <a
                  href="https://github.com/Aqib2607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  {getBrandIcon("github", "w-3.5 h-3.5 text-primary")}
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aqib-jawwad-nahin-598288278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  {getBrandIcon("linkedin", "w-3.5 h-3.5 text-primary")}
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Aqib2607/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  {getBrandIcon("facebook", "w-3.5 h-3.5 text-primary")}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aqib.jawwad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  {getBrandIcon("instagram", "w-3.5 h-3.5 text-primary")}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.link/vnl10u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  {getBrandIcon("whatsapp", "w-3.5 h-3.5 text-primary")}
                  WhatsApp
                </a>
              </li>
              <li className="pt-1">
                <Link to="/certificates" className="hover:text-white transition-colors">
                  Certificates & Credentials
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ljwGoR0H3GDo9klT0ScCGQXrAdpGEl13/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Featured Case Studies
            </p>
            <ul className="space-y-2.5 text-[#B3B3B3] font-light">
              <li>
                <Link to="/projects/reqs-ai" className="hover:text-primary transition-colors">
                  Reqs.ai — AI SaaS Platform
                </Link>
              </li>
              <li>
                <Link to="/projects/clinexa" className="hover:text-primary transition-colors">
                  Clinexa HMS — Healthcare
                </Link>
              </li>
              <li>
                <Link to="/projects/restaurant-management" className="hover:text-primary transition-colors">
                  Restaurant Operations
                </Link>
              </li>
              <li>
                <Link to="/projects/virtual-cpu-emulator" className="hover:text-primary transition-colors">
                  Virtual CPU Emulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Contact information
            </p>
            <div className="space-y-2.5 text-[#B3B3B3] font-light">
              <p>
                <a href="tel:+8801946664836" className="hover:text-white transition-colors">
                  +880 1946-664836
                </a>
              </p>
              <p>
                <a href="mailto:aqibjawwad2607@gmail.com" className="hover:text-white transition-colors">
                  aqibjawwad2607@gmail.com
                </a>
              </p>
              <p>
                <a href="https://wa.link/vnl10u" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: Direct Chat
                </a>
              </p>
              <p>Khulna, Bangladesh</p>
              <p className="text-xs text-[#888888] pt-2">2026 | Aqib Jawwad Nahin</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888] font-light">
          <p>© {new Date().getFullYear()} Aqib Jawwad Nahin. All rights reserved.</p>
          <p className="font-mono text-[11px]">Designed & Engineered with React, TypeScript & Tailwind</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactChannels } from "@/data/socials";
import { getBrandIcon } from "./BrandIcons";

const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-between relative bg-[#0D0D0D]"
      aria-label="Introduction and Overview"
    >
      <div className="container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Greeting & Role */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-[#B3B3B3] font-light">
                Hi, I'm Aqib Jawwad Nahin
              </p>
              <p className="text-xs uppercase tracking-widest text-primary font-medium">
                Full Stack Developer & Software Engineer
              </p>
            </div>

            {/* Large Display Statement */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
              I build scalable full-stack web applications and AI-powered software that solve real business problems.
            </h1>

            {/* Location & Summary */}
            <p className="text-base sm:text-lg text-[#B3B3B3] font-light max-w-xl leading-relaxed">
              Specializing in <span className="text-white font-normal">React</span>, <span className="text-white font-normal">TypeScript</span>, <span className="text-white font-normal">Laravel</span>, <span className="text-white font-normal">MySQL</span>, and <span className="text-white font-normal">AI integrations</span>. Based in Khulna, Bangladesh (Open to global remote roles).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105"
                asChild
              >
                <a href="#projects">
                  Recent Projects
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent hover:bg-white/10 text-white font-normal px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 gap-2"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ljwGoR0H3GDo9klT0ScCGQXrAdpGEl13/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download resume PDF (opens in new tab)"
                >
                  <Download className="w-4 h-4" />
                  Resume PDF
                </a>
              </Button>
            </div>

            {/* Social quick links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 text-[#B3B3B3]">
              {contactChannels.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={item.label}
                >
                  {getBrandIcon(item.id, "w-4 h-4 sm:w-5 sm:h-5")}
                </a>
              ))}
            </div>

          </div>

          {/* Right Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl">
              <img
                src="/about/profile_pic.jpg"
                alt="Aqib Jawwad Nahin — Full Stack Developer"
                className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                width={500}
                height={667}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                <span>Khulna, Bangladesh</span>
                <span className="font-mono text-primary">Available for Roles</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom scroll hint */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 hidden sm:flex items-center justify-between text-xs text-[#888888]">
        <span>PORTFOLIO 2026</span>
        <a href="#statement" className="flex items-center gap-2 hover:text-white transition-colors">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
import { ArrowDown, Download, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactChannels } from "@/data/socials";
import { getBrandIcon } from "./BrandIcons";
import { TextScramble, FadeUp, Magnetic } from "./motion/MotionPrimitives";

const ROLES = [
  "FULL STACK DEVELOPER",
  "SOFTWARE ENGINEER",
  "AI INTEGRATION SPECIALIST",
  "REACT & LARAVEL SPECIALIST",
  "SYSTEMS ARCHITECT",
];

const Hero = () => {
  return (
    <section
      id="top"
      className="min-h-screen pt-32 sm:pt-40 pb-16 flex flex-col justify-between relative bg-[#0D0D0D] overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Background Grid with ambient star accents matching reference video */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Ambient Grid Sparkles */}
      <div className="absolute top-1/4 left-1/12 text-white/20 text-xs select-none pointer-events-none hidden sm:block animate-pulse">✦</div>
      <div className="absolute top-1/3 right-1/12 text-white/20 text-xs select-none pointer-events-none hidden sm:block animate-pulse delay-700">✦</div>
      <div className="absolute bottom-1/4 right-1/4 text-white/15 text-xs select-none pointer-events-none hidden sm:block animate-pulse delay-1000">✦</div>

      <div className="container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Greeting & Scramble Role */}
            <FadeUp delay={0.1}>
              <p className="text-lg sm:text-xl text-[#B3B3B3] font-light">
                Hi, I'm Aqib Jawwad Nahin
              </p>
              <h1 className="font-heading font-normal text-white tracking-tight leading-[1.08] mt-2">
                <TextScramble 
                  phrases={ROLES} 
                  interval={3400} 
                  className="text-3xl sm:text-5xl lg:text-6xl text-primary font-medium tracking-tight block drop-shadow-sm" 
                />
              </h1>
            </FadeUp>

            {/* Core Narrative Statement */}
            <FadeUp delay={0.2}>
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-snug">
                I create scalable web architectures and AI-integrated software that connect with real business impact.
              </p>
            </FadeUp>

            {/* Location & Summary */}
            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg text-[#B3B3B3] font-light max-w-xl leading-relaxed">
                Specializing in <span className="text-white font-normal">React</span>, <span className="text-white font-normal">TypeScript</span>, <span className="text-white font-normal">Laravel</span>, and <span className="text-white font-normal">MySQL</span>. Based in Khulna, Bangladesh (Open to global remote roles).
              </p>
            </FadeUp>

            {/* CTAs with Magnetic Effect */}
            <FadeUp delay={0.4} className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-white/5"
                  asChild
                >
                  <a href="#projects">
                    Recent Projects
                  </a>
                </Button>
              </Magnetic>

              <Magnetic strength={0.2}>
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
              </Magnetic>
            </FadeUp>

            {/* Social quick links */}
            <FadeUp delay={0.5} className="flex flex-wrap items-center gap-3 pt-2 text-[#B3B3B3]">
              {contactChannels.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="hover:text-white transition-all duration-200 p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary hover:-translate-y-0.5"
                  aria-label={item.label}
                >
                  {getBrandIcon(item.id, "w-4 h-4 sm:w-5 sm:h-5")}
                </a>
              ))}
            </FadeUp>

          </div>

          {/* Right Portrait Image with Floating Badges matching reference video */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Floating Stamp: Based in Khulna */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/90 shadow-xl animate-float">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BASED IN KHULNA, BD</span>
            </div>

            {/* Floating Stamp: Full Stack */}
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-primary shadow-xl animate-float delay-500">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>LARAVEL & REACT</span>
            </div>

            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl group">
              <img
                src="/about/profile_pic.jpg"
                alt="Aqib Jawwad Nahin — Full Stack Developer"
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                width={500}
                height={667}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                <span>Khulna, Bangladesh</span>
                <span className="font-mono text-primary">Available for Roles</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Downward Bouncing Indicator matching reference video */}
      <div className="container mx-auto px-6 max-w-7xl pt-10 flex flex-col items-center justify-center text-xs text-[#888888]">
        <a 
          href="#statement" 
          className="flex flex-col items-center gap-1.5 hover:text-white transition-colors group"
          aria-label="Scroll to Recent Projects"
        >
          <span className="text-[11px] tracking-wider uppercase font-medium text-white/70 group-hover:text-white">Recent Projects</span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
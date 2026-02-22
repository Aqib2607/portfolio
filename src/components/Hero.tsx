import { Github, Linkedin, Mail, Facebook, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 mt-10 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-glow">
              <img
                src="/about/profile_pic.jpg"
                alt="Aqib Jawwad"
                className="w-full h-full rounded-full object-cover"
                loading="eager"
                // @ts-expect-error - fetchpriority is valid but not yet in React types
                fetchpriority="high"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Aqib Jawwad</span>
            <br />
            <span className="text-foreground">Nahin</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="font-medium text-primary">Full Stack Developer</span> •
            <span className="font-medium text-secondary ml-2">Problem Solver</span> •
            <span className="font-medium text-accent ml-2">Tech Enthusiast</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Curious and detail-driven developer with a passion for building innovative web solutions.
            I specialize in creating user-friendly applications with clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            {/* Moved Contact CTA from navbar into hero */}
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://drive.google.com/file/d/1uFkJPdXK9bLCaOqSEItCXwb81lLeXr5U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {/* Top Row - First 3 Social Links (mobile) / All 6 links (desktop) */}
            <div className="flex justify-center gap-6">
              <a
                href="mailto:aqibjawwad2607@gmail.com"
                title="Email"
                className="p-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Aqib2607"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/25"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aqib-jawwad-nahin-598288278/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/25"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* Desktop: Show remaining 3 links in same row */}
              <a
                href="https://www.facebook.com/TheAsmodeus2607"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="hidden sm:block p-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/_.the_asmodeus._/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="hidden sm:block p-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/8801946664836"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="hidden sm:block p-3 rounded-full border border-green-500 text-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>

            {/* Bottom Row - Remaining 3 Social Links (mobile only) */}
            <div className="flex sm:hidden justify-center gap-6">
              <a
                href="https://www.facebook.com/TheAsmodeus2607"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="p-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/_.the_asmodeus._/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="p-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/8801946664836"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="p-3 rounded-full border border-green-500 text-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <img src="/profile_pic.jpg" alt="Aqib Jawwad" className="w-full h-full rounded-full object-cover" />
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
              className="bg-gradient-primary hover:opacity-90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              asChild
            >
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://drive.google.com/file/d/1uFkJPdXK9bLCaOqSEItCXwb81lLeXr5U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a 
              href="mailto:aqibjawwad2607@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a 
              href="https://github.com/Aqib2607"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-secondary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/25"
            >
              <Github className="w-6 h-6 text-secondary" />
            </a>
            <a 
              href="https://linkedin.com/in/aqib-jawwad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/25"
            >
              <Linkedin className="w-6 h-6 text-accent" />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
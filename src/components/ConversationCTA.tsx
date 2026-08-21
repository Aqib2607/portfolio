import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, Magnetic } from "./motion/MotionPrimitives";

const ConversationCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Call to Action">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Interactive Envelope Card matching reference video (00:46 - 00:49) */}
          <FadeUp className="lg:col-span-5 flex justify-center">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-[#141414] border border-white/10 p-8 flex flex-col items-center justify-center cursor-pointer group hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Background ambient circular glow */}
              <div className={`absolute w-48 h-48 rounded-full bg-primary/10 filter blur-3xl transition-all duration-700 ${isHovered ? "scale-150 bg-primary/20" : "scale-100"}`} />

              {/* Interactive SVG Envelope & Letter */}
              <div className="relative z-10 w-44 h-44 flex items-center justify-center">
                
                {/* Emerging Letter on hover */}
                <div className={`absolute w-36 h-28 bg-[#1f1f1f] border border-white/20 rounded-xl p-4 shadow-xl transition-all duration-500 flex flex-col justify-between ${isHovered ? "-translate-y-12 shadow-primary/20 scale-105" : "translate-y-0"}`}>
                  <div className="space-y-1.5">
                    <div className="w-8 h-1.5 bg-primary rounded-full" />
                    <div className="w-20 h-1.5 bg-white/20 rounded-full" />
                    <div className="w-14 h-1.5 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex justify-end">
                    <Send className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>

                {/* Envelope Front Base */}
                <div className="relative w-40 h-28 bg-[#181818] border border-white/20 rounded-2xl p-4 flex items-center justify-center shadow-2xl mt-8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>

              </div>

              <span className="text-xs font-mono text-[#888888] mt-6 tracking-wider uppercase group-hover:text-primary transition-colors">
                {isHovered ? "CLICK TO SEND MESSAGE" : "START A CONVERSATION"}
              </span>
            </div>
          </FadeUp>

          {/* Right Narrative & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <FadeUp delay={0.1}>
              <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
                Take action
              </p>
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight mt-2">
                Ready for a conversation?
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg sm:text-xl text-[#B3B3B3] font-light max-w-2xl leading-relaxed">
                Whether you have a project in mind, a software engineering role, or just want to discuss full-stack architecture, I'm always open to new opportunities and connections.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="flex flex-wrap items-center gap-4 pt-4">
              <Magnetic strength={0.25}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
                  asChild
                >
                  <a href="#contact">
                    Send message
                  </a>
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-transparent hover:bg-white/10 text-white font-normal px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 gap-2"
                  asChild
                >
                  <a href="mailto:aqibjawwad2607@gmail.com">
                    Direct Email
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </Magnetic>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConversationCTA;

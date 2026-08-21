import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConversationCTA = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Call to Action">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            Take Action • Let's Connect
          </p>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            Ready for a conversation?
          </h2>

          <p className="text-lg sm:text-xl text-[#B3B3B3] font-light max-w-2xl leading-relaxed">
            Whether you have a software engineering role, a SaaS application in planning, or a technical inquiry, I'm always open to new opportunities and meaningful connections.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 gap-2"
              asChild
            >
              <a href="#contact">
                Send a Message
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConversationCTA;

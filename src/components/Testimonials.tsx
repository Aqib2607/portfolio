import { useState, useEffect, useCallback } from "react";
import { Linkedin, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    id: "pibd",
    quote: "Demonstrated strong full-stack web development competencies during the six-month internship, writing structured React interfaces, Laravel APIs, and normalized database schemas.",
    author: "PIBD Engineering Team",
    role: "Professional Institute of Business Development",
    context: "Web Development Internship · Aug 2025 – Feb 2026",
  },
  {
    id: "usaxplorer",
    quote: "Efficient and proactive in researching complex academic literature, ensuring strict citation standards and synthesizing technical research findings accurately.",
    author: "USAxplorer Research Department",
    role: "Academic Research & Literature Synthesis",
    context: "Research Collaboration · Jan 2026 – Feb 2026",
  },
  {
    id: "hungry-tigers",
    quote: "Quickly adapted to generative AI video tools and prompt engineering workflows, collaborating across time zones with remote teams to optimize asset turnaround.",
    author: "Hungry Tigers Content Team",
    role: "Cross-Border AI Workflow Collaboration",
    context: "AI Content & Prompting · Mar 2026 – Apr 2026",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement;
      if (isInput) return;

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const current = recommendations[currentIndex];

  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Professional Recommendations">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Professional Endorsements
            </p>
            <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight">
              What others say about working with me
            </h2>
          </div>
          
          {/* Slider Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#888888]">
              0{currentIndex + 1} / 0{recommendations.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div
          className={`p-10 sm:p-16 lg:p-20 rounded-3xl bg-[#141414] border border-white/10 relative transition-opacity duration-300 ${
            isAnimating ? "opacity-40" : "opacity-100"
          }`}
          role="region"
          aria-live="polite"
          aria-label={`Testimonial ${currentIndex + 1} of ${recommendations.length}`}
        >
          <div className="max-w-4xl space-y-10">
            {/* Quote */}
            <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed tracking-tight">
              "{current.quote}"
            </blockquote>

            {/* Author Credentials */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-lg sm:text-xl font-medium text-white">
                  {current.author}
                </p>
                <p className="text-sm text-[#B3B3B3] font-light">
                  {current.role}
                </p>
                <p className="text-xs text-primary font-mono pt-0.5">
                  {current.context}
                </p>
              </div>

              {/* Quick Dots Indicator */}
              <div className="flex items-center gap-2">
                {recommendations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      currentIndex === idx
                        ? "w-8 bg-white"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Recommendations Action */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <Button
            size="lg"
            className="bg-[#0077B5] hover:bg-[#006097] text-white font-medium px-8 py-4 rounded-full text-sm gap-2 transition-all duration-200 hover:scale-105"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/aqib-jawwad-nahin-598288278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View verified LinkedIn profile and recommendations (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
              View Verified LinkedIn Profile & Endorsements
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

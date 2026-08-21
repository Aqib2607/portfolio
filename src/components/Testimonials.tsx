import { useState, useEffect, useCallback, useRef } from "react";
import { Linkedin, ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.35, ease: "easeOut" },
      filter: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-50%" : "50%",
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      x: { type: "spring", stiffness: 280, damping: 28 },
      opacity: { duration: 0.25, ease: "easeIn" },
      filter: { duration: 0.2 },
    },
  }),
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
  }, []);

  const handleDotClick = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

  // Auto-slide every 7 seconds, pauses on hover / focus
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

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
    <section className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10 overflow-hidden" aria-label="Professional Recommendations">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3 flex items-center gap-2">
              <Quote className="w-3.5 h-3.5 text-primary" />
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
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card with Slide Animation */}
        <div
          className="p-8 sm:p-14 lg:p-18 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden shadow-2xl"
          role="region"
          aria-live="polite"
          aria-label={`Testimonial ${currentIndex + 1} of ${recommendations.length}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 min-h-[280px] sm:min-h-[240px] flex flex-col justify-between">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag={prefersReducedMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, { offset, velocity }) => {
                  if (offset.x < -40 || velocity.x < -400) {
                    handleNext();
                  } else if (offset.x > 40 || velocity.x > 400) {
                    handlePrev();
                  }
                }}
                className="space-y-8 select-none"
              >
                {/* Quote */}
                <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-tight">
                  "{current.quote}"
                </blockquote>

                {/* Author Credentials */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-base sm:text-lg font-medium text-white">
                      {current.author}
                    </p>
                    <p className="text-xs sm:text-sm text-[#B3B3B3] font-light">
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
                        onClick={() => handleDotClick(idx)}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary ${
                          currentIndex === idx
                            ? "w-8 bg-primary shadow-sm shadow-primary/30"
                            : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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


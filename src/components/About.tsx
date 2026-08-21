import { GraduationCap, MapPin, Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const educationItems = [
  {
    period: "2022 – 2026",
    degree: "BSc (Honours) in Computer Science & Engineering",
    institution: "Northern University of Business and Technology Khulna",
    details: "Core focus: Software Engineering, Data Structures, Algorithms, Relational Database Systems, Operating Systems, Computer Architecture.",
  },
  {
    period: "2021",
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Govt. Bangabandhu College, Khulna",
    details: "GPA: 5.00 / 5.00 — Advanced mathematics, physics, and analytical fundamentals.",
  },
  {
    period: "2019",
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Saint Joseph's High School, Khulna",
    details: "GPA: 4.61 / 5.00 — Core sciences and foundational computing.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#090909] border-t border-b border-white/5" aria-label="About Aqib Jawwad Nahin">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="section-kicker mb-3">About & Engineering Identity</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal text-white tracking-tight leading-tight">
            Building software with a focus on{" "}
            <span className="font-serif italic font-normal text-primary">architecture</span>, reliability, and real-world utility.
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">

          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I am a <strong className="text-white font-medium">Full Stack Developer & Software Engineer</strong> based in Khulna, Bangladesh. Currently completing my BSc in Computer Science & Engineering at NUBTK, I specialize in full-lifecycle web application engineering — from relational database schema design to responsive client interfaces.
              </p>
              <p>
                My professional experience includes completing a 6-month intensive full-stack internship at <strong className="text-white font-medium">PIBD</strong> building web applications with React, TypeScript, Laravel, and MySQL; performing structured academic research at <strong className="text-white font-medium">USAxplorer</strong>; and coordinating generative AI content production with remote teams in China at <strong className="text-white font-medium">Hungry Tigers</strong>.
              </p>
              <p>
                I approach engineering systematically: structuring clean RESTful API boundaries, enforcing database integrity, and leveraging AI integrations to solve genuine workflow problems.
              </p>
            </div>

            {/* Quick Contact & Details Capsule */}
            <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-white/90">Sonadanga, Khulna, Bangladesh (Open to Global Remote)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:aqibjawwad2607@gmail.com" className="text-white/90 hover:text-primary transition-colors">
                  aqibjawwad2607@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white/90">+880 1946-664836</span>
              </div>
            </div>

            {/* Download CTA */}
            <div className="pt-2">
              <Button
                variant="outline"
                className="border-white/15 bg-white/5 hover:bg-white/10 text-white rounded-full px-6 py-3 text-sm font-medium gap-2"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ljwGoR0H3GDo9klT0ScCGQXrAdpGEl13/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download full resume PDF (opens in new tab)"
                >
                  <Download className="w-4 h-4" />
                  Download Curriculum Vitae
                </a>
              </Button>
            </div>
          </div>

          {/* Right Education & Credentials Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-heading font-medium text-white pb-3 border-b border-white/10">
              Academic Foundation
            </h3>

            <div className="space-y-6">
              {educationItems.map((item) => (
                <div
                  key={item.period + item.degree}
                  className="p-6 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      {item.period}
                    </span>
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h4 className="text-base font-heading font-medium text-white">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-primary/90 font-medium mt-0.5 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Link to full certificates viewer */}
            <div className="pt-2">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/90 p-0 text-sm gap-1 hover:bg-transparent"
                asChild
              >
                <a href="#testimonials">
                  View Verified Credentials & Experience
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
import { ExternalLink, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export const certificates = [
  {
    title: "Web Development Internship Certificate",
    issuer: "PIBD",
    date: "August 2025 – February 2026",
    image: "/certificates/Certificate_2.jpg",
    link: "https://drive.google.com/file/d/1r77XOAvbQDpPTyqpCcJAAwjsYvpvWwA2/view?usp=sharing",
    isPdf: false,
    skills: [
      "Full-Stack Web Development", "HTML5", "CSS3", "Responsive Design",
      "JavaScript", "PHP", "Laravel Framework", "MVC Architecture",
      "MySQL", "CRUD Operations", "Authentication Systems", "REST APIs"
    ],
    description: [
      "Completed a six-month Web Development internship at PIBD, gaining hands-on experience in full-stack web development and modern workflows.",
      "Developed responsive web interfaces using HTML5, CSS3, and JavaScript while applying best practices in layout and accessibility.",
      "Implemented backend functionality using PHP and MySQL including authentication systems, form validation, and database-driven CRUD applications.",
      "Built structured web applications using the Laravel framework, applying MVC architecture, routing, controllers, and Eloquent ORM."
    ],
  },
  {
    title: "GenAI Job Simulation",
    issuer: "BCG X / Forage",
    date: "February 2026",
    image: "/certificates/Certificate_1.png",
    link: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_699ad4ae3b2e4c13b632ae51_1771757269197_completion_certificate.pdf",
    isPdf: false,
    skills: [
      "AI Development", "Data Extraction", "Financial Chatbot Design", "NLP Concepts", "Python"
    ],
    description: [
      "Completed a job simulation involving AI-powered financial chatbot development for BCG's GenAI team.",
      "Integrated and interpreted complex financial data from 10-K and 10-Q reports to deliver user-friendly financial insights."
    ],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Commonwealth Bank / Forage",
    date: "March 2026",
    image: "/certificates/Certificate_3.png",
    link: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_699ad4ae3b2e4c13b632ae51_1772964734937_completion_certificate.pdf",
    isPdf: false,
    skills: [
      "React", "TypeScript", "Redux", "Git Workflow", "REST APIs"
    ],
    description: [
      "Completed a software engineering job simulation focused on React state architecture and data-driven filtering.",
      "Built and designed a rule-based financial guidance assistant using React and TypeScript."
    ],
  },
  {
    title: "Engineering Job Simulation",
    issuer: "British Airways / Forage",
    date: "June 2026",
    image: "/certificates/Certificate_4.png",
    link: "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/WmDnBzkLZFR9Rcjqa_tMjbs76F526fF5v3G_699ad4ae3b2e4c13b632ae51_1782665918636_completion_certificate.pdf",
    isPdf: false,
    skills: [
      "Systems Analysis", "Quality Assurance", "Data-Driven Planning", "Technical Reporting"
    ],
    description: [
      "Completed a technical job simulation focused on system defect diagnosis and maintenance planning."
    ],
  }
];

const Certificates = ({ limit }: { limit?: number } = {}) => {
  const displayed = limit ? certificates.slice(0, limit) : certificates;

  return (
    <section id="certificates" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Professional Credentials">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Verified Credentials
            </p>
            <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              Certificates & Credentials
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B3B3B3] font-light max-w-md">
            Verified internship completions, engineering job simulations, and technical program achievements.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((cert, index) => (
            <Dialog key={index}>
              <div className="rounded-3xl bg-[#141414] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 shadow-xl flex flex-col justify-between">
                
                {/* Thumbnail Preview */}
                <DialogTrigger asChild>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#161616] border-b border-white/10 cursor-pointer">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </DialogTrigger>

                {/* Details */}
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                    <span className="text-primary font-medium flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" /> {cert.issuer}
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <DialogTrigger asChild>
                    <button className="text-left w-full group">
                      <h3 className="text-xl font-light text-white group-hover:text-primary transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </button>
                  </DialogTrigger>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 flex-1">
                    {cert.skills.slice(0, 4).map((s) => (
                      <span key={s} className="px-2.5 py-0.5 text-xs rounded-full bg-[#202020] text-[#D4D4D4] border border-white/5 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary font-medium flex items-center gap-1 transition-colors"
                    >
                      View Verification <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Dialog Content */}
                <DialogContent className="max-w-2xl bg-[#141414] border border-white/10 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light text-white">{cert.title}</DialogTitle>
                    <DialogDescription className="text-primary font-medium">
                      Issued by {cert.issuer} • {cert.date}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4 text-sm text-[#B3B3B3] font-light">
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2">Program Overview</h4>
                      <ul className="space-y-1.5 list-disc list-inside">
                        {cert.description.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2">Demonstrated Skills</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((s) => (
                          <Badge key={s} className="bg-white/10 text-white border border-white/20">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>

              </div>
            </Dialog>
          ))}
        </div>

        {/* View All button */}
        {limit && (
          <div className="text-center mt-16 pt-8 border-t border-white/10">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-sm font-normal gap-2"
              asChild
            >
              <Link to="/certificates">
                View All Verified Certificates
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;

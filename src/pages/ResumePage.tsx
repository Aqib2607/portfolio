import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Printer, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/BrandIcons";

const ResumePage = () => {
  return (
    <>
      <Helmet>
        <title>Curriculum Vitae — Aqib Jawwad Nahin</title>
        <meta
          name="description"
          content="Aqib Jawwad Nahin's professional resume. Full Stack Developer & Software Engineer specializing in React, TypeScript, Laravel, and AI Integrations."
        />
        <link rel="canonical" href="https://aqibjawwad.me/resume" />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28 print:pt-0 print:pb-0 print:bg-white print:text-black">
        <div className="container mx-auto px-6 max-w-4xl print:px-0">
          
          {/* Header Actions */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link
              to="/"
              className="inline-flex items-center text-xs text-[#888888] hover:text-white transition-colors gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full text-xs gap-1.5"
                onClick={() => window.print()}
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </Button>
              <Button
                size="sm"
                className="bg-white hover:bg-white/90 text-black font-medium rounded-full text-xs gap-1.5"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1ljwGoR0H3GDo9klT0ScCGQXrAdpGEl13/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          {/* Document Content */}
          <div className="rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-14 shadow-2xl print:shadow-none print:border-none print:rounded-none print:p-0 print:bg-transparent">
            
            {/* Header */}
            <header className="border-b border-white/10 print:border-gray-300 pb-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-light text-white print:text-black mb-1">
                  Aqib Jawwad Nahin
                </h1>
                <h2 className="text-base text-primary font-medium mb-3 print:text-gray-800">
                  Full Stack Developer & Software Engineer
                </h2>
                <p className="text-xs sm:text-sm text-[#B3B3B3] max-w-lg leading-relaxed print:text-gray-600 font-light">
                  Full Stack Developer and Computer Science undergraduate building complete web applications, AI integrations, technical research synthesis, and business workflows.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-[#888888] sm:text-right print:text-gray-600 font-mono">
                <a href="mailto:aqibjawwad2607@gmail.com" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" /> aqibjawwad2607@gmail.com
                </a>
                <a href="tel:+8801946664836" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" /> +880 1946-664836
                </a>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Khulna, Bangladesh
                </span>
                <a href="https://wa.link/vnl10u" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-primary" /> wa.link/vnl10u
                </a>
                <a href="https://github.com/Aqib2607" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5">
                  <Github className="w-3.5 h-3.5 text-primary" /> github.com/Aqib2607
                </a>
                <a href="https://www.linkedin.com/in/aqib-jawwad-nahin-598288278/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-primary" /> linkedin.com/in/aqib-jawwad-nahin
                </a>
              </div>
            </header>

            {/* Technical Skills */}
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-3 print:text-black font-medium">
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-medium text-white mb-1 print:text-gray-800">Core Technologies</h4>
                  <p className="text-[#B3B3B3] print:text-gray-600 font-light">
                    React, TypeScript, Laravel, PHP, MySQL, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, REST APIs, AI Integrations, Prompt Engineering
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 print:text-gray-800">Tools & Architecture</h4>
                  <p className="text-[#B3B3B3] print:text-gray-600 font-light">
                    Git, GitHub, Relational Database Design, Postman, Vite, MVC Architecture, OOP Principles, Agile Development
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-6 print:text-black font-medium">
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-base font-medium text-white print:text-black">AI Content & Business Development Executive</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">March 2026 – April 2026</span>
                  </div>
                  <p className="text-xs text-[#888888]">Hungry Tigers · Khulna, Bangladesh (Remote China Collaboration)</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-[#B3B3B3] print:text-gray-600 font-light">
                    <li>Collaborated remotely with cross-functional teams in China to plan and deliver AI-generated digital content.</li>
                    <li>Converted creative storyboards and scripts into high-quality AI-generated videos using multiple generative AI tools.</li>
                    <li>Optimized prompts and AI workflows to improve content quality, consistency, and production turnaround.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-white/20 pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-base font-medium text-white print:text-black">Researcher</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">January 2026 – February 2026</span>
                  </div>
                  <p className="text-xs text-[#888888]">USAxplorer · Khulna, Bangladesh</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-[#B3B3B3] print:text-gray-600 font-light">
                    <li>Conducted comprehensive literature reviews and gathered information from scholarly databases to support research projects.</li>
                    <li>Drafted, edited, and formatted research manuscripts while ensuring consistency with academic writing and citation standards (APA/IEEE/MLA).</li>
                    <li>Performed data synthesis, fact checking, and reference management.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-white/20 pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-base font-medium text-white print:text-black">Full-Stack Web Developer Intern</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">August 2025 – February 2026</span>
                  </div>
                  <p className="text-xs text-[#888888]">PIBD · 274 Khan Jahan Ali Road, Khulna, Bangladesh</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-[#B3B3B3] print:text-gray-600 font-light">
                    <li>Developed responsive web applications using React, TypeScript, Laravel, PHP, and MySQL.</li>
                    <li>Designed and integrated RESTful APIs for seamless frontend-backend communication.</li>
                    <li>Built reusable UI components and participated in database schema design and testing.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-4 print:text-black font-medium">
                Featured Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="text-sm font-medium text-white print:text-black">
                      Reqs.ai — AI Software Planning Platform
                    </h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2026</span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] print:text-gray-600 font-light">
                    AI-powered SaaS platform transforming project concepts into structured PRDs and technical specs using React, TypeScript, Laravel, MySQL, REST APIs, and AI integrations.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="text-sm font-medium text-white print:text-black">
                      Clinexa HMS — Hospital Management System
                    </h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2026</span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] print:text-gray-600 font-light">
                    Full-stack healthcare platform managing patient admissions, appointments, billing, pharmacy, and laboratory modules with React, TypeScript, Laravel, and MySQL.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="text-sm font-medium text-white print:text-black">
                      Restaurant Management System
                    </h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2025</span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] print:text-gray-600 font-light">
                    Business operations application featuring menu categorization, order processing, and inventory tracking using Laravel MVC and React.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h4 className="text-sm font-medium text-white print:text-black">
                      Virtual CPU Emulator
                    </h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2024</span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] print:text-gray-600 font-light">
                    Computer architecture simulation modeling instruction fetch-decode-execute cycles, registers, and ALU operations using OOP principles.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-4 print:text-black font-medium">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-sm font-medium text-white print:text-black">Northern University of Business and Technology Khulna</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2022 – 2026</span>
                  </div>
                  <p className="text-xs text-[#888888] print:text-gray-700">BSc (Honours) in Computer Science & Engineering · Khulna, Bangladesh</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-sm font-medium text-white print:text-black">Govt. Bangabandhu College</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2021</span>
                  </div>
                  <p className="text-xs text-[#888888] print:text-gray-700">Higher Secondary Certificate (HSC) — Science, GPA: 5.00 / 5.00 · Khulna, Bangladesh</p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h4 className="text-sm font-medium text-white print:text-black">Saint Joseph's High School</h4>
                    <span className="text-xs font-mono text-primary print:text-gray-600">2019</span>
                  </div>
                  <p className="text-xs text-[#888888] print:text-gray-700">Secondary School Certificate (SSC) — Science, GPA: 4.61 / 5.00 · Khulna, Bangladesh</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xs uppercase tracking-widest text-primary mb-3 print:text-black font-medium">
                Certifications
              </h3>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#B3B3B3] print:text-gray-600 font-light">
                <li><strong>Web Development Internship Certificate</strong> — PIBD (Aug 2025 – Feb 2026)</li>
                <li><strong>GenAI Job Simulation</strong> — BCG X / Forage (Feb 2026)</li>
                <li><strong>Software Engineering Job Simulation</strong> — Commonwealth Bank / Forage (Mar 2026)</li>
                <li><strong>Engineering Job Simulation</strong> — British Airways / Forage (Jun 2026)</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;

import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import EditorialStatement from "@/components/EditorialStatement";
import Projects from "@/components/Projects";
import EngineeringPerspective from "@/components/EngineeringPerspective";
import Capabilities from "@/components/Capabilities";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import ConversationCTA from "@/components/ConversationCTA";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Aqib Jawwad Nahin — Full Stack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Aqib Jawwad Nahin — Full Stack Developer & Software Engineer specializing in React, TypeScript, Laravel, and AI integrations. View recent full-stack projects, architecture case studies, and engineering capabilities."
        />
        <link rel="canonical" href="https://aqibjawwad.me/" />
        <meta property="og:url" content="https://aqibjawwad.me/" />
        <meta property="og:title" content="Aqib Jawwad Nahin — Full Stack Developer & Software Engineer" />
        <meta
          property="og:description"
          content="I build full-stack web applications and AI-powered software that solve real business problems."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white">
        <main>
          {/* 1. Hero Introduction */}
          <Hero />

          {/* 2. Large Editorial Statement (Manifesto) */}
          <EditorialStatement />

          {/* 3. Recent Projects / Selected Work */}
          <Projects />

          {/* 4. Engineering Perspective (Problem-Solving Statement) */}
          <EngineeringPerspective />

          {/* 5. What I Offer / Engineering Capabilities */}
          <Capabilities />

          {/* 6. Professional Recommendations & Testimonials */}
          <Testimonials />

          {/* 7. Discover My Journey / Personal & Professional Background */}
          <AboutSection />

          {/* 8. Ready for a Conversation / Take Action CTA */}
          <ConversationCTA />

          {/* 9. Latest Tech & Engineering Insights */}
          <BlogSection />

          {/* 10. Contact Section */}
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Landing;

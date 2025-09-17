import { Code, Database, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices"
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "Experience with both frontend and backend technologies"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern frameworks and tools for scalable applications"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions for complex technical challenges"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and dedicated to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm currently pursuing my Bachelor's degree in Computer Science and Engineering 
                    at Northern University of Business and Technology Khulna, where I'm building 
                    a strong foundation in technology and systems thinking.
                  </p>
                  <p>
                    As a curious and detail-driven problem solver, I enjoy tackling complex 
                    challenges and optimizing solutions. My experience spans software development, 
                    databases, and operating systems, with a keen interest in modern web technologies.
                  </p>
                  <p>
                    Beyond technical skills, my interest in business communication and strategy 
                    allows me to adapt across different roles. I thrive in environments where 
                    I can learn, improve, and contribute meaningfully to innovative projects.
                  </p>
                </div>
              </div>

              {/* Personal Info */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-secondary">
                  Get In Touch
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Location:</span>
                    <span>Sonadanga, Khulna, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Email:</span>
                    <a href="mailto:aqibjawwad2607@gmail.com" className="hover:text-primary transition-colors">
                      aqibjawwad2607@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Phone:</span>
                    <a href="tel:+8801946664836" className="hover:text-primary transition-colors">
                      +880 1946-664836
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="glass-card p-6 rounded-2xl hover:bg-card-glass/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
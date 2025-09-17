import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aqibjawwad2607@gmail.com",
      href: "mailto:aqibjawwad2607@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1946-664836",
      href: "tel:+8801946664836",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sonadanga, Khulna, Bangladesh",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aqib2607",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aqib-jawwad",
      color: "hover:text-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:aqibjawwad2607@gmail.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and development.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-card-glass/50 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-primary`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-heading font-semibold mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass-card rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 font-medium py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
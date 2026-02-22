import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
    const certificates = [
        {
            title: "GenAI Job Simulation",
            issuer: "BCG X / Forage",
            date: "2026",
            image: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_699ad4ae3b2e4c13b632ae51_1771757269197_completion_certificate.pdf",
            link: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_699ad4ae3b2e4c13b632ae51_1771757269197_completion_certificate.pdf",
            isPdf: true,
        }
    ];

    return (
        <section id="certificates" className="py-20 relative bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            My <span className="gradient-text">Certificates</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional certifications and completed simulations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                            >
                                {/* Certificate Preview rendering */}
                                <div className="relative aspect-[1.414] bg-transparent overflow-hidden flex items-center justify-center border-b border-border/50 group-hover:border-primary/50 transition-colors">
                                    {cert.isPdf ? (
                                        // Render PDF directly using iframe for high quality rendering
                                        <div className="w-full h-full relative">
                                            <iframe
                                                src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                                                className="w-full h-full object-contain pointer-events-none"
                                                title={cert.title}
                                            />
                                            {/* Overlay to intercept clicks on the iframe and trigger the link instead */}
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 block" aria-label={`View ${cert.title}`}></a>
                                        </div>
                                    ) : (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <Button variant="secondary" className="gap-2 pointer-events-auto">
                                            <ExternalLink className="w-4 h-4" /> View Certificate
                                        </Button>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium text-accent">{cert.issuer}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{cert.date}</span>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
                                        >
                                            View Link <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;

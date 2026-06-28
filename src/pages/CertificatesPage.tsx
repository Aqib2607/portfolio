import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Certificates from "@/components/Certificates";

const CertificatesPage = () => {
    return (
        <>
            <Helmet>
                <title>Certificates - Aqib Jawwad Nahin</title>
                <link rel="canonical" href="https://aqibjawwad.me/certificates" />
                <meta property="og:url" content="https://aqibjawwad.me/certificates" />
                <meta property="og:title" content="Certificates - Aqib Jawwad Nahin" />
                <meta
                    name="description"
                    content="All professional certifications and job simulations completed by Aqib Jawwad Nahin."
                />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground pt-24">
                {/* Back navigation */}
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <Link
                            to="/"
                            className="inline-flex items-center text-muted-foreground hover:text-primary mb-2 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Reuse the full Certificates section (no limit) */}
                <Certificates />
            </div>
        </>
    );
};

export default CertificatesPage;

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Certificates from "@/components/Certificates";

const CertificatesPage = () => {
  return (
    <>
      <Helmet>
        <title>Verified Certificates & Simulations — Aqib Jawwad Nahin</title>
        <link rel="canonical" href="https://aqibjawwad.me/certificates" />
        <meta property="og:url" content="https://aqibjawwad.me/certificates" />
        <meta property="og:title" content="Certificates & Credentials — Aqib Jawwad Nahin" />
        <meta
          name="description"
          content="All professional certifications, internship credentials, and job simulations completed by Aqib Jawwad Nahin."
        />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28">
        <div className="container mx-auto px-6 max-w-7xl mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-xs text-[#888888] hover:text-white mb-2 transition-colors gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Full Certificates Grid */}
        <Certificates />
      </div>
    </>
  );
};

export default CertificatesPage;

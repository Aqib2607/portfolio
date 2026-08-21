import React from "react";
import { Mail, Phone, Github, Linkedin, Facebook, Instagram } from "lucide-react";

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

export function getBrandIcon(id: string, className: string = "w-4 h-4") {
  switch (id) {
    case "email":
      return <Mail className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "github":
      return <Github className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    default:
      return <Mail className={className} />;
  }
}

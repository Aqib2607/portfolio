import React from "react";
import { contactChannels, SocialLinkItem } from "@/data/socials";
import { getBrandIcon } from "./BrandIcons";

interface SocialLinksProps {
  variant?: "chips" | "icons" | "footer" | "contact-grid";
  filter?: Array<SocialLinkItem["id"]>;
  className?: string;
  iconClassName?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "chips",
  filter,
  className = "",
  iconClassName = "w-4 h-4 text-primary",
}) => {
  const items = filter
    ? contactChannels.filter((c) => filter.includes(c.id))
    : contactChannels;

  if (variant === "icons") {
    return (
      <div className={`flex items-center gap-4 text-[#B3B3B3] ${className}`}>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={item.label}
          >
            {getBrandIcon(item.id, "w-5 h-5")}
          </a>
        ))}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <ul className={`space-y-2.5 text-[#B3B3B3] font-light ${className}`}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="hover:text-white transition-colors inline-flex items-center gap-2"
              aria-label={item.label}
            >
              {getBrandIcon(item.id, "w-3.5 h-3.5 text-primary")}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  // Default "chips" or "contact-grid"
  return (
    <div className={`flex flex-wrap gap-3 sm:gap-4 ${className}`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target={item.isExternal ? "_blank" : undefined}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161616] border border-white/10 hover:border-white/30 text-white hover:text-primary transition-all duration-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary hover:scale-[1.02]"
          aria-label={`${item.label}: ${item.value}`}
        >
          {getBrandIcon(item.id, iconClassName)}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

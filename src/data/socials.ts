export interface SocialLinkItem {
  id: "email" | "phone" | "whatsapp" | "linkedin" | "github" | "facebook" | "instagram";
  label: string;
  value: string;
  url: string;
  isExternal: boolean;
  category: "direct" | "social" | "messaging";
}

export const contactChannels: SocialLinkItem[] = [
  {
    id: "email",
    label: "Email",
    value: "aqibjawwad2607@gmail.com",
    url: "mailto:aqibjawwad2607@gmail.com",
    isExternal: false,
    category: "direct",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+880 1946-664836",
    url: "tel:+8801946664836",
    isExternal: false,
    category: "direct",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+880 1946-664836",
    url: "https://wa.link/vnl10u",
    isExternal: true,
    category: "messaging",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/aqib-jawwad-nahin",
    url: "https://www.linkedin.com/in/aqib-jawwad-nahin-598288278/",
    isExternal: true,
    category: "social",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Aqib2607",
    url: "https://github.com/Aqib2607",
    isExternal: true,
    category: "social",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "facebook.com/Aqib2607",
    url: "https://www.facebook.com/Aqib2607/",
    isExternal: true,
    category: "social",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@aqib.jawwad",
    url: "https://www.instagram.com/aqib.jawwad/",
    isExternal: true,
    category: "social",
  },
];

export const getSocialLink = (id: SocialLinkItem["id"]): SocialLinkItem => {
  const item = contactChannels.find((c) => c.id === id);
  if (!item) {
    throw new Error(`Contact channel ${id} not found.`);
  }
  return item;
};

import { useState } from "react";
import { Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { contactChannels } from "@/data/socials";
import { getBrandIcon } from "./BrandIcons";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastComposed, setLastComposed] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please complete the required fields.");
      return;
    }

    setIsSubmitting(true);

    const subjectText = `Software Engineering Inquiry from ${formData.fullName.trim()}`;
    const bodyText = [
      `Name: ${formData.fullName.trim()}`,
      `Email: ${formData.email.trim()}`,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : "",
      "",
      "--- Message ---",
      formData.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    setLastComposed(bodyText);

    const mailtoUrl = `mailto:aqibjawwad2607@gmail.com?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    // Trigger email client
    window.location.href = mailtoUrl;

    toast.info("Opening your email client to send message.", {
      description: "If your email client didn't open automatically, use the copy button to paste text directly into webmail.",
    });

    setIsSubmitting(false);
  };

  const handleCopyMessage = async () => {
    if (!lastComposed && !formData.message) {
      toast.error("No message content to copy.");
      return;
    }

    const textToCopy =
      lastComposed ||
      [
        `Name: ${formData.fullName.trim()}`,
        `Email: ${formData.email.trim()}`,
        formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : "",
        "",
        "--- Message ---",
        formData.message.trim(),
      ]
        .filter(Boolean)
        .join("\n");

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success("Message copied to clipboard! You can paste directly into Gmail or Outlook.");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Failed to copy to clipboard.");
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Contact Section">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header matching Hampus contact */}
        <div className="max-w-4xl mb-20 space-y-4">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            Let's create something amazing together
          </h2>
          <p className="text-lg sm:text-xl text-[#B3B3B3] font-light">
            Have a project idea or an engineering role? Reach out and let's make it happen.
          </p>

          {/* Quick Contact & Social Channels */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-6">
            {contactChannels.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141414] border border-white/10 hover:border-white/30 text-white hover:text-primary transition-all duration-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105"
                aria-label={`${item.label}: ${item.value}`}
              >
                {getBrandIcon(item.id, "w-4 h-4 text-primary")}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Sub-section */}
        <div className="pt-12 border-t border-white/10 max-w-3xl">
          <p className="text-xl sm:text-2xl font-light text-white mb-8">
            Or leave a message here ↓
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-widest text-[#888888] mb-2 font-medium">
                Your name *
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`bg-[#161616] border-white/10 text-white rounded-2xl py-3.5 focus:border-white/40 ${
                  errors.fullName ? "border-destructive" : ""
                }`}
                disabled={isSubmitting}
                autoComplete="name"
              />
              {errors.fullName && (
                <p className="text-xs text-destructive mt-1.5">{errors.fullName}</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#888888] mb-2 font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={`bg-[#161616] border-white/10 text-white rounded-2xl py-3.5 focus:border-white/40 ${
                    errors.email ? "border-destructive" : ""
                  }`}
                  disabled={isSubmitting}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#888888] mb-2 font-medium">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-[#161616] border-white/10 text-white rounded-2xl py-3.5 focus:border-white/40"
                  disabled={isSubmitting}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#888888] mb-2 font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your software project, engineering role, or technical inquiry..."
                rows={6}
                className={`bg-[#161616] border-white/10 text-white rounded-2xl p-4 focus:border-white/40 resize-none ${
                  errors.message ? "border-destructive" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1.5">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                type="submit"
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105 gap-2"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleCopyMessage}
                className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-6 py-4 text-sm font-normal gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Text for Webmail
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Footer CTA Banner matching Hampus */}
        <div className="mt-28 pt-16 border-t border-white/10">
          <p className="text-2xl sm:text-4xl font-light text-white">
            Let's work together on your next big idea.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
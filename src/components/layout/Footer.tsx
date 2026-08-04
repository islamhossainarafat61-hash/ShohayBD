import { useState, type FormEvent, type ComponentType } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  MessageCircle,
  Send,
  Heart,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { BRAND } from "../../data/brand";
import { services } from "../../data/services";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4.5 w-4.5"
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4.5 w-4.5"
    aria-hidden="true"
  >
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33m0 1.87c-3.16 0-3.5.01-4.74.07-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.24-.07 1.58-.07 4.74s.01 3.5.07 4.74c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.24.06 1.58.07 4.74.07s3.5-.01 4.74-.07c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.24.07-1.58.07-4.74s-.01-3.5-.07-4.74c-.04-.98-.2-1.5-.34-1.86a3.02 3.02 0 0 0-.75-1.15 3.02 3.02 0 0 0-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.24-.06-1.58-.07-4.74-.07M12 6.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28m0 1.87a3.27 3.27 0 1 0 0 6.54 3.27 3.27 0 0 0 0-6.54m5.34-3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4.5 w-4.5"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4.5 w-4.5"
    aria-hidden="true"
  >
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81M9.6 15.6V8.4l6.27 3.6z" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, href: BRAND.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: BRAND.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: BRAND.social.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: BRAND.social.youtube, label: "YouTube" },
  { icon: MessageCircle, href: BRAND.social.whatsapp, label: "WhatsApp" },
];

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4.5 w-4.5"
    aria-hidden="true"
  >
    <path d="M12.75 2h2.72c.16 1.36.79 2.55 1.77 3.44 1 .93 2.28 1.44 3.76 1.5v2.75c-1.5-.02-2.86-.4-4.03-1.08v6.78c0 3.35-2.72 6.06-6.06 6.06a6.06 6.06 0 0 1-2.85-11.42v2.98a3.3 3.3 0 1 0 3.6 3.28V2z" />
  </svg>
);

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, rotate: 8, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-brand-500 hover:shadow-[0_8px_24px_rgba(111,66,229,0.5)]"
    >
      <Icon className="h-4.5 w-4.5" />
    </motion.a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Localized text for footer
  const text = {
    // Final CTA
    ctaHeading1:
      lang === "bn" ? "হোম সার্ভিস করুন সহজ" : "Ready to Make Home Services",
    ctaHeading2: lang === "bn" ? "ও স্ট্রেস-মুক্ত?" : "Simple & Stress-Free?",
    ctaSub:
      lang === "bn"
        ? "সহায় বিডি-এর মাধ্যমে বিশ্বস্ত পেশাদারদের বুক করুন এবং উপভোগ করুন আরো স্মার্ট, দ্রুত ও নির্ভরযোগ্য সার্ভিস অভিজ্ঞতা।"
        : "Book trusted professionals through SOHAY BD and enjoy a smarter, faster, and more reliable service experience.",
    ctaBook: lang === "bn" ? "সার্ভিস বুক করুন" : "Book a Service",
    ctaContact: lang === "bn" ? "যোগাযোগ করুন" : "Contact Us",

    // About text
    aboutText:
      lang === "bn"
        ? "সহায় বিডি যাচাইকৃত পেশাদারদের সাথে গ্রাহকদের যুক্ত করে বাংলাদেশের বিশ্বস্ত ডিজিটাল হোম সার্ভিস প্ল্যাটফর্ম গড়ে তুলছে।"
        : "SOHAY BD is building Bangladesh's trusted digital home service platform by connecting customers with verified professionals.",

    // Section titles
    quickLinksTitle: lang === "bn" ? "দ্রুত লিংক" : "Quick Links",
    servicesTitle: lang === "bn" ? "সার্ভিসসমূহ" : "Services",
    contactTitle: lang === "bn" ? "যোগাযোগ" : "Contact",

    // Newsletter
    stayUpdated: lang === "bn" ? "আপডেট পান" : "Stay Updated",
    emailPlaceholder: lang === "bn" ? "আপনার ইমেইল" : "Your email",
    subscribeSuccess:
      lang === "bn"
        ? "সাবস্ক্রাইব করার জন্য ধন্যবাদ! 🎉"
        : "Thanks for subscribing! 🎉",

    // Bottom bar
    copyright:
      lang === "bn"
        ? "© ২০২৬ সহায় বিডি। সর্বস্বত্ব সংরক্ষিত।"
        : "© 2026 SOHAY BD. All Rights Reserved.",
    privacyPolicy: lang === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy",
    termsLink: lang === "bn" ? "শর্তাবলী" : "Terms",
    cookiesLink: lang === "bn" ? "কুকিজ" : "Cookies",
    madeWith: lang === "bn" ? "তৈরি হয়েছে" : "Made with",
    inBangladesh: lang === "bn" ? "বাংলাদেশে ভালোবাসা দিয়ে" : "in Bangladesh",
  };

  // Quick links with translations
  const quickLinks = [
    { labelEn: "Home", labelBn: "হোম", to: "/#home" },
    { labelEn: "Services", labelBn: "সার্ভিস", to: "/#services" },
    { labelEn: "About", labelBn: "সম্পর্কে", to: "/about" },
    { labelEn: "Contact", labelBn: "যোগাযোগ", to: "/contact" },
    {
      labelEn: "Privacy Policy",
      labelBn: "প্রাইভেসি পলিসি",
      to: "/privacy-policy",
    },
    {
      labelEn: "Terms & Conditions",
      labelBn: "শর্তাবলী",
      to: "/terms",
    },
    { labelEn: "FAQ", labelBn: "প্রশ্নোত্তর", to: "/#faq" },
  ];

  // Localized area & hours (BRAND.area & BRAND.hours are always English by default)
  const displayArea = lang === "bn" ? "রংপুর, বাংলাদেশ" : BRAND.area;
  const displayHours =
    lang === "bn" ? "প্রতিদিন, সকাল ৮:০০ – রাত ১০:০০" : BRAND.hours;

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleNav = (to: string) => {
    if (to.startsWith("/#")) {
      const hash = to.slice(1);
      if (location.pathname !== "/") {
        navigate(to);
      } else {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <footer
      className="relative overflow-hidden bg-[#0b0713] text-white"
      id="contact"
    >
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="noise-bg absolute inset-0 opacity-40" />

      {/* Final CTA */}
      <div className="relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-6 py-16 text-center shadow-[0_30px_80px_rgba(111,66,229,0.4)] sm:px-12"
        >
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <h2 className="relative text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {text.ctaHeading1}
            <br className="hidden sm:block" /> {text.ctaHeading2}
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            {text.ctaSub}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNav("/#services");
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-shadow hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
            >
              {text.ctaBook}
            </motion.a>
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              {text.ctaContact}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="inline-flex items-center"
            aria-label="SOHAY BD Home"
          >
            <img
              src={BRAND.logoWhite}
              alt="SOHAY BD"
              className="h-20 w-auto object-contain sm:h-24 lg:h-28"
              loading="lazy"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            {text.aboutText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
            <motion.a
              href={BRAND.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              whileHover={{ scale: 1.15, rotate: 8, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-brand-500 hover:shadow-[0_8px_24px_rgba(111,66,229,0.5)]"
            >
              <TikTokIcon />
            </motion.a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {text.quickLinksTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => {
              const label = lang === "bn" ? l.labelBn : l.labelEn;
              return (
                <li key={l.labelEn}>
                  <button
                    onClick={() => handleNav(l.to)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {text.servicesTitle}
          </h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 8).map((s) => {
              const serviceName = lang === "bn" && s.nameBn ? s.nameBn : s.name;
              return (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {serviceName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {text.contactTitle}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{" "}
              {displayArea}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{" "}
              {BRAND.phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{" "}
              {BRAND.email}
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{" "}
              {BRAND.domain}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{" "}
              {displayHours}
            </li>
          </ul>

          <form onSubmit={handleSubscribe} className="mt-6">
            <p className="text-xs font-medium text-white/70">
              {text.stayUpdated}
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={text.emailPlaceholder}
                aria-label="Email for newsletter"
                className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white transition-transform hover:scale-105"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 text-xs text-brand-300">
                {text.subscribeSuccess}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>{text.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-300">
              {text.privacyPolicy}
            </Link>
            <Link to="/terms" className="hover:text-brand-300">
              {text.termsLink}
            </Link>
            <Link to="/terms#cookies" className="hover:text-brand-300">
              {text.cookiesLink}
            </Link>
          </div>
          <p className="flex items-center gap-1">
            {text.madeWith}{" "}
            <Heart className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />{" "}
            {text.inBangladesh}
          </p>
        </div>
      </div>
      <span className="sr-only">{theme}</span>
    </footer>
  );
}

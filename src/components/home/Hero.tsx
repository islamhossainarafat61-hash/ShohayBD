import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Star,
  ArrowRight,
  MapPin,
  Sparkles,
  Headphones,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import {
  buildWhatsappLink,
  GENERAL_WHATSAPP_MESSAGE,
} from "../../lib/whatsapp";
import { scrollToId } from "../../lib/scroll";

// Trust badges with both English and Bangla versions
const trustBadgesData = [
  {
    icon: ShieldCheck,
    labelEn: "Trusted Professionals",
    labelBn: "বিশ্বস্ত পেশাদার",
  },
  {
    icon: Zap,
    labelEn: "Fast Booking",
    labelBn: "দ্রুত বুকিং",
  },
  {
    icon: ShieldCheck,
    labelEn: "Secure Service",
    labelBn: "নিরাপদ সার্ভিস",
  },
  {
    icon: Headphones,
    labelEn: "Customer Support",
    labelBn: "গ্রাহক সাপোর্ট",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const { t, lang } = useLanguage();

  // Localized floating dashboard cards text
  const heroText = {
    bookingConfirmed: lang === "bn" ? "বুকিং কনফার্ম" : "Booking Confirmed",
    electricianVisit:
      lang === "bn" ? "ইলেকট্রিশিয়ান ভিজিট" : "Electrician Visit",
    technicianOnWay:
      lang === "bn" ? "টেকনিশিয়ান পথে আছেন" : "Technician on the way",
    professionalName: lang === "bn" ? "রাকিবুল ইসলাম" : "Rakibul Islam",
    professionalRole:
      lang === "bn" ? "দক্ষ ইলেকট্রিশিয়ান" : "Expert Electrician",
    quickResponse: lang === "bn" ? "দ্রুত সাড়া" : "Quick Response",
    arrivingIn30:
      lang === "bn"
        ? "পেশাদার ৩০ মিনিটে পৌঁছাবে ✓"
        : "Professional arriving within 30 min ✓",
  };

  return (
    <section
      id="home"
      className="relative isolate flex items-center overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-16 lg:min-h-screen lg:pt-28"
      aria-label="Hero"
    >
      {/* Background - Static (no lag) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-[#08060f]">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-[110px] dark:bg-brand-700/25" />
        <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-400/25 blur-[110px] dark:bg-brand-600/20" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/30 blur-[100px] dark:bg-brand-800/25" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          {/* New Professional Badge Design */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-lg border-l-4 border-brand-500 bg-white/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur-sm dark:bg-white/5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-white">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:text-[13px] dark:text-neutral-200">
              {t.heroBadge}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl dark:text-white"
          >
            {t.heroHeading1}
            <br />
            <span>{t.heroHeading2}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300"
          >
            {t.heroSub}
          </motion.p>

          {/* Buttons — always in single row (even on mobile) */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex items-center gap-3 sm:gap-4"
          >
            <motion.a
              href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(111,66,229,0.35)] transition-shadow hover:shadow-[0_15px_40px_rgba(111,66,229,0.5)] sm:flex-none sm:px-8 sm:py-4"
            >
              <span className="whitespace-nowrap">{t.heroPrimary}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </motion.a>
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("services");
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-1 items-center justify-center rounded-full border border-brand-200 bg-brand-50 px-4 py-3.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-100 sm:flex-none sm:px-8 sm:py-4 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:border-brand-400/50 dark:hover:bg-brand-500/20"
            >
              <span className="whitespace-nowrap">{t.heroSecondary}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {trustBadgesData.map((b) => {
              const label = lang === "bn" ? b.labelBn : b.labelEn;
              return (
                <div
                  key={b.labelEn}
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                    <b.icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right - Floating dashboard (only visible on desktop, no space on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden lg:block lg:h-[520px] lg:w-full lg:max-w-md"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="absolute left-2 top-6 w-72 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.2)]"
          >
            <p className="text-xs font-medium text-neutral-400">
              {heroText.bookingConfirmed}
            </p>
            <p className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
              {heroText.electricianVisit}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-brand-600 dark:text-brand-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />{" "}
              {heroText.technicianOnWay}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ willChange: "transform" }}
            className="absolute right-0 top-40 w-64 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.2)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
              <div>
                <p className="text-sm font-semibold text-[#111111] dark:text-white">
                  {heroText.professionalName}
                </p>
                <p className="text-xs text-neutral-400">
                  {heroText.professionalRole}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
              <span className="ml-1 text-xs text-neutral-400">4.9</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ willChange: "transform" }}
            className="absolute bottom-10 left-6 w-60 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.2)]"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-brand-500" fill="currentColor" />
              <p className="text-xs font-semibold text-brand-600 dark:text-brand-300">
                {heroText.quickResponse}
              </p>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-100 dark:bg-white/10">
              <motion.div
                animate={{ width: ["20%", "85%", "20%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-brand-500"
              />
            </div>
            <p className="mt-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
              {heroText.arrivingIn30}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{ willChange: "transform" }}
            className="absolute bottom-0 right-4 grid w-52 grid-cols-3 gap-2 rounded-3xl glass-panel p-4 shadow-[0_25px_60px_rgba(111,66,229,0.2)]"
          >
            {[
              { icon: Zap, color: "text-yellow-500" },
              { icon: ShieldCheck, color: "text-blue-500" },
              { icon: Star, color: "text-amber-500" },
              { icon: Sparkles, color: "text-brand-500" },
              { icon: Headphones, color: "text-green-500" },
              { icon: MapPin, color: "text-red-500" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex h-12 items-center justify-center rounded-xl bg-brand-50 ${item.color} dark:bg-white/5`}
              >
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

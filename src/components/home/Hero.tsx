import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  ArrowRight,
  MapPin,
  Smartphone,
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
    icon: Sparkles,
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

  // Localized floating dashboard cards & other UI text
  const heroText = {
    bookingConfirmed: lang === "bn" ? "বুকিং কনফার্ম" : "Booking Confirmed",
    electricianVisit:
      lang === "bn" ? "ইলেকট্রিশিয়ান ভিজিট" : "Electrician Visit",
    technicianOnWay:
      lang === "bn" ? "টেকনিশিয়ান পথে আছেন" : "Technician on the way",
    professionalName: lang === "bn" ? "রাকিবুল ইসলাম" : "Rakibul Islam",
    professionalRole:
      lang === "bn" ? "দক্ষ ইলেকট্রিশিয়ান" : "Expert Electrician",
    quickResponse: lang === "bn" ? "দ্রুত সাড়া ⚡" : "Quick Response ⚡",
    arrivingIn30:
      lang === "bn"
        ? "পেশাদার ৩০ মিনিটে পৌঁছাবে ✓"
        : "Professional arriving within 30 min ✓",
    appBannerText:
      lang === "bn"
        ? "🚀 সহায় বিডি মোবাইল অ্যাপ — "
        : "🚀 SOHAY BD Mobile App — ",
    appComingSoon: lang === "bn" ? "শীঘ্রই আসছে!" : "Coming Soon!",
    scrollLabel: lang === "bn" ? "স্ক্রল করুন" : "Scroll",
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-[#08060f]">
        <div className="absolute inset-0 noise-bg" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-300/40 blur-[110px] dark:bg-brand-700/30"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-400/30 blur-[110px] dark:bg-brand-600/25"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/40 blur-[100px] dark:bg-brand-800/30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(111,66,229,0.15)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:text-brand-200"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>✨ {t.heroBadge}</span>
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

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(111,66,229,0.4)] transition-shadow hover:shadow-[0_20px_50px_rgba(111,66,229,0.6)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {t.heroPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("services");
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-neutral-300 px-8 py-4 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-white dark:hover:text-brand-300"
            >
              {t.heroSecondary}
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
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                  >
                    <b.icon className="h-4 w-4" />
                  </motion.span>
                  {label}
                </div>
              );
            })}
          </motion.div>

          {/* App Coming Soon banner */}
          <motion.a
            href="#app"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("app");
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative mt-10 flex max-w-xl items-center gap-4 overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-50 px-5 py-4 shadow-sm dark:border-brand-500/20 dark:from-brand-500/10 dark:via-transparent dark:to-brand-500/10"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.06, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_8px_20px_rgba(111,66,229,0.5)]"
            >
              <Smartphone className="h-5 w-5" />
            </motion.span>
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
              {heroText.appBannerText}
              <span className="text-brand-600 dark:text-brand-300">
                {heroText.appComingSoon}
              </span>
            </p>
            <motion.span
              className="absolute inset-0 -z-10 rounded-2xl bg-brand-400/20 blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.a>
        </div>

        {/* Right - Floating dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden h-[520px] w-full max-w-md lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 top-6 w-72 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.25)]"
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
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute right-0 top-40 w-64 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.25)]"
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
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-6 w-60 rounded-3xl glass-panel p-5 shadow-[0_25px_60px_rgba(111,66,229,0.25)]"
          >
            <p className="text-xs font-semibold text-brand-600 dark:text-brand-300">
              {heroText.quickResponse}
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-100 dark:bg-white/10">
              <motion.div
                animate={{ width: ["20%", "85%", "20%"] }}
                transition={{
                  duration: 4,
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
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-0 right-4 grid w-52 grid-cols-3 gap-2 rounded-3xl glass-panel p-4 shadow-[0_25px_60px_rgba(111,66,229,0.25)]"
          >
            {["⚡", "🚰", "❄️", "🧹", "💇", "🚚"].map((e) => (
              <div
                key={e}
                className="flex h-12 items-center justify-center rounded-xl bg-brand-50 text-lg dark:bg-white/5"
              >
                {e}
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-0 -z-10 rounded-full bg-brand-400/20 blur-[100px]" />
        </motion.div>
      </div>

      <motion.a
        href="#app"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("app");
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">
          {heroText.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-neutral-300 p-1 dark:border-white/20"
        >
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-brand-500"
          />
        </motion.div>
        <ChevronDown className="h-3 w-3" />
      </motion.a>
    </section>
  );
}

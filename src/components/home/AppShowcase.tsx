import { motion } from "framer-motion";
import {
  Clock,
  Bell,
  ShieldCheck,
  Wallet,
  Star,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// App features with English and Bangla versions
const appFeaturesData = [
  {
    icon: Smartphone,
    titleEn: "Every Service, One Tap Away",
    titleBn: "প্রতিটি সার্ভিস, এক ক্লিকেই",
    descEn:
      "Book Electrician, Plumbing, AC Service, Cleaning, Beauty and more — all from a single, beautifully simple app.",
    descBn:
      "একটি সুন্দর ও সহজ অ্যাপ থেকেই বুক করুন ইলেকট্রিশিয়ান, প্লাম্বিং, এসি সার্ভিস, ক্লিনিং, বিউটি সহ আরো অনেক কিছু।",
  },
  {
    icon: Clock,
    titleEn: "30-Minute Quick Response",
    titleBn: "৩০ মিনিটে দ্রুত সাড়া",
    descEn:
      "Once your booking is confirmed, our verified professionals will reach your doorstep within 30 minutes — guaranteed.",
    descBn:
      "আপনার বুকিং কনফার্ম হওয়ার পর আমাদের যাচাইকৃত পেশাদাররা মাত্র ৩০ মিনিটের মধ্যে আপনার দরজায় পৌঁছে যাবেন — নিশ্চিত।",
  },
  {
    icon: Bell,
    titleEn: "Instant Notifications",
    titleBn: "তাৎক্ষণিক নোটিফিকেশন",
    descEn:
      "Get notified the moment your booking is confirmed, your professional is assigned, and when they arrive.",
    descBn:
      "বুকিং কনফার্ম হওয়া, পেশাদার নিযুক্ত হওয়া এবং তার পৌঁছানোর মুহূর্তেই নোটিফিকেশন পান।",
  },
  {
    icon: Wallet,
    titleEn: "Easy Digital Payments",
    titleBn: "সহজ ডিজিটাল পেমেন্ট",
    descEn:
      "Pay securely after service completion with transparent pricing — no hidden charges, ever.",
    descBn:
      "সার্ভিস শেষে স্বচ্ছ দামে নিরাপদে পেমেন্ট করুন — কখনোই কোনো লুকানো চার্জ নেই।",
  },
  {
    icon: ShieldCheck,
    titleEn: "Verified Professionals Only",
    titleBn: "শুধুমাত্র যাচাইকৃত পেশাদার",
    descEn:
      "Every professional on the app is background-checked and rated by real customers for your safety.",
    descBn:
      "অ্যাপের প্রতিটি পেশাদার আপনার নিরাপত্তার জন্য ব্যাকগ্রাউন্ড যাচাইকৃত এবং প্রকৃত গ্রাহকদের দ্বারা রেটিংপ্রাপ্ত।",
  },
  {
    icon: Star,
    titleEn: "Rate & Review",
    titleBn: "রেট ও রিভিউ",
    descEn:
      "Share your experience and help us maintain the highest quality standards across Bangladesh.",
    descBn:
      "আপনার অভিজ্ঞতা শেয়ার করুন এবং সারা বাংলাদেশে সর্বোচ্চ মান বজায় রাখতে আমাদের সাহায্য করুন।",
  },
];

const PlayStoreMark = () => (
  <svg viewBox="0 0 512 512" className="h-8 w-8" aria-hidden="true">
    <path
      fill="#00D9FF"
      d="M99 20c-8 5-13 14-13 25v422c0 11 5 20 13 25l231-236z"
    />
    <path fill="#00F076" d="M330 236 99 20l231 236 79-46c19-11 19-38 0-49z" />
    <path fill="#FFC900" d="M330 236 99 492l311-159z" />
    <path fill="#FF3A44" d="M330 236 409 190c19-11 19-38 0-49L330 236z" />
  </svg>
);

const AppStoreMark = () => (
  <svg
    viewBox="0 0 384 512"
    className="h-8 w-8"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318 268c-.5-56 45.8-83 47.9-84.3-26-38.1-66.6-43.3-81-43.9-34.5-3.5-67.3 20.3-84.8 20.3-17.6 0-44.7-19.8-73.5-19.3-37.8.6-72.7 22-92.1 55.9-39.3 68.1-10 168.9 28.2 224.2 18.7 27 41 57.4 70.3 56.3 28.2-1.1 38.9-18.3 73-18.3s43.7 18.3 73.5 17.7c30.4-.5 49.6-27.6 68.2-54.7 21.5-31.4 30.4-61.7 30.8-63.3-.7-.3-59.1-22.7-59.5-90.6zM261.9 88.9c15.5-18.8 26-45 23.1-71-22.4.9-49.5 15-65.5 33.7-14.4 16.7-27 43.5-23.6 69 24.9 1.9 50.6-12.6 66-31.7z" />
  </svg>
);

export default function AppShowcase() {
  const { lang } = useLanguage();

  // Localized text for this section
  const text = {
    badge:
      lang === "bn" ? "হোম সার্ভিসের ভবিষ্যৎ" : "The Future of Home Services",
    headingStart: lang === "bn" ? "" : "The ",
    headingAccent:
      lang === "bn" ? "সহায় বিডি মোবাইল অ্যাপ" : "SOHAY BD Mobile App",
    headingEnd: lang === "bn" ? " খুব শীঘ্রই আসছে" : " Is Almost Here",
    subPart1:
      lang === "bn"
        ? "আমরা একটি শক্তিশালী মোবাইল অ্যাপ তৈরি করছি যা সহায় বিডি-এর প্রতিটি সার্ভিসকে নিয়ে আসবে আপনার হাতের মুঠোয়। কয়েক সেকেন্ডে বুক করুন ইলেকট্রিশিয়ান, প্লাম্বার, এসি টেকনিশিয়ান, হোম ক্লিনার, বিউটিশিয়ান বা হোম শিফটিং টিম — এবং উপভোগ করুন আমাদের "
        : "We're building a powerful mobile app that puts every SOHAY BD service in the palm of your hand. Book an Electrician, Plumber, AC Technician, Home Cleaner, Beautician, or Home Shifting crew in seconds — and enjoy our ",
    subPart2Bold:
      lang === "bn"
        ? "৩০ মিনিটের মধ্যে দ্রুত সাড়ার নিশ্চয়তা"
        : "guaranteed 30-minute quick response",
    subPart3:
      lang === "bn"
        ? "। বুকিং ম্যানেজ করুন, পেশাদারের সাথে চ্যাট করুন, নিরাপদে পেমেন্ট করুন এবং আপনার অভিজ্ঞতা রেট করুন — সব একটি সুন্দর, সহজ-ব্যবহারযোগ্য অ্যাপ থেকে।"
        : ". Manage bookings, chat with your professional, pay securely, and rate your experience — all from one elegant, easy-to-use app.",
    playGetItOn: lang === "bn" ? "ডাউনলোড করুন" : "GET IT ON",
    playStoreName: lang === "bn" ? "গুগল প্লে" : "Google Play",
    appStoreDownload: lang === "bn" ? "ডাউনলোড করুন" : "DOWNLOAD ON THE",
    appStoreName: lang === "bn" ? "অ্যাপ স্টোর" : "App Store",
    comingSoon: lang === "bn" ? "শীঘ্রই আসছে" : "Coming Soon",
    quickResponseLabel: lang === "bn" ? "দ্রুত সাড়া" : "Quick Response",
    professionalArriving:
      lang === "bn" ? "৩০ মিনিটে পৌঁছাবে ✓" : "Arriving within 30 min ✓",
    appServices:
      lang === "bn"
        ? ["ইলেকট্রিশিয়ান", "প্লাম্বিং", "এসি সার্ভিস", "হোম ক্লিনিং"]
        : ["Electrician", "Plumbing", "AC Service", "Home Cleaning"],
  };

  return (
    <section
      id="app"
      className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-[#08060f]"
      aria-labelledby="app-heading"
    >
      {/* Background - hidden on mobile for performance */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 hidden h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-300/25 blur-[130px] sm:block dark:bg-brand-700/20" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-lg border-l-4 border-brand-500 bg-white/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur-sm dark:bg-white/5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-white">
              <Smartphone className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:text-[13px] dark:text-neutral-200">
              {text.badge}
            </span>
          </div>

          <h2
            id="app-heading"
            className="mt-5 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingStart}
            <span>{text.headingAccent}</span>
            {text.headingEnd}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.subPart1}
            <strong className="text-brand-600 dark:text-brand-300">
              {text.subPart2Bold}
            </strong>
            {text.subPart3}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {appFeaturesData.map((f, i) => {
              const title = lang === "bn" ? f.titleBn : f.titleEn;
              const desc = lang === "bn" ? f.descBn : f.descEn;
              return (
                <motion.div
                  key={f.titleEn}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-100 bg-white/60 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#111111] dark:text-white">
                      {title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#app"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-[#111111] px-5 py-3 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
            >
              <PlayStoreMark />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-neutral-300">
                  {text.playGetItOn}
                </span>
                <span className="block text-sm font-semibold">
                  {text.playStoreName}
                </span>
                <span className="block text-[10px] font-medium text-brand-300">
                  {text.comingSoon}
                </span>
              </span>
            </a>
            <a
              href="#app"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-[#111111] px-5 py-3 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
            >
              <AppStoreMark />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-neutral-300">
                  {text.appStoreDownload}
                </span>
                <span className="block text-sm font-semibold">
                  {text.appStoreName}
                </span>
                <span className="block text-[10px] font-medium text-brand-300">
                  {text.comingSoon}
                </span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Phone mockup - simpler animation for mobile performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex h-[520px] w-full max-w-xs items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="relative h-[480px] w-64 rounded-[42px] border-8 border-[#111111] bg-[#111111] shadow-xl"
          >
            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#111111]" />
            <div className="h-full w-full overflow-hidden rounded-[34px] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-4">
              <p className="mt-4 text-center text-xs font-semibold tracking-widest text-white/70">
                SOHAY BD
              </p>
              <div className="mt-6 space-y-3">
                {text.appServices.map((s) => (
                  <div
                    key={s}
                    className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-md"
                  >
                    <span className="text-xs font-medium text-white">{s}</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
              {/* Quick Response box */}
              <div className="mt-6 rounded-2xl bg-white/95 p-3">
                <p className="flex items-center gap-1 text-[10px] font-bold text-brand-600">
                  <Clock className="h-3 w-3" strokeWidth={2.5} />
                  {text.quickResponseLabel}
                </p>
                <p className="mt-1 text-xs font-bold text-[#111111]">
                  {text.professionalArriving}
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-brand-100">
                  <motion.div
                    animate={{ width: ["10%", "80%", "10%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="h-full rounded-full bg-brand-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Background glow - static */}
          <div className="absolute -z-10 h-80 w-80 rounded-full bg-brand-400/25 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}

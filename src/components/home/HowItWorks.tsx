import { motion } from "framer-motion";
import {
  ListChecks,
  CalendarClock,
  UserCheck,
  Wallet,
  Settings,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Steps data with both English and Bangla versions
const stepsData = [
  {
    icon: ListChecks,
    titleEn: "Choose a Service",
    titleBn: "সার্ভিস বাছাই করুন",
    descEn:
      "Browse our full range of home services and select exactly what you need.",
    descBn:
      "আমাদের সব হোম সার্ভিস ব্রাউজ করুন এবং ঠিক যেটি প্রয়োজন সেটাই বেছে নিন।",
  },
  {
    icon: CalendarClock,
    titleEn: "Pick Time & Location",
    titleBn: "সময় ও ঠিকানা নির্বাচন",
    descEn:
      "Set your convenient schedule and share your location in a few taps.",
    descBn:
      "আপনার সুবিধামতো সময় নির্ধারণ করুন এবং কয়েক ক্লিকেই আপনার ঠিকানা শেয়ার করুন।",
  },
  {
    icon: UserCheck,
    titleEn: "Verified Pro Arrives",
    titleBn: "যাচাইকৃত পেশাদার পৌঁছাবেন",
    descEn:
      "Our trusted, background-checked expert arrives on time and gets the job done.",
    descBn:
      "আমাদের বিশ্বস্ত, ব্যাকগ্রাউন্ড যাচাইকৃত পেশাদার সময়মতো পৌঁছে কাজটি সম্পন্ন করবেন।",
  },
  {
    icon: Wallet,
    titleEn: "Secure Payment",
    titleBn: "নিরাপদ পেমেন্ট",
    descEn:
      "Pay easily and securely after the service has been completed to your satisfaction.",
    descBn:
      "আপনার সন্তুষ্টিমতো সার্ভিস সম্পন্ন হওয়ার পর সহজে ও নিরাপদে পেমেন্ট করুন।",
  },
];

export default function HowItWorks() {
  const { lang } = useLanguage();

  // Localized section headings
  const text = {
    badge: lang === "bn" ? "সহজ প্রক্রিয়া" : "Simple Process",
    headingStart: lang === "bn" ? "" : "How ",
    headingAccent: lang === "bn" ? "সহায় বিডি" : "SOHAY BD",
    headingEnd: lang === "bn" ? " যেভাবে কাজ করে" : " Works",
    sub:
      lang === "bn"
        ? "মাত্র ৪টি সহজ ধাপে আপনার হোম সার্ভিস সমাধান।"
        : "Your home services sorted in 4 simple steps.",
  };

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40 py-20 sm:py-24 dark:from-[#08060f] dark:to-[#0d0819]"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-lg border-l-4 border-brand-500 bg-white/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur-sm dark:bg-white/5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-white">
              <Settings className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:text-[13px] dark:text-neutral-200">
              {text.badge}
            </span>
          </div>

          <h2
            id="how-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingStart}
            <span>{text.headingAccent}</span>
            {text.headingEnd}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Connecting line - only on desktop */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />

          {stepsData.map((step, i) => {
            const title = lang === "bn" ? step.titleBn : step.titleEn;
            const desc = lang === "bn" ? step.descBn : step.descEn;
            return (
              <motion.div
                key={step.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-white shadow-md ring-1 ring-brand-100 dark:bg-[#150f28] dark:ring-white/10">
                  <span className="flex h-full w-full items-center justify-center rounded-3xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <step.icon className="h-7 w-7" />
                  </span>
                  <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-md">
                    {lang === "bn" ? ["১", "২", "৩", "৪"][i] : i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#111111] dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

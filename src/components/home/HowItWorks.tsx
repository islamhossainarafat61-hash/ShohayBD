import { motion } from "framer-motion";
import { ListChecks, CalendarClock, UserCheck, Wallet } from "lucide-react";
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
    badge: lang === "bn" ? "⚙️ সহজ প্রক্রিয়া" : "⚙️ Simple Process",
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
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40 py-24 dark:from-[#08060f] dark:to-[#0d0819]"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            {text.badge}
          </span>
          <h2
            id="how-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingStart}
            <span className="gradient-text">{text.headingAccent}</span>
            {text.headingEnd}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        <div className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />
          {stepsData.map((step, i) => {
            const title = lang === "bn" ? step.titleBn : step.titleEn;
            const desc = lang === "bn" ? step.descBn : step.descEn;
            return (
              <motion.div
                key={step.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-white shadow-[0_15px_40px_rgba(111,66,229,0.25)] ring-1 ring-brand-100 dark:bg-[#150f28] dark:ring-white/10">
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="flex h-full w-full items-center justify-center rounded-3xl bg-brand-500/10 text-brand-600 dark:text-brand-300"
                  >
                    <step.icon className="h-7 w-7" />
                  </motion.span>
                  <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-lg">
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

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import {
  ShieldCheck,
  CalendarCheck,
  Tags,
  Zap,
  Lock,
  Headphones,
  BadgeCheck,
  TrendingUp,
  Eye,
  Target,
  ArrowRight,
} from "lucide-react";
import {
  buildWhatsappLink,
  GENERAL_WHATSAPP_MESSAGE,
} from "../../lib/whatsapp";
import { useLanguage } from "../../context/LanguageContext";

// Feature data with both English and Bangla versions
const featuresData = [
  {
    icon: ShieldCheck,
    titleEn: "Verified Professionals",
    titleBn: "যাচাইকৃত পেশাদার",
    descEn: "Every expert is background-checked for your safety.",
    descBn: "আপনার নিরাপত্তার জন্য প্রতিটি পেশাদারের ব্যাকগ্রাউন্ড যাচাই করা।",
  },
  {
    icon: CalendarCheck,
    titleEn: "Easy Online Booking",
    titleBn: "সহজ অনলাইন বুকিং",
    descEn: "Book any service in under a minute, anytime.",
    descBn: "যেকোনো সময় এক মিনিটের কম সময়ে যেকোনো সার্ভিস বুক করুন।",
  },
  {
    icon: Tags,
    titleEn: "Transparent Pricing",
    titleBn: "স্বচ্ছ মূল্য",
    descEn: "No hidden fees — know the cost before you confirm.",
    descBn: "কোনো লুকানো ফি নেই — কনফার্ম করার আগেই খরচ জানুন।",
  },
  {
    icon: Zap,
    titleEn: "Fast Response",
    titleBn: "দ্রুত সাড়া",
    descEn: "Quick assignment so you're never left waiting long.",
    descBn: "দ্রুত অ্যাসাইনমেন্ট, যাতে আপনাকে বেশিক্ষণ অপেক্ষা করতে না হয়।",
  },
  {
    icon: Lock,
    titleEn: "Secure Service",
    titleBn: "নিরাপদ সার্ভিস",
    descEn: "Your safety and privacy are always our top priority.",
    descBn: "আপনার নিরাপত্তা ও গোপনীয়তা সবসময় আমাদের সর্বোচ্চ অগ্রাধিকার।",
  },
  {
    icon: Headphones,
    titleEn: "Customer Support",
    titleBn: "গ্রাহক সাপোর্ট",
    descEn: "Friendly support ready to help whenever you need it.",
    descBn: "বন্ধুত্বপূর্ণ সাপোর্ট, যখনই দরকার হবে সাহায্য করতে প্রস্তুত।",
  },
  {
    icon: BadgeCheck,
    titleEn: "Quality Assurance",
    titleBn: "মান নিশ্চয়তা",
    descEn: "Consistent, high-quality work you can rely on.",
    descBn: "ধারাবাহিক, উচ্চ মানের কাজ যার উপর আপনি ভরসা করতে পারেন।",
  },
  {
    icon: TrendingUp,
    titleEn: "Growing Service Network",
    titleBn: "সম্প্রসারিত সার্ভিস নেটওয়ার্ক",
    descEn: "Expanding across Rangpur and beyond, every month.",
    descBn: "প্রতি মাসে রংপুর ছাড়িয়ে আরো অনেক জায়গায় সম্প্রসারণ চলছে।",
  },
];

// Stats data with both English and Bangla versions
const statsData = [
  {
    value: 10,
    suffix: "+",
    labelEn: "Professional Services",
    labelBn: "পেশাদার সার্ভিস",
  },
  {
    value: 100,
    suffix: "%",
    labelEn: "Customer Focus",
    labelBn: "গ্রাহক-কেন্দ্রিক",
  },
  {
    value: 0,
    suffixEn: "Fast",
    suffixBn: "দ্রুত",
    labelEn: "Booking Experience",
    labelBn: "বুকিং অভিজ্ঞতা",
    isText: true,
  },
  {
    value: 0,
    suffixEn: "Future",
    suffixBn: "ভবিষ্যৎ",
    labelEn: "Nationwide Expansion",
    labelBn: "দেশব্যাপী সম্প্রসারণ",
    isText: true,
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const { lang } = useLanguage();

  // Localized labels/text used inside this section
  const text = {
    badge: lang === "bn" ? "✨ সহায় বিডি সম্পর্কে" : "✨ About SOHAY BD",
    headingMain:
      lang === "bn" ? "প্রতিদিনের সার্ভিস করছি" : "Making Everyday Services",
    headingAccent:
      lang === "bn"
        ? "সহজ, বিশ্বস্ত ও নির্ভরযোগ্য।"
        : "Simple, Trusted & Reliable.",
    sub:
      lang === "bn"
        ? "সহায় বিডি যাচাইকৃত পেশাদারদের সাথে গ্রাহকদের যুক্ত করে এক নিরবিচ্ছিন্ন ডিজিটাল অভিজ্ঞতার মাধ্যমে বাংলাদেশের পরবর্তী প্রজন্মের হোম সার্ভিস প্ল্যাটফর্ম গড়ে তুলছে।"
        : "SOHAY BD is building Bangladesh's next-generation home service platform by connecting customers with verified professionals through one seamless digital experience.",
    ourStory: lang === "bn" ? "আমাদের গল্প" : "Our Story",
    storyText1:
      lang === "bn"
        ? "সহায় বিডি তৈরি হয়েছে দৈনন্দিন সার্ভিসের সমস্যা সমাধানের জন্য। নির্ভরযোগ্য ইলেকট্রিশিয়ান, প্লাম্বার, এসি টেকনিশিয়ান, ক্লিনার বা বিউটি পেশাদার খুঁজে পাওয়া কষ্টকর হওয়া উচিত না।"
        : "SOHAY BD was created to solve everyday service problems. Finding reliable electricians, plumbers, AC technicians, cleaners, or beauty professionals shouldn't be stressful.",
    storyText2:
      lang === "bn"
        ? "আমাদের লক্ষ্য প্রযুক্তির মাধ্যমে প্রতিটি বুকিংকে সহজ, স্বচ্ছ এবং বিশ্বস্ত করে তোলা — রংপুর থেকে শুরু করে সারা বাংলাদেশের পরিবারদের সেবা দেওয়া পর্যন্ত সম্প্রসারিত হচ্ছি।"
        : "Our mission is to make every booking simple, transparent, and trustworthy through technology — starting in Rangpur and growing to serve families across all of Bangladesh.",
    visionTitle: lang === "bn" ? "আমাদের ভিশন" : "Our Vision",
    visionDesc:
      lang === "bn"
        ? "বাংলাদেশের সবচেয়ে বিশ্বস্ত হোম সার্ভিস প্ল্যাটফর্ম হয়ে ওঠা, যেখানে প্রতিটি পরিবার আত্মবিশ্বাসের সাথে যেকোনো সময় দক্ষ পেশাদার বুক করতে পারবে।"
        : "To become Bangladesh's most trusted home service platform where every family can confidently book skilled professionals anytime.",
    missionTitle: lang === "bn" ? "আমাদের মিশন" : "Our Mission",
    missionDesc:
      lang === "bn"
        ? "ডিজিটাল প্রযুক্তির মাধ্যমে দক্ষ স্থানীয় পেশাদারদের ক্ষমতায়ন করার পাশাপাশি নিরাপদ, দ্রুত, স্বচ্ছ ও উচ্চ মানের হোম সার্ভিস প্রদান করা।"
        : "Deliver safe, fast, transparent, and high-quality home services while empowering skilled local professionals through digital technology.",
    whyChoose: lang === "bn" ? "কেন আমাদের বেছে নেবেন" : "Why Choose Us",
    ctaHeading:
      lang === "bn"
        ? "আরো ভালো হোম সার্ভিস অভিজ্ঞতা নিতে প্রস্তুত?"
        : "Ready to Experience Better Home Services?",
    ctaSub:
      lang === "bn"
        ? "সহায় বিডি-এর সাথে বিশ্বস্ত পেশাদারদের বুক করুন এবং উপভোগ করুন আরো স্মার্ট, নিরাপদ এবং ঝামেলা-মুক্ত সার্ভিস অভিজ্ঞতা।"
        : "Book trusted professionals with SOHAY BD and enjoy a smarter, safer, and hassle-free service experience.",
    ctaBook: lang === "bn" ? "সার্ভিস বুক করুন" : "Book a Service",
    ctaContact: lang === "bn" ? "যোগাযোগ করুন" : "Contact Us",
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 dark:bg-[#08060f]"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
        <div className="absolute inset-0 noise-bg" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            {text.badge}
          </span>
          <h2
            id="about-heading"
            className="mt-5 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingMain}{" "}
            <span className="gradient-text">{text.headingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-neutral-600 dark:text-neutral-300"
          >
            <h3 className="text-xl font-semibold text-[#111111] dark:text-white">
              {text.ourStory}
            </h3>
            <p className="leading-relaxed">{text.storyText1}</p>
            <p className="leading-relaxed">{text.storyText2}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-[20px] glass-panel p-6 shadow-[0_15px_40px_rgba(111,66,229,0.15)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                <Eye className="h-5 w-5" />
              </span>
              <h4 className="mt-4 text-base font-semibold text-[#111111] dark:text-white">
                {text.visionTitle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {text.visionDesc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-[20px] glass-panel p-6 shadow-[0_15px_40px_rgba(111,66,229,0.15)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                <Target className="h-5 w-5" />
              </span>
              <h4 className="mt-4 text-base font-semibold text-[#111111] dark:text-white">
                {text.missionTitle}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {text.missionDesc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white"
          >
            {text.whyChoose}
          </motion.h3>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((f, i) => {
              const title = lang === "bn" ? f.titleBn : f.titleEn;
              const desc = lang === "bn" ? f.descBn : f.descEn;
              return (
                <motion.div
                  key={f.titleEn}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 45px rgba(111,66,229,0.2)",
                  }}
                  className="rounded-[20px] border border-neutral-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-sm font-semibold text-[#111111] dark:text-white">
                    ✔ {title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statsData.map((s, i) => {
            const label = lang === "bn" ? s.labelBn : s.labelEn;
            const textSuffix = s.isText
              ? lang === "bn"
                ? s.suffixBn
                : s.suffixEn
              : s.suffix;
            return (
              <motion.div
                key={s.labelEn}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-[20px] bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-center text-white shadow-[0_15px_40px_rgba(111,66,229,0.35)]"
              >
                <p className="text-3xl font-bold sm:text-4xl">
                  {s.isText ? (
                    textSuffix
                  ) : (
                    <Counter value={s.value} suffix={s.suffix || ""} />
                  )}
                </p>
                <p className="mt-2 text-xs font-medium text-white/80 sm:text-sm">
                  {label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-brand-100 bg-brand-50/60 p-10 text-center dark:border-brand-500/20 dark:bg-brand-500/5"
        >
          <h3 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
            {text.ctaHeading}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600 sm:text-base dark:text-neutral-300">
            {text.ctaSub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(111,66,229,0.45)]"
            >
              {text.ctaBook}
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-semibold text-neutral-800 dark:border-white/15 dark:text-white"
              >
                {text.ctaContact} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, CheckCircle2 } from "lucide-react";
import { technicians, type Technician } from "../data/technicians";
import { useLanguage } from "../context/LanguageContext";

function TechnicianCard({
  technician,
  index,
  lang,
  readyLabel,
  verifiedLabel,
}: {
  technician: Technician;
  index: number;
  lang: "en" | "bn";
  readyLabel: string;
  verifiedLabel: string;
}) {
  const name = lang === "bn" ? technician.nameBn : technician.name;
  const expert = lang === "bn" ? technician.expertBn : technician.expertEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
    >
      {/* Photo */}
      <div className="relative overflow-hidden bg-neutral-100 dark:bg-white/5">
        <img
          src={technician.photo}
          alt={technician.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement?.classList.add(
              "flex",
              "items-center",
              "justify-center",
              "aspect-square",
            );
            const initial = document.createElement("span");
            initial.textContent = technician.name.charAt(0);
            initial.className =
              "text-3xl font-bold text-brand-500 dark:text-brand-300";
            target.parentElement?.appendChild(initial);
          }}
        />
        {/* Verified badge */}
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold text-brand-700 shadow-md backdrop-blur-sm">
          <BadgeCheck className="h-2.5 w-2.5" /> {verifiedLabel}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-bold text-[#111111] sm:text-base dark:text-white">
          {name}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-brand-600 dark:text-brand-300">
          {expert}
        </p>

        {/* Ready badge */}
        <div className="mt-3 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <CheckCircle2 className="h-3 w-3" /> {readyLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Technicians() {
  const { lang } = useLanguage();

  const text = {
    backHome: lang === "bn" ? "হোমে ফিরে যান" : "Back to Home",
    badge: lang === "bn" ? "🛠️ আমাদের টেকনিশিয়ান" : "🛠️ Our Technicians",
    heading:
      lang === "bn"
        ? "যাচাইকৃত ও দক্ষ পেশাদার"
        : "Verified & Skilled Professionals",
    desc:
      lang === "bn"
        ? "সহায় বিডি-এর প্রতিটি টেকনিশিয়ান বছরের পর বছর অভিজ্ঞতা, প্রশিক্ষণ এবং ব্যাকগ্রাউন্ড যাচাইয়ের মধ্য দিয়ে গেছেন। আমরা নিশ্চিত করি যে আপনার বাড়িতে যিনি আসবেন তিনি বিশ্বস্ত, দক্ষ এবং পেশাদার। ইলেকট্রিক্যাল, প্লাম্বিং, এসি, ক্লিনিং, বিউটি সহ সব ধরনের হোম সার্ভিসের জন্য আমাদের অভিজ্ঞ টিম সবসময় আপনার পাশে আছে।"
        : "Every technician at SOHAY BD has gone through years of experience, professional training, and thorough background verification. We ensure that whoever arrives at your home is trusted, skilled, and professional. Our experienced team is always ready to serve you across all home services — from electrical, plumbing, AC, cleaning to beauty and more.",
    listBadge: lang === "bn" ? "👥 আমাদের বিশেষজ্ঞ দল" : "👥 Our Expert Team",
    listHeading:
      lang === "bn" ? "সবার সাথে পরিচিত হন" : "Meet Our Professionals",
    listSub:
      lang === "bn"
        ? "সব বিশেষজ্ঞ পেশাদার যারা আপনার সেবায় প্রস্তুত।"
        : "All expert professionals ready to serve you.",
    readyLabel: lang === "bn" ? "কাজের জন্য প্রস্তুত" : "Ready",
    verifiedLabel: lang === "bn" ? "যাচাইকৃত" : "Verified",
  };

  return (
    <main className="relative overflow-hidden bg-white dark:bg-[#08060f]">
      {/* HERO SECTION with Back Button */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-24 pb-16 dark:from-[#0d0819] dark:via-[#0b0713] dark:to-[#08060f]">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-300/30 blur-[120px] dark:bg-brand-600/30" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-500/20" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
          >
            <ArrowLeft className="h-4 w-4" /> {text.backHome}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              {text.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#111111] sm:text-5xl lg:text-6xl dark:text-white">
              {text.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
              {text.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TECHNICIANS GRID */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              {text.listBadge}
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.listHeading}
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.listSub}
            </p>
          </motion.div>

          {/* Grid - Mobile: 2 cols, Desktop: 4 cols */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {technicians.map((tech, i) => (
              <TechnicianCard
                key={tech.id}
                technician={tech}
                index={i}
                lang={lang}
                readyLabel={text.readyLabel}
                verifiedLabel={text.verifiedLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  CheckCircle2,
  Wrench,
  Users,
  Award,
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  UserCheck,
  GraduationCap,
  HeartHandshake,
  Zap,
  Search,
  ClipboardCheck,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/30"
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
    // Hero
    heroBadge: lang === "bn" ? "আমাদের টেকনিশিয়ান" : "Our Technicians",
    heroHeadingStart: lang === "bn" ? "যাচাইকৃত ও " : "Verified & ",
    heroHeadingAccent: lang === "bn" ? "দক্ষ পেশাদার" : "Skilled Professionals",
    desc:
      lang === "bn"
        ? "সহায় বিডি-এর প্রতিটি টেকনিশিয়ান বছরের পর বছর অভিজ্ঞতা, প্রশিক্ষণ এবং ব্যাকগ্রাউন্ড যাচাইয়ের মধ্য দিয়ে গেছেন। আমরা নিশ্চিত করি যে আপনার বাড়িতে যিনি আসবেন তিনি বিশ্বস্ত, দক্ষ এবং পেশাদার। ইলেকট্রিক্যাল, প্লাম্বিং, এসি, ক্লিনিং, বিউটি সহ সব ধরনের হোম সার্ভিসের জন্য আমাদের অভিজ্ঞ টিম সবসময় আপনার পাশে আছে।"
        : "Every technician at SOHAY BD has gone through years of experience, professional training, and thorough background verification. We ensure that whoever arrives at your home is trusted, skilled, and professional. Our experienced team is always ready to serve you across all home services — from electrical, plumbing, AC, cleaning to beauty and more.",

    // Stats
    stat1Label: lang === "bn" ? "টেকনিশিয়ান" : "Technicians",
    stat2Label: lang === "bn" ? "সন্তুষ্ট গ্রাহক" : "Happy Customers",
    stat3Label: lang === "bn" ? "সম্পন্ন কাজ" : "Jobs Completed",
    stat4Label: lang === "bn" ? "গড় রেটিং" : "Avg Rating",

    // Expertise
    expertiseBadge: lang === "bn" ? "আমাদের দক্ষতা" : "Our Expertise",
    expertiseHeadingStart:
      lang === "bn" ? "বিভিন্ন ক্ষেত্রে " : "Skilled Across ",
    expertiseHeadingAccent: lang === "bn" ? "দক্ষ" : "Multiple Fields",
    expertiseSub:
      lang === "bn"
        ? "আমাদের টেকনিশিয়ানরা বিভিন্ন সার্ভিস ক্যাটাগরিতে বিশেষজ্ঞ"
        : "Our technicians specialize in various service categories",

    // Standards
    standardsBadge: lang === "bn" ? "আমাদের মান" : "Our Standards",
    standardsHeadingStart:
      lang === "bn" ? "কেন আমাদের টেকনিশিয়ান " : "What Makes Our Technicians ",
    standardsHeadingAccent: lang === "bn" ? "সেরা" : "Special",
    standardsSub:
      lang === "bn"
        ? "প্রতিটি পেশাদার যিনি আমাদের প্ল্যাটফর্মে যোগ দেন তিনি এই মানগুলো পূরণ করেন"
        : "Every professional who joins our platform meets these standards",

    // Process (Selection)
    processBadge: lang === "bn" ? "বাছাই প্রক্রিয়া" : "Selection Process",
    processHeadingStart: lang === "bn" ? "কীভাবে আমরা " : "How We ",
    processHeadingAccent:
      lang === "bn" ? "টেকনিশিয়ান বাছাই করি" : "Select Technicians",
    processSub:
      lang === "bn"
        ? "সেরা মানের সেবা নিশ্চিত করতে আমাদের কঠোর ৪-ধাপের প্রক্রিয়া"
        : "Our rigorous 4-step process to ensure top-quality service",

    // Team Grid
    listBadge: lang === "bn" ? "আমাদের বিশেষজ্ঞ দল" : "Our Expert Team",
    listHeading:
      lang === "bn" ? "সবার সাথে পরিচিত হন" : "Meet Our Professionals",
    listSub:
      lang === "bn"
        ? "সব বিশেষজ্ঞ পেশাদার যারা আপনার সেবায় প্রস্তুত।"
        : "All expert professionals ready to serve you.",
    readyLabel: lang === "bn" ? "কাজের জন্য প্রস্তুত" : "Ready",
    verifiedLabel: lang === "bn" ? "যাচাইকৃত" : "Verified",

    // Join CTA
    joinBadge: lang === "bn" ? "আমাদের সাথে যোগ দিন" : "Join Us",
    joinHeadingStart: lang === "bn" ? "একজন " : "Are You a ",
    joinHeadingAccent: lang === "bn" ? "টেকনিশিয়ান?" : "Skilled Technician?",
    joinSub:
      lang === "bn"
        ? "আমাদের ক্রমবর্ধমান দলে যোগ দিন এবং আপনার দক্ষতা দিয়ে হাজারো পরিবারের সেবা করুন।"
        : "Join our growing team and serve thousands of families with your skills.",
    joinButton: lang === "bn" ? "আবেদন করুন" : "Apply Now",
  };

  // Stats
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: text.stat1Label,
      gradient: "from-brand-500 to-purple-600",
    },
    {
      icon: HeartHandshake,
      value: "1000+",
      label: text.stat2Label,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: CheckCircle2,
      value: "5000+",
      label: text.stat3Label,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Star,
      value: "4.9",
      label: text.stat4Label,
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  // Expertise Categories (9 services) - with 3D icons and slugs
  const expertiseCategories = [
    {
      slug: "electrician",
      icon: Zap,
      icon3d: "/icons/electrician.png",
      label: lang === "bn" ? "ইলেকট্রিশিয়ান" : "Electrician",
      iconBg: "from-yellow-200 to-amber-300",
      darkIconBg: "dark:from-yellow-500/30 dark:to-amber-500/20",
      color: "text-yellow-700 dark:text-yellow-300",
    },
    {
      slug: "plumbing",
      icon: Wrench,
      icon3d: "/icons/plumbing.png",
      label: lang === "bn" ? "প্লাম্বিং" : "Plumbing",
      iconBg: "from-blue-200 to-sky-300",
      darkIconBg: "dark:from-blue-500/30 dark:to-sky-500/20",
      color: "text-blue-700 dark:text-blue-300",
    },
    {
      slug: "ac-service",
      icon: Sparkles,
      icon3d: "/icons/ac-service.png",
      label: lang === "bn" ? "এসি সার্ভিস" : "AC Service",
      iconBg: "from-cyan-200 to-teal-300",
      darkIconBg: "dark:from-cyan-500/30 dark:to-teal-500/20",
      color: "text-cyan-700 dark:text-cyan-300",
    },
    {
      slug: "home-cleaning",
      icon: Sparkles,
      icon3d: "/icons/home-cleaning.png",
      label: lang === "bn" ? "হোম ক্লিনিং" : "Home Cleaning",
      iconBg: "from-green-200 to-emerald-300",
      darkIconBg: "dark:from-green-500/30 dark:to-emerald-500/20",
      color: "text-green-700 dark:text-green-300",
    },
    {
      slug: "dry-wash",
      icon: Sparkles,
      icon3d: "/icons/dry-wash.png",
      label: lang === "bn" ? "ড্রাই ওয়াশ" : "Dry Wash",
      iconBg: "from-indigo-200 to-violet-300",
      darkIconBg: "dark:from-indigo-500/30 dark:to-violet-500/20",
      color: "text-indigo-700 dark:text-indigo-300",
    },
    {
      slug: "home-shifting",
      icon: Sparkles,
      icon3d: "/icons/home-shifting.png",
      label: lang === "bn" ? "হোম শিফটিং" : "Home Shifting",
      iconBg: "from-orange-200 to-amber-300",
      darkIconBg: "dark:from-orange-500/30 dark:to-amber-500/20",
      color: "text-orange-700 dark:text-orange-300",
    },
    {
      slug: "salon-at-home",
      icon: Sparkles,
      icon3d: "/icons/salon.png",
      label: lang === "bn" ? "সেলুন অ্যাট হোম" : "Salon at Home",
      iconBg: "from-pink-200 to-rose-300",
      darkIconBg: "dark:from-pink-500/30 dark:to-rose-500/20",
      color: "text-pink-700 dark:text-pink-300",
    },
    {
      slug: "beauty-service",
      icon: Sparkles,
      icon3d: "/icons/beauty.png",
      label: lang === "bn" ? "বিউটি সার্ভিস" : "Beauty Service",
      iconBg: "from-rose-200 to-pink-300",
      darkIconBg: "dark:from-rose-500/30 dark:to-pink-500/20",
      color: "text-rose-700 dark:text-rose-300",
    },
  ];

  // Standards (6)
  const standards = [
    {
      icon: ShieldCheck,
      title: lang === "bn" ? "ব্যাকগ্রাউন্ড যাচাইকৃত" : "Background Verified",
      desc:
        lang === "bn"
          ? "সব টেকনিশিয়ানের সম্পূর্ণ পরিচয় ও অতীত যাচাই করা হয়।"
          : "All technicians undergo thorough identity and history verification.",
      color: "text-brand-600 dark:text-brand-300",
      bg: "bg-brand-500/10",
    },
    {
      icon: GraduationCap,
      title:
        lang === "bn" ? "পেশাদার প্রশিক্ষণপ্রাপ্ত" : "Professionally Trained",
      desc:
        lang === "bn"
          ? "নিয়মিত প্রশিক্ষণ প্রোগ্রামে অংশগ্রহণকারী দক্ষ পেশাদার।"
          : "Skilled professionals who participate in regular training programs.",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: Award,
      title: lang === "bn" ? "অভিজ্ঞ ও পরীক্ষিত" : "Experienced & Tested",
      desc:
        lang === "bn"
          ? "বছরের পর বছর হাতে-কলমে অভিজ্ঞতা ও দক্ষতা পরীক্ষায় উত্তীর্ণ।"
          : "Years of hands-on experience and passed skill assessments.",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Clock,
      title:
        lang === "bn" ? "সময়ানুবর্তী ও নির্ভরযোগ্য" : "Punctual & Reliable",
      desc:
        lang === "bn"
          ? "সময়মতো আসা এবং প্রতিশ্রুতি অনুযায়ী কাজ শেষ করা।"
          : "On-time arrival and completing work as promised.",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: HeartHandshake,
      title:
        lang === "bn" ? "সৌজন্যপূর্ণ ও পেশাদার" : "Courteous & Professional",
      desc:
        lang === "bn"
          ? "গ্রাহকদের সাথে সম্মানজনক ও পেশাদার আচরণ।"
          : "Respectful and professional behavior with customers.",
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: Sparkles,
      title: lang === "bn" ? "মানসম্পন্ন কাজ" : "Quality Workmanship",
      desc:
        lang === "bn"
          ? "প্রতিটি কাজ সর্বোচ্চ মান অনুসরণ করে সম্পন্ন করা হয়।"
          : "Every job completed following the highest quality standards.",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  // Selection Process (4 steps)
  const selectionProcess = [
    {
      icon: Search,
      step: "01",
      title: lang === "bn" ? "আবেদন ও স্ক্রিনিং" : "Application & Screening",
      desc:
        lang === "bn"
          ? "আগ্রহী পেশাদাররা আবেদন করেন এবং আমরা তাদের যোগ্যতা যাচাই করি।"
          : "Interested professionals apply and we verify their qualifications.",
      color: "bg-brand-500",
    },
    {
      icon: UserCheck,
      step: "02",
      title: lang === "bn" ? "ব্যাকগ্রাউন্ড যাচাই" : "Background Check",
      desc:
        lang === "bn"
          ? "সম্পূর্ণ পরিচয়, ঠিকানা ও পূর্ব কাজের অভিজ্ঞতা যাচাই করা হয়।"
          : "Complete identity, address, and past work experience verification.",
      color: "bg-blue-500",
    },
    {
      icon: ClipboardCheck,
      step: "03",
      title: lang === "bn" ? "দক্ষতা পরীক্ষা" : "Skill Assessment",
      desc:
        lang === "bn"
          ? "ব্যবহারিক পরীক্ষা এবং সাক্ষাত্কার নিয়ে দক্ষতা যাচাই।"
          : "Practical tests and interviews to assess technical skills.",
      color: "bg-green-500",
    },
    {
      icon: Rocket,
      step: "04",
      title:
        lang === "bn" ? "প্রশিক্ষণ ও অন্তর্ভুক্তি" : "Training & Onboarding",
      desc:
        lang === "bn"
          ? "SOHAY BD-এর মান অনুযায়ী প্রশিক্ষণ শেষে অফিসিয়াল যোগদান।"
          : "Official onboarding after training as per SOHAY BD standards.",
      color: "bg-pink-500",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white dark:bg-[#08060f]">
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION with Stats */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-12 pb-16 sm:pt-16 dark:from-[#0d0819] dark:via-[#0b0713] dark:to-[#08060f]">
        <div className="pointer-events-none absolute -top-40 left-1/4 hidden h-96 w-96 rounded-full bg-brand-300/30 blur-[120px] sm:block dark:bg-brand-600/30" />
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-96 w-96 rounded-full bg-brand-400/20 blur-[120px] sm:block dark:bg-brand-500/20" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Wrench className="h-3.5 w-3.5" />
              {text.heroBadge}
            </div>
            <h1 className="mt-5 text-4xl font-bold text-[#111111] sm:text-5xl lg:text-6xl dark:text-white">
              {text.heroHeadingStart}
              <span>{text.heroHeadingAccent}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-white/80">
              {text.desc}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-neutral-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
                  style={{
                    background:
                      stat.gradient === "from-brand-500 to-purple-600"
                        ? "linear-gradient(135deg, #6f42e5, #7c3aed)"
                        : stat.gradient === "from-pink-500 to-rose-600"
                          ? "linear-gradient(135deg, #ec4899, #e11d48)"
                          : stat.gradient === "from-green-500 to-emerald-600"
                            ? "linear-gradient(135deg, #22c55e, #059669)"
                            : "linear-gradient(135deg, #f59e0b, #ea580c)",
                  }}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="mt-3 text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* EXPERTISE CATEGORIES */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Target className="h-3.5 w-3.5" />
              {text.expertiseBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.expertiseHeadingStart}
              <span>{text.expertiseHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.expertiseSub}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-8">
            {expertiseCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group"
              >
                <Link
                  to={`/services/${cat.slug}`}
                  className="relative flex h-full flex-col items-center justify-start gap-2 overflow-hidden rounded-2xl border border-white/60 bg-white p-3 pt-4 text-center shadow-[0_4px_20px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-4 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] dark:ring-white/5"
                >
                  {/* Top glossy shine */}
                  <span className="pointer-events-none absolute inset-x-3 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-white/20" />

                  {/* Corner light spot */}
                  <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/40 blur-2xl dark:bg-white/5" />

                  {/* 3D Icon Container */}
                  <div
                    className={`
            relative flex h-14 w-14 items-center justify-center rounded-2xl
            bg-gradient-to-br ${cat.iconBg} ${cat.darkIconBg}
            shadow-[0_6px_16px_rgba(15,23,42,0.12),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)]
            ring-1 ring-white/60
            transition-all duration-500 ease-out
            group-hover:scale-110 group-hover:-rotate-6
            sm:h-16 sm:w-16
            dark:shadow-[0_6px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.2)]
            dark:ring-white/10
          `}
                  >
                    {/* Inner highlight */}
                    <span className="pointer-events-none absolute inset-2 rounded-xl bg-gradient-to-b from-white/40 to-transparent dark:from-white/10" />

                    {/* 3D Image with fallback to lucide icon */}
                    {cat.icon3d ? (
                      <img
                        src={cat.icon3d}
                        alt={cat.label}
                        className="relative h-10 w-10 object-contain drop-shadow-md sm:h-11 sm:w-11"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const fallback = (e.target as HTMLImageElement)
                            .nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "block";
                        }}
                      />
                    ) : null}

                    {/* Fallback icon */}
                    <cat.icon
                      className={`relative h-6 w-6 sm:h-7 sm:w-7 ${cat.color} drop-shadow-sm`}
                      strokeWidth={2.2}
                      style={{ display: cat.icon3d ? "none" : "block" }}
                    />
                  </div>

                  {/* Label */}
                  <p className="relative mt-1 line-clamp-2 min-h-[2.2rem] px-0.5 text-center text-[10px] font-semibold leading-tight text-neutral-800 sm:text-[11px] dark:text-neutral-100">
                    {cat.label}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* STANDARDS - Why Our Technicians Are Special */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-white to-brand-50/30 py-20 sm:py-24 dark:from-[#08060f] dark:to-[#0d0819]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-white/5 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              {text.standardsBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.standardsHeadingStart}
              <span>{text.standardsHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.standardsSub}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((std, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/30"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${std.bg} ${std.color}`}
                >
                  <std.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-[#111111] dark:text-white">
                  {std.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {std.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* SELECTION PROCESS - 4 Steps */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Search className="h-3.5 w-3.5" />
              {text.processBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.processHeadingStart}
              <span>{text.processHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.processSub}
            </p>
          </motion.div>

          <div className="mt-14 space-y-4">
            {selectionProcess.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${step.color} text-white shadow-md`}
                  >
                    <step.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* MEET OUR TECHNICIANS - Team Grid */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/30 to-white py-20 sm:py-24 dark:from-[#0d0819] dark:to-[#08060f]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-1/4 hidden h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] sm:block dark:bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-white/5 dark:text-brand-300">
              <Users className="h-3.5 w-3.5" />
              {text.listBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.listHeading}
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.listSub}
            </p>
          </motion.div>

          {/* Grid */}
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

      {/* ═══════════════════════════════════════ */}
      {/* JOIN OUR TEAM - CTA */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-pink-500 p-8 text-center text-white shadow-2xl sm:p-12"
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <TrendingUp className="h-3.5 w-3.5" />
                {text.joinBadge}
              </div>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                {text.joinHeadingStart}
                <br className="sm:hidden" />
                <span className="italic">{text.joinHeadingAccent}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:text-base">
                {text.joinSub}
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/8801894202074?text=Hello%20SOHAY%20BD!%20I%20am%20a%20skilled%20technician%20interested%20in%20joining%20your%20team.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {text.joinButton}
                  <Rocket className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

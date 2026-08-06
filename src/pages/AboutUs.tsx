import type { ReactElement } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Heart,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
  TrendingUp,
  Lightbulb,
  HandHeart,
  Rocket,
  Calendar,
  MapPin,
  Zap,
} from "lucide-react";
import { teamMembers, type TeamMember } from "../data/team";
import { useLanguage } from "../context/LanguageContext";

// Custom SVG social icons
const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33m0 1.87c-3.16 0-3.5.01-4.74.07-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.24-.07 1.58-.07 4.74s.01 3.5.07 4.74c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.24.06 1.58.07 4.74.07s3.5-.01 4.74-.07c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.24.07-1.58.07-4.74s-.01-3.5-.07-4.74c-.04-.98-.2-1.5-.34-1.86a3.02 3.02 0 0 0-.75-1.15 3.02 3.02 0 0 0-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.24-.06-1.58-.07-4.74-.07M12 6.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28m0 1.87a3.27 3.27 0 1 0 0 6.54 3.27 3.27 0 0 0 0-6.54m5.34-3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

function SocialLink({
  href,
  Icon,
  label,
}: {
  href?: string;
  Icon: () => ReactElement;
  label: string;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-white/20 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-brand-400/50 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
    >
      <Icon />
    </a>
  );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      {/* Photo */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-md ring-1 ring-neutral-200 transition-all group-hover:ring-brand-400 dark:bg-white/5 dark:ring-white/10 dark:group-hover:ring-brand-500/50">
        <img
          src={member.photo}
          alt={member.name}
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
            initial.textContent = member.name.charAt(0);
            initial.className =
              "text-4xl font-bold text-brand-500 dark:text-brand-300";
            target.parentElement?.appendChild(initial);
          }}
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="text-base font-bold text-[#111111] dark:text-white">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-brand-600 dark:text-brand-300">
          {member.title}
        </p>

        {/* Social links */}
        <div className="mt-3 flex items-center gap-2">
          <SocialLink
            href={member.linkedin}
            Icon={LinkedinIcon}
            label="LinkedIn"
          />
          <SocialLink
            href={member.instagram}
            Icon={InstagramIcon}
            label="Instagram"
          />
          <SocialLink
            href={member.facebook}
            Icon={FacebookIcon}
            label="Facebook"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  const { lang } = useLanguage();

  const text = {
    // Hero
    heroBadge: lang === "bn" ? "আমাদের সম্পর্কে জানুন" : "Get to Know Us",
    heroHeadingStart: lang === "bn" ? "সহায় বিডি" : "About ",
    heroHeadingAccent: lang === "bn" ? " সম্পর্কে" : "SOHAY BD",
    aboutDesc1:
      lang === "bn"
        ? "সহায় বিডি একটি প্রযুক্তি-নির্ভর মাল্টি-সার্ভিস প্ল্যাটফর্ম যা দৈনন্দিন জীবনকে সহজ করতে তৈরি করা হয়েছে — বিশ্বস্ত সার্ভিস পেশাদারদের সাথে রংপুরের গ্রাহকদের যুক্ত করে। হোম মেইনটেন্যান্স, ইলেকট্রিক্যাল, প্লাম্বিং, এসি সার্ভিস, ডিপ ক্লিনিং, লন্ড্রি, বিউটি, হোম শিফটিং সহ আরো অনেক গুরুত্বপূর্ণ সার্ভিস — সবকিছু একটি নির্ভরযোগ্য প্ল্যাটফর্মে পাওয়া যায়।"
        : "SOHAY BD is a technology-driven multi-service platform built to simplify everyday life by connecting customers with trusted service professionals across Rangpur, Bangladesh. From home maintenance, electrical, plumbing, AC service, deep cleaning, laundry, beauty, home shifting, and many other essential services, everything is available through one reliable platform.",
    aboutDesc2:
      lang === "bn"
        ? "আমাদের লক্ষ্য প্রতিটি গ্রাহকের জন্য পেশাদার হোম সার্ভিসকে আরো সহজলভ্য, স্বচ্ছ এবং ঝামেলা-মুক্ত করে তোলা। উদ্ভাবনী প্রযুক্তি এবং যত্ন সহকারে যাচাইকৃত সার্ভিস পার্টনারদের সমন্বয়ে আমরা এমন একটি প্ল্যাটফর্ম গড়ে তুলছি যেখানে গুণমান, বিশ্বাস, সুবিধা এবং গ্রাহক সন্তুষ্টি সবসময় সর্বোচ্চ অগ্রাধিকার পায়।"
        : "Our mission is to make professional home services more accessible, transparent, and hassle-free for every customer. By combining innovative technology with carefully verified service partners, we are building a platform where quality, trust, convenience, and customer satisfaction always come first.",

    // Stats
    stat1Label: lang === "bn" ? "সার্ভিস ক্যাটাগরি" : "Service Categories",
    stat2Label: lang === "bn" ? "যাচাইকৃত পেশাদার" : "Verified Professionals",
    stat3Label: lang === "bn" ? "সন্তুষ্ট গ্রাহক" : "Happy Customers",
    stat4Label: lang === "bn" ? "রেটিং" : "Rating",

    // Mission Vision Values
    missionVisionBadge: lang === "bn" ? "আমাদের পরিচয়" : "Our Identity",
    missionVisionHeadingStart:
      lang === "bn" ? "মিশন, ভিশন এবং " : "Mission, Vision & ",
    missionVisionHeadingAccent: lang === "bn" ? "মূল্যবোধ" : "Values",
    missionVisionSub:
      lang === "bn"
        ? "যা আমাদের চালনা করে এবং আমরা কীভাবে কাজ করি"
        : "What drives us and how we operate",

    missionTitle: lang === "bn" ? "আমাদের মিশন" : "Our Mission",
    missionDesc:
      lang === "bn"
        ? "প্রযুক্তির শক্তি ব্যবহার করে প্রতিটি বাংলাদেশি পরিবারের কাছে বিশ্বস্ত, সহজলভ্য এবং সাশ্রয়ী হোম সার্ভিস পৌঁছে দেওয়া।"
        : "To empower every Bangladeshi household with trusted, accessible, and affordable home services through the power of technology.",

    visionTitle: lang === "bn" ? "আমাদের ভিশন" : "Our Vision",
    visionDesc:
      lang === "bn"
        ? "বাংলাদেশের এক নম্বর হোম সার্ভিস প্ল্যাটফর্ম হয়ে ওঠা — যেখানে গুণমান, বিশ্বাস এবং সন্তুষ্টি প্রতিটি সার্ভিসের কেন্দ্রে থাকে।"
        : "To become Bangladesh's #1 home service platform — where quality, trust, and satisfaction are at the heart of every service.",

    valuesTitle: lang === "bn" ? "আমাদের মূল্যবোধ" : "Our Values",
    valuesDesc:
      lang === "bn"
        ? "স্বচ্ছতা, নির্ভরযোগ্যতা, গ্রাহক-প্রথম দৃষ্টিভঙ্গি এবং ক্রমাগত উদ্ভাবন — এগুলোই আমাদের প্রতিটি সিদ্ধান্তের ভিত্তি।"
        : "Transparency, reliability, customer-first approach, and continuous innovation — these are the foundations of every decision we make.",

    // Why SOHAY BD
    whyBadge: lang === "bn" ? "কেন সহায় বিডি" : "Why SOHAY BD",
    whyHeadingStart: lang === "bn" ? "কেন আমাদের " : "What Makes Us ",
    whyHeadingAccent: lang === "bn" ? "বেছে নেবেন" : "Different",
    whySub:
      lang === "bn"
        ? "আমরা যা করি তার পিছনের গল্প যা আমাদের বিশেষ করে তোলে"
        : "The story behind what we do that makes us special",

    // Journey
    journeyBadge: lang === "bn" ? "আমাদের যাত্রা" : "Our Journey",
    journeyHeadingStart: lang === "bn" ? "রংপুর থেকে " : "From Rangpur to ",
    journeyHeadingAccent: lang === "bn" ? "সারা বাংলাদেশ" : "All of Bangladesh",
    journeySub:
      lang === "bn"
        ? "একটি ছোট স্বপ্ন থেকে জাতীয় প্ল্যাটফর্ম গড়ে তোলার পথে আমাদের অগ্রযাত্রা"
        : "Our journey from a small dream to building a national platform",

    // Team
    leadershipBadge: lang === "bn" ? "লিডারশিপ" : "Leadership",
    leadershipHeading:
      lang === "bn"
        ? "নিবেদিত প্রতিষ্ঠাতাদের হাতে গড়া"
        : "Built by Passionate Founders",
    leadershipDesc:
      lang === "bn"
        ? "সহায় বিডি প্রতিষ্ঠিত হয়েছে প্রযুক্তি, উদ্ভাবন এবং বিশ্বাসের মাধ্যমে বাংলাদেশের হোম সার্ভিস ইন্ডাস্ট্রিকে রূপান্তরিত করার একটি দৃষ্টিভঙ্গি নিয়ে।"
        : "SOHAY BD was founded with a vision to transform the home service industry in Bangladesh through technology, innovation, and trust.",
  };

  // Stats data
  const stats = [
    {
      icon: Building2,
      value: "30+",
      label: text.stat1Label,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ShieldCheck,
      value: "50+",
      label: text.stat2Label,
      color: "from-brand-500 to-brand-600",
    },
    {
      icon: Users,
      value: "1000+",
      label: text.stat3Label,
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Award,
      value: "4.9★",
      label: text.stat4Label,
      color: "from-amber-500 to-orange-600",
    },
  ];

  // Mission, Vision, Values
  const missionVisionValues = [
    {
      icon: Target,
      title: text.missionTitle,
      desc: text.missionDesc,
      color: "from-brand-500 to-purple-600",
      bgColor: "bg-brand-50 dark:bg-brand-500/10",
      iconColor: "text-brand-600 dark:text-brand-300",
    },
    {
      icon: Eye,
      title: text.visionTitle,
      desc: text.visionDesc,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-300",
    },
    {
      icon: Heart,
      title: text.valuesTitle,
      desc: text.valuesDesc,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-500/10",
      iconColor: "text-pink-600 dark:text-pink-300",
    },
  ];

  // Why SOHAY BD (6 features)
  const whyFeatures = [
    {
      icon: ShieldCheck,
      title: lang === "bn" ? "যাচাইকৃত পেশাদার" : "Verified Professionals",
      desc:
        lang === "bn"
          ? "প্রতিটি পেশাদারের ব্যাকগ্রাউন্ড যাচাই ও দক্ষতা পরীক্ষা করা হয়।"
          : "Every professional undergoes background verification and skill assessment.",
      color: "text-brand-600 dark:text-brand-300",
      bg: "bg-brand-500/10",
    },
    {
      icon: Zap,
      title: lang === "bn" ? "দ্রুত সাড়া" : "Quick Response",
      desc:
        lang === "bn"
          ? "৩০ মিনিটের মধ্যে পেশাদার পাঠানোর নিশ্চয়তা।"
          : "Guaranteed professional dispatch within 30 minutes.",
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      icon: HandHeart,
      title: lang === "bn" ? "স্বচ্ছ মূল্য" : "Transparent Pricing",
      desc:
        lang === "bn"
          ? "কোনো লুকানো চার্জ নেই — কাজ শুরুর আগেই দাম জানুন।"
          : "No hidden charges — know the price before work begins.",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: Lightbulb,
      title: lang === "bn" ? "উদ্ভাবনী প্রযুক্তি" : "Innovative Technology",
      desc:
        lang === "bn"
          ? "সহজ বুকিং, AI সাপোর্ট এবং আধুনিক প্ল্যাটফর্ম।"
          : "Easy booking, AI support, and modern platform experience.",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: TrendingUp,
      title: lang === "bn" ? "মান নিশ্চয়তা" : "Quality Assurance",
      desc:
        lang === "bn"
          ? "সার্ভিসের গুণমান পর্যবেক্ষণ ও উন্নতির জন্য নিয়মিত রিভিউ।"
          : "Regular reviews to monitor and improve service quality.",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Sparkles,
      title: lang === "bn" ? "গ্রাহক সন্তুষ্টি" : "Customer Satisfaction",
      desc:
        lang === "bn"
          ? "গ্রাহকদের খুশি করা আমাদের প্রথম অগ্রাধিকার।"
          : "Making customers happy is our first priority.",
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  // Journey milestones
  const milestones = [
    {
      icon: Lightbulb,
      year: "2025",
      title: lang === "bn" ? "ধারণা জন্ম" : "The Idea Born",
      desc:
        lang === "bn"
          ? "রংপুরের মানুষের জন্য একটি বিশ্বস্ত হোম সার্ভিস প্ল্যাটফর্মের স্বপ্ন দেখা হয়।"
          : "The dream of a trusted home service platform for the people of Rangpur was born.",
      color: "bg-blue-500",
    },
    {
      icon: Rocket,
      year: "2026",
      title: lang === "bn" ? "সহায় বিডি চালু" : "SOHAY BD Launched",
      desc:
        lang === "bn"
          ? "আনুষ্ঠানিকভাবে সহায় বিডি প্ল্যাটফর্ম চালু করা হয় রংপুরে।"
          : "SOHAY BD platform officially launched in Rangpur.",
      color: "bg-brand-500",
    },
    {
      icon: Users,
      year: "2026+",
      title: lang === "bn" ? "দ্রুত বৃদ্ধি" : "Rapid Growth",
      desc:
        lang === "bn"
          ? "হাজারো পরিবার সেবা নিচ্ছেন এবং নেটওয়ার্ক প্রতিদিন বাড়ছে।"
          : "Thousands of families served and the network grows every day.",
      color: "bg-pink-500",
    },
    {
      icon: TrendingUp,
      year: lang === "bn" ? "ভবিষ্যৎ" : "Future",
      title: lang === "bn" ? "জাতীয় সম্প্রসারণ" : "National Expansion",
      desc:
        lang === "bn"
          ? "সমগ্র বাংলাদেশে সেবা প্রসারিত করার পরিকল্পনা।"
          : "Plans to expand services across all of Bangladesh.",
      color: "bg-green-500",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white dark:bg-[#08060f]">
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION with Group Photo */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-12 pb-16 sm:pt-16 dark:from-[#0b0713] dark:via-[#0b0713] dark:to-[#08060f]">
        <div className="pointer-events-none absolute -top-40 left-1/4 hidden h-96 w-96 rounded-full bg-brand-300/30 blur-[120px] sm:block dark:bg-brand-600/30" />
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-96 w-96 rounded-full bg-brand-400/20 blur-[120px] sm:block dark:bg-brand-500/20" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Building2 className="h-3.5 w-3.5" />
              {text.heroBadge}
            </div>
            <h1 className="mt-5 text-4xl font-bold text-[#111111] sm:text-5xl lg:text-6xl dark:text-white">
              {text.heroHeadingStart}
              <span>{text.heroHeadingAccent}</span>
            </h1>
            <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-white/80">
              <p>{text.aboutDesc1}</p>
              <p>{text.aboutDesc2}</p>
            </div>
          </motion.div>

          {/* Stats Row */}
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
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${stat.color}"
                  style={{
                    background:
                      stat.color === "from-blue-500 to-blue-600"
                        ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                        : stat.color === "from-brand-500 to-brand-600"
                          ? "linear-gradient(135deg, #6f42e5, #5c30cc)"
                          : stat.color === "from-pink-500 to-rose-600"
                            ? "linear-gradient(135deg, #ec4899, #e11d48)"
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

          {/* Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-14 overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl ring-1 ring-neutral-200 dark:bg-white/5 dark:ring-white/10"
          >
            <img
              src="/images/team/group-photo.jpeg"
              alt="SOHAY BD Team"
              className="h-auto w-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.innerHTML =
                    '<div class="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200 text-brand-600 dark:from-brand-900/30 dark:to-brand-800/30 dark:text-brand-300"><span class="text-lg font-semibold">Team Photo</span></div>';
                }
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* MISSION, VISION, VALUES */}
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
              {text.missionVisionBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.missionVisionHeadingStart}
              <span>{text.whyHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.missionVisionSub}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionVisionValues.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor}`}
                >
                  <item.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#111111] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* WHY SOHAY BD - 6 Features */}
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
              <Award className="h-3.5 w-3.5" />
              {text.whyBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.whyHeadingStart}
              <span>{text.missionVisionHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.whySub}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/30"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}
                >
                  <feature.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-[#111111] dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* OUR JOURNEY - Timeline */}
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
              <Rocket className="h-3.5 w-3.5" />
              {text.journeyBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.journeyHeadingStart}
              <span>{text.journeyHeadingAccent}</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
              {text.journeySub}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mt-14 space-y-6">
            {milestones.map((milestone, i) => (
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
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${milestone.color} text-white shadow-md sm:h-14 sm:w-14`}
                  >
                    <milestone.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* LEADERSHIP / TEAM MEMBERS */}
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
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-white/5 dark:text-brand-300">
              <Users className="h-3.5 w-3.5" />
              {text.leadershipBadge}
            </div>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white">
              {text.leadershipHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
              {text.leadershipDesc}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {teamMembers.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} />
            ))}
          </div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-neutral-100 bg-gradient-to-br from-brand-50/50 to-white p-8 text-center shadow-sm sm:flex-row sm:text-left dark:border-white/10 dark:from-brand-500/10 dark:to-transparent"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg">
              <MapPin className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Calendar className="h-4 w-4 text-brand-500" />
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                  {lang === "bn" ? "রংপুরে প্রতিষ্ঠিত" : "Based in Rangpur"}
                </p>
              </div>
              <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                SOHAY BD
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {lang === "bn"
                  ? "৩য় তলা, মুজদালিফা প্লাজা, শাপলা রোড, রংপুর ৫৪০০"
                  : "3rd floor, Mujdalifa Plaza, Shapla Road, Rangpur 5400"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

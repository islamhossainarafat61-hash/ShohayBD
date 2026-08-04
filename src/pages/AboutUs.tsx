import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-white/20 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-brand-400/50 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
    >
      <Icon />
    </motion.a>
  );
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      {/* Photo - smaller size */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm dark:bg-white/5">
        <img
          src={member.photo}
          alt={member.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback if image fails to load
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

      {/* Info - compact */}
      <div className="mt-3">
        <h3 className="text-base font-bold text-[#111111] dark:text-white">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
          {member.title}
        </p>

        {/* Social links - smaller */}
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
    backHome: lang === "bn" ? "হোমে ফিরে যান" : "Back to Home",
    aboutHeading: lang === "bn" ? "সহায় বিডি সম্পর্কে" : "About SOHAY BD",
    aboutDesc1:
      lang === "bn"
        ? "সহায় বিডি একটি প্রযুক্তি-নির্ভর মাল্টি-সার্ভিস প্ল্যাটফর্ম যা দৈনন্দিন জীবনকে সহজ করতে তৈরি করা হয়েছে — বিশ্বস্ত সার্ভিস পেশাদারদের সাথে রংপুরের গ্রাহকদের যুক্ত করে। হোম মেইনটেন্যান্স, ইলেকট্রিক্যাল, প্লাম্বিং, এসি সার্ভিস, ডিপ ক্লিনিং, লন্ড্রি, বিউটি, হোম শিফটিং সহ আরো অনেক গুরুত্বপূর্ণ সার্ভিস — সবকিছু একটি নির্ভরযোগ্য প্ল্যাটফর্মে পাওয়া যায়।"
        : "SOHAY BD is a technology-driven multi-service platform built to simplify everyday life by connecting customers with trusted service professionals across in Rangpur, Bangladesh. From home maintenance, electrical, plumbing, AC service, deep cleaning, laundry, beauty, home shifting, and many other essential services, everything is available through one reliable platform.",
    aboutDesc2:
      lang === "bn"
        ? "আমাদের লক্ষ্য প্রতিটি গ্রাহকের জন্য পেশাদার হোম সার্ভিসকে আরো সহজলভ্য, স্বচ্ছ এবং ঝামেলা-মুক্ত করে তোলা। উদ্ভাবনী প্রযুক্তি এবং যত্ন সহকারে যাচাইকৃত সার্ভিস পার্টনারদের সমন্বয়ে আমরা এমন একটি প্ল্যাটফর্ম গড়ে তুলছি যেখানে গুণমান, বিশ্বাস, সুবিধা এবং গ্রাহক সন্তুষ্টি সবসময় সর্বোচ্চ অগ্রাধিকার পায়।"
        : "Our mission is to make professional home services more accessible, transparent, and hassle-free for every customer. By combining innovative technology with carefully verified service partners, we are building a platform where quality, trust, convenience, and customer satisfaction always come first.",
    leadershipBadge: lang === "bn" ? "লিডারশিপ" : "Leadership",
    leadershipHeading:
      lang === "bn"
        ? "নিবেদিত প্রতিষ্ঠাতাদের হাতে গড়া"
        : "Built by Passionate Founders",
    leadershipDesc:
      lang === "bn"
        ? "সহায় বিডি প্রতিষ্ঠিত হয়েছে প্রযুক্তি, উদ্ভাবন এবং বিশ্বাসের মাধ্যমে বাংলাদেশের হোম সার্ভিস ইন্ডাস্ট্রিকে রূপান্তরিত করার একটি দৃষ্টিভঙ্গি নিয়ে। আমাদের প্রতিষ্ঠাতা দল একটি প্ল্যাটফর্ম তৈরি করতে প্রতিশ্রুতিবদ্ধ যা দক্ষ পেশাদারদের ক্ষমতায়ন করে এবং প্রতিটি গ্রাহকের জন্য একটি নিরবিচ্ছিন্ন, নিরাপদ ও প্রিমিয়াম অভিজ্ঞতা প্রদান করে। একসাথে আমরা এমন একটি ভবিষ্যৎ গড়ে তুলছি যেখানে নির্ভরযোগ্য হোম সার্ভিস মাত্র কয়েক ক্লিকের দূরত্বে।"
        : "SOHAY BD was founded with a vision to transform the home service industry in Bangladesh through technology, innovation, and trust. Our founding team is dedicated to creating a platform that empowers skilled professionals while delivering a seamless, secure, and premium experience for every customer. Together, we are building a future where reliable home services are just a few taps away.",
  };

  return (
    <main className="relative overflow-hidden bg-white dark:bg-[#08060f]">
      {/* SECTION 1: About + Group Photo (Theme-aware background) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-16 dark:from-[#0b0713] dark:via-[#0b0713] dark:to-[#08060f]">
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-300/30 blur-[120px] dark:bg-brand-600/30" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-500/20" />
        <div className="noise-bg absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
          >
            <ArrowLeft className="h-4 w-4" /> {text.backHome}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8"
          >
            <h1 className="text-4xl font-bold leading-tight text-[#111111] sm:text-5xl lg:text-6xl dark:text-white">
              {text.aboutHeading}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg dark:text-white/80">
              <p>{text.aboutDesc1}</p>
              <p>{text.aboutDesc2}</p>
            </div>
          </motion.div>

          {/* Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
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

      {/* SECTION 2: Leadership / Team Members */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              👥 {text.leadershipBadge}
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white">
              {text.leadershipHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
              {text.leadershipDesc}
            </p>
          </motion.div>

          {/* Team Grid — Mobile: 2 cols, Tablet: 3 cols, Desktop: 3 cols */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {teamMembers.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

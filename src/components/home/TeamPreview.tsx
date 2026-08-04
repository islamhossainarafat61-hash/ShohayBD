import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { teamMembers, type TeamMember } from "../../data/team";
import { useLanguage } from "../../context/LanguageContext";

// Custom SVG social icons
const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33m0 1.87c-3.16 0-3.5.01-4.74.07-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.24-.07 1.58-.07 4.74s.01 3.5.07 4.74c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.24.06 1.58.07 4.74.07s3.5-.01 4.74-.07c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.24.07-1.58.07-4.74s-.01-3.5-.07-4.74c-.04-.98-.2-1.5-.34-1.86a3.02 3.02 0 0 0-.75-1.15 3.02 3.02 0 0 0-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.24-.06-1.58-.07-4.74-.07M12 6.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28m0 1.87a3.27 3.27 0 1 0 0 6.54 3.27 3.27 0 0 0 0-6.54m5.34-3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3 w-3"
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
      className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 shadow-sm transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-brand-400/50 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
    >
      <Icon />
    </motion.a>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      {/* Photo - compact size */}
      <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm dark:bg-white/5">
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
              "text-3xl font-bold text-brand-500 dark:text-brand-300";
            target.parentElement?.appendChild(initial);
          }}
        />
      </div>

      {/* Info - compact */}
      <div className="mt-3">
        <h3 className="text-sm font-bold text-[#111111] sm:text-base dark:text-white">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
          {member.title}
        </p>

        {/* Social links - very compact */}
        <div className="mt-2 flex items-center gap-1.5">
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

export default function TeamPreview() {
  const { lang } = useLanguage();

  const text = {
    badge: lang === "bn" ? "👥 আমাদের টিম" : "👥 Meet Our Team",
    heading:
      lang === "bn" ? "যারা সহায় বিডি গড়ছেন" : "The People Behind SOHAY BD",
    sub:
      lang === "bn"
        ? "প্রযুক্তি, উদ্ভাবন এবং বিশ্বাসের মাধ্যমে বাংলাদেশের হোম সার্ভিস ইন্ডাস্ট্রিকে রূপান্তরিত করতে নিবেদিত একটি দল।"
        : "A dedicated team transforming the home service industry in Bangladesh through technology, innovation, and trust.",
    viewFullAbout:
      lang === "bn" ? "সম্পূর্ণ অ্যাবাউট পেজ দেখুন" : "View Full About Page",
  };

  return (
    <section
      className="relative overflow-hidden bg-brand-50/30 py-24 dark:bg-[#0d0819]"
      aria-labelledby="team-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:bg-white/5 dark:text-brand-300">
            {text.badge}
          </span>
          <h2
            id="team-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        {/* Team Grid — Mobile: 2 cols, Tablet+: 3 cols */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* View Full About Page button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(111,66,229,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(111,66,229,0.55)]"
          >
            {text.viewFullAbout}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

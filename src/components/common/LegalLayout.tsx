import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const { lang } = useLanguage();
  const lastUpdatedLabel = lang === "bn" ? "সর্বশেষ আপডেট" : "Last updated";

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-16 dark:bg-[#08060f]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            SOHAY BD
          </span>
          <h1 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            {lastUpdatedLabel}: {updated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-neutral mt-10 max-w-none space-y-6 text-neutral-600 dark:text-neutral-300 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#111111] dark:[&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_li]:mb-2 [&_p]:leading-relaxed"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}

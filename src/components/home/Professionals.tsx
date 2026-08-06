import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, ArrowRight, Users } from "lucide-react";
import { technicians } from "../../data/technicians";
import { useLanguage } from "../../context/LanguageContext";

export default function Professionals() {
  const { lang } = useLanguage();

  const text = {
    badge: lang === "bn" ? "আমাদের টিম" : "Our People",
    headingStart: lang === "bn" ? "আপনার বিশ্বাসে, " : "Trusted by You, ",
    headingAccent: lang === "bn" ? "আমাদের যাচাইয়ে" : "Verified by Us",
    sub:
      lang === "bn"
        ? "আমাদের যাচাইকৃত ও দক্ষ টেকনিশিয়ানদের সাথে পরিচিত হন যারা প্রতিদিন হাজারো পরিবারকে সেবা দিচ্ছেন।"
        : "Meet our verified and skilled technicians who serve thousands of families every day.",
    verifiedLabel: lang === "bn" ? "যাচাইকৃত" : "Verified",
    readyLabel: lang === "bn" ? "কাজের জন্য প্রস্তুত" : "Ready",
    viewAll: lang === "bn" ? "সব টেকনিশিয়ান দেখুন" : "View All Technicians",
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-[#08060f]"
      aria-labelledby="pros-heading"
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
              <Users className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:text-[13px] dark:text-neutral-200">
              {text.badge}
            </span>
          </div>

          <h2
            id="pros-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingStart}
            <span>{text.headingAccent}</span>
          </h2>
          <p className="mt-5 text-base text-neutral-600 dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        {/* Grid - Mobile: 2 cols, Desktop: 4 cols */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {technicians.map((tech, i) => {
            const name = lang === "bn" ? tech.nameBn : tech.name;
            const expert = lang === "bn" ? tech.expertBn : tech.expertEn;

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
              >
                {/* Photo */}
                <div className="relative overflow-hidden bg-neutral-100 dark:bg-white/5">
                  <img
                    src={tech.photo}
                    alt={tech.name}
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
                      initial.textContent = tech.name.charAt(0);
                      initial.className =
                        "text-3xl font-bold text-brand-500 dark:text-brand-300";
                      target.parentElement?.appendChild(initial);
                    }}
                  />
                  <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold text-brand-700 shadow-sm backdrop-blur-sm">
                    <BadgeCheck className="h-2.5 w-2.5" /> {text.verifiedLabel}
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
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                      <CheckCircle2 className="h-3 w-3" /> {text.readyLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Technicians button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/technicians"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            {text.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

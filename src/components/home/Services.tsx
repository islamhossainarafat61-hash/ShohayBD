import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Wrench,
  Fan,
  Sparkles,
  SprayCan,
  Shirt,
  Truck,
  Home,
  Scissors,
  Gem,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../../data/services";
import { useLanguage } from "../../context/LanguageContext";

const iconMap = {
  Zap,
  Wrench,
  Fan,
  Sparkles,
  SprayCan,
  Shirt,
  Truck,
  Home,
  Scissors,
  Gem,
};

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 dark:bg-[#08060f]"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-[120px] dark:bg-brand-700/20" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-300/25 blur-[120px] dark:bg-brand-600/15" />
        <div className="absolute inset-0 noise-bg" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            ✨ {t.servicesBadge}
          </span>
          <h2
            id="services-heading"
            className="mt-5 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {t.servicesHeading}{" "}
            <span className="gradient-text">{t.servicesHeadingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {t.servicesSub}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            // Use Bangla name/description if available and language is Bangla
            const displayName =
              lang === "bn" && service.nameBn ? service.nameBn : service.name;
            const displayDesc =
              lang === "bn" && service.shortDescriptionBn
                ? service.shortDescriptionBn
                : service.shortDescription;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 5) * 0.08, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-neutral-100 bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.05)] transition-all duration-300 group-hover:border-brand-200 group-hover:shadow-[0_20px_45px_rgba(111,66,229,0.25)] dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-brand-500/40"
                >
                  <span className="pointer-events-none absolute -inset-px rounded-[20px] bg-gradient-to-br from-brand-400/0 via-brand-400/0 to-brand-400/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-400/20 group-hover:via-transparent group-hover:to-brand-600/20 group-hover:opacity-100" />
                  <motion.span
                    whileHover={{ rotate: 12 }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300"
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </motion.span>
                  <h3 className="relative mt-5 text-base font-semibold text-[#111111] dark:text-white">
                    {displayName}
                  </h3>
                  <p className="relative mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {displayDesc}
                  </p>
                  <span className="relative mt-5 flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-300">
                    {t.servicesLearnMore}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#111111] via-[#1a1330] to-brand-700 px-6 py-14 text-center shadow-2xl sm:px-14"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl" />
          <h3 className="relative text-2xl font-bold text-white sm:text-3xl">
            {lang === "bn"
              ? "আপনার প্রয়োজনীয় সার্ভিস খুঁজে পাচ্ছেন না?"
              : "Can't Find Your Required Service?"}
          </h3>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
            {lang === "bn"
              ? "আমাদের সার্ভিস লিস্ট প্রতিনিয়ত বাড়ছে। যোগাযোগ করুন, আমরা আপনার জন্য সঠিক পেশাদার খুঁজে দিতে সাহায্য করব।"
              : "Our service list is continuously expanding. Contact us and we'll help you find the right professional."}
          </p>
          <motion.div className="relative mt-8 inline-block">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(111,66,229,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(111,66,229,0.7)]"
            >
              {lang === "bn" ? "সহায় বিডি-র সাথে যোগাযোগ" : "Contact SOHAY BD"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

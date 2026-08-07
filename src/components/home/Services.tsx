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
  LayoutGrid,
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

// 3D-style soft background themes for each card (by index)
const themes = [
  {
    bg: "from-yellow-100/80 via-amber-50 to-white",
    darkBg: "dark:from-yellow-500/10 dark:via-amber-500/5 dark:to-white/[0.02]",
    iconBg: "from-yellow-200 to-amber-300",
    darkIconBg: "dark:from-yellow-500/30 dark:to-amber-500/20",
    iconColor: "text-yellow-700 dark:text-yellow-300",
    glow: "group-hover:shadow-yellow-400/30",
  },
  {
    bg: "from-blue-100/80 via-sky-50 to-white",
    darkBg: "dark:from-blue-500/10 dark:via-sky-500/5 dark:to-white/[0.02]",
    iconBg: "from-blue-200 to-sky-300",
    darkIconBg: "dark:from-blue-500/30 dark:to-sky-500/20",
    iconColor: "text-blue-700 dark:text-blue-300",
    glow: "group-hover:shadow-blue-400/30",
  },
  {
    bg: "from-cyan-100/80 via-teal-50 to-white",
    darkBg: "dark:from-cyan-500/10 dark:via-teal-500/5 dark:to-white/[0.02]",
    iconBg: "from-cyan-200 to-teal-300",
    darkIconBg: "dark:from-cyan-500/30 dark:to-teal-500/20",
    iconColor: "text-cyan-700 dark:text-cyan-300",
    glow: "group-hover:shadow-cyan-400/30",
  },
  {
    bg: "from-green-100/80 via-emerald-50 to-white",
    darkBg:
      "dark:from-green-500/10 dark:via-emerald-500/5 dark:to-white/[0.02]",
    iconBg: "from-green-200 to-emerald-300",
    darkIconBg: "dark:from-green-500/30 dark:to-emerald-500/20",
    iconColor: "text-green-700 dark:text-green-300",
    glow: "group-hover:shadow-green-400/30",
  },
  {
    bg: "from-teal-100/80 via-cyan-50 to-white",
    darkBg: "dark:from-teal-500/10 dark:via-cyan-500/5 dark:to-white/[0.02]",
    iconBg: "from-teal-200 to-cyan-300",
    darkIconBg: "dark:from-teal-500/30 dark:to-cyan-500/20",
    iconColor: "text-teal-700 dark:text-teal-300",
    glow: "group-hover:shadow-teal-400/30",
  },
  {
    bg: "from-indigo-100/80 via-violet-50 to-white",
    darkBg:
      "dark:from-indigo-500/10 dark:via-violet-500/5 dark:to-white/[0.02]",
    iconBg: "from-indigo-200 to-violet-300",
    darkIconBg: "dark:from-indigo-500/30 dark:to-violet-500/20",
    iconColor: "text-indigo-700 dark:text-indigo-300",
    glow: "group-hover:shadow-indigo-400/30",
  },
  {
    bg: "from-orange-100/80 via-amber-50 to-white",
    darkBg: "dark:from-orange-500/10 dark:via-amber-500/5 dark:to-white/[0.02]",
    iconBg: "from-orange-200 to-amber-300",
    darkIconBg: "dark:from-orange-500/30 dark:to-amber-500/20",
    iconColor: "text-orange-700 dark:text-orange-300",
    glow: "group-hover:shadow-orange-400/30",
  },
  {
    bg: "from-pink-100/80 via-rose-50 to-white",
    darkBg: "dark:from-pink-500/10 dark:via-rose-500/5 dark:to-white/[0.02]",
    iconBg: "from-pink-200 to-rose-300",
    darkIconBg: "dark:from-pink-500/30 dark:to-rose-500/20",
    iconColor: "text-pink-700 dark:text-pink-300",
    glow: "group-hover:shadow-pink-400/30",
  },
  {
    bg: "from-rose-100/80 via-pink-50 to-white",
    darkBg: "dark:from-rose-500/10 dark:via-pink-500/5 dark:to-white/[0.02]",
    iconBg: "from-rose-200 to-pink-300",
    darkIconBg: "dark:from-rose-500/30 dark:to-pink-500/20",
    iconColor: "text-rose-700 dark:text-rose-300",
    glow: "group-hover:shadow-rose-400/30",
  },
  {
    bg: "from-purple-100/80 via-violet-50 to-white",
    darkBg:
      "dark:from-purple-500/10 dark:via-violet-500/5 dark:to-white/[0.02]",
    iconBg: "from-purple-200 to-violet-300",
    darkIconBg: "dark:from-purple-500/30 dark:to-violet-500/20",
    iconColor: "text-purple-700 dark:text-purple-300",
    glow: "group-hover:shadow-purple-400/30",
  },
];

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-[#08060f]"
      aria-labelledby="services-heading"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/4 hidden h-96 w-96 rounded-full bg-brand-200/30 blur-[120px] sm:block dark:bg-brand-700/20" />
        <div className="absolute -right-24 bottom-0 hidden h-96 w-96 rounded-full bg-brand-300/25 blur-[120px] sm:block dark:bg-brand-600/15" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-lg border-l-4 border-brand-500 bg-white/80 py-2 pl-3 pr-4 shadow-sm backdrop-blur-sm dark:bg-white/5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-white">
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-700 sm:text-[13px] dark:text-neutral-200">
              {t.servicesBadge}
            </span>
          </div>

          <h2
            id="services-heading"
            className="mt-5 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {t.servicesHeading} <span>{t.servicesHeadingAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            {t.servicesSub}
          </p>
        </motion.div>

        {/* 3D Compact Service Cards - Urban Company style */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const theme = themes[i % themes.length];
            const displayName =
              lang === "bn" && service.nameBn ? service.nameBn : service.name;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 5) * 0.05, duration: 0.4 }}
                className="group"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`
                    relative flex h-full flex-col items-center justify-start gap-2.5
                    overflow-hidden rounded-2xl
                    border border-white/60 dark:border-white/10
                    bg-gradient-to-b ${theme.bg} ${theme.darkBg}
                    p-3 pt-4 text-center
                    shadow-[0_4px_20px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]
                    dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                    ring-1 ring-black/5 dark:ring-white/5
                    transition-all duration-300
                    hover:-translate-y-1.5 hover:shadow-xl ${theme.glow}
                    sm:p-4 sm:pt-5
                  `}
                >
                  {/* Top glossy shine */}
                  <span className="pointer-events-none absolute inset-x-4 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-white/20" />

                  {/* Corner light spot for 3D depth */}
                  <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/50 blur-2xl dark:bg-white/5" />

                  {/* 3D Icon Container */}
                  <div
                    className={`
                      relative flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      bg-gradient-to-br ${theme.iconBg} ${theme.darkIconBg}
                      shadow-[0_6px_16px_rgba(15,23,42,0.12),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.05)]
                      dark:shadow-[0_6px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.2)]
                      ring-1 ring-white/60 dark:ring-white/10
                      transition-all duration-500 ease-out
                      group-hover:scale-110 group-hover:-rotate-6
                      sm:h-20 sm:w-20
                    `}
                  >
                    {/* Inner highlight for 3D depth */}
                    <span className="pointer-events-none absolute inset-2 rounded-xl bg-gradient-to-b from-white/40 to-transparent dark:from-white/10" />

                    {/* Show 3D image if available, otherwise fallback to lucide icon */}
                    {service.icon3d ? (
                      <img
                        src={service.icon3d}
                        alt={displayName}
                        className="relative h-11 w-11 object-contain drop-shadow-md sm:h-14 sm:w-14"
                        loading="lazy"
                        onError={(e) => {
                          // যদি image না পায়, hide করে fallback icon দেখাবে
                          (e.target as HTMLImageElement).style.display = "none";
                          const fallback = (e.target as HTMLImageElement)
                            .nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = "block";
                        }}
                      />
                    ) : null}

                    {/* Fallback lucide icon (only shown if image fails or missing) */}
                    <Icon
                      className={`relative h-7 w-7 sm:h-9 sm:w-9 ${theme.iconColor} drop-shadow-sm`}
                      strokeWidth={2.2}
                      style={{ display: service.icon3d ? "none" : "block" }}
                    />
                  </div>

                  {/* Service Name */}
                  <p className="relative mt-1 line-clamp-2 min-h-[2.5rem] px-0.5 text-center text-[11px] font-semibold leading-tight text-neutral-800 sm:text-xs dark:text-neutral-100">
                    {displayName}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - same as before */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#111111] via-[#1a1330] to-brand-700 px-6 py-12 text-center shadow-xl sm:mt-20 sm:px-14 sm:py-14"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 hidden h-56 w-56 rounded-full bg-brand-500/30 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 hidden h-56 w-56 rounded-full bg-brand-400/20 blur-3xl sm:block" />
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
          <div className="relative mt-8 inline-block">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {lang === "bn" ? "সহায় বিডি-র সাথে যোগাযোগ" : "Contact SOHAY BD"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Wrench,
  Fan,
  Sparkles,
  SprayCan,
  Shirt,
  Truck,
  Home as HomeIcon,
  Scissors,
  Gem,
  ArrowLeft,
  CircleCheckBig,
  ArrowUpRight,
} from "lucide-react";
import { getServiceBySlug, services } from "../data/services";
import { buildWhatsappLink, serviceBookingMessage } from "../lib/whatsapp";
import { useLanguage } from "../context/LanguageContext";

const iconMap = {
  Zap,
  Wrench,
  Fan,
  Sparkles,
  SprayCan,
  Shirt,
  Truck,
  Home: HomeIcon,
  Scissors,
  Gem,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/404" replace />;

  // Localized text for this page
  const text = {
    backToServices: lang === "bn" ? "সার্ভিসে ফিরে যান" : "Back to Services",
    sohayService: lang === "bn" ? "সহায় বিডি সার্ভিস" : "SOHAY BD Service",
    whatsIncluded: lang === "bn" ? "যা যা অন্তর্ভুক্ত" : "What's Included",
    bookThisService:
      lang === "bn" ? "এই সার্ভিসটি বুক করুন" : "Book This Service",
    bookViaWhatsapp:
      lang === "bn" ? "হোয়াটসঅ্যাপে বুক করুন" : "Book via WhatsApp",
    instantChat:
      lang === "bn"
        ? "তাৎক্ষণিক চ্যাট — আমরা কয়েক মিনিটেই আপনার বুকিং কনফার্ম করব।"
        : "Instant chat — we'll confirm your booking within minutes.",
    servingArea:
      lang === "bn"
        ? "📍 বর্তমানে রংপুর, বাংলাদেশে সেবা প্রদান করছি"
        : "📍 Currently serving Rangpur, Bangladesh",
    availableTime:
      lang === "bn"
        ? "🕒 প্রতিদিন সকাল ৮:০০ – রাত ১০:০০"
        : "🕒 Available Everyday, 8:00 AM – 10:00 PM",
    youMightAlsoNeed:
      lang === "bn" ? "আপনার প্রয়োজন হতে পারে" : "You Might Also Need",
    viewDetails: lang === "bn" ? "বিস্তারিত দেখুন" : "View details",
  };

  // Pick correct language for service data (with English fallback)
  const displayName =
    lang === "bn" && service.nameBn ? service.nameBn : service.name;
  const displayTagline =
    lang === "bn" && service.taglineBn ? service.taglineBn : service.tagline;
  const displayDescription =
    lang === "bn" && service.descriptionBn
      ? service.descriptionBn
      : service.description;
  const displayFeatures =
    lang === "bn" && service.featuresBn ? service.featuresBn : service.features;
  const displayPriceNote =
    lang === "bn" && service.priceNoteBn
      ? service.priceNoteBn
      : service.priceNote;

  // Prevent unused variable warning (handleBack was in original but not used)
  void navigate;

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const whatsappLink = buildWhatsappLink(serviceBookingMessage(displayName));

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-32 dark:bg-[#08060f]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-300"
        >
          <ArrowLeft className="h-4 w-4" /> {text.backToServices}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
            <Icon className="h-8 w-8" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
              {text.sohayService}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {displayName}
            </h1>
            <p className="mt-1 text-base text-neutral-500 dark:text-neutral-400">
              {displayTagline}
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-2"
          >
            {displayDescription.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {p}
              </p>
            ))}

            <div className="mt-8 rounded-[20px] border border-neutral-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h2 className="text-lg font-semibold text-[#111111] dark:text-white">
                {text.whatsIncluded}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {displayFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                  >
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-[24px] glass-panel p-7 shadow-[0_20px_50px_rgba(111,66,229,0.2)] lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
              {text.bookThisService}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {displayPriceNote}
            </p>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(37,211,102,0.4)]"
            >
              {text.bookViaWhatsapp}
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
            <p className="mt-3 text-center text-xs text-neutral-400">
              {text.instantChat}
            </p>
            <div className="mt-6 border-t border-dashed border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400">
              <p>{text.servingArea}</p>
              <p className="mt-2">{text.availableTime}</p>
            </div>
          </motion.div>
        </div>

        {/* Related services */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold text-[#111111] dark:text-white">
            {text.youMightAlsoNeed}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((r) => {
              const RIcon = iconMap[r.icon as keyof typeof iconMap];
              const relatedName = lang === "bn" && r.nameBn ? r.nameBn : r.name;
              return (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group rounded-[20px] border border-neutral-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <RIcon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-[#111111] dark:text-white">
                    {relatedName}
                  </p>
                  <span className="mt-2 flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                    {text.viewDetails}{" "}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

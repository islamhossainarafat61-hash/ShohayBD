import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  CircleCheckBig,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  Phone,
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
  const { lang } = useLanguage();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) return <Navigate to="/404" replace />;

  // Localized text
  const text = {
    sohayService: lang === "bn" ? "সহায় বিডি সার্ভিস" : "SOHAY BD Service",
    whatWeOffer: lang === "bn" ? "আমরা যা প্রদান করি" : "What We Offer",
    howItWorks: lang === "bn" ? "কীভাবে কাজ করে" : "How It Works",
    whyChooseUs: lang === "bn" ? "কেন আমাদের বেছে নেবেন" : "Why Choose Us",
    whatsIncluded: lang === "bn" ? "যা যা অন্তর্ভুক্ত" : "What's Included",
    faqs:
      lang === "bn"
        ? "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
        : "Frequently Asked Questions",
    bookThisService:
      lang === "bn" ? "এই সার্ভিসটি বুক করুন" : "Book This Service",
    bookViaWhatsapp:
      lang === "bn" ? "হোয়াটসঅ্যাপে বুক করুন" : "Book via WhatsApp",
    callUs: lang === "bn" ? "কল করুন" : "Call Us",
    instantChat:
      lang === "bn"
        ? "তাৎক্ষণিক চ্যাট — আমরা কয়েক মিনিটেই আপনার বুকিং কনফার্ম করব।"
        : "Instant chat — we'll confirm your booking within minutes.",
    servingArea:
      lang === "bn"
        ? "বর্তমানে রংপুর, বাংলাদেশে সেবা প্রদান করছি"
        : "Currently serving Rangpur, Bangladesh",
    availableTime:
      lang === "bn"
        ? "প্রতিদিন সকাল ৮:০০ – রাত ১০:০০"
        : "Available Everyday, 8:00 AM – 10:00 PM",
    verified: lang === "bn" ? "যাচাইকৃত পেশাদার" : "Verified Professionals",
    youMightAlsoNeed:
      lang === "bn" ? "আপনার প্রয়োজন হতে পারে" : "You Might Also Need",
    viewDetails: lang === "bn" ? "বিস্তারিত দেখুন" : "View details",
    readyToBook: lang === "bn" ? "বুক করতে প্রস্তুত?" : "Ready to Book?",
    ctaSubtext:
      lang === "bn"
        ? "আজই বুক করুন এবং আমাদের বিশ্বস্ত পেশাদারদের সেবা উপভোগ করুন।"
        : "Book today and enjoy service from our trusted professionals.",
  };

  // Localized service data
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
  const displayBenefits =
    lang === "bn" && service.benefitsBn ? service.benefitsBn : service.benefits;

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const whatsappLink = buildWhatsappLink(serviceBookingMessage(displayName));

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-8 sm:pt-12 dark:bg-[#08060f]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 hidden h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] sm:block dark:bg-brand-700/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-brand-50/50 via-white to-brand-50/30 p-6 shadow-sm sm:p-10 dark:border-white/10 dark:from-brand-500/10 dark:via-white/[0.02] dark:to-brand-500/5"
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-brand-500 text-white shadow-lg sm:h-20 sm:w-20">
              <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2} />
            </span>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border-l-4 border-brand-500 bg-white/80 py-1 pl-2.5 pr-3 text-[10px] font-semibold uppercase tracking-wide text-brand-700 shadow-sm sm:text-xs dark:bg-white/5 dark:text-brand-300">
                {text.sohayService}
              </div>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:text-5xl dark:text-white">
                {displayName}
              </h1>
              <p className="mt-2 text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
                {displayTagline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-500" />
                  {text.verified}
                </span>
                <span className="flex items-center gap-1">
                  <Star
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                  4.9 / 5.0
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-brand-500" />
                  8AM - 10PM
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left column - Content */}
          <div className="space-y-10 lg:col-span-2">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {displayDescription.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300"
                >
                  {p}
                </p>
              ))}
            </motion.section>

            {/* Detailed Features Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
                {text.whatWeOffer}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.detailedFeatures?.map((feature, i) => {
                  const title = lang === "bn" ? feature.titleBn : feature.title;
                  const desc =
                    lang === "bn" ? feature.descriptionBn : feature.description;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-500/30"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                        <CircleCheckBig className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-[#111111] dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* How It Works */}
            {service.process && service.process.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
                  {text.howItWorks}
                </h2>
                <div className="mt-6 space-y-4">
                  {service.process.map((step, i) => {
                    const stepTitle = lang === "bn" ? step.stepBn : step.step;
                    const stepDesc =
                      lang === "bn" ? step.descriptionBn : step.description;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white shadow-md">
                          {lang === "bn" ? ["১", "২", "৩", "৪"][i] : i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-[#111111] dark:text-white">
                            {stepTitle}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                            {stepDesc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* Why Choose Us + Features Combined */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-neutral-100 bg-gradient-to-br from-brand-50/40 to-white p-6 sm:p-8 dark:border-white/10 dark:from-brand-500/5 dark:to-transparent"
            >
              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
                {text.whyChooseUs}
              </h2>

              {/* Benefits */}
              {displayBenefits && displayBenefits.length > 0 && (
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {displayBenefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* What's Included */}
              <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-white/10">
                <h3 className="text-lg font-semibold text-[#111111] dark:text-white">
                  {text.whatsIncluded}
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {displayFeatures.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                    >
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
                  {text.faqs}
                </h2>
                <div className="mt-6 space-y-3">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    const question =
                      lang === "bn" ? faq.questionBn : faq.question;
                    const answer = lang === "bn" ? faq.answerBn : faq.answer;
                    return (
                      <div
                        key={i}
                        className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className="text-sm font-semibold text-[#111111] sm:text-base dark:text-white">
                            {question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                {answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* Bottom CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-8 text-center text-white shadow-xl sm:p-10"
            >
              <h2 className="text-2xl font-bold sm:text-3xl">
                {text.readyToBook}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/85 sm:text-base">
                {text.ctaSubtext}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {text.bookViaWhatsapp}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+8801894202074"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  {text.callUs}
                </a>
              </div>
            </motion.section>
          </div>

          {/* Right Sidebar - Sticky Booking Card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
                {text.bookThisService}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {displayPriceNote}
              </p>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {text.bookViaWhatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* Call Button */}
              <a
                href="tel:+8801894202074"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-brand-400/50"
              >
                <Phone className="h-4 w-4" />
                {text.callUs}
              </a>

              <p className="mt-3 text-center text-xs text-neutral-400">
                {text.instantChat}
              </p>

              {/* Info */}
              <div className="mt-6 space-y-3 border-t border-dashed border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  <span>{text.servingArea}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  <span>{text.availableTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
                  <span>{text.verified}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Related Services - 3D Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
            {text.youMightAlsoNeed}
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
            {related.map((r, i) => {
              const RIcon = iconMap[r.icon as keyof typeof iconMap];
              const relatedName = lang === "bn" && r.nameBn ? r.nameBn : r.name;

              // Match theme colors with home page
              const relatedThemes = [
                {
                  iconBg: "from-yellow-200 to-amber-300",
                  darkIconBg: "dark:from-yellow-500/30 dark:to-amber-500/20",
                  color: "text-yellow-700 dark:text-yellow-300",
                },
                {
                  iconBg: "from-blue-200 to-sky-300",
                  darkIconBg: "dark:from-blue-500/30 dark:to-sky-500/20",
                  color: "text-blue-700 dark:text-blue-300",
                },
                {
                  iconBg: "from-pink-200 to-rose-300",
                  darkIconBg: "dark:from-pink-500/30 dark:to-rose-500/20",
                  color: "text-pink-700 dark:text-pink-300",
                },
              ];
              const theme = relatedThemes[i % relatedThemes.length];

              return (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <Link
                    to={`/services/${r.slug}`}
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
                bg-gradient-to-br ${theme.iconBg} ${theme.darkIconBg}
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

                      {/* 3D Image with fallback */}
                      {r.icon3d ? (
                        <img
                          src={r.icon3d}
                          alt={relatedName}
                          className="relative h-10 w-10 object-contain drop-shadow-md sm:h-11 sm:w-11"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                            const fallback = (e.target as HTMLImageElement)
                              .nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "block";
                          }}
                        />
                      ) : null}

                      {/* Fallback icon */}
                      <RIcon
                        className={`relative h-6 w-6 sm:h-7 sm:w-7 ${theme.color} drop-shadow-sm`}
                        strokeWidth={2.2}
                        style={{ display: r.icon3d ? "none" : "block" }}
                      />
                    </div>

                    {/* Service Name */}
                    <p className="relative mt-1 line-clamp-2 min-h-[2.2rem] px-0.5 text-center text-[11px] font-semibold leading-tight text-neutral-800 sm:text-xs dark:text-neutral-100">
                      {relatedName}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

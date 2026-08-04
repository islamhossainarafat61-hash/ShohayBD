import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { BRAND } from "../data/brand";
import { buildWhatsappLink } from "../lib/whatsapp";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  // Localized text for entire contact page
  const text = {
    // Back button
    backHome: lang === "bn" ? "হোমে ফিরে যান" : "Back to Home",

    // Header
    badge: lang === "bn" ? "📞 যোগাযোগ করুন" : "📞 Get in Touch",
    headingStart: lang === "bn" ? "আমরা " : "We're Here to ",
    headingAccent: lang === "bn" ? "সাহায্য করতে প্রস্তুত" : "Help You",
    headingEnd: lang === "bn" ? "" : "",
    sub:
      lang === "bn"
        ? "কোনো প্রশ্ন আছে বা কাস্টম সার্ভিস দরকার? যোগাযোগ করুন — আমাদের টিম দ্রুত সাড়া দেবে।"
        : "Have a question or need a custom service? Reach out and our team will respond quickly.",

    // Info cards
    serviceArea: lang === "bn" ? "সেবা এলাকা" : "Service Area",
    phone: lang === "bn" ? "ফোন" : "Phone",
    email: lang === "bn" ? "ইমেইল" : "Email",
    website: lang === "bn" ? "ওয়েবসাইট" : "Website",
    workingHours: lang === "bn" ? "কাজের সময়" : "Working Hours",

    // WhatsApp button
    chatWhatsapp: lang === "bn" ? "হোয়াটসঅ্যাপে চ্যাট" : "Chat on WhatsApp",

    // Form
    formTitle: lang === "bn" ? "আমাদের মেসেজ পাঠান" : "Send Us a Message",
    formSub:
      lang === "bn"
        ? "এই ফর্মটি আপনার মেসেজ সরাসরি আমাদের হোয়াটসঅ্যাপে পাঠাবে দ্রুত সাড়ার জন্য।"
        : "This form sends your message directly to our WhatsApp for a fast response.",
    fullName: lang === "bn" ? "পুরো নাম" : "Full Name",
    fullNamePlaceholder: lang === "bn" ? "আপনার নাম" : "Your name",
    phoneNumber: lang === "bn" ? "ফোন নম্বর" : "Phone Number",
    phoneNumberPlaceholder: lang === "bn" ? "০১XXXXXXXXX" : "01XXXXXXXXX",
    serviceNeeded: lang === "bn" ? "প্রয়োজনীয় সার্ভিস" : "Service Needed",
    serviceNeededPlaceholder:
      lang === "bn" ? "যেমন: এসি সার্ভিস" : "e.g. AC Service",
    messageLabel: lang === "bn" ? "মেসেজ" : "Message",
    messagePlaceholder:
      lang === "bn"
        ? "আমরা কীভাবে সাহায্য করতে পারি বলুন..."
        : "Tell us how we can help...",
    sendMessage: lang === "bn" ? "মেসেজ পাঠান" : "Send Message",
    redirecting:
      lang === "bn"
        ? "হোয়াটসঅ্যাপে রিডাইরেক্ট করা হচ্ছে... 🎉"
        : "Redirecting you to WhatsApp... 🎉",

    // WhatsApp default message parts
    whatsappGreeting:
      lang === "bn" ? "হ্যালো সহায় বিডি! 👋" : "Hello SOHAY BD! 👋",
    whatsappNameLabel: lang === "bn" ? "নাম" : "Name",
    whatsappPhoneLabel: lang === "bn" ? "ফোন" : "Phone",
    whatsappServiceLabel:
      lang === "bn" ? "প্রয়োজনীয় সার্ভিস" : "Service Needed",
    whatsappMessageLabel: lang === "bn" ? "মেসেজ" : "Message",
    whatsappQuickMsg:
      lang === "bn"
        ? "হ্যালো সহায় বিডি! আমি আপনাদের সার্ভিস সম্পর্কে আরো জানতে চাই।"
        : "Hello SOHAY BD! I'd like to know more about your services.",
  };

  // Info cards data (built dynamically with translated labels)
  const infoCards = [
    { icon: MapPin, label: text.serviceArea, value: BRAND.area },
    { icon: Phone, label: text.phone, value: BRAND.phone },
    { icon: Mail, label: text.email, value: BRAND.email },
    { icon: Globe, label: text.website, value: BRAND.domain },
    { icon: Clock, label: text.workingHours, value: BRAND.hours },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const messageText = `${text.whatsappGreeting}\n\n${text.whatsappNameLabel}: ${form.name}\n${text.whatsappPhoneLabel}: ${form.phone}\n${text.whatsappServiceLabel}: ${form.service}\n${text.whatsappMessageLabel}: ${form.message}`;
    window.open(
      buildWhatsappLink(messageText),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-32 dark:bg-[#08060f]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] dark:bg-brand-700/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            {text.badge}
          </span>
          <h1 className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white">
            {text.headingStart}
            <span className="gradient-text">{text.headingAccent}</span>
            {text.headingEnd}
          </h1>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.sub}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 rounded-[20px] glass-panel p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-neutral-400">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-[#111111] dark:text-white">
                      {c.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={buildWhatsappLink(text.whatsappQuickMsg)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="h-4 w-4" /> {text.chatWhatsapp}
            </motion.a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-neutral-100 bg-white p-8 shadow-[0_20px_50px_rgba(17,17,17,0.06)] lg:col-span-3 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <h2 className="text-xl font-semibold text-[#111111] dark:text-white">
              {text.formTitle}
            </h2>
            <p className="mt-1 text-sm text-neutral-400">{text.formSub}</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {text.fullName}
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder={text.fullNamePlaceholder}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {text.phoneNumber}
                </label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder={text.phoneNumberPlaceholder}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {text.serviceNeeded}
                </label>
                <input
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder={text.serviceNeededPlaceholder}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {text.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder={text.messagePlaceholder}
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(111,66,229,0.4)]"
            >
              {text.sendMessage} <Send className="h-4 w-4" />
            </motion.button>
            {sent && (
              <p className="mt-3 text-center text-sm text-brand-600 dark:text-brand-300">
                {text.redirecting}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </main>
  );
}

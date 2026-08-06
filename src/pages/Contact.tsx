import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Tag,
  MessageSquare,
  Headphones,
  Zap,
  Users,
  Building2,
  Share2,
  Bot,
  ArrowRight,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { BRAND } from "../data/brand";
import { buildWhatsappLink } from "../lib/whatsapp";
import { useLanguage } from "../context/LanguageContext";

// TikTok custom icon
const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.75 2h2.72c.16 1.36.79 2.55 1.77 3.44 1 .93 2.28 1.44 3.76 1.5v2.75c-1.5-.02-2.86-.4-4.03-1.08v6.78c0 3.35-2.72 6.06-6.06 6.06a6.06 6.06 0 0 1-2.85-11.42v2.98a3.3 3.3 0 1 0 3.6 3.28V2z" />
  </svg>
);

// Facebook custom icon
const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

// Instagram custom icon
const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33m0 1.87c-3.16 0-3.5.01-4.74.07-.98.04-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.3.88-.34 1.86-.06 1.24-.07 1.58-.07 4.74s.01 3.5.07 4.74c.04.98.2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.3 1.86.34 1.24.06 1.58.07 4.74.07s3.5-.01 4.74-.07c.98-.04 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.3-.88.34-1.86.06-1.24.07-1.58.07-4.74s-.01-3.5-.07-4.74c-.04-.98-.2-1.5-.34-1.86a3.02 3.02 0 0 0-.75-1.15 3.02 3.02 0 0 0-1.15-.75c-.36-.14-.88-.3-1.86-.34-1.24-.06-1.58-.07-4.74-.07M12 6.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28m0 1.87a3.27 3.27 0 1 0 0 6.54 3.27 3.27 0 0 0 0-6.54m5.34-3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" />
  </svg>
);

// YouTube custom icon
const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81M9.6 15.6V8.4l6.27 3.6z" />
  </svg>
);

export default function Contact() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });
  const [sent, setSent] = useState(false);

  const text = {
    // Hero
    heroBadge:
      lang === "bn" ? "🎧 আমরা সাহায্যের জন্য আছি" : "🎧 We're Here to Help",
    heroHeadingStart: lang === "bn" ? "যোগাযোগ" : "Get in ",
    heroHeadingAccent: lang === "bn" ? " করুন" : "Touch",
    heroSub:
      lang === "bn"
        ? "সহায় বিডি সম্পর্কে কোনো প্রশ্ন? সার্ভিস নিতে চান? আমাদের টিম ২৪/৭ সাহায্যের জন্য প্রস্তুত।"
        : "Have questions about SOHAY BD? Want to book a service? Our team is ready to assist you 24/7.",

    // Stats
    stat1: lang === "bn" ? "সাপোর্ট" : "Support",
    stat2: lang === "bn" ? "সাড়া সময়" : "Response Time",
    stat3: lang === "bn" ? "খুশি গ্রাহক" : "Happy Customers",

    // Channel section
    channelHeadingStart:
      lang === "bn" ? "আপনার পছন্দের " : "Choose Your Preferred ",
    channelHeadingAccent: lang === "bn" ? "চ্যানেল" : "Channel",
    channelSub:
      lang === "bn"
        ? "নিচের যেকোনো চ্যানেলে যোগাযোগ করুন — আমরা যত দ্রুত সম্ভব সাড়া দিব"
        : "Reach out through any of the channels below — we'll respond as quickly as possible",

    // Channel cards
    callUsDirectly: lang === "bn" ? "সরাসরি কল করুন" : "CALL US DIRECTLY",
    phoneSupport: lang === "bn" ? "ফোন সাপোর্ট" : "Phone Support",
    workingSchedule:
      lang === "bn" ? "প্রতিদিন: সকাল ৮টা - রাত ১০টা" : "Everyday: 8AM - 10PM",
    callNow: lang === "bn" ? "কল করুন" : "Call Now",

    quickResponse: lang === "bn" ? "দ্রুত সাড়া" : "QUICK RESPONSE",
    whatsappTitle: "WhatsApp",
    available247: lang === "bn" ? "২৪/৭ উপলব্ধ" : "24/7 Available",
    chatNow: lang === "bn" ? "চ্যাট করুন" : "Chat Now",

    emailUs: lang === "bn" ? "ইমেইল করুন" : "EMAIL US",
    emailSupport: lang === "bn" ? "ইমেইল সাপোর্ট" : "Email Support",
    replyWithin: lang === "bn" ? "১ ঘণ্টার মধ্যে উত্তর" : "Reply within 1 hour",
    sendEmail: lang === "bn" ? "ইমেইল পাঠান" : "Send Email",

    aiChat: lang === "bn" ? "এআই চ্যাট" : "AI CHAT",
    aiSupportTitle: lang === "bn" ? "এআই সাপোর্ট" : "AI Support",
    chatWithAi: lang === "bn" ? "আমাদের এআই এর সাথে চ্যাট" : "Chat with our AI",
    instantReply: lang === "bn" ? "তাৎক্ষণিক উত্তর" : "Instant Reply",
    startChat: lang === "bn" ? "চ্যাট শুরু করুন" : "Start Chat",

    // Office
    ourOffice: lang === "bn" ? "আমাদের অফিস" : "OUR OFFICE",
    officeName: "SOHAY BD",
    address: lang === "bn" ? "ঠিকানা" : "ADDRESS",
    workingHours: lang === "bn" ? "কাজের সময়" : "WORKING HOURS",

    // Quick contact
    quickContact: lang === "bn" ? "দ্রুত যোগাযোগ" : "QUICK CONTACT",
    needImmediate:
      lang === "bn" ? "জরুরি সাহায্য দরকার?" : "Need Immediate Help?",

    // Social
    stayConnected: lang === "bn" ? "সংযুক্ত থাকুন" : "STAY CONNECTED",
    followUs: lang === "bn" ? "আমাদের ফলো করুন" : "Follow Us",

    // Map
    findUsHere: lang === "bn" ? "আমাদের খুঁজুন " : "Find Us ",
    findUsHereAccent: lang === "bn" ? "এখানে" : "Here",
    findUsSub:
      lang === "bn"
        ? "রংপুরে আমাদের অফিসে আসুন। আপনার সাথে দেখা করতে চাই।"
        : "Visit our office in Rangpur. We'd love to meet you in person.",
    getDirections: lang === "bn" ? "দিকনির্দেশ পান" : "Get Directions",
    openInMaps: lang === "bn" ? "ম্যাপে খুলুন" : "Open in Maps",

    // Form
    sendMessageBadge: lang === "bn" ? "✈️ মেসেজ পাঠান" : "✈️ Send a Message",
    formHeadingStart: lang === "bn" ? "চলুন কথা " : "Let's Start a ",
    formHeadingAccent: lang === "bn" ? "শুরু করি" : "Conversation",
    formSub:
      lang === "bn"
        ? "নিচের ফর্মটি পূরণ করুন — আমরা যত দ্রুত সম্ভব উত্তর দিব।"
        : "Fill out the form below and we'll get back to you as soon as possible.",
    fullName: lang === "bn" ? "পুরো নাম" : "Full Name",
    fullNamePlaceholder: lang === "bn" ? "রহিম উদ্দিন" : "John Doe",
    phoneNumber: lang === "bn" ? "ফোন নম্বর" : "Phone Number",
    phoneNumberPlaceholder: lang === "bn" ? "০১XXXXXXXXX" : "01XXXXXXXXX",
    emailAddress: lang === "bn" ? "ইমেইল ঠিকানা" : "Email Address",
    emailPlaceholder: "you@example.com",
    subject: lang === "bn" ? "বিষয়" : "Subject",
    subjectPlaceholder:
      lang === "bn" ? "একটি বিষয় নির্বাচন করুন" : "Select a subject",
    yourMessage: lang === "bn" ? "আপনার মেসেজ" : "Your Message",
    messagePlaceholder:
      lang === "bn"
        ? "আমরা কীভাবে সাহায্য করতে পারি বলুন..."
        : "Tell us how we can help you...",
    subjectOptions: [
      lang === "bn" ? "সাধারণ প্রশ্ন" : "General Inquiry",
      lang === "bn" ? "সার্ভিস বুকিং" : "Service Booking",
      lang === "bn" ? "মূল্য জিজ্ঞাসা" : "Pricing Question",
      lang === "bn" ? "টেকনিক্যাল সাপোর্ট" : "Technical Support",
      lang === "bn" ? "অভিযোগ" : "Complaint",
      lang === "bn" ? "অন্যান্য" : "Other",
    ],
    agreeText: lang === "bn" ? "আমি সম্মত " : "I agree to the ",
    privacyPolicy: lang === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy",
    andText: lang === "bn" ? " এবং " : " and ",
    termsOfService: lang === "bn" ? "শর্তাবলীতে" : "Terms of Service",
    sendMessage: lang === "bn" ? "মেসেজ পাঠান" : "Send Message",
    redirecting:
      lang === "bn"
        ? "হোয়াটসঅ্যাপে রিডাইরেক্ট করা হচ্ছে... 🎉"
        : "Redirecting to WhatsApp... 🎉",
    agreeRequired:
      lang === "bn"
        ? "প্রাইভেসি পলিসিতে সম্মত হতে হবে"
        : "Please agree to Privacy Policy",

    // WhatsApp message parts
    whatsappGreeting:
      lang === "bn" ? "হ্যালো সহায় বিডি! 👋" : "Hello SOHAY BD! 👋",
  };

  // Google Maps embed URL for Rangpur (using the address)
  const mapAddress = encodeURIComponent(
    "3rd floor, Mujdalifa Plaza, Shapla Road, Rangpur 5400, Bangladesh",
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${mapAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.agreed) {
      alert(text.agreeRequired);
      return;
    }

    const messageText = `${text.whatsappGreeting}\n\n👤 ${form.name}\n📞 ${form.phone}\n📧 ${form.email}\n🏷️ ${form.subject}\n\n💬 ${form.message}`;
    window.open(
      buildWhatsappLink(messageText),
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="relative overflow-hidden bg-white pb-24 pt-8 sm:pt-12 dark:bg-[#08060f]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 hidden h-96 w-96 rounded-full bg-brand-200/30 blur-[130px] sm:block dark:bg-brand-700/20" />
        <div className="absolute top-1/2 right-0 hidden h-96 w-96 rounded-full bg-pink-200/20 blur-[130px] sm:block dark:bg-pink-700/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════ */}
        {/* HERO SECTION */}
        {/* ═══════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
            <Headphones className="h-3.5 w-3.5" />
            {text.heroBadge}
          </div>
          <h1 className="mt-5 text-4xl font-bold text-[#111111] sm:text-5xl lg:text-6xl dark:text-white">
            {text.heroHeadingStart}
            <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              {text.heroHeadingAccent}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
            {text.heroSub}
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-4 rounded-2xl border border-neutral-100 bg-white/60 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:gap-8 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md">
                <Clock className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-lg font-bold text-[#111111] dark:text-white">
                  24/7
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {text.stat1}
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-neutral-200 dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md">
                <Zap className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-lg font-bold text-[#111111] dark:text-white">
                  &lt; 1hr
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {text.stat2}
                </div>
              </div>
            </div>

            <div className="h-10 w-px bg-neutral-200 dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md">
                <Users className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-lg font-bold text-[#111111] dark:text-white">
                  1000+
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {text.stat3}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ═══════════════════════════════════════ */}
        {/* CHOOSE YOUR CHANNEL SECTION */}
        {/* ═══════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.channelHeadingStart}
              <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
                {text.channelHeadingAccent}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600 sm:text-base dark:text-neutral-300">
              {text.channelSub}
            </p>
          </div>

          {/* Channel Cards - 4 cards grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone Card */}
            <motion.a
              href={`tel:${BRAND.phoneRaw}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
                <Phone className="h-6 w-6" />
              </span>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {text.callUsDirectly}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                {text.phoneSupport}
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {BRAND.phone}
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {text.workingSchedule}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                {text.callNow}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href={buildWhatsappLink(text.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-green-500/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
                <MessageCircle className="h-6 w-6" />
              </span>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
                {text.quickResponse}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                {text.whatsappTitle}
              </h3>
              <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {BRAND.phone}
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {text.available247}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                {text.chatNow}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href={`mailto:${BRAND.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-pink-500/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md">
                <Mail className="h-6 w-6" />
              </span>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">
                {text.emailUs}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                {text.emailSupport}
              </h3>
              <p className="mt-2 break-all text-xs font-medium text-neutral-700 dark:text-neutral-200">
                {BRAND.email}
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {text.replyWithin}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-pink-600 dark:text-pink-400">
                {text.sendEmail}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>

            {/* AI Chat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <Link
                to="/ai-support"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-500/40"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
                  <Bot className="h-6 w-6" />
                </span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  {text.aiChat}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                  {text.aiSupportTitle}
                </h3>
                <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  {text.chatWithAi}
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {text.instantReply}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {text.startChat}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════ */}
        {/* OFFICE INFO + QUICK CONTACT + SOCIAL */}
        {/* ═══════════════════════════════════════ */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Office Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-md">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                  {text.ourOffice}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                  {text.officeName}
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {text.address}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm leading-relaxed text-neutral-700 hover:text-brand-600 dark:text-neutral-300 dark:hover:text-brand-300"
                  >
                    {BRAND.area}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {text.workingHours}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {BRAND.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
                <Zap className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  {text.quickContact}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                  {text.needImmediate}
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                {text.callNow}
              </a>
              <a
                href={buildWhatsappLink(text.whatsappGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md">
                <Share2 className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400">
                  {text.stayConnected}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#111111] dark:text-white">
                  {text.followUs}
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition-all hover:-translate-y-0.5 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
              >
                <YoutubeIcon className="h-4 w-4" />
                YouTube
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-700 transition-all hover:-translate-y-0.5 hover:bg-pink-100 dark:border-pink-500/20 dark:bg-pink-500/10 dark:text-pink-400 dark:hover:bg-pink-500/20"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-800 transition-all hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <TikTokIcon className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* FIND US HERE - MAP SECTION */}
        {/* ═══════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
              {text.findUsHere}
              <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
                {text.findUsHereAccent}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600 sm:text-base dark:text-neutral-300">
              {text.findUsSub}
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
            {/* Location Info */}
            <div className="border-b border-neutral-100 bg-gradient-to-br from-brand-50/50 to-white p-6 dark:border-white/10 dark:from-brand-500/10 dark:to-transparent sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg">
                  <MapPin className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#111111] dark:text-white">
                    SOHAY BD
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {BRAND.area}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg"
                    >
                      <Navigation className="h-4 w-4" />
                      {text.getDirections}
                    </a>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-brand-400/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {text.openInMaps}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-[400px] w-full sm:h-[500px]">
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SOHAY BD Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════ */}
        {/* CONTACT FORM SECTION */}
        {/* ═══════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            {/* Form Header */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                <Send className="h-3.5 w-3.5" />
                {text.sendMessageBadge}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white">
                {text.formHeadingStart}
                <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
                  {text.formHeadingAccent}
                </span>
              </h2>
              <p className="mt-3 text-sm text-neutral-600 sm:text-base dark:text-neutral-300">
                {text.formSub}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-white">
                    <User className="h-4 w-4 text-brand-500" />
                    {text.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={text.fullNamePlaceholder}
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-brand-500/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-white">
                    <Phone className="h-4 w-4 text-brand-500" />
                    {text.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder={text.phoneNumberPlaceholder}
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-brand-500/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-white">
                    <Mail className="h-4 w-4 text-brand-500" />
                    {text.emailAddress}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder={text.emailPlaceholder}
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-brand-500/20"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-white">
                    <Tag className="h-4 w-4 text-brand-500" />
                    {text.subject}
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-brand-500/20"
                  >
                    <option value="">{text.subjectPlaceholder}</option>
                    {text.subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-white">
                  <MessageSquare className="h-4 w-4 text-brand-500" />
                  {text.yourMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder={text.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-brand-500/20"
                />
              </div>

              {/* Privacy Agreement */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) =>
                    setForm({ ...form, agreed: e.target.checked })
                  }
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-neutral-300 text-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-white/20"
                />
                <span className="text-sm text-neutral-600 dark:text-neutral-300">
                  {text.agreeText}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {text.privacyPolicy}
                  </Link>
                  {text.andText}
                  <Link
                    to="/terms"
                    className="font-semibold text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {text.termsOfService}
                  </Link>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
              >
                {text.sendMessage}
                <Send className="h-4 w-4" />
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-medium text-green-600 dark:text-green-400"
                >
                  {text.redirecting}
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

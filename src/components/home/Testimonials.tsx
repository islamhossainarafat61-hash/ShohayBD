import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Testimonials data with both English and Bangla versions
const testimonialsData = [
  {
    nameEn: "Farhana Akter",
    nameBn: "ফারহানা আক্তার",
    roleEn: "Homemaker, Rangpur",
    roleBn: "গৃহিণী, রংপুর",
    textEn:
      "The electrician arrived right on time and fixed our wiring issue within an hour. Booking through SOHAY BD was incredibly simple!",
    textBn:
      "ইলেকট্রিশিয়ান একদম সময়মতো এসেছিলেন এবং এক ঘণ্টার মধ্যে আমাদের ওয়্যারিং সমস্যা ঠিক করে দিলেন। সহায় বিডি-এর মাধ্যমে বুকিং করা অবিশ্বাস্যভাবে সহজ ছিল!",
    rating: 5,
  },
  {
    nameEn: "Mahmudul Hasan",
    nameBn: "মাহমুদুল হাসান",
    roleEn: "Business Owner",
    roleBn: "ব্যবসায়ী",
    textEn:
      "I booked their deep cleaning service before Eid and the results were amazing. Professional team, fair pricing, highly recommended.",
    textBn:
      "ঈদের আগে তাদের ডিপ ক্লিনিং সার্ভিস বুক করেছিলাম এবং ফলাফল ছিল অসাধারণ। পেশাদার টিম, ন্যায্য মূল্য — সবাইকে সুপারিশ করব।",
    rating: 5,
  },
  {
    nameEn: "Sadia Islam",
    nameBn: "সাদিয়া ইসলাম",
    roleEn: "University Student",
    roleBn: "বিশ্ববিদ্যালয়ের শিক্ষার্থী",
    textEn:
      "Salon at Home saved me so much time. The beautician was skilled and friendly. Will definitely book again!",
    textBn:
      "সেলুন অ্যাট হোম আমার অনেক সময় বাঁচিয়েছে। বিউটিশিয়ান দক্ষ এবং বন্ধুত্বপূর্ণ ছিলেন। অবশ্যই আবার বুক করব!",
    rating: 5,
  },
  {
    nameEn: "Rezaul Karim",
    nameBn: "রেজাউল করিম",
    roleEn: "Homeowner",
    roleBn: "বাড়ির মালিক",
    textEn:
      "Our AC stopped cooling in the middle of summer. SOHAY BD sent a technician the same day and fixed it perfectly.",
    textBn:
      "গ্রীষ্মের মাঝে আমাদের এসি ঠান্ডা করা বন্ধ করে দিয়েছিল। সহায় বিডি একই দিনে একজন টেকনিশিয়ান পাঠিয়ে সেটি সম্পূর্ণ ঠিক করে দিয়েছে।",
    rating: 5,
  },
  {
    nameEn: "Nusrat Jahan",
    nameBn: "নুসরাত জাহান",
    roleEn: "Working Professional",
    roleBn: "চাকরিজীবী",
    textEn:
      "Home shifting used to be a nightmare, but their team handled everything so carefully. Truly stress-free experience.",
    textBn:
      "বাসা পরিবর্তন আগে দুঃস্বপ্ন ছিল, কিন্তু তাদের টিম সবকিছু এতটাই যত্ন সহকারে সামলেছে। সত্যিই দুশ্চিন্তা-মুক্ত অভিজ্ঞতা।",
    rating: 5,
  },
  {
    nameEn: "Tanvir Ahmed",
    nameBn: "তানভীর আহমেদ",
    roleEn: "Shop Owner, Rangpur",
    roleBn: "দোকানের মালিক, রংপুর",
    textEn:
      "Transparent pricing and verified professionals — exactly what I needed. SOHAY BD is changing how Rangpur books home services.",
    textBn:
      "স্বচ্ছ মূল্য এবং যাচাইকৃত পেশাদার — ঠিক যা আমার দরকার ছিল। সহায় বিডি রংপুরের হোম সার্ভিস বুকিং-এর ধরন বদলে দিচ্ছে।",
    rating: 5,
  },
];

export default function Testimonials() {
  const { lang } = useLanguage();

  // Localized section headings
  const text = {
    badge: lang === "bn" ? "💜 গ্রাহকদের ভালোবাসা" : "💜 Customer Love",
    headingStart: lang === "bn" ? "প্রিয় " : "Loved by ",
    headingAccent:
      lang === "bn" ? "রংপুরের পরিবারগুলোর" : "Families in Rangpur",
  };

  const loop = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-brand-50/40 py-24 dark:bg-[#0d0819]"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:bg-white/5 dark:text-brand-300">
            {text.badge}
          </span>
          <h2
            id="reviews-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl lg:text-5xl dark:text-white"
          >
            {text.headingStart}
            <span>{text.headingAccent}</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-50 to-transparent dark:from-[#0d0819]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-50 to-transparent dark:from-[#0d0819]" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-6 px-6"
        >
          {loop.map((tItem, i) => {
            const name = lang === "bn" ? tItem.nameBn : tItem.nameEn;
            const role = lang === "bn" ? tItem.roleBn : tItem.roleEn;
            const message = lang === "bn" ? tItem.textBn : tItem.textEn;

            return (
              <div
                key={`${tItem.nameEn}-${i}`}
                className="w-[320px] shrink-0 rounded-[20px] glass-panel p-6 shadow-[0_15px_40px_rgba(111,66,229,0.15)]"
              >
                <Quote className="h-6 w-6 text-brand-300" />
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  "{message}"
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: tItem.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
                    {/* Keep English letter for consistent avatar look */}
                    {tItem.nameEn.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111] dark:text-white">
                      {name}
                    </p>
                    <p className="text-xs text-neutral-400">{role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

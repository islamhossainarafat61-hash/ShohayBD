import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// FAQ data with both English and Bangla versions
const faqsData = [
  {
    qEn: "Are all your technicians verified?",
    qBn: "আপনাদের সব টেকনিশিয়ান কি যাচাইকৃত?",
    aEn: "Yes. Every professional on SOHAY BD goes through identity verification and a background check before joining our platform, so you can invite them into your home with confidence.",
    aBn: "হ্যাঁ। সহায় বিডি-এর প্রতিটি পেশাদার আমাদের প্ল্যাটফর্মে যোগ দেওয়ার আগে পরিচয় যাচাই ও ব্যাকগ্রাউন্ড চেকের মধ্য দিয়ে যায়, যাতে আপনি নিশ্চিন্তে তাদের আপনার বাড়িতে আমন্ত্রণ জানাতে পারেন।",
  },
  {
    qEn: "How is the pricing determined?",
    qBn: "মূল্য কীভাবে নির্ধারণ করা হয়?",
    aEn: "Pricing depends on the type of service, scope of work, and materials required. We always share transparent pricing before confirming your booking — no hidden charges.",
    aBn: "মূল্য নির্ভর করে সার্ভিসের ধরন, কাজের পরিসর এবং প্রয়োজনীয় উপকরণের উপর। বুকিং কনফার্ম করার আগে আমরা সবসময় স্বচ্ছ মূল্য জানিয়ে দিই — কোনো লুকানো চার্জ নেই।",
  },
  {
    qEn: "What if I need to cancel my booking?",
    qBn: "যদি আমার বুকিং বাতিল করতে হয় তাহলে কী করব?",
    aEn: "You can cancel or reschedule your booking anytime before the professional is dispatched by contacting us on WhatsApp or through the app once it launches.",
    aBn: "পেশাদার পাঠানোর আগে আপনি যেকোনো সময় হোয়াটসঅ্যাপে যোগাযোগ করে অথবা অ্যাপ লঞ্চ হলে অ্যাপের মাধ্যমে আপনার বুকিং বাতিল বা পুনঃনির্ধারণ করতে পারবেন।",
  },
  {
    qEn: "Which areas does SOHAY BD currently serve?",
    qBn: "সহায় বিডি বর্তমানে কোন এলাকায় সেবা দেয়?",
    aEn: "We currently operate across Rangpur, Bangladesh, with plans to expand our verified professional network to every district in Bangladesh.",
    aBn: "আমরা বর্তমানে রংপুর, বাংলাদেশে কার্যক্রম পরিচালনা করছি এবং বাংলাদেশের প্রতিটি জেলায় আমাদের যাচাইকৃত পেশাদার নেটওয়ার্ক সম্প্রসারণের পরিকল্পনা রয়েছে।",
  },
  {
    qEn: "How quickly can a professional reach me?",
    qBn: "একজন পেশাদার কত দ্রুত আমার কাছে পৌঁছাতে পারবে?",
    aEn: "In most cases, we can assign and dispatch a verified professional within a few hours of booking, depending on service demand and your location.",
    aBn: "বেশিরভাগ ক্ষেত্রে, সার্ভিসের চাহিদা এবং আপনার অবস্থানের উপর নির্ভর করে বুকিংয়ের কয়েক ঘণ্টার মধ্যে আমরা একজন যাচাইকৃত পেশাদার নিযুক্ত করে পাঠিয়ে দিতে পারি।",
  },
  {
    qEn: "How do I pay for a service?",
    qBn: "সার্ভিসের জন্য আমি কীভাবে পেমেন্ট করব?",
    aEn: "Payments are made securely after the service is completed to your satisfaction. We are also working on integrated digital payment options in our upcoming app.",
    aBn: "আপনার সন্তুষ্টিমতো সার্ভিস সম্পন্ন হওয়ার পর নিরাপদে পেমেন্ট করতে পারবেন। এছাড়াও আমরা আমাদের আসন্ন অ্যাপে ইন্টিগ্রেটেড ডিজিটাল পেমেন্ট অপশন নিয়ে কাজ করছি।",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { lang } = useLanguage();

  // Localized headings
  const text = {
    badge: lang === "bn" ? "❓ প্রশ্নোত্তর" : "❓ FAQ",
    headingStart: lang === "bn" ? "প্রশ্ন আছে? " : "Got Questions? ",
    headingAccent:
      lang === "bn" ? "আমাদের কাছে উত্তর আছে।" : "We've Got Answers.",
  };

  return (
    <section
      id="faq"
      className="relative bg-white py-24 dark:bg-[#08060f]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            {text.badge}
          </span>
          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-bold text-[#111111] sm:text-4xl dark:text-white"
          >
            {text.headingStart}
            <span className="gradient-text">{text.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqsData.map((item, i) => {
            const isOpen = open === i;
            const question = lang === "bn" ? item.qBn : item.qEn;
            const answer = lang === "bn" ? item.aBn : item.aEn;

            return (
              <motion.div
                key={item.qEn}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#111111] sm:text-base dark:text-white">
                    {question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

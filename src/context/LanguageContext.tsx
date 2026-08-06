import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "bn";

const dictionary = {
  en: {
    // ═══════════════════════════════════
    // NAVBAR
    // ═══════════════════════════════════
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    navTechnicians: "Our Technicians",
    navHow: "How it Works",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",
    bookNow: "Book Now",

    // ═══════════════════════════════════
    // HERO SECTION
    // ═══════════════════════════════════
    heroBadge: "Trusted Home Service Platform in Rangpur",
    heroHeading1: "One Platform.",
    heroHeading2: "Every Home Service You Need.",
    heroSub:
      "SOHAY BD connects you with trusted professionals for Electrical, Plumbing, AC Service, Cleaning, Beauty, Home Shifting, House Rent and more — all in one place.",
    heroPrimary: "Book a Service",
    heroSecondary: "Explore Services",

    // ═══════════════════════════════════
    // SERVICES SECTION
    // ═══════════════════════════════════
    servicesBadge: "Our Services",
    servicesHeading: "Everything You Need,",
    servicesHeadingAccent: "One Tap Away",
    servicesSub:
      "From electrical repairs to home shifting, we bring premium home services to your doorstep with verified professionals.",
    servicesLearnMore: "Learn More",
    servicesBookNow: "Book Now",
    servicesViewAll: "View All Services",

    // ═══════════════════════════════════
    // ABOUT SECTION
    // ═══════════════════════════════════
    aboutBadge: "About SOHAY BD",
    aboutHeading: "Building Bangladesh's",
    aboutHeadingAccent: "Trusted Home Service Platform",
    aboutText1:
      "SOHAY BD is a modern home-service platform born in Rangpur with a mission to make daily life simpler, faster and more reliable for every Bangladeshi family.",
    aboutText2:
      "We connect you with verified, skilled professionals across multiple categories — from electricians and plumbers to beauty experts and home shifting teams — all through one seamless experience.",
    aboutStat1Label: "Happy Customers",
    aboutStat2Label: "Verified Pros",
    aboutStat3Label: "Services",
    aboutStat4Label: "Support",
    aboutMeetTeam: "Meet Our Team",

    // ═══════════════════════════════════
    // ABOUT US PAGE (Full page)
    // ═══════════════════════════════════
    aboutPageBadge: "Leadership",
    aboutPageSection1Heading: "About SOHAY BD",
    aboutPageSection1Desc1:
      "SOHAY BD is a technology-driven multi-service platform built to simplify everyday life by connecting customers with trusted service professionals across in Rangpur, Bangladesh. From home maintenance, electrical, plumbing, AC service, deep cleaning, laundry, beauty, home shifting, and many other essential services, everything is available through one reliable platform.",
    aboutPageSection1Desc2:
      "Our mission is to make professional home services more accessible, transparent, and hassle-free for every customer. By combining innovative technology with carefully verified service partners, we are building a platform where quality, trust, convenience, and customer satisfaction always come first.",
    aboutPageSection2Heading: "Built by Passionate Founders",
    aboutPageSection2Desc:
      "SOHAY BD was founded with a vision to transform the home service industry in Bangladesh through technology, innovation, and trust. Our founding team is dedicated to creating a platform that empowers skilled professionals while delivering a seamless, secure, and premium experience for every customer. Together, we are building a future where reliable home services are just a few taps away.",

    // ═══════════════════════════════════
    // HOW IT WORKS SECTION
    // ═══════════════════════════════════
    howBadge: "How It Works",
    howHeading: "Book in 3 Simple Steps",
    howSub: "Getting professional help has never been easier.",
    howStep1Title: "Choose Your Service",
    howStep1Desc: "Browse our range of home services and pick what you need.",
    howStep2Title: "Book Instantly",
    howStep2Desc: "Contact us via WhatsApp or website — confirm in minutes.",
    howStep3Title: "Get It Done",
    howStep3Desc: "Verified professionals arrive on time and complete the job.",

    // ═══════════════════════════════════
    // PROFESSIONALS SECTION
    // ═══════════════════════════════════
    proBadge: "Our Team",
    proHeading: "Verified & Skilled Professionals",
    proSub:
      "Every professional in the SOHAY BD network is background-checked, trained, and rated by real customers.",
    proFeature1: "Background Verified",
    proFeature2: "Trained & Certified",
    proFeature3: "Highly Rated",
    proFeature4: "Fully Insured",

    // ═══════════════════════════════════
    // TESTIMONIALS / REVIEWS
    // ═══════════════════════════════════
    reviewsBadge: "Reviews",
    reviewsHeading: "What Our Customers Say",
    reviewsSub:
      "Real experiences from real customers who trust SOHAY BD for their home services.",

    // ═══════════════════════════════════
    // APP SHOWCASE SECTION
    // ═══════════════════════════════════
    appBadge: "Mobile App",
    appHeading: "SOHAY BD App",
    appHeadingAccent: "Coming Soon",
    appSub:
      "Book services, track professionals, and manage your bookings — all from your phone. Get notified when we launch!",
    appNotifyMe: "Notify Me",
    appPlayStore: "Google Play",
    appAppStore: "App Store",

    // ═══════════════════════════════════
    // FAQ SECTION
    // ═══════════════════════════════════
    faqBadge: "FAQ",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Everything you need to know about SOHAY BD services.",
    faqStillHave: "Still have questions?",
    faqContactUs: "Contact Us",

    // ═══════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════
    footerAbout:
      "SOHAY BD is building Bangladesh's trusted digital home service platform by connecting customers with verified professionals.",
    footerQuickLinks: "Quick Links",
    footerServices: "Services",
    footerContact: "Contact",
    footerStayUpdated: "Stay Updated",
    footerEmailPlaceholder: "Your email",
    footerSubscribeSuccess: "Thanks for subscribing! 🎉",
    footerFinalHeading1: "Ready to Make Home Services",
    footerFinalHeading2: "Simple & Stress-Free?",
    footerFinalSub:
      "Book trusted professionals through SOHAY BD and enjoy a smarter, faster, and more reliable service experience.",
    footerBookService: "Book a Service",
    footerContactUs: "Contact Us",
    footerRights: "All Rights Reserved.",
    footerMadeIn: "Made with",
    footerInBangladesh: "in Bangladesh",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms",
    footerCookies: "Cookies",

    // ═══════════════════════════════════
    // CONTACT PAGE
    // ═══════════════════════════════════
    contactHeading: "Get in Touch",
    contactSub:
      "Have a question or need a service? We're here to help you 24/7.",
    contactNameLabel: "Your Name",
    contactNamePlaceholder: "Enter your name",
    contactEmailLabel: "Email Address",
    contactEmailPlaceholder: "you@example.com",
    contactPhoneLabel: "Phone Number",
    contactPhonePlaceholder: "+880 1XXX-XXXXXX",
    contactMessageLabel: "Your Message",
    contactMessagePlaceholder: "How can we help you?",
    contactSendBtn: "Send Message",
    contactSuccessMsg: "Message sent successfully! We'll get back to you soon.",

    // ═══════════════════════════════════
    // SERVICE DETAIL PAGE
    // ═══════════════════════════════════
    serviceDetailBookWhatsapp: "Book via WhatsApp",
    serviceDetailFeatures: "What's Included",
    serviceDetailBackToServices: "Back to Services",
    serviceDetailNotFound: "Service not found",

    // ═══════════════════════════════════
    // BUTTONS / COMMON
    // ═══════════════════════════════════
    commonReadMore: "Read More",
    commonReadLess: "Read Less",
    commonLoading: "Loading...",
    commonSubmit: "Submit",
    commonCancel: "Cancel",
    commonClose: "Close",
    commonBackHome: "Back to Home",
  },

  bn: {
    // ═══════════════════════════════════
    // NAVBAR
    // ═══════════════════════════════════
    navHome: "হোম",
    navServices: "সার্ভিস",
    navAbout: "সম্পর্কে",
    navTechnicians: "আমাদের টেকনিশিয়ান",
    navHow: "কিভাবে কাজ করে",
    navReviews: "রিভিউ",
    navFaq: "প্রশ্নোত্তর",
    navContact: "যোগাযোগ",
    bookNow: "বুক করুন",

    // ═══════════════════════════════════
    // HERO SECTION
    // ═══════════════════════════════════
    heroBadge: "রংপুরের সবচেয়ে বিশ্বস্ত হোম সার্ভিস প্ল্যাটফর্ম",
    heroHeading1: "একটি প্ল্যাটফর্ম।",
    heroHeading2: "প্রয়োজনীয় সকল হোম সার্ভিস।",
    heroSub:
      "ইলেকট্রিক্যাল, প্লাম্বিং, এসি সার্ভিস, ক্লিনিং, বিউটি, হোম শিফটিং, হাউস রেন্ট সহ সকল বিশ্বস্ত প্রফেশনালদের সাথে সহায় বিডি আপনাকে যুক্ত করে — সব একসাথে, একটি প্ল্যাটফর্মে।",
    heroPrimary: "সার্ভিস বুক করুন",
    heroSecondary: "সার্ভিস দেখুন",

    // ═══════════════════════════════════
    // SERVICES SECTION
    // ═══════════════════════════════════
    servicesBadge: "আমাদের সার্ভিস",
    servicesHeading: "আপনার সব প্রয়োজন,",
    servicesHeadingAccent: "এক ক্লিকেই",
    servicesSub:
      "ইলেকট্রিক রিপেয়ার থেকে হোম শিফটিং পর্যন্ত — যাচাইকৃত প্রফেশনালদের মাধ্যমে প্রিমিয়াম হোম সার্ভিস আপনার দরজায় পৌঁছে দিচ্ছি আমরা।",
    servicesLearnMore: "বিস্তারিত জানুন",
    servicesBookNow: "বুক করুন",
    servicesViewAll: "সব সার্ভিস দেখুন",

    // ═══════════════════════════════════
    // ABOUT SECTION
    // ═══════════════════════════════════
    aboutBadge: "সহায় বিডি সম্পর্কে",
    aboutHeading: "বাংলাদেশের",
    aboutHeadingAccent: "বিশ্বস্ত হোম সার্ভিস প্ল্যাটফর্ম",
    aboutText1:
      "সহায় বিডি রংপুরে জন্ম নেওয়া একটি আধুনিক হোম-সার্ভিস প্ল্যাটফর্ম, যার লক্ষ্য প্রতিটি বাংলাদেশি পরিবারের দৈনন্দিন জীবনকে সহজ, দ্রুত ও নির্ভরযোগ্য করে তোলা।",
    aboutText2:
      "ইলেকট্রিশিয়ান, প্লাম্বার থেকে শুরু করে বিউটি এক্সপার্ট এবং হোম শিফটিং টিম পর্যন্ত — বিভিন্ন ক্যাটাগরির যাচাইকৃত ও দক্ষ প্রফেশনালদের সাথে আমরা আপনাকে যুক্ত করি এক নিরবিচ্ছিন্ন অভিজ্ঞতার মাধ্যমে।",
    aboutStat1Label: "সন্তুষ্ট গ্রাহক",
    aboutStat2Label: "যাচাইকৃত পেশাদার",
    aboutStat3Label: "সার্ভিস",
    aboutStat4Label: "সাপোর্ট",
    aboutMeetTeam: "আমাদের টিমকে জানুন",

    // ═══════════════════════════════════
    // ABOUT US PAGE (Full page)
    // ═══════════════════════════════════
    aboutPageBadge: "লিডারশিপ",
    aboutPageSection1Heading: "সহায় বিডি সম্পর্কে",
    aboutPageSection1Desc1:
      "সহায় বিডি একটি প্রযুক্তি-নির্ভর মাল্টি-সার্ভিস প্ল্যাটফর্ম যা দৈনন্দিন জীবনকে সহজ করতে তৈরি করা হয়েছে — বিশ্বস্ত সার্ভিস পেশাদারদের সাথে রংপুরের গ্রাহকদের যুক্ত করে। হোম মেইনটেন্যান্স, ইলেকট্রিক্যাল, প্লাম্বিং, এসি সার্ভিস, ডিপ ক্লিনিং, লন্ড্রি, বিউটি, হোম শিফটিং সহ আরো অনেক গুরুত্বপূর্ণ সার্ভিস — সবকিছু একটি নির্ভরযোগ্য প্ল্যাটফর্মে পাওয়া যায়।",
    aboutPageSection1Desc2:
      "আমাদের লক্ষ্য প্রতিটি গ্রাহকের জন্য পেশাদার হোম সার্ভিসকে আরো সহজলভ্য, স্বচ্ছ এবং ঝামেলা-মুক্ত করে তোলা। উদ্ভাবনী প্রযুক্তি এবং যত্ন সহকারে যাচাইকৃত সার্ভিস পার্টনারদের সমন্বয়ে আমরা এমন একটি প্ল্যাটফর্ম গড়ে তুলছি যেখানে গুণমান, বিশ্বাস, সুবিধা এবং গ্রাহক সন্তুষ্টি সবসময় সর্বোচ্চ অগ্রাধিকার পায়।",
    aboutPageSection2Heading: "নিবেদিত প্রতিষ্ঠাতাদের হাতে গড়া",
    aboutPageSection2Desc:
      "সহায় বিডি প্রতিষ্ঠিত হয়েছে প্রযুক্তি, উদ্ভাবন এবং বিশ্বাসের মাধ্যমে বাংলাদেশের হোম সার্ভিস ইন্ডাস্ট্রিকে রূপান্তরিত করার একটি দৃষ্টিভঙ্গি নিয়ে। আমাদের প্রতিষ্ঠাতা দল একটি প্ল্যাটফর্ম তৈরি করতে প্রতিশ্রুতিবদ্ধ যা দক্ষ পেশাদারদের ক্ষমতায়ন করে এবং প্রতিটি গ্রাহকের জন্য একটি নিরবিচ্ছিন্ন, নিরাপদ ও প্রিমিয়াম অভিজ্ঞতা প্রদান করে। একসাথে আমরা এমন একটি ভবিষ্যৎ গড়ে তুলছি যেখানে নির্ভরযোগ্য হোম সার্ভিস মাত্র কয়েক ক্লিকের দূরত্বে।",

    // ═══════════════════════════════════
    // HOW IT WORKS SECTION
    // ═══════════════════════════════════
    howBadge: "কিভাবে কাজ করে",
    howHeading: "মাত্র ৩টি ধাপে বুক করুন",
    howSub: "পেশাদার সাহায্য পাওয়া কখনো এত সহজ ছিল না।",
    howStep1Title: "সার্ভিস বাছাই করুন",
    howStep1Desc:
      "আমাদের হোম সার্ভিসগুলো ব্রাউজ করে আপনার প্রয়োজনীয়টি বেছে নিন।",
    howStep2Title: "সঙ্গে সঙ্গে বুক করুন",
    howStep2Desc:
      "হোয়াটসঅ্যাপ বা ওয়েবসাইটের মাধ্যমে যোগাযোগ করুন — কয়েক মিনিটেই কনফার্ম হবে।",
    howStep3Title: "কাজ সম্পন্ন করান",
    howStep3Desc:
      "যাচাইকৃত প্রফেশনালরা সময়মতো এসে কাজটি সুন্দরভাবে সম্পন্ন করবেন।",

    // ═══════════════════════════════════
    // PROFESSIONALS SECTION
    // ═══════════════════════════════════
    proBadge: "আমাদের টিম",
    proHeading: "যাচাইকৃত ও দক্ষ পেশাদার",
    proSub:
      "সহায় বিডি নেটওয়ার্কের প্রতিটি পেশাদার ব্যাকগ্রাউন্ড যাচাই, প্রশিক্ষণপ্রাপ্ত এবং প্রকৃত গ্রাহকদের দ্বারা রেটিংপ্রাপ্ত।",
    proFeature1: "ব্যাকগ্রাউন্ড যাচাইকৃত",
    proFeature2: "প্রশিক্ষণপ্রাপ্ত ও সার্টিফাইড",
    proFeature3: "উচ্চ রেটিংপ্রাপ্ত",
    proFeature4: "সম্পূর্ণ বীমাকৃত",

    // ═══════════════════════════════════
    // TESTIMONIALS / REVIEWS
    // ═══════════════════════════════════
    reviewsBadge: "রিভিউ",
    reviewsHeading: "আমাদের গ্রাহকরা কী বলছেন",
    reviewsSub:
      "যারা তাদের হোম সার্ভিসের জন্য সহায় বিডি-কে বিশ্বাস করেছেন, তাদের বাস্তব অভিজ্ঞতা।",

    // ═══════════════════════════════════
    // APP SHOWCASE SECTION
    // ═══════════════════════════════════
    appBadge: "মোবাইল অ্যাপ",
    appHeading: "সহায় বিডি অ্যাপ",
    appHeadingAccent: "শীঘ্রই আসছে",
    appSub:
      "সার্ভিস বুক করুন, পেশাদারদের ট্র্যাক করুন এবং আপনার বুকিং পরিচালনা করুন — সব একটি ফোন থেকে। লঞ্চ হলে নোটিফিকেশন পান!",
    appNotifyMe: "নোটিফাই করুন",
    appPlayStore: "গুগল প্লে",
    appAppStore: "অ্যাপ স্টোর",

    // ═══════════════════════════════════
    // FAQ SECTION
    // ═══════════════════════════════════
    faqBadge: "প্রশ্নোত্তর",
    faqHeading: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    faqSub: "সহায় বিডি সার্ভিস সম্পর্কে আপনার সব জানার বিষয়।",
    faqStillHave: "এখনো প্রশ্ন আছে?",
    faqContactUs: "যোগাযোগ করুন",

    // ═══════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════
    footerAbout:
      "সহায় বিডি যাচাইকৃত পেশাদারদের সাথে গ্রাহকদের যুক্ত করে বাংলাদেশের বিশ্বস্ত ডিজিটাল হোম সার্ভিস প্ল্যাটফর্ম গড়ে তুলছে।",
    footerQuickLinks: "দ্রুত লিংক",
    footerServices: "সার্ভিসসমূহ",
    footerContact: "যোগাযোগ",
    footerStayUpdated: "আপডেট পান",
    footerEmailPlaceholder: "আপনার ইমেইল",
    footerSubscribeSuccess: "সাবস্ক্রাইব করার জন্য ধন্যবাদ! 🎉",
    footerFinalHeading1: "হোম সার্ভিস করুন সহজ",
    footerFinalHeading2: "ও স্ট্রেস-মুক্ত",
    footerFinalSub:
      "সহায় বিডি-এর মাধ্যমে বিশ্বস্ত পেশাদারদের বুক করুন এবং উপভোগ করুন আরো স্মার্ট, দ্রুত ও নির্ভরযোগ্য সার্ভিস অভিজ্ঞতা।",
    footerBookService: "সার্ভিস বুক করুন",
    footerContactUs: "যোগাযোগ করুন",
    footerRights: "সর্বস্বত্ব সংরক্ষিত।",
    footerMadeIn: "তৈরি হয়েছে",
    footerInBangladesh: "বাংলাদেশে ভালোবাসা দিয়ে",
    footerPrivacy: "প্রাইভেসি পলিসি",
    footerTerms: "শর্তাবলী",
    footerCookies: "কুকিজ",

    // ═══════════════════════════════════
    // CONTACT PAGE
    // ═══════════════════════════════════
    contactHeading: "যোগাযোগ করুন",
    contactSub:
      "কোনো প্রশ্ন আছে বা সার্ভিস দরকার? আমরা ২৪/৭ আপনাকে সাহায্য করতে প্রস্তুত।",
    contactNameLabel: "আপনার নাম",
    contactNamePlaceholder: "আপনার নাম লিখুন",
    contactEmailLabel: "ইমেইল ঠিকানা",
    contactEmailPlaceholder: "you@example.com",
    contactPhoneLabel: "ফোন নম্বর",
    contactPhonePlaceholder: "+৮৮০ ১XXX-XXXXXX",
    contactMessageLabel: "আপনার মেসেজ",
    contactMessagePlaceholder: "কীভাবে সাহায্য করতে পারি?",
    contactSendBtn: "মেসেজ পাঠান",
    contactSuccessMsg:
      "মেসেজ সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",

    // ═══════════════════════════════════
    // SERVICE DETAIL PAGE
    // ═══════════════════════════════════
    serviceDetailBookWhatsapp: "হোয়াটসঅ্যাপে বুক করুন",
    serviceDetailFeatures: "যা যা অন্তর্ভুক্ত",
    serviceDetailBackToServices: "সার্ভিসে ফিরে যান",
    serviceDetailNotFound: "সার্ভিসটি পাওয়া যায়নি",

    // ═══════════════════════════════════
    // BUTTONS / COMMON
    // ═══════════════════════════════════
    commonReadMore: "আরো পড়ুন",
    commonReadLess: "কম পড়ুন",
    commonLoading: "লোড হচ্ছে...",
    commonSubmit: "জমা দিন",
    commonCancel: "বাতিল করুন",
    commonClose: "বন্ধ করুন",
    commonBackHome: "হোমে ফিরে যান",
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof dictionary)["en"];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const LANG_STORAGE_KEY = "sohay_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Load saved language from localStorage on first render
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "en" || saved === "bn") return saved;
    } catch {
      // ignore
    }
    return "en";
  });

  // Save language to localStorage whenever it changes
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export interface DetailedFeature {
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
}

export interface ProcessStep {
  step: string;
  stepBn: string;
  description: string;
  descriptionBn: string;
}

export interface ServiceFAQ {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  nameBn: string;
  icon: string;
  tagline: string;
  taglineBn: string;
  shortDescription: string;
  shortDescriptionBn: string;
  description: string[];
  descriptionBn: string[];
  features: string[];
  featuresBn: string[];
  priceNote: string;
  priceNoteBn: string;
  detailedFeatures: DetailedFeature[];
  benefits: string[];
  benefitsBn: string[];
  process: ProcessStep[];
  faqs: ServiceFAQ[];
}

export const services: ServiceItem[] = [
  // ═══════════════════════════════════════════════════
  // 1. ELECTRICIAN
  // ═══════════════════════════════════════════════════
  {
    slug: "electrician",
    name: "Electrician",
    nameBn: "ইলেকট্রিশিয়ান",
    icon: "Zap",
    tagline: "Safe & Certified Electrical Repairs",
    taglineBn: "নিরাপদ ও প্রত্যয়িত ইলেকট্রিক্যাল মেরামত",
    shortDescription:
      "Wiring, switchboards, fan & light installation and full electrical troubleshooting.",
    shortDescriptionBn:
      "ওয়্যারিং, সুইচবোর্ড, ফ্যান ও লাইট ইন্সটলেশন এবং সম্পূর্ণ ইলেকট্রিক্যাল ট্রাবলশুটিং।",
    description: [
      "SOHAY BD's verified electricians handle everything from small repairs to complete household wiring with safety-first practices. Every technician is trained, background-verified, and equipped with modern tools to ensure top-quality workmanship.",
      "Whether it's a short circuit, a flickering light, a new switchboard installation, or a full home rewiring project, our professionals arrive fully equipped and get the job done right the first time. We follow international safety standards and use only certified electrical components.",
    ],
    descriptionBn: [
      "সহায় বিডি-এর যাচাইকৃত ইলেকট্রিশিয়ানরা ছোট মেরামত থেকে শুরু করে সম্পূর্ণ ঘরের ওয়্যারিং পর্যন্ত সব কাজ নিরাপত্তা-প্রথম নীতিতে পরিচালনা করেন। প্রতিটি টেকনিশিয়ান প্রশিক্ষিত, ব্যাকগ্রাউন্ড যাচাইকৃত এবং সেরা মানের কাজ নিশ্চিত করতে আধুনিক সরঞ্জামে সজ্জিত।",
      "শর্ট সার্কিট, লাইট জ্বলা-নেভা, নতুন সুইচবোর্ড ইনস্টলেশন কিংবা পুরো বাড়ির রিওয়্যারিং — যেকোনো প্রয়োজনে আমাদের পেশাদাররা সম্পূর্ণ সরঞ্জাম নিয়ে এসে প্রথমবারেই কাজটি নিখুঁতভাবে সম্পন্ন করেন। আমরা আন্তর্জাতিক নিরাপত্তা মান অনুসরণ করি এবং শুধুমাত্র প্রত্যয়িত ইলেকট্রিক্যাল কম্পোনেন্ট ব্যবহার করি।",
    ],
    features: [
      "Wiring installation & repair",
      "Switch & socket replacement",
      "Fan, light & fixture installation",
      "Circuit breaker & fuse repair",
      "Short circuit troubleshooting",
      "Full home electrical safety checkup",
    ],
    featuresBn: [
      "ওয়্যারিং ইন্সটলেশন ও মেরামত",
      "সুইচ ও সকেট প্রতিস্থাপন",
      "ফ্যান, লাইট ও ফিক্সচার ইন্সটলেশন",
      "সার্কিট ব্রেকার ও ফিউজ মেরামত",
      "শর্ট সার্কিট ট্রাবলশুটিং",
      "সম্পূর্ণ ঘরের ইলেকট্রিক্যাল নিরাপত্তা চেকআপ",
    ],
    priceNote:
      "Pricing depends on the scope of work — get a free quote on WhatsApp.",
    priceNoteBn:
      "দাম কাজের পরিসরের উপর নির্ভর করে — হোয়াটসঅ্যাপে বিনামূল্যে quote নিন।",
    detailedFeatures: [
      {
        title: "Complete Wiring Solutions",
        titleBn: "সম্পূর্ণ ওয়্যারিং সমাধান",
        description:
          "New wiring installation, old wiring replacement, and concealed wiring for modern homes with certified copper cables.",
        descriptionBn:
          "নতুন ওয়্যারিং ইন্সটলেশন, পুরাতন ওয়্যারিং প্রতিস্থাপন এবং প্রত্যয়িত কপার ক্যাবল দিয়ে আধুনিক ঘরের জন্য কনসিলড ওয়্যারিং।",
      },
      {
        title: "Emergency Electrical Repair",
        titleBn: "জরুরি ইলেকট্রিক্যাল মেরামত",
        description:
          "24/7 emergency response for power outages, short circuits, sparking wires, and other urgent electrical issues.",
        descriptionBn:
          "পাওয়ার আউটেজ, শর্ট সার্কিট, স্পার্কিং তার এবং অন্যান্য জরুরি ইলেকট্রিক্যাল সমস্যার জন্য ২৪/৭ জরুরি সাড়া।",
      },
      {
        title: "Fan & Light Installation",
        titleBn: "ফ্যান ও লাইট ইন্সটলেশন",
        description:
          "Ceiling fan, wall fan, exhaust fan, LED lights, chandeliers, and decorative lighting installation with precision.",
        descriptionBn:
          "সিলিং ফ্যান, ওয়াল ফ্যান, এক্সহস্ট ফ্যান, LED লাইট, ঝাড়বাতি এবং ডেকোরেটিভ লাইটিং সঠিকভাবে ইন্সটলেশন।",
      },
      {
        title: "Smart Home Setup",
        titleBn: "স্মার্ট হোম সেটআপ",
        description:
          "Smart switches, IoT device installation, automated lighting systems, and modern home automation solutions.",
        descriptionBn:
          "স্মার্ট সুইচ, IoT ডিভাইস ইন্সটলেশন, অটোমেটেড লাইটিং সিস্টেম এবং আধুনিক হোম অটোমেশন সমাধান।",
      },
      {
        title: "Safety Inspection",
        titleBn: "নিরাপত্তা পরিদর্শন",
        description:
          "Comprehensive electrical safety audit to prevent fire hazards, identify faulty wiring, and ensure code compliance.",
        descriptionBn:
          "আগুনের ঝুঁকি প্রতিরোধ, ত্রুটিপূর্ণ ওয়্যারিং শনাক্তকরণ এবং কোড মেনে চলা নিশ্চিত করতে বিস্তৃত ইলেকট্রিক্যাল নিরাপত্তা অডিট।",
      },
      {
        title: "Appliance Wiring",
        titleBn: "যন্ত্রপাতি ওয়্যারিং",
        description:
          "Dedicated line setup for AC, refrigerator, washing machine, geyser, and other high-power appliances.",
        descriptionBn:
          "এসি, ফ্রিজ, ওয়াশিং মেশিন, গিজার এবং অন্যান্য উচ্চ-ক্ষমতা যন্ত্রপাতির জন্য ডেডিকেটেড লাইন সেটআপ।",
      },
    ],
    benefits: [
      "Licensed & certified electricians",
      "Same-day service for urgent issues",
      "Original branded parts & materials",
      "6-month workmanship warranty",
      "Transparent pricing, no hidden fees",
      "Fully insured for your protection",
    ],
    benefitsBn: [
      "লাইসেন্সপ্রাপ্ত ও প্রত্যয়িত ইলেকট্রিশিয়ান",
      "জরুরি সমস্যার জন্য একই দিনে সার্ভিস",
      "অরিজিনাল ব্র্যান্ডেড যন্ত্রাংশ ও উপকরণ",
      "৬ মাসের কাজের ওয়ারেন্টি",
      "স্বচ্ছ মূল্য, কোনো লুকানো ফি নেই",
      "আপনার সুরক্ষার জন্য সম্পূর্ণ বীমাকৃত",
    ],
    process: [
      {
        step: "Book Your Service",
        stepBn: "সার্ভিস বুক করুন",
        description:
          "Contact us via WhatsApp or call. Describe your electrical issue briefly.",
        descriptionBn:
          "হোয়াটসঅ্যাপ বা কল করুন। আপনার ইলেকট্রিক্যাল সমস্যা সংক্ষেপে বলুন।",
      },
      {
        step: "Get a Quote",
        stepBn: "মূল্য জানুন",
        description:
          "Our team assesses the issue and provides transparent pricing before starting work.",
        descriptionBn:
          "আমাদের টিম সমস্যা মূল্যায়ন করে এবং কাজ শুরুর আগে স্বচ্ছ মূল্য জানায়।",
      },
      {
        step: "Expert Arrives",
        stepBn: "বিশেষজ্ঞ পৌঁছায়",
        description:
          "A verified electrician arrives at your doorstep with all necessary tools.",
        descriptionBn:
          "একজন যাচাইকৃত ইলেকট্রিশিয়ান সব প্রয়োজনীয় সরঞ্জাম নিয়ে আপনার দরজায় পৌঁছায়।",
      },
      {
        step: "Job Done Right",
        stepBn: "কাজ নিখুঁতভাবে সম্পন্ন",
        description:
          "Quality work with warranty. Pay only after your complete satisfaction.",
        descriptionBn:
          "ওয়ারেন্টি সহ মানসম্পন্ন কাজ। আপনার সম্পূর্ণ সন্তুষ্টির পরই পেমেন্ট।",
      },
    ],
    faqs: [
      {
        question: "How quickly can an electrician reach my home?",
        questionBn: "একজন ইলেকট্রিশিয়ান কত দ্রুত আমার বাড়িতে পৌঁছাতে পারবে?",
        answer:
          "For urgent issues, we can dispatch an electrician within 30-60 minutes in Rangpur city. For scheduled work, we typically arrive within a few hours of booking confirmation.",
        answerBn:
          "জরুরি সমস্যার জন্য, আমরা রংপুর সিটিতে ৩০-৬০ মিনিটের মধ্যে একজন ইলেকট্রিশিয়ান পাঠাতে পারি। নির্ধারিত কাজের জন্য, সাধারণত বুকিং কনফার্মেশনের কয়েক ঘণ্টার মধ্যে পৌঁছাই।",
      },
      {
        question: "Do you handle both residential and commercial work?",
        questionBn: "আপনারা কি আবাসিক এবং বাণিজ্যিক দুটোই কাজ করেন?",
        answer:
          "Yes! We service both homes and small businesses including shops, offices, restaurants, and rental properties.",
        answerBn:
          "হ্যাঁ! আমরা বাড়ি এবং ছোট ব্যবসা যেমন দোকান, অফিস, রেস্টুরেন্ট এবং ভাড়া সম্পত্তি — সব সার্ভিস দিই।",
      },
      {
        question: "What if the problem returns after repair?",
        questionBn: "মেরামতের পর যদি সমস্যা আবার ফিরে আসে?",
        answer:
          "All our work comes with a 6-month workmanship warranty. If the same issue reoccurs within this period, we fix it free of charge.",
        answerBn:
          "আমাদের সব কাজে ৬ মাসের ওয়ারেন্টি আছে। এই সময়ের মধ্যে একই সমস্যা আবার হলে, আমরা বিনামূল্যে ঠিক করে দিই।",
      },
      {
        question: "Do you provide the electrical parts?",
        questionBn: "আপনারা কি ইলেকট্রিক্যাল যন্ত্রাংশ সরবরাহ করেন?",
        answer:
          "Yes, we bring high-quality branded parts. You can also provide your own preferred brands if you wish — just let us know when booking.",
        answerBn:
          "হ্যাঁ, আমরা উচ্চ মানের ব্র্যান্ডেড যন্ত্রাংশ আনি। আপনি চাইলে নিজের পছন্দের ব্র্যান্ডও দিতে পারেন — বুকিংয়ের সময় জানিয়ে দিন।",
      },
      {
        question: "Is there any charge for inspection or quote?",
        questionBn: "পরিদর্শন বা মূল্য জানার জন্য কি কোনো চার্জ আছে?",
        answer:
          "Basic phone/WhatsApp consultation is free. For on-site inspection, a nominal visit charge applies which is waived if you proceed with the service.",
        answerBn:
          "ফোন/হোয়াটসঅ্যাপে বেসিক পরামর্শ ফ্রি। সাইটে পরিদর্শনের জন্য একটি নামমাত্র ভিজিট চার্জ প্রযোজ্য যা সার্ভিস নিলে মওকুফ হয়।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 2. PLUMBING
  // ═══════════════════════════════════════════════════
  {
    slug: "plumbing",
    name: "Plumbing",
    nameBn: "প্লাম্বিং",
    icon: "Wrench",
    tagline: "Leak-Free, Stress-Free Plumbing",
    taglineBn: "লিক-মুক্ত, দুশ্চিন্তা-মুক্ত প্লাম্বিং",
    shortDescription:
      "Pipe leaks, bathroom fittings, water tank & drainage solutions by trusted plumbers.",
    shortDescriptionBn:
      "পাইপ লিক, বাথরুম ফিটিংস, ওয়াটার ট্যাংক ও ড্রেনেজ সমাধান বিশ্বস্ত প্লাম্বারদের দ্বারা।",
    description: [
      "From a dripping tap to a full bathroom fitting overhaul, our plumbing professionals bring years of hands-on experience to every home. We use modern leak detection tools and quality fittings to ensure lasting results.",
      "We diagnose the root cause instead of offering temporary fixes, ensuring your plumbing stays leak-free for the long run. Our plumbers are equipped to handle everything from residential apartments to large multi-story buildings.",
    ],
    descriptionBn: [
      "টিপটিপ করে পানি পড়া ট্যাপ থেকে সম্পূর্ণ বাথরুম ফিটিং পরিবর্তন — আমাদের প্লাম্বিং পেশাদাররা প্রতিটি ঘরে বছরের পর বছর অভিজ্ঞতা নিয়ে আসেন। আমরা দীর্ঘস্থায়ী ফলাফল নিশ্চিত করতে আধুনিক লিক ডিটেকশন টুলস এবং মানসম্পন্ন ফিটিংস ব্যবহার করি।",
      "আমরা সাময়িক সমাধান না দিয়ে সমস্যার মূল কারণ নির্ণয় করি, যাতে দীর্ঘমেয়াদে আপনার প্লাম্বিং লিক-মুক্ত থাকে। আমাদের প্লাম্বাররা আবাসিক অ্যাপার্টমেন্ট থেকে শুরু করে বড় বহুতল ভবন — সব কিছু হ্যান্ডেল করতে সক্ষম।",
    ],
    features: [
      "Leak detection & pipe repair",
      "Bathroom & kitchen fittings",
      "Water tank installation & cleaning",
      "Drainage & blockage clearing",
      "Geyser & motor installation",
      "Emergency plumbing support",
    ],
    featuresBn: [
      "লিক শনাক্তকরণ ও পাইপ মেরামত",
      "বাথরুম ও রান্নাঘরের ফিটিংস",
      "ওয়াটার ট্যাংক ইন্সটলেশন ও পরিষ্কার",
      "ড্রেনেজ ও ব্লকেজ পরিষ্কার",
      "গিজার ও মোটর ইন্সটলেশন",
      "জরুরি প্লাম্বিং সাপোর্ট",
    ],
    priceNote: "Transparent pricing shared before work begins.",
    priceNoteBn: "কাজ শুরুর আগেই স্বচ্ছ দাম জানিয়ে দেওয়া হয়।",
    detailedFeatures: [
      {
        title: "Leak Detection & Repair",
        titleBn: "লিক শনাক্তকরণ ও মেরামত",
        description:
          "Advanced leak detection technology to find hidden pipe leaks and fix them permanently without extensive wall breaking.",
        descriptionBn:
          "লুকানো পাইপ লিক খুঁজে বের করতে এবং ব্যাপক দেওয়াল ভাঙা ছাড়াই স্থায়ীভাবে ঠিক করতে উন্নত লিক ডিটেকশন প্রযুক্তি।",
      },
      {
        title: "Bathroom Renovation Fittings",
        titleBn: "বাথরুম রেনোভেশন ফিটিংস",
        description:
          "Complete bathroom fitting installation including basins, commodes, showers, taps, and modern accessories.",
        descriptionBn:
          "বেসিন, কমোড, শাওয়ার, ট্যাপ এবং আধুনিক আনুষঙ্গিক সহ সম্পূর্ণ বাথরুম ফিটিং ইন্সটলেশন।",
      },
      {
        title: "Kitchen Plumbing",
        titleBn: "রান্নাঘরের প্লাম্বিং",
        description:
          "Sink installation, dishwasher connection, water filter setup, and kitchen tap repair with quality fittings.",
        descriptionBn:
          "সিঙ্ক ইন্সটলেশন, ডিশওয়াশার সংযোগ, ওয়াটার ফিল্টার সেটআপ এবং মানসম্পন্ন ফিটিংস দিয়ে রান্নাঘরের ট্যাপ মেরামত।",
      },
      {
        title: "Drainage & Blockage",
        titleBn: "ড্রেনেজ ও ব্লকেজ",
        description:
          "Professional drain cleaning, sewage line repair, and blockage removal using specialized equipment.",
        descriptionBn:
          "বিশেষায়িত সরঞ্জাম ব্যবহার করে পেশাদার ড্রেন পরিষ্কার, স্যুয়েজ লাইন মেরামত এবং ব্লকেজ অপসারণ।",
      },
      {
        title: "Water Tank Services",
        titleBn: "ওয়াটার ট্যাংক সার্ভিস",
        description:
          "Water tank installation, cleaning, disinfection, and repair of underground or overhead tanks.",
        descriptionBn:
          "ওয়াটার ট্যাংক ইন্সটলেশন, পরিষ্কার, জীবাণুমুক্তকরণ এবং ভূগর্ভস্থ বা ছাদের ট্যাংক মেরামত।",
      },
      {
        title: "Motor & Pump Setup",
        titleBn: "মোটর ও পাম্প সেটআপ",
        description:
          "Water pump installation, motor repair, pressure booster setup, and pump maintenance services.",
        descriptionBn:
          "ওয়াটার পাম্প ইন্সটলেশন, মোটর মেরামত, প্রেসার বুস্টার সেটআপ এবং পাম্প রক্ষণাবেক্ষণ সার্ভিস।",
      },
    ],
    benefits: [
      "Experienced & skilled plumbers",
      "Modern leak detection tools",
      "Quality fittings & pipes",
      "3-month service warranty",
      "No hidden charges",
      "Emergency 24/7 availability",
    ],
    benefitsBn: [
      "অভিজ্ঞ ও দক্ষ প্লাম্বার",
      "আধুনিক লিক ডিটেকশন টুলস",
      "মানসম্পন্ন ফিটিংস ও পাইপ",
      "৩ মাসের সার্ভিস ওয়ারেন্টি",
      "কোনো লুকানো চার্জ নেই",
      "জরুরি ২৪/৭ সেবা",
    ],
    process: [
      {
        step: "Describe Your Issue",
        stepBn: "সমস্যা বর্ণনা করুন",
        description:
          "Tell us about the plumbing problem via WhatsApp with photos if possible.",
        descriptionBn:
          "সম্ভব হলে ছবি সহ হোয়াটসঅ্যাপে আপনার প্লাম্বিং সমস্যা সম্পর্কে জানান।",
      },
      {
        step: "Instant Quote",
        stepBn: "তাৎক্ষণিক মূল্য",
        description:
          "Get an approximate quote instantly, with final pricing after on-site inspection.",
        descriptionBn:
          "তাৎক্ষণিক আনুমানিক মূল্য পান, সাইটে পরিদর্শনের পর চূড়ান্ত মূল্য।",
      },
      {
        step: "Plumber Arrives",
        stepBn: "প্লাম্বার পৌঁছায়",
        description:
          "Verified plumber arrives with tools and quality materials at your scheduled time.",
        descriptionBn:
          "যাচাইকৃত প্লাম্বার আপনার নির্ধারিত সময়ে সরঞ্জাম এবং মানসম্পন্ন উপকরণ নিয়ে পৌঁছায়।",
      },
      {
        step: "Guaranteed Fix",
        stepBn: "নিশ্চিত সমাধান",
        description:
          "Problem fixed with warranty. Test the work before paying.",
        descriptionBn:
          "ওয়ারেন্টি সহ সমস্যা সমাধান। পেমেন্টের আগে কাজ পরীক্ষা করুন।",
      },
    ],
    faqs: [
      {
        question: "How do I know if I have a hidden pipe leak?",
        questionBn: "কীভাবে বুঝব আমার লুকানো পাইপ লিক আছে?",
        answer:
          "Signs include unexplained high water bills, damp spots on walls/floors, mold growth, or low water pressure. We use professional leak detection to find hidden leaks accurately.",
        answerBn:
          "লক্ষণগুলো হলো অস্বাভাবিক উচ্চ পানির বিল, দেওয়াল/মেঝেতে স্যাঁতসেঁতে দাগ, ছত্রাক বৃদ্ধি বা কম পানির চাপ। আমরা লুকানো লিক সঠিকভাবে খুঁজে পেতে পেশাদার লিক ডিটেকশন ব্যবহার করি।",
      },
      {
        question: "Do you fix major bathroom renovations?",
        questionBn: "আপনারা কি বড় বাথরুম রেনোভেশন করেন?",
        answer:
          "Yes, we handle complete bathroom renovations including tiles, fittings, plumbing lines, and modern upgrades. Contact us for a detailed consultation.",
        answerBn:
          "হ্যাঁ, আমরা টাইলস, ফিটিংস, প্লাম্বিং লাইন এবং আধুনিক আপগ্রেড সহ সম্পূর্ণ বাথরুম রেনোভেশন হ্যান্ডেল করি। বিস্তারিত পরামর্শের জন্য যোগাযোগ করুন।",
      },
      {
        question: "How quickly can you fix an emergency leak?",
        questionBn: "কত দ্রুত জরুরি লিক ঠিক করতে পারবেন?",
        answer:
          "For urgent leaks, we dispatch a plumber within 30-45 minutes in Rangpur city area. Just call us on WhatsApp for immediate assistance.",
        answerBn:
          "জরুরি লিকের জন্য, আমরা রংপুর সিটি এলাকায় ৩০-৪৫ মিনিটের মধ্যে একজন প্লাম্বার পাঠাই। তাৎক্ষণিক সহায়তার জন্য হোয়াটসঅ্যাপে কল করুন।",
      },
      {
        question: "What brands of fittings do you use?",
        questionBn: "আপনারা কোন ব্র্যান্ডের ফিটিংস ব্যবহার করেন?",
        answer:
          "We use trusted brands like RFL, Gazi, Sharif, and Marks depending on your budget and preference. You can also request specific brands.",
        answerBn:
          "আপনার বাজেট এবং পছন্দ অনুযায়ী আমরা RFL, Gazi, Sharif এবং Marks-এর মতো বিশ্বস্ত ব্র্যান্ড ব্যবহার করি। আপনি নির্দিষ্ট ব্র্যান্ডও অনুরোধ করতে পারেন।",
      },
      {
        question: "Do you clean water tanks?",
        questionBn: "আপনারা কি ওয়াটার ট্যাংক পরিষ্কার করেন?",
        answer:
          "Yes, we provide complete water tank cleaning, disinfection, and maintenance services for both underground and rooftop tanks.",
        answerBn:
          "হ্যাঁ, আমরা ভূগর্ভস্থ এবং ছাদের ট্যাংক দুটোর জন্য সম্পূর্ণ ওয়াটার ট্যাংক পরিষ্কার, জীবাণুমুক্তকরণ এবং রক্ষণাবেক্ষণ সার্ভিস প্রদান করি।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 3. AC SERVICE
  // ═══════════════════════════════════════════════════
  {
    slug: "ac-service",
    name: "AC Service",
    nameBn: "এসি সার্ভিস",
    icon: "Fan",
    tagline: "Cooler Homes, Healthier Air",
    taglineBn: "ঠান্ডা ঘর, স্বাস্থ্যকর বাতাস",
    shortDescription:
      "AC installation, gas refilling, deep servicing and repair for all major brands.",
    shortDescriptionBn:
      "সব বড় ব্র্যান্ডের এসি ইন্সটলেশন, গ্যাস রিফিলিং, ডিপ সার্ভিসিং ও মেরামত।",
    description: [
      "Beat the Rangpur heat with a fully serviced, efficient air conditioner. Our technicians are trained on all major AC brands and models including Samsung, LG, Gree, General, Panasonic, and more.",
      "From routine servicing to gas refilling and emergency repairs, we make sure your AC runs cool, quiet and energy-efficient all year round. Regular AC servicing can extend your unit's life by up to 40% and reduce electricity bills significantly.",
    ],
    descriptionBn: [
      "সম্পূর্ণ সার্ভিস করা, কার্যকর এসি দিয়ে রংপুরের গরমকে হারিয়ে দিন। আমাদের টেকনিশিয়ানরা Samsung, LG, Gree, General, Panasonic সহ সব প্রধান এসি ব্র্যান্ড ও মডেলে প্রশিক্ষিত।",
      "নিয়মিত সার্ভিসিং থেকে শুরু করে গ্যাস রিফিলিং এবং জরুরি মেরামত — আমরা নিশ্চিত করি আপনার এসি সারা বছর ঠান্ডা, নিঃশব্দ এবং বিদ্যুৎ-সাশ্রয়ী থাকে। নিয়মিত এসি সার্ভিসিং আপনার ইউনিটের আয়ু ৪০% পর্যন্ত বাড়াতে এবং বিদ্যুৎ বিল উল্লেখযোগ্যভাবে কমাতে পারে।",
    ],
    features: [
      "AC installation & uninstallation",
      "General & deep servicing",
      "Gas refilling & leak repair",
      "Compressor & PCB repair",
      "Water leakage solutions",
      "Annual maintenance plans",
    ],
    featuresBn: [
      "এসি ইন্সটলেশন ও আনইনস্টলেশন",
      "সাধারণ ও ডিপ সার্ভিসিং",
      "গ্যাস রিফিলিং ও লিক মেরামত",
      "কম্প্রেসর ও পিসিবি মেরামত",
      "পানি লিকেজের সমাধান",
      "বাৎসরিক রক্ষণাবেক্ষণ প্ল্যান",
    ],
    priceNote:
      "Service pricing varies by AC type & tonnage — ask us on WhatsApp.",
    priceNoteBn:
      "সার্ভিসের দাম এসির ধরন ও টনেজের উপর নির্ভর করে — হোয়াটসঅ্যাপে জিজ্ঞেস করুন।",
    detailedFeatures: [
      {
        title: "Complete AC Installation",
        titleBn: "সম্পূর্ণ এসি ইন্সটলেশন",
        description:
          "Professional installation of split, window, and cassette ACs with copper piping, drainage setup, and testing.",
        descriptionBn:
          "কপার পাইপিং, ড্রেনেজ সেটআপ এবং টেস্টিং সহ স্প্লিট, উইন্ডো এবং ক্যাসেট এসির পেশাদার ইন্সটলেশন।",
      },
      {
        title: "Deep Cleaning Service",
        titleBn: "ডিপ ক্লিনিং সার্ভিস",
        description:
          "Complete deep cleaning of indoor & outdoor units, coils, filters, and drainage — removes bacteria and improves cooling.",
        descriptionBn:
          "ইনডোর ও আউটডোর ইউনিট, কয়েল, ফিল্টার এবং ড্রেনেজের সম্পূর্ণ ডিপ ক্লিনিং — ব্যাকটেরিয়া দূর করে এবং কুলিং উন্নত করে।",
      },
      {
        title: "Gas Refilling",
        titleBn: "গ্যাস রিফিলিং",
        description:
          "R-22, R-32, R-410a refrigerant refilling with leak detection and pressure testing for optimal cooling.",
        descriptionBn:
          "অপ্টিমাল কুলিংয়ের জন্য লিক ডিটেকশন এবং প্রেসার টেস্টিং সহ R-22, R-32, R-410a রেফ্রিজারেন্ট রিফিলিং।",
      },
      {
        title: "Compressor & PCB Repair",
        titleBn: "কম্প্রেসর ও PCB মেরামত",
        description:
          "Expert diagnosis and repair of compressor failures, PCB issues, capacitor replacement, and motor problems.",
        descriptionBn:
          "কম্প্রেসর ব্যর্থতা, PCB সমস্যা, ক্যাপাসিটর প্রতিস্থাপন এবং মোটর সমস্যার বিশেষজ্ঞ নির্ণয় এবং মেরামত।",
      },
      {
        title: "Annual Maintenance",
        titleBn: "বাৎসরিক রক্ষণাবেক্ষণ",
        description:
          "Comprehensive AMC packages with 4 free services per year, priority support, and discounted repairs.",
        descriptionBn:
          "প্রতি বছর ৪টি ফ্রি সার্ভিস, অগ্রাধিকার সহায়তা এবং ডিসকাউন্টেড মেরামত সহ ব্যাপক AMC প্যাকেজ।",
      },
      {
        title: "All Major Brands",
        titleBn: "সব প্রধান ব্র্যান্ড",
        description:
          "Samsung, LG, Gree, General, Panasonic, Whirlpool, Haier, Walton, Vision — we service them all.",
        descriptionBn:
          "Samsung, LG, Gree, General, Panasonic, Whirlpool, Haier, Walton, Vision — আমরা সবগুলো সার্ভিস করি।",
      },
    ],
    benefits: [
      "Brand-certified technicians",
      "Genuine spare parts only",
      "Same-day service available",
      "Extended warranty on repairs",
      "Free basic checkup with service",
      "Energy-saving optimization",
    ],
    benefitsBn: [
      "ব্র্যান্ড-প্রত্যয়িত টেকনিশিয়ান",
      "শুধু অরিজিনাল যন্ত্রাংশ",
      "একই দিনে সার্ভিস",
      "মেরামতে বর্ধিত ওয়ারেন্টি",
      "সার্ভিসের সাথে ফ্রি বেসিক চেকআপ",
      "বিদ্যুৎ-সাশ্রয়ী অপ্টিমাইজেশন",
    ],
    process: [
      {
        step: "Book AC Service",
        stepBn: "এসি সার্ভিস বুক করুন",
        description:
          "Tell us your AC brand, tonnage, and the type of service needed.",
        descriptionBn:
          "আমাদের জানান আপনার এসির ব্র্যান্ড, টনেজ এবং প্রয়োজনীয় সার্ভিসের ধরন।",
      },
      {
        step: "Schedule Visit",
        stepBn: "ভিজিট নির্ধারণ",
        description:
          "Choose a convenient time slot. We offer flexible morning, afternoon, and evening slots.",
        descriptionBn:
          "সুবিধাজনক সময় বেছে নিন। আমরা নমনীয় সকাল, দুপুর এবং সন্ধ্যা স্লট অফার করি।",
      },
      {
        step: "Expert Diagnosis",
        stepBn: "বিশেষজ্ঞ নির্ণয়",
        description:
          "Certified technician arrives, diagnoses the issue, and explains the solution.",
        descriptionBn:
          "প্রত্যয়িত টেকনিশিয়ান পৌঁছে সমস্যা নির্ণয় করে এবং সমাধান ব্যাখ্যা করে।",
      },
      {
        step: "Service Completed",
        stepBn: "সার্ভিস সম্পন্ন",
        description:
          "Work done with warranty. Test the cooling and enjoy fresh, cool air.",
        descriptionBn:
          "ওয়ারেন্টি সহ কাজ সম্পন্ন। কুলিং পরীক্ষা করুন এবং সতেজ, ঠান্ডা বাতাস উপভোগ করুন।",
      },
    ],
    faqs: [
      {
        question: "How often should I service my AC?",
        questionBn: "কতবার আমার এসি সার্ভিস করা উচিত?",
        answer:
          "For best performance, service your AC at least twice a year — once before summer (March-April) and once after monsoon (October). Heavy usage areas may need more frequent servicing.",
        answerBn:
          "সেরা পারফরম্যান্সের জন্য, বছরে অন্তত দুবার এসি সার্ভিস করুন — একবার গ্রীষ্মের আগে (মার্চ-এপ্রিল) এবং একবার বর্ষার পরে (অক্টোবর)। ভারী ব্যবহারের এলাকায় আরো ঘন ঘন সার্ভিসিং প্রয়োজন হতে পারে।",
      },
      {
        question: "Why is my AC not cooling properly?",
        questionBn: "আমার এসি ঠিকমতো ঠান্ডা করছে না কেন?",
        answer:
          "Common reasons include low gas, dirty filters, blocked coils, faulty compressor, or thermostat issues. Our technicians can diagnose and fix the exact problem.",
        answerBn:
          "সাধারণ কারণগুলো হলো কম গ্যাস, নোংরা ফিল্টার, ব্লকড কয়েল, ত্রুটিপূর্ণ কম্প্রেসর বা থার্মোস্ট্যাট সমস্যা। আমাদের টেকনিশিয়ানরা সঠিক সমস্যা নির্ণয় এবং সমাধান করতে পারেন।",
      },
      {
        question: "How much does AC servicing cost?",
        questionBn: "এসি সার্ভিসিং খরচ কত?",
        answer:
          "Cost varies by AC type (Split/Window), tonnage (1/1.5/2 ton), and service type (General/Deep). Contact us on WhatsApp for exact pricing based on your AC model.",
        answerBn:
          "খরচ নির্ভর করে এসির ধরন (স্প্লিট/উইন্ডো), টনেজ (১/১.৫/২ টন) এবং সার্ভিসের ধরনের (সাধারণ/ডিপ) উপর। আপনার এসি মডেলের ভিত্তিতে সঠিক মূল্যের জন্য হোয়াটসঅ্যাপে যোগাযোগ করুন।",
      },
      {
        question: "Do you handle warranty repairs for new ACs?",
        questionBn: "আপনারা কি নতুন এসির ওয়ারেন্টি মেরামত করেন?",
        answer:
          "For ACs still under manufacturer warranty, we recommend contacting the brand's service center. For out-of-warranty ACs, we provide expert repair with our own warranty.",
        answerBn:
          "যেসব এসি এখনো নির্মাতার ওয়ারেন্টিতে আছে, আমরা ব্র্যান্ডের সার্ভিস সেন্টারে যোগাযোগ করার পরামর্শ দিই। ওয়ারেন্টি-মেয়াদোত্তীর্ণ এসির জন্য, আমরা আমাদের নিজস্ব ওয়ারেন্টি সহ বিশেষজ্ঞ মেরামত প্রদান করি।",
      },
      {
        question: "Do you provide AMC (Annual Maintenance Contract)?",
        questionBn: "আপনারা কি AMC প্রদান করেন?",
        answer:
          "Yes! We offer flexible AMC plans with 3-4 servicing visits per year, priority support, and discounted spare parts. Contact us for AMC pricing.",
        answerBn:
          "হ্যাঁ! আমরা প্রতি বছর ৩-৪টি সার্ভিসিং ভিজিট, অগ্রাধিকার সহায়তা এবং ডিসকাউন্টেড যন্ত্রাংশ সহ নমনীয় AMC প্ল্যান অফার করি। AMC মূল্যের জন্য যোগাযোগ করুন।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 4. HOME CLEANING
  // ═══════════════════════════════════════════════════
  {
    slug: "home-cleaning",
    name: "Home Cleaning",
    nameBn: "হোম ক্লিনিং",
    icon: "Sparkles",
    tagline: "A Spotless Home, Effortlessly",
    taglineBn: "নিখুঁত পরিষ্কার ঘর, অনায়াসে",
    shortDescription:
      "Complete home cleaning with trained staff, safe products and modern equipment.",
    shortDescriptionBn:
      "প্রশিক্ষিত কর্মী, নিরাপদ পণ্য ও আধুনিক সরঞ্জামে সম্পূর্ণ ঘর পরিষ্কার।",
    description: [
      "Enjoy a fresh, hygienic home without lifting a finger. Our home cleaning teams use safe cleaning agents and modern tools for a thorough clean that goes beyond surface-level dusting.",
      "Perfect for weekly upkeep, move-in/move-out cleaning, or a quick refresh before guests arrive. Our trained staff follows a systematic checklist to ensure every corner of your home sparkles.",
    ],
    descriptionBn: [
      "একটুও পরিশ্রম না করে উপভোগ করুন সতেজ, স্বাস্থ্যকর একটি ঘর। আমাদের হোম ক্লিনিং টিম নিরাপদ ক্লিনিং এজেন্ট ও আধুনিক টুলস ব্যবহার করে পুঙ্খানুপুঙ্খ পরিষ্কার করে যা সাধারণ ঝাড়ামোছার চেয়েও গভীর।",
      "সাপ্তাহিক রক্ষণাবেক্ষণ, বাসা পরিবর্তনের সময় পরিষ্কার, বা অতিথি আসার আগে দ্রুত ফ্রেশ করার জন্য উপযুক্ত। আমাদের প্রশিক্ষিত কর্মীরা নিয়মিত চেকলিস্ট অনুসরণ করে যাতে আপনার ঘরের প্রতিটি কোণ ঝকঝকে হয়।",
    ],
    features: [
      "Living room & bedroom cleaning",
      "Kitchen & bathroom sanitation",
      "Dusting, mopping & vacuuming",
      "Window & glass cleaning",
      "Move-in / move-out cleaning",
      "Eco-friendly cleaning products",
    ],
    featuresBn: [
      "লিভিং রুম ও বেডরুম পরিষ্কার",
      "রান্নাঘর ও বাথরুম স্যানিটেশন",
      "ধুলো ঝাড়া, মুছা ও ভ্যাকুয়ামিং",
      "জানালা ও কাঁচ পরিষ্কার",
      "মুভ-ইন / মুভ-আউট ক্লিনিং",
      "পরিবেশ-বান্ধব ক্লিনিং পণ্য",
    ],
    priceNote: "Flexible packages for one-time or recurring cleaning.",
    priceNoteBn: "একবার বা নিয়মিত পরিষ্কারের জন্য নমনীয় প্যাকেজ।",
    detailedFeatures: [
      {
        title: "Full House Cleaning",
        titleBn: "সম্পূর্ণ ঘর পরিষ্কার",
        description:
          "Comprehensive cleaning of all rooms including dusting, mopping, vacuuming, and organizing surfaces.",
        descriptionBn:
          "ধুলো ঝাড়া, মুছা, ভ্যাকুয়ামিং এবং সারফেস সংগঠিত করা সহ সব রুমের বিস্তৃত পরিষ্কার।",
      },
      {
        title: "Kitchen Deep Clean",
        titleBn: "রান্নাঘর ডিপ ক্লিন",
        description:
          "Countertop cleaning, stove degreasing, sink sanitization, cabinet wiping, and appliance exterior cleaning.",
        descriptionBn:
          "কাউন্টারটপ পরিষ্কার, চুলার গ্রিজ পরিষ্কার, সিঙ্ক স্যানিটাইজ, ক্যাবিনেট মোছা এবং যন্ত্রপাতির বাইরের অংশ পরিষ্কার।",
      },
      {
        title: "Bathroom Sanitation",
        titleBn: "বাথরুম স্যানিটেশন",
        description:
          "Toilet, sink, shower, and tile disinfection using medical-grade cleaners to eliminate germs.",
        descriptionBn:
          "জীবাণু দূর করতে মেডিকেল-গ্রেড ক্লিনার ব্যবহার করে টয়লেট, সিঙ্ক, শাওয়ার এবং টাইল জীবাণুমুক্তকরণ।",
      },
      {
        title: "Window & Glass",
        titleBn: "জানালা ও কাঁচ",
        description:
          "Streak-free window cleaning, glass door polishing, and mirror shining with professional equipment.",
        descriptionBn:
          "পেশাদার সরঞ্জাম দিয়ে দাগহীন জানালা পরিষ্কার, গ্লাস ডোর পলিশিং এবং মিরর চকচকে করা।",
      },
      {
        title: "Furniture & Upholstery",
        titleBn: "আসবাবপত্র ও গৃহসজ্জা",
        description:
          "Sofa dusting, chair cleaning, cushion refreshing, and gentle care for wooden furniture surfaces.",
        descriptionBn:
          "সোফা ঝাড়া, চেয়ার পরিষ্কার, কুশন সতেজকরণ এবং কাঠের আসবাবপত্রের যত্ন।",
      },
      {
        title: "Flexible Packages",
        titleBn: "নমনীয় প্যাকেজ",
        description:
          "Weekly, bi-weekly, monthly, or one-time cleaning options tailored to your schedule and budget.",
        descriptionBn:
          "সাপ্তাহিক, দ্বি-সাপ্তাহিক, মাসিক বা একবার পরিষ্কারের অপশন — আপনার সময়সূচী এবং বাজেট অনুযায়ী।",
      },
    ],
    benefits: [
      "Trained & background-checked staff",
      "Eco-friendly cleaning products",
      "Modern equipment provided",
      "Flexible scheduling options",
      "Satisfaction guarantee",
      "Female staff available on request",
    ],
    benefitsBn: [
      "প্রশিক্ষিত ও ব্যাকগ্রাউন্ড যাচাইকৃত কর্মী",
      "পরিবেশ-বান্ধব ক্লিনিং পণ্য",
      "আধুনিক সরঞ্জাম সরবরাহ করা",
      "নমনীয় সময়সূচী অপশন",
      "সন্তুষ্টির নিশ্চয়তা",
      "অনুরোধে মহিলা কর্মী উপলব্ধ",
    ],
    process: [
      {
        step: "Choose Your Package",
        stepBn: "প্যাকেজ বেছে নিন",
        description:
          "Select from one-time, weekly, or monthly cleaning packages based on your needs.",
        descriptionBn:
          "আপনার প্রয়োজন অনুযায়ী একবার, সাপ্তাহিক বা মাসিক ক্লিনিং প্যাকেজ থেকে বেছে নিন।",
      },
      {
        step: "Schedule the Visit",
        stepBn: "ভিজিট নির্ধারণ",
        description:
          "Pick a convenient date and time. We work around your schedule.",
        descriptionBn:
          "সুবিধাজনক তারিখ ও সময় বাছুন। আমরা আপনার সময়সূচী অনুযায়ী কাজ করি।",
      },
      {
        step: "Team Arrives",
        stepBn: "টিম পৌঁছায়",
        description:
          "Our trained cleaning team arrives with all equipment and eco-friendly products.",
        descriptionBn:
          "আমাদের প্রশিক্ষিত ক্লিনিং টিম সব সরঞ্জাম এবং পরিবেশ-বান্ধব পণ্য নিয়ে পৌঁছায়।",
      },
      {
        step: "Enjoy Your Clean Home",
        stepBn: "পরিষ্কার ঘর উপভোগ করুন",
        description:
          "Sit back and relax! We handle everything and clean up after ourselves.",
        descriptionBn:
          "আরাম করুন! আমরা সব সামলাই এবং নিজেদের কাজ শেষে সব ক্লিনআপ করে যাই।",
      },
    ],
    faqs: [
      {
        question: "How long does a full home cleaning take?",
        questionBn: "সম্পূর্ণ ঘর পরিষ্কার করতে কতক্ষণ লাগে?",
        answer:
          "It typically takes 3-5 hours for a 2-3 BHK apartment, depending on the size, condition, and specific requirements.",
        answerBn:
          "আকার, অবস্থা এবং নির্দিষ্ট প্রয়োজন অনুযায়ী ২-৩ BHK অ্যাপার্টমেন্টের জন্য সাধারণত ৩-৫ ঘণ্টা লাগে।",
      },
      {
        question: "Do you bring your own cleaning supplies?",
        questionBn: "আপনারা কি নিজেদের ক্লিনিং সরবরাহ নিয়ে আসেন?",
        answer:
          "Yes! We bring all necessary equipment and eco-friendly cleaning products. You don't need to provide anything.",
        answerBn:
          "হ্যাঁ! আমরা সব প্রয়োজনীয় সরঞ্জাম এবং পরিবেশ-বান্ধব ক্লিনিং পণ্য নিয়ে আসি। আপনাকে কিছুই সরবরাহ করতে হবে না।",
      },
      {
        question: "Can I request female cleaners only?",
        questionBn: "আমি কি শুধু মহিলা ক্লিনার অনুরোধ করতে পারি?",
        answer:
          "Absolutely! Just mention your preference when booking. We understand and respect privacy needs.",
        answerBn:
          "অবশ্যই! বুকিংয়ের সময় আপনার পছন্দ উল্লেখ করুন। আমরা গোপনীয়তার প্রয়োজন বুঝি এবং সম্মান করি।",
      },
      {
        question: "Are your cleaning products safe for kids and pets?",
        questionBn:
          "আপনাদের ক্লিনিং পণ্য কি বাচ্চা এবং পোষা প্রাণীর জন্য নিরাপদ?",
        answer:
          "Yes, we use eco-friendly, non-toxic cleaning products that are safe for children, pets, and people with allergies.",
        answerBn:
          "হ্যাঁ, আমরা পরিবেশ-বান্ধব, বিষমুক্ত ক্লিনিং পণ্য ব্যবহার করি যা বাচ্চা, পোষা প্রাণী এবং অ্যালার্জি আছে এমন মানুষদের জন্য নিরাপদ।",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        questionBn: "যদি ক্লিনিংয়ে সন্তুষ্ট না হই?",
        answer:
          "We offer a satisfaction guarantee. If you're not happy with any area, we'll re-clean it free of charge within 24 hours.",
        answerBn:
          "আমরা সন্তুষ্টির নিশ্চয়তা দিই। যদি কোনো এলাকায় খুশি না হন, আমরা ২৪ ঘণ্টার মধ্যে বিনামূল্যে আবার পরিষ্কার করে দিব।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 5. DEEP CLEANING
  // ═══════════════════════════════════════════════════
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    nameBn: "ডিপ ক্লিনিং",
    icon: "SprayCan",
    tagline: "Deep Clean. Deep Fresh.",
    taglineBn: "গভীর পরিষ্কার। গভীর সতেজতা।",
    shortDescription:
      "Intensive sanitation for kitchens, bathrooms, sofas, carpets and hard-to-reach areas.",
    shortDescriptionBn:
      "রান্নাঘর, বাথরুম, সোফা, কার্পেট এবং হার্ড-টু-রিচ জায়গায় নিবিড় স্যানিটেশন।",
    description: [
      "Our deep cleaning service goes far beyond routine cleaning — targeting grease, grime, stains and hidden dirt in every corner of your home. We use industrial-grade equipment and specialized cleaning agents for maximum results.",
      "Ideal for festival preparation, seasonal cleaning, post-construction cleanup, or homes that need an intensive refresh. Our team spends extra time on high-touch surfaces, deep crevices, and neglected areas.",
    ],
    descriptionBn: [
      "আমাদের ডিপ ক্লিনিং সার্ভিস নিয়মিত পরিষ্কারের চেয়েও অনেক বেশি — আপনার ঘরের প্রতিটি কোণে গ্রীজ, ময়লা, দাগ এবং লুকানো নোংরা দূর করি। সর্বাধিক ফলাফলের জন্য আমরা ইন্ডাস্ট্রিয়াল-গ্রেড সরঞ্জাম এবং বিশেষায়িত ক্লিনিং এজেন্ট ব্যবহার করি।",
      "উৎসব প্রস্তুতি, মৌসুমী পরিষ্কার, নির্মাণ-পরবর্তী পরিষ্কার, বা যে ঘরগুলোর নিবিড় ফ্রেশনেস দরকার — তার জন্য আদর্শ। আমাদের টিম উচ্চ-স্পর্শ পৃষ্ঠ, গভীর ফাঁক এবং অবহেলিত এলাকায় অতিরিক্ত সময় ব্যয় করে।",
    ],
    features: [
      "Kitchen degreasing",
      "Bathroom deep sanitation",
      "Sofa & carpet shampooing",
      "Wall & ceiling cobweb removal",
      "Floor scrubbing & polishing",
      "Odor & stain removal",
    ],
    featuresBn: [
      "রান্নাঘরের গ্রীজ পরিষ্কার",
      "বাথরুম ডিপ স্যানিটেশন",
      "সোফা ও কার্পেট শ্যাম্পুইং",
      "দেওয়াল ও ছাদের মাকড়সার জাল পরিষ্কার",
      "মেঝে স্ক্রাবিং ও পলিশিং",
      "গন্ধ ও দাগ দূরীকরণ",
    ],
    priceNote: "Custom quote based on home size and condition.",
    priceNoteBn: "ঘরের আকার ও অবস্থার ভিত্তিতে কাস্টম quote।",
    detailedFeatures: [
      {
        title: "Kitchen Degreasing",
        titleBn: "রান্নাঘরের গ্রীজ পরিষ্কার",
        description:
          "Complete grease removal from stove, chimney, tiles, walls, and cabinet interiors using powerful degreasers.",
        descriptionBn:
          "শক্তিশালী ডিগ্রিজার ব্যবহার করে চুলা, চিমনি, টাইলস, দেওয়াল এবং ক্যাবিনেট থেকে সম্পূর্ণ গ্রীজ অপসারণ।",
      },
      {
        title: "Bathroom Deep Sanitation",
        titleBn: "বাথরুম ডিপ স্যানিটেশন",
        description:
          "Removal of tough stains, limescale, mildew, and complete disinfection of all bathroom surfaces.",
        descriptionBn:
          "কঠিন দাগ, লাইমস্কেল, ছত্রাক অপসারণ এবং সব বাথরুম পৃষ্ঠের সম্পূর্ণ জীবাণুমুক্তকরণ।",
      },
      {
        title: "Sofa & Carpet Shampooing",
        titleBn: "সোফা ও কার্পেট শ্যাম্পুইং",
        description:
          "Professional steam cleaning and shampooing of sofas, chairs, mattresses, and carpets to remove dust mites.",
        descriptionBn:
          "ধূলিকণা দূর করতে সোফা, চেয়ার, ম্যাট্রেস এবং কার্পেটের পেশাদার স্টিম ক্লিনিং এবং শ্যাম্পুইং।",
      },
      {
        title: "Wall & Ceiling Cleaning",
        titleBn: "দেওয়াল ও ছাদ পরিষ্কার",
        description:
          "Cobweb removal, wall spot cleaning, ceiling dusting, and ventilator/fan blade cleaning.",
        descriptionBn:
          "মাকড়সার জাল অপসারণ, দেওয়ালের দাগ পরিষ্কার, ছাদের ধুলো ঝাড়া এবং ভেন্টিলেটর/ফ্যান ব্লেড পরিষ্কার।",
      },
      {
        title: "Floor Scrubbing & Polishing",
        titleBn: "মেঝে স্ক্রাবিং ও পলিশিং",
        description:
          "Heavy-duty machine scrubbing of tiles, marble polishing, and grout cleaning for a like-new shine.",
        descriptionBn:
          "নতুনের মতো চকচকে করতে টাইলসের ভারী মেশিন স্ক্রাবিং, মার্বেল পলিশিং এবং গ্রাউট পরিষ্কার।",
      },
      {
        title: "Odor Elimination",
        titleBn: "গন্ধ দূরীকরণ",
        description:
          "Professional odor treatment for pet smells, kitchen odors, mildew, and general freshness restoration.",
        descriptionBn:
          "পোষা প্রাণীর গন্ধ, রান্নাঘরের গন্ধ, ছত্রাক এবং সাধারণ সতেজতা পুনরুদ্ধারের জন্য পেশাদার গন্ধ চিকিৎসা।",
      },
    ],
    benefits: [
      "Industrial-grade equipment",
      "Deep sanitization technology",
      "Removes 99.9% germs & bacteria",
      "Non-toxic cleaning agents",
      "Trained cleaning specialists",
      "Complete home transformation",
    ],
    benefitsBn: [
      "ইন্ডাস্ট্রিয়াল-গ্রেড সরঞ্জাম",
      "ডিপ স্যানিটাইজেশন প্রযুক্তি",
      "৯৯.৯% জীবাণু ও ব্যাকটেরিয়া দূর করে",
      "বিষমুক্ত ক্লিনিং এজেন্ট",
      "প্রশিক্ষিত ক্লিনিং বিশেষজ্ঞ",
      "সম্পূর্ণ ঘর রূপান্তর",
    ],
    process: [
      {
        step: "Home Assessment",
        stepBn: "ঘর মূল্যায়ন",
        description:
          "Share photos and details of your home. We provide a customized deep cleaning plan.",
        descriptionBn:
          "আপনার ঘরের ছবি এবং বিবরণ শেয়ার করুন। আমরা একটি কাস্টমাইজড ডিপ ক্লিনিং প্ল্যান প্রদান করি।",
      },
      {
        step: "Confirm & Schedule",
        stepBn: "কনফার্ম ও সময় নির্ধারণ",
        description:
          "Approve the quote and pick your preferred date. Deep cleaning takes 6-10 hours typically.",
        descriptionBn:
          "quote অনুমোদন করুন এবং পছন্দের তারিখ বেছে নিন। ডিপ ক্লিনিং সাধারণত ৬-১০ ঘণ্টা লাগে।",
      },
      {
        step: "Team of Experts",
        stepBn: "বিশেষজ্ঞ টিম",
        description:
          "Our specialized team arrives with industrial equipment and premium cleaning agents.",
        descriptionBn:
          "আমাদের বিশেষায়িত টিম ইন্ডাস্ট্রিয়াল সরঞ্জাম এবং প্রিমিয়াম ক্লিনিং এজেন্ট নিয়ে পৌঁছায়।",
      },
      {
        step: "Sparkling Clean Home",
        stepBn: "ঝকঝকে পরিষ্কার ঘর",
        description:
          "Enjoy a completely refreshed, deep-cleaned home that feels brand new.",
        descriptionBn:
          "সম্পূর্ণ সতেজ, ডিপ-ক্লিন করা ঘর উপভোগ করুন যা একদম নতুনের মতো লাগবে।",
      },
    ],
    faqs: [
      {
        question: "How is deep cleaning different from regular cleaning?",
        questionBn: "ডিপ ক্লিনিং নিয়মিত পরিষ্কারের চেয়ে কীভাবে আলাদা?",
        answer:
          "Deep cleaning targets grease, hidden dirt, and hard-to-reach areas using industrial equipment. It includes appliance interiors, wall spots, ceiling, and detailed sanitization — much more thorough than regular cleaning.",
        answerBn:
          "ডিপ ক্লিনিং ইন্ডাস্ট্রিয়াল সরঞ্জাম ব্যবহার করে গ্রীজ, লুকানো নোংরা এবং হার্ড-টু-রিচ এলাকা লক্ষ্য করে। এতে যন্ত্রপাতির অভ্যন্তর, দেওয়ালের দাগ, ছাদ এবং বিস্তারিত স্যানিটাইজেশন অন্তর্ভুক্ত — নিয়মিত পরিষ্কারের চেয়ে অনেক বেশি পুঙ্খানুপুঙ্খ।",
      },
      {
        question: "How often should I get deep cleaning done?",
        questionBn: "কতবার ডিপ ক্লিনিং করানো উচিত?",
        answer:
          "We recommend deep cleaning every 3-4 months for most homes. Homes with pets, children, or heavy usage may benefit from bi-monthly deep cleaning.",
        answerBn:
          "আমরা বেশিরভাগ ঘরের জন্য প্রতি ৩-৪ মাসে ডিপ ক্লিনিং করার পরামর্শ দিই। পোষা প্রাণী, বাচ্চা বা ভারী ব্যবহারের ঘরগুলো দ্বি-মাসিক ডিপ ক্লিনিং থেকে উপকৃত হতে পারে।",
      },
      {
        question: "How long does deep cleaning take?",
        questionBn: "ডিপ ক্লিনিং কতক্ষণ লাগে?",
        answer:
          "Typically 6-10 hours depending on home size and condition. Larger homes may require 2 days or a bigger team.",
        answerBn:
          "সাধারণত ৬-১০ ঘণ্টা লাগে ঘরের আকার এবং অবস্থার উপর নির্ভর করে। বড় ঘরের জন্য ২ দিন বা বড় টিম লাগতে পারে।",
      },
      {
        question: "Do I need to move furniture before cleaning?",
        questionBn: "পরিষ্কারের আগে কি আসবাবপত্র সরাতে হবে?",
        answer:
          "No, our team handles moving light furniture during cleaning. For heavy items, we clean around them or you can help move them.",
        answerBn:
          "না, পরিষ্কারের সময় আমাদের টিম হালকা আসবাবপত্র সরানো হ্যান্ডেল করে। ভারী জিনিসের জন্য, আমরা সেগুলোর আশেপাশে পরিষ্কার করি বা আপনি সরাতে সাহায্য করতে পারেন।",
      },
      {
        question: "Is deep cleaning safe for allergies?",
        questionBn: "ডিপ ক্লিনিং কি অ্যালার্জির জন্য নিরাপদ?",
        answer:
          "Yes! Deep cleaning removes dust mites, allergens, mold, and pet dander that trigger allergies. We use hypoallergenic products on request.",
        answerBn:
          "হ্যাঁ! ডিপ ক্লিনিং ধূলিকণা, অ্যালার্জেন, ছত্রাক এবং পোষা প্রাণীর খুশকি দূর করে যা অ্যালার্জি ট্রিগার করে। অনুরোধে আমরা হাইপোঅ্যালার্জেনিক পণ্য ব্যবহার করি।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 6. DRY WASH
  // ═══════════════════════════════════════════════════
  {
    slug: "dry-wash",
    name: "Dry Wash",
    nameBn: "ড্রাই ওয়াশ",
    icon: "Shirt",
    tagline: "Premium Garment Care",
    taglineBn: "প্রিমিয়াম কাপড়ের যত্ন",
    shortDescription:
      "Professional dry cleaning and laundry pickup & delivery at your doorstep.",
    shortDescriptionBn:
      "পেশাদার ড্রাই ক্লিনিং এবং আপনার দরজায় লন্ড্রি পিকআপ ও ডেলিভারি।",
    description: [
      "Keep your clothes fresh, clean and long-lasting with our doorstep dry wash service. We use professional-grade equipment and gentle cleaning solutions that protect delicate fabrics while removing tough stains.",
      "We pick up, professionally clean, and deliver your garments back — saving you time without compromising on quality. Perfect for suits, sarees, wedding dresses, silk, wool, and any premium fabric that needs special care.",
    ],
    descriptionBn: [
      "আমাদের ডোরস্টেপ ড্রাই ওয়াশ সার্ভিসের মাধ্যমে আপনার কাপড় সতেজ, পরিষ্কার এবং দীর্ঘস্থায়ী রাখুন। আমরা পেশাদার-গ্রেড সরঞ্জাম এবং কোমল ক্লিনিং সলিউশন ব্যবহার করি যা কঠিন দাগ দূর করার পাশাপাশি সূক্ষ্ম কাপড় রক্ষা করে।",
      "আমরা কাপড় পিকআপ করি, পেশাদারভাবে পরিষ্কার করি এবং ফেরত ডেলিভারি করি — গুণগত মান বজায় রেখে আপনার সময় বাঁচাই। স্যুট, শাড়ি, বিয়ের পোশাক, সিল্ক, উল এবং যেকোনো প্রিমিয়াম কাপড় যার বিশেষ যত্ন দরকার তার জন্য উপযুক্ত।",
    ],
    features: [
      "Doorstep pickup & delivery",
      "Dry cleaning for delicate fabrics",
      "Ironing & pressing",
      "Stain treatment",
      "Bulk laundry for families",
      "Same-week turnaround",
    ],
    featuresBn: [
      "ডোরস্টেপ পিকআপ ও ডেলিভারি",
      "সূক্ষ্ম কাপড়ের ড্রাই ক্লিনিং",
      "আয়রন ও প্রেসিং",
      "দাগ চিকিৎসা",
      "পরিবারের জন্য বাল্ক লন্ড্রি",
      "সপ্তাহের মধ্যে ডেলিভারি",
    ],
    priceNote: "Priced per garment / per kg — ask for our latest rate card.",
    priceNoteBn:
      "প্রতি কাপড়/প্রতি কেজি হিসাবে দাম — আমাদের সর্বশেষ রেট কার্ড জিজ্ঞেস করুন।",
    detailedFeatures: [
      {
        title: "Premium Dry Cleaning",
        titleBn: "প্রিমিয়াম ড্রাই ক্লিনিং",
        description:
          "Gentle cleaning for suits, sarees, silk, wool, and delicate fabrics using professional solvents.",
        descriptionBn:
          "পেশাদার সলভেন্ট ব্যবহার করে স্যুট, শাড়ি, সিল্ক, উল এবং সূক্ষ্ম কাপড়ের জন্য কোমল পরিষ্কার।",
      },
      {
        title: "Doorstep Pickup",
        titleBn: "ডোরস্টেপ পিকআপ",
        description:
          "We collect your clothes from your home at your convenient time — no need to visit a shop.",
        descriptionBn:
          "আমরা আপনার সুবিধাজনক সময়ে বাড়ি থেকে কাপড় সংগ্রহ করি — কোনো দোকানে যাওয়ার দরকার নেই।",
      },
      {
        title: "Stain Removal",
        titleBn: "দাগ অপসারণ",
        description:
          "Expert stain treatment for oil, curry, ink, blood, wine, and other tough stains without damaging fabric.",
        descriptionBn:
          "কাপড় নষ্ট না করে তেল, তরকারি, কালি, রক্ত, ওয়াইন এবং অন্যান্য কঠিন দাগের জন্য বিশেষজ্ঞ দাগ চিকিৎসা।",
      },
      {
        title: "Professional Ironing",
        titleBn: "পেশাদার আয়রনিং",
        description:
          "Crease-free ironing and pressing using steam and heat control for perfect finishing.",
        descriptionBn:
          "নিখুঁত ফিনিশিংয়ের জন্য স্টিম এবং হিট কন্ট্রোল ব্যবহার করে ক্রিজ-মুক্ত আয়রনিং এবং প্রেসিং।",
      },
      {
        title: "Bulk Laundry",
        titleBn: "বাল্ক লন্ড্রি",
        description:
          "Regular family laundry with washing, drying, and folding — perfect for busy households.",
        descriptionBn:
          "ধোয়া, শুকানো এবং ভাঁজ করা সহ নিয়মিত পারিবারিক লন্ড্রি — ব্যস্ত পরিবারের জন্য উপযুক্ত।",
      },
      {
        title: "Fast Turnaround",
        titleBn: "দ্রুত ডেলিভারি",
        description:
          "Standard 3-5 days delivery, express same-day service available for urgent needs (extra charge).",
        descriptionBn:
          "স্ট্যান্ডার্ড ৩-৫ দিনের ডেলিভারি, জরুরি প্রয়োজনের জন্য একই দিনের এক্সপ্রেস সার্ভিস উপলব্ধ (অতিরিক্ত চার্জ)।",
      },
    ],
    benefits: [
      "Free pickup & delivery",
      "Special fabric care expertise",
      "Eco-friendly cleaning process",
      "No damage guarantee",
      "Affordable per-item pricing",
      "Express service available",
    ],
    benefitsBn: [
      "ফ্রি পিকআপ ও ডেলিভারি",
      "বিশেষ কাপড়ের যত্নের বিশেষজ্ঞতা",
      "পরিবেশ-বান্ধব ক্লিনিং প্রক্রিয়া",
      "কোনো ক্ষতির নিশ্চয়তা",
      "সাশ্রয়ী প্রতি-কাপড় মূল্য",
      "এক্সপ্রেস সার্ভিস উপলব্ধ",
    ],
    process: [
      {
        step: "Schedule Pickup",
        stepBn: "পিকআপ নির্ধারণ",
        description:
          "WhatsApp us with the clothes count and preferred pickup time.",
        descriptionBn:
          "কাপড়ের সংখ্যা এবং পছন্দের পিকআপ সময় নিয়ে আমাদের হোয়াটসঅ্যাপ করুন।",
      },
      {
        step: "We Collect",
        stepBn: "আমরা সংগ্রহ করি",
        description:
          "Our team picks up your clothes and provides an itemized receipt.",
        descriptionBn:
          "আমাদের টিম আপনার কাপড় সংগ্রহ করে এবং একটি বিস্তারিত রশিদ প্রদান করে।",
      },
      {
        step: "Expert Cleaning",
        stepBn: "বিশেষজ্ঞ পরিষ্কার",
        description:
          "Professional dry cleaning, stain treatment, and ironing at our facility.",
        descriptionBn:
          "আমাদের সুবিধায় পেশাদার ড্রাই ক্লিনিং, দাগ চিকিৎসা এবং আয়রনিং।",
      },
      {
        step: "Doorstep Delivery",
        stepBn: "ডোরস্টেপ ডেলিভারি",
        description:
          "Fresh, clean, and perfectly pressed clothes delivered back to your door.",
        descriptionBn:
          "সতেজ, পরিষ্কার এবং নিখুঁতভাবে প্রেস করা কাপড় আপনার দরজায় ফিরিয়ে দেওয়া।",
      },
    ],
    faqs: [
      {
        question: "How much does dry cleaning cost?",
        questionBn: "ড্রাই ক্লিনিং খরচ কত?",
        answer:
          "Pricing is per garment. Simple items like shirts start from BDT 80-120, while suits, sarees, and heavy garments range from BDT 200-500. Contact us for the full rate card.",
        answerBn:
          "মূল্য প্রতি কাপড় হিসাবে। শার্টের মতো সাধারণ আইটেম শুরু হয় ৮০-১২০ টাকা থেকে, স্যুট, শাড়ি এবং ভারী কাপড় ২০০-৫০০ টাকা পর্যন্ত। সম্পূর্ণ রেট কার্ডের জন্য যোগাযোগ করুন।",
      },
      {
        question: "How long does dry cleaning take?",
        questionBn: "ড্রাই ক্লিনিং কতক্ষণ লাগে?",
        answer:
          "Standard turnaround is 3-5 days. For urgent needs, we offer 24-hour express service with an additional charge.",
        answerBn:
          "স্ট্যান্ডার্ড ডেলিভারি ৩-৫ দিন। জরুরি প্রয়োজনের জন্য, আমরা অতিরিক্ত চার্জ সহ ২৪-ঘণ্টা এক্সপ্রেস সার্ভিস অফার করি।",
      },
      {
        question: "Can you remove tough stains?",
        questionBn: "আপনারা কি কঠিন দাগ দূর করতে পারবেন?",
        answer:
          "We successfully remove most stains including oil, curry, ink, and wine. For old or set-in stains, we'll assess first and inform you if removal is possible.",
        answerBn:
          "আমরা তেল, তরকারি, কালি এবং ওয়াইন সহ বেশিরভাগ দাগ সফলভাবে দূর করি। পুরানো বা সেট-ইন দাগের জন্য, আমরা প্রথমে মূল্যায়ন করব এবং জানাব অপসারণ সম্ভব কিনা।",
      },
      {
        question: "Is dry cleaning safe for expensive clothes?",
        questionBn: "দামী কাপড়ের জন্য কি ড্রাই ক্লিনিং নিরাপদ?",
        answer:
          "Yes! We specialize in premium garments and use gentle solvents that protect delicate fabrics. We also offer a no-damage guarantee.",
        answerBn:
          "হ্যাঁ! আমরা প্রিমিয়াম কাপড়ে বিশেষজ্ঞ এবং কোমল সলভেন্ট ব্যবহার করি যা সূক্ষ্ম কাপড় রক্ষা করে। আমরা কোনো ক্ষতির নিশ্চয়তাও দিই।",
      },
      {
        question: "Do you handle wedding dresses and sarees?",
        questionBn: "আপনারা কি বিয়ের পোশাক এবং শাড়ি হ্যান্ডেল করেন?",
        answer:
          "Absolutely! We specialize in cleaning and preserving wedding attire, silk sarees, bridal wear, and heavy embroidered garments with utmost care.",
        answerBn:
          "অবশ্যই! আমরা বিয়ের পোশাক, সিল্ক শাড়ি, ব্রাইডাল পোশাক এবং ভারী কাজ করা কাপড় সর্বোচ্চ যত্নের সাথে পরিষ্কার এবং সংরক্ষণে বিশেষজ্ঞ।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 7. HOME SHIFTING
  // ═══════════════════════════════════════════════════
  {
    slug: "home-shifting",
    name: "Home Shifting",
    nameBn: "হোম শিফটিং",
    icon: "Truck",
    tagline: "Move Smart, Stress-Free",
    taglineBn: "স্মার্ট মুভ, দুশ্চিন্তা-মুক্ত",
    shortDescription:
      "End-to-end packing, loading, transport and unloading for a smooth relocation.",
    shortDescriptionBn:
      "মসৃণ স্থানান্তরের জন্য এন্ড-টু-এন্ড প্যাকিং, লোডিং, পরিবহন ও আনলোডিং।",
    description: [
      "Shifting homes is stressful — our team makes it simple. We handle packing, careful loading, safe transport and unloading at your new home. Every item is treated with care, from fragile glassware to heavy furniture.",
      "Fragile items are packed with extra care using bubble wrap and specialized packing materials. Our crew treats your belongings like their own, ensuring damage-free delivery to your new address whether local or intercity.",
    ],
    descriptionBn: [
      "ঘর পরিবর্তন করা কষ্টের — আমাদের টিম এটি সহজ করে দেয়। আমরা প্যাকিং, সাবধানে লোডিং, নিরাপদ পরিবহন এবং নতুন বাড়িতে আনলোডিং সব সামলাই। ভঙ্গুর গ্লাসওয়্যার থেকে ভারী আসবাবপত্র — প্রতিটি জিনিস যত্ন সহকারে হ্যান্ডেল করা হয়।",
      "ভঙ্গুর জিনিসগুলো বাবল র‍্যাপ এবং বিশেষায়িত প্যাকিং উপকরণ ব্যবহার করে অতিরিক্ত যত্ন সহকারে প্যাক করা হয়। আমাদের ক্রু আপনার জিনিসপত্রকে নিজের মতো করে যত্ন নেন, স্থানীয় বা আন্তঃজেলা — যেখানেই হোক নতুন ঠিকানায় ক্ষতি-মুক্ত ডেলিভারি নিশ্চিত করেন।",
    ],
    features: [
      "Professional packing materials",
      "Furniture dismantling & assembly",
      "Careful loading & transport",
      "Fragile item protection",
      "Unloading & placement",
      "Local & intercity shifting",
    ],
    featuresBn: [
      "পেশাদার প্যাকিং উপকরণ",
      "আসবাবপত্র খোলা ও সংযোজন",
      "সাবধানে লোডিং ও পরিবহন",
      "ভঙ্গুর জিনিস সুরক্ষা",
      "আনলোডিং ও স্থাপন",
      "স্থানীয় ও আন্তঃজেলা শিফটিং",
    ],
    priceNote: "Quote depends on distance and volume of items.",
    priceNoteBn: "দাম দূরত্ব ও জিনিসপত্রের পরিমাণের উপর নির্ভর করে।",
    detailedFeatures: [
      {
        title: "Professional Packing",
        titleBn: "পেশাদার প্যাকিং",
        description:
          "Premium packing materials including bubble wrap, packing paper, boxes, and specialized crates for fragile items.",
        descriptionBn:
          "বাবল র‍্যাপ, প্যাকিং পেপার, বক্স এবং ভঙ্গুর জিনিসের জন্য বিশেষায়িত ক্রেট সহ প্রিমিয়াম প্যাকিং উপকরণ।",
      },
      {
        title: "Furniture Handling",
        titleBn: "আসবাবপত্র হ্যান্ডলিং",
        description:
          "Expert dismantling of beds, wardrobes, and large furniture, followed by reassembly at your new home.",
        descriptionBn:
          "বেড, ওয়ার্ডরোব এবং বড় আসবাবপত্রের বিশেষজ্ঞ খোলা, তারপর নতুন বাড়িতে পুনরায় সংযোজন।",
      },
      {
        title: "Safe Transportation",
        titleBn: "নিরাপদ পরিবহন",
        description:
          "Closed trucks with padding, secure loading, and GPS-tracked vehicles for local and intercity moves.",
        descriptionBn:
          "স্থানীয় এবং আন্তঃজেলা মুভের জন্য প্যাডিং সহ বন্ধ ট্রাক, নিরাপদ লোডিং এবং GPS-ট্র্যাক করা গাড়ি।",
      },
      {
        title: "Insurance Coverage",
        titleBn: "বীমা কভারেজ",
        description:
          "Optional insurance for your belongings against damage during transit, giving you complete peace of mind.",
        descriptionBn:
          "পরিবহনের সময় ক্ষতির বিরুদ্ধে আপনার জিনিসপত্রের জন্য ঐচ্ছিক বীমা, আপনাকে সম্পূর্ণ মানসিক শান্তি দেয়।",
      },
      {
        title: "Placement Service",
        titleBn: "স্থাপন সার্ভিস",
        description:
          "Not just delivery — we place furniture and boxes exactly where you want them in your new home.",
        descriptionBn:
          "শুধু ডেলিভারি নয় — আমরা আপনার নতুন বাড়িতে যেখানে চান ঠিক সেখানে আসবাবপত্র এবং বক্স স্থাপন করি।",
      },
      {
        title: "Local & Long Distance",
        titleBn: "স্থানীয় ও দূরত্বের",
        description:
          "From same-city moves to intercity shifts across Bangladesh — we handle all distances professionally.",
        descriptionBn:
          "একই শহরের মুভ থেকে বাংলাদেশ জুড়ে আন্তঃজেলা শিফট — আমরা সব দূরত্ব পেশাদারভাবে হ্যান্ডেল করি।",
      },
    ],
    benefits: [
      "Trained & experienced movers",
      "Premium packing materials",
      "Damage-free guarantee",
      "GPS-tracked transportation",
      "Flexible scheduling",
      "Transparent pricing",
    ],
    benefitsBn: [
      "প্রশিক্ষিত ও অভিজ্ঞ মুভার",
      "প্রিমিয়াম প্যাকিং উপকরণ",
      "ক্ষতি-মুক্ত নিশ্চয়তা",
      "GPS-ট্র্যাক করা পরিবহন",
      "নমনীয় সময় নির্ধারণ",
      "স্বচ্ছ মূল্য",
    ],
    process: [
      {
        step: "Pre-Move Survey",
        stepBn: "প্রি-মুভ সার্ভে",
        description:
          "Share your inventory or invite us for a home visit. We provide an accurate quote.",
        descriptionBn:
          "আপনার ইনভেন্টরি শেয়ার করুন বা আমাদের বাড়ি ভিজিটে আমন্ত্রণ দিন। আমরা সঠিক quote প্রদান করি।",
      },
      {
        step: "Confirm & Schedule",
        stepBn: "কনফার্ম ও সময় নির্ধারণ",
        description:
          "Book your preferred moving date. We arrive on time with packing materials and team.",
        descriptionBn:
          "আপনার পছন্দের মুভিং তারিখ বুক করুন। আমরা সময়মতো প্যাকিং উপকরণ এবং টিম নিয়ে পৌঁছাই।",
      },
      {
        step: "Pack, Load, Transport",
        stepBn: "প্যাক, লোড, পরিবহন",
        description:
          "Our team carefully packs, loads, and transports everything to your new address.",
        descriptionBn:
          "আমাদের টিম যত্নসহকারে সব কিছু প্যাক, লোড এবং নতুন ঠিকানায় পরিবহন করে।",
      },
      {
        step: "Unpack & Settle",
        stepBn: "আনপ্যাক ও সেটেল",
        description:
          "Unloading, unpacking, and placing items where you want. You're all settled!",
        descriptionBn:
          "আনলোডিং, আনপ্যাকিং এবং আপনি যেখানে চান সেখানে জিনিস রাখা। আপনি একদম সেটেল!",
      },
    ],
    faqs: [
      {
        question: "How much does home shifting cost?",
        questionBn: "হোম শিফটিং খরচ কত?",
        answer:
          "Cost depends on distance, volume of items, floor level, and additional services. Local moves start from BDT 5,000-15,000, while intercity varies widely. Contact us for a custom quote.",
        answerBn:
          "খরচ নির্ভর করে দূরত্ব, জিনিসপত্রের পরিমাণ, ফ্লোর লেভেল এবং অতিরিক্ত সার্ভিসের উপর। স্থানীয় মুভ শুরু হয় ৫,০০০-১৫,০০০ টাকা থেকে, আন্তঃজেলা ব্যাপকভাবে পরিবর্তিত হয়। কাস্টম quote-এর জন্য যোগাযোগ করুন।",
      },
      {
        question: "Do you provide packing materials?",
        questionBn: "আপনারা কি প্যাকিং উপকরণ সরবরাহ করেন?",
        answer:
          "Yes! We provide all necessary packing materials including boxes, bubble wrap, tape, and specialized crates for fragile items — all included in your quote.",
        answerBn:
          "হ্যাঁ! আমরা বক্স, বাবল র‍্যাপ, টেপ এবং ভঙ্গুর জিনিসের জন্য বিশেষায়িত ক্রেট সহ সব প্রয়োজনীয় প্যাকিং উপকরণ সরবরাহ করি — সব আপনার quote-এ অন্তর্ভুক্ত।",
      },
      {
        question: "Do you handle fragile items like glassware?",
        questionBn: "আপনারা কি গ্লাসওয়্যারের মতো ভঙ্গুর জিনিস হ্যান্ডেল করেন?",
        answer:
          "Absolutely! We use special packing techniques and materials for fragile items including glassware, mirrors, electronics, and antiques. Extra care guaranteed.",
        answerBn:
          "অবশ্যই! গ্লাসওয়্যার, মিরর, ইলেকট্রনিক্স এবং অ্যান্টিক সহ ভঙ্গুর জিনিসের জন্য আমরা বিশেষ প্যাকিং কৌশল এবং উপকরণ ব্যবহার করি। অতিরিক্ত যত্ন নিশ্চিত।",
      },
      {
        question: "How long does home shifting take?",
        questionBn: "হোম শিফটিং কতক্ষণ লাগে?",
        answer:
          "Local moves typically take 1 day (6-10 hours). Intercity moves may take 1-3 days depending on distance. We work efficiently to minimize disruption.",
        answerBn:
          "স্থানীয় মুভ সাধারণত ১ দিন লাগে (৬-১০ ঘণ্টা)। আন্তঃজেলা মুভ দূরত্বের উপর নির্ভর করে ১-৩ দিন লাগতে পারে। বিঘ্ন কমাতে আমরা দক্ষতার সাথে কাজ করি।",
      },
      {
        question: "What if something gets damaged during moving?",
        questionBn: "মুভ করার সময় কিছু ক্ষতিগ্রস্ত হলে কী হবে?",
        answer:
          "We take utmost care, but we also offer optional insurance coverage. In the rare case of damage, we work with you to resolve it fairly and transparently.",
        answerBn:
          "আমরা সর্বোচ্চ যত্ন নিই, কিন্তু ঐচ্ছিক বীমা কভারেজও অফার করি। ক্ষতির বিরল ক্ষেত্রে, আমরা ন্যায্য এবং স্বচ্ছভাবে সমাধান করতে আপনার সাথে কাজ করি।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 8. SALON AT HOME
  // ═══════════════════════════════════════════════════
  {
    slug: "salon-at-home",
    name: "Salon at Home",
    nameBn: "সেলুন অ্যাট হোম",
    icon: "Scissors",
    tagline: "Salon Luxury, Home Comfort",
    taglineBn: "সেলুনের বিলাসিতা, ঘরের আরাম",
    shortDescription:
      "Haircuts, styling, grooming and spa services delivered to your doorstep.",
    shortDescriptionBn:
      "চুল কাটা, স্টাইলিং, গ্রুমিং ও স্পা সার্ভিস আপনার দরজায়।",
    description: [
      "Skip the salon queue — our trained stylists bring premium grooming services directly to your home. Enjoy the same quality as top salons without the wait time, traffic, or hassle of leaving your comfort zone.",
      "From haircuts to grooming packages, enjoy a relaxing salon experience in the comfort of your own space. Our stylists carry all professional tools and hygienic, sanitized equipment for a safe experience.",
    ],
    descriptionBn: [
      "সেলুনের লাইন এড়িয়ে চলুন — আমাদের প্রশিক্ষিত স্টাইলিস্টরা প্রিমিয়াম গ্রুমিং সার্ভিস সরাসরি আপনার ঘরে নিয়ে আসেন। অপেক্ষার সময়, ট্র্যাফিক বা কমফোর্ট জোন ছাড়ার ঝামেলা ছাড়াই টপ সেলুনের মানের সার্ভিস উপভোগ করুন।",
      "চুল কাটা থেকে গ্রুমিং প্যাকেজ পর্যন্ত — নিজের ঘরের আরামে উপভোগ করুন রিলাক্সিং সেলুন অভিজ্ঞতা। আমাদের স্টাইলিস্টরা সব পেশাদার টুলস এবং স্বাস্থ্যকর, স্যানিটাইজড সরঞ্জাম বহন করে যাতে নিরাপদ অভিজ্ঞতা হয়।",
    ],
    features: [
      "Haircut & styling",
      "Beard grooming & shaving",
      "Hair spa & treatment",
      "Manicure & pedicure",
      "Kids' haircuts",
      "Hygienic, sanitized tools",
    ],
    featuresBn: [
      "চুল কাটা ও স্টাইলিং",
      "দাড়ি গ্রুমিং ও শেভিং",
      "হেয়ার স্পা ও ট্রিটমেন্ট",
      "ম্যানিকিউর ও পেডিকিউর",
      "বাচ্চাদের চুল কাটা",
      "স্বাস্থ্যকর, স্যানিটাইজড সরঞ্জাম",
    ],
    priceNote: "Packages available for individuals & families.",
    priceNoteBn: "ব্যক্তি ও পরিবারের জন্য প্যাকেজ পাওয়া যায়।",
    detailedFeatures: [
      {
        title: "Hair Styling",
        titleBn: "হেয়ার স্টাইলিং",
        description:
          "Professional haircuts, blow-drying, styling for special occasions, and trending hairstyles for men and women.",
        descriptionBn:
          "পেশাদার চুল কাটা, ব্লো-ড্রাইং, বিশেষ অনুষ্ঠানের জন্য স্টাইলিং এবং পুরুষ ও মহিলাদের জন্য ট্রেন্ডিং হেয়ারস্টাইল।",
      },
      {
        title: "Beard & Shaving",
        titleBn: "দাড়ি ও শেভিং",
        description:
          "Traditional shaving, beard trimming, shaping, and styling with premium razor and steaming treatment.",
        descriptionBn:
          "প্রিমিয়াম রেজর এবং স্টিমিং ট্রিটমেন্ট সহ ঐতিহ্যবাহী শেভিং, দাড়ি ট্রিমিং, শেপিং এবং স্টাইলিং।",
      },
      {
        title: "Hair Treatment",
        titleBn: "হেয়ার ট্রিটমেন্ট",
        description:
          "Hair spa, keratin treatment, hair color, dandruff treatment, and deep conditioning for healthy hair.",
        descriptionBn:
          "স্বাস্থ্যকর চুলের জন্য হেয়ার স্পা, কেরাটিন ট্রিটমেন্ট, হেয়ার কালার, খুশকি চিকিৎসা এবং ডিপ কন্ডিশনিং।",
      },
      {
        title: "Manicure & Pedicure",
        titleBn: "ম্যানিকিউর ও পেডিকিউর",
        description:
          "Nail care, cuticle treatment, hand & foot massage, and beautiful nail polish application.",
        descriptionBn:
          "নেইল কেয়ার, কিউটিকল ট্রিটমেন্ট, হাত ও পায়ের ম্যাসাজ এবং সুন্দর নেইল পলিশ প্রয়োগ।",
      },
      {
        title: "Kids Haircuts",
        titleBn: "বাচ্চাদের চুল কাটা",
        description:
          "Patient stylists specialized in cutting children's hair at home — comfortable and stress-free for kids.",
        descriptionBn:
          "বাড়িতে বাচ্চাদের চুল কাটতে বিশেষজ্ঞ ধৈর্যশীল স্টাইলিস্ট — বাচ্চাদের জন্য আরামদায়ক এবং স্ট্রেস-মুক্ত।",
      },
      {
        title: "Hygienic Tools",
        titleBn: "স্বাস্থ্যকর সরঞ্জাম",
        description:
          "All tools are properly sanitized and sterilized before each service for your safety and hygiene.",
        descriptionBn:
          "আপনার নিরাপত্তা এবং স্বাস্থ্যের জন্য প্রতিটি সার্ভিসের আগে সব সরঞ্জাম সঠিকভাবে স্যানিটাইজড এবং জীবাণুমুক্ত করা হয়।",
      },
    ],
    benefits: [
      "Professional trained stylists",
      "Save time — no salon travel",
      "Premium products used",
      "Sanitized tools guaranteed",
      "Family packages available",
      "Special occasion styling",
    ],
    benefitsBn: [
      "পেশাদার প্রশিক্ষিত স্টাইলিস্ট",
      "সময় বাঁচান — সেলুনে যাওয়ার দরকার নেই",
      "প্রিমিয়াম পণ্য ব্যবহার",
      "স্যানিটাইজড সরঞ্জাম নিশ্চিত",
      "পারিবারিক প্যাকেজ উপলব্ধ",
      "বিশেষ অনুষ্ঠান স্টাইলিং",
    ],
    process: [
      {
        step: "Choose Service",
        stepBn: "সার্ভিস বেছে নিন",
        description:
          "Select the grooming services you need — haircut, beard, spa, or a full package.",
        descriptionBn:
          "আপনার প্রয়োজনীয় গ্রুমিং সার্ভিস বেছে নিন — চুল কাটা, দাড়ি, স্পা বা সম্পূর্ণ প্যাকেজ।",
      },
      {
        step: "Book Appointment",
        stepBn: "অ্যাপয়েন্টমেন্ট বুক",
        description:
          "Pick your preferred date and time. Male or female stylists available on request.",
        descriptionBn:
          "আপনার পছন্দের তারিখ এবং সময় বাছুন। অনুরোধে পুরুষ বা মহিলা স্টাইলিস্ট উপলব্ধ।",
      },
      {
        step: "Stylist Arrives",
        stepBn: "স্টাইলিস্ট পৌঁছায়",
        description:
          "Professional stylist arrives with all tools and premium products.",
        descriptionBn:
          "পেশাদার স্টাইলিস্ট সব সরঞ্জাম এবং প্রিমিয়াম পণ্য নিয়ে পৌঁছায়।",
      },
      {
        step: "Enjoy Your Session",
        stepBn: "সেশন উপভোগ করুন",
        description:
          "Relax at home while getting salon-quality grooming service.",
        descriptionBn:
          "সেলুন-মানের গ্রুমিং সার্ভিস পাওয়ার সময় বাড়িতে আরাম করুন।",
      },
    ],
    faqs: [
      {
        question: "What services can I book at home?",
        questionBn: "বাড়িতে কী কী সার্ভিস বুক করতে পারি?",
        answer:
          "Haircuts, beard grooming, hair spa, hair color, manicure, pedicure, kids' haircuts, and grooming packages for men and women.",
        answerBn:
          "চুল কাটা, দাড়ি গ্রুমিং, হেয়ার স্পা, হেয়ার কালার, ম্যানিকিউর, পেডিকিউর, বাচ্চাদের চুল কাটা এবং পুরুষ ও মহিলাদের জন্য গ্রুমিং প্যাকেজ।",
      },
      {
        question: "Are the tools sanitized?",
        questionBn: "সরঞ্জামগুলো কি স্যানিটাইজড?",
        answer:
          "Yes, all tools are properly sanitized and sterilized before each visit. We prioritize hygiene for your safety.",
        answerBn:
          "হ্যাঁ, প্রতিটি ভিজিটের আগে সব সরঞ্জাম সঠিকভাবে স্যানিটাইজড এবং জীবাণুমুক্ত করা হয়। আপনার নিরাপত্তার জন্য আমরা স্বাস্থ্যবিধিকে অগ্রাধিকার দিই।",
      },
      {
        question: "Can I book female stylists?",
        questionBn: "আমি কি মহিলা স্টাইলিস্ট বুক করতে পারি?",
        answer:
          "Absolutely! Female stylists are available for female clients. Just mention your preference when booking.",
        answerBn:
          "অবশ্যই! মহিলা ক্লায়েন্টদের জন্য মহিলা স্টাইলিস্ট উপলব্ধ। বুকিংয়ের সময় আপনার পছন্দ উল্লেখ করুন।",
      },
      {
        question: "How much do salon services cost?",
        questionBn: "সেলুন সার্ভিসের খরচ কত?",
        answer:
          "Prices vary by service. Basic haircut starts from BDT 300-500, while full packages (haircut + beard + spa) range from BDT 1,000-2,500. Contact for detailed pricing.",
        answerBn:
          "সার্ভিস অনুযায়ী দাম পরিবর্তিত হয়। বেসিক চুল কাটা শুরু হয় ৩০০-৫০০ টাকা থেকে, সম্পূর্ণ প্যাকেজ (চুল কাটা + দাড়ি + স্পা) ১,০০০-২,৫০০ টাকা পর্যন্ত। বিস্তারিত মূল্যের জন্য যোগাযোগ করুন।",
      },
      {
        question: "Do you provide bridal grooming?",
        questionBn: "আপনারা কি ব্রাইডাল গ্রুমিং প্রদান করেন?",
        answer:
          "For bridal makeup and styling, please check our Beauty Service. For grooms, we offer complete bridal grooming packages including haircut, styling, beard, and facials.",
        answerBn:
          "ব্রাইডাল মেকআপ এবং স্টাইলিংয়ের জন্য, আমাদের বিউটি সার্ভিস দেখুন। বরের জন্য, আমরা চুল কাটা, স্টাইলিং, দাড়ি এবং ফেসিয়াল সহ সম্পূর্ণ ব্রাইডাল গ্রুমিং প্যাকেজ অফার করি।",
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // 9. BEAUTY SERVICE
  // ═══════════════════════════════════════════════════
  {
    slug: "beauty-service",
    name: "Beauty Service",
    nameBn: "বিউটি সার্ভিস",
    icon: "Gem",
    tagline: "Look Radiant, Feel Confident",
    taglineBn: "উজ্জ্বল দেখান, আত্মবিশ্বাসী অনুভব করুন",
    shortDescription:
      "Bridal makeup, facials, skincare and beauty treatments by certified artists.",
    shortDescriptionBn:
      "প্রত্যয়িত আর্টিস্টদের দ্বারা ব্রাইডাল মেকআপ, ফেসিয়াল, স্কিনকেয়ার ও বিউটি ট্রিটমেন্ট।",
    description: [
      "Whether it's a special occasion or a self-care day, our certified beauty professionals deliver premium beauty services at home. We use branded products, follow international techniques, and prioritize your skin's health.",
      "From bridal makeup to facials and skincare treatments, we help you look and feel your best. Perfect for weddings, parties, birthdays, festivals, or just a rejuvenating spa day in the comfort of your home.",
    ],
    descriptionBn: [
      "বিশেষ উপলক্ষ্য হোক বা সেলফ-কেয়ার দিন — আমাদের প্রত্যয়িত বিউটি পেশাদাররা বাড়িতে প্রিমিয়াম বিউটি সার্ভিস প্রদান করেন। আমরা ব্র্যান্ডেড পণ্য ব্যবহার করি, আন্তর্জাতিক কৌশল অনুসরণ করি এবং আপনার ত্বকের স্বাস্থ্যকে অগ্রাধিকার দিই।",
      "ব্রাইডাল মেকআপ থেকে ফেসিয়াল এবং স্কিনকেয়ার ট্রিটমেন্ট পর্যন্ত — আমরা আপনাকে সেরা দেখাতে এবং অনুভব করাতে সাহায্য করি। বিয়ে, পার্টি, জন্মদিন, উৎসব, বা শুধু বাড়ির আরামে একটি সতেজকারী স্পা দিনের জন্য উপযুক্ত।",
    ],
    features: [
      "Bridal & party makeup",
      "Facials & skincare treatments",
      "Threading & waxing",
      "Hair styling for events",
      "Mehendi / henna art",
      "Certified beauty professionals",
    ],
    featuresBn: [
      "ব্রাইডাল ও পার্টি মেকআপ",
      "ফেসিয়াল ও স্কিনকেয়ার ট্রিটমেন্ট",
      "থ্রেডিং ও ওয়াক্সিং",
      "ইভেন্টের জন্য হেয়ার স্টাইলিং",
      "মেহেদি / হেনা আর্ট",
      "প্রত্যয়িত বিউটি পেশাদার",
    ],
    priceNote: "Custom packages for events & occasions.",
    priceNoteBn: "ইভেন্ট ও উপলক্ষ্যের জন্য কাস্টম প্যাকেজ।",
    detailedFeatures: [
      {
        title: "Bridal Makeup",
        titleBn: "ব্রাইডাল মেকআপ",
        description:
          "Complete bridal makeover including HD makeup, hairstyling, saree draping, and long-lasting finish for your special day.",
        descriptionBn:
          "আপনার বিশেষ দিনের জন্য HD মেকআপ, হেয়ারস্টাইলিং, শাড়ি পরানো এবং দীর্ঘস্থায়ী ফিনিশ সহ সম্পূর্ণ ব্রাইডাল মেকওভার।",
      },
      {
        title: "Party Makeup",
        titleBn: "পার্টি মেকআপ",
        description:
          "Occasion-based makeup for parties, engagements, receptions, and photoshoots with trending styles.",
        descriptionBn:
          "ট্রেন্ডিং স্টাইলে পার্টি, এনগেজমেন্ট, রিসেপশন এবং ফটোশ্যুটের জন্য অনুষ্ঠান-ভিত্তিক মেকআপ।",
      },
      {
        title: "Facial Treatments",
        titleBn: "ফেসিয়াল ট্রিটমেন্ট",
        description:
          "Gold facial, fruit facial, anti-aging, brightening, and acne treatment facials for glowing skin.",
        descriptionBn:
          "উজ্জ্বল ত্বকের জন্য গোল্ড ফেসিয়াল, ফ্রুট ফেসিয়াল, অ্যান্টি-এজিং, ব্রাইটেনিং এবং একনে ট্রিটমেন্ট ফেসিয়াল।",
      },
      {
        title: "Threading & Waxing",
        titleBn: "থ্রেডিং ও ওয়াক্সিং",
        description:
          "Professional eyebrow shaping, upper lip threading, full body waxing with premium wax products.",
        descriptionBn:
          "পেশাদার আইব্রো শেপিং, আপার লিপ থ্রেডিং, প্রিমিয়াম ওয়াক্স পণ্য সহ ফুল বডি ওয়াক্সিং।",
      },
      {
        title: "Mehendi Art",
        titleBn: "মেহেদি আর্ট",
        description:
          "Traditional Arabic, Indian, and modern mehendi designs for weddings, Eid, and special occasions.",
        descriptionBn:
          "বিয়ে, ঈদ এবং বিশেষ অনুষ্ঠানের জন্য ঐতিহ্যবাহী আরবিক, ইন্ডিয়ান এবং আধুনিক মেহেদি ডিজাইন।",
      },
      {
        title: "Skincare Treatments",
        titleBn: "স্কিনকেয়ার ট্রিটমেন্ট",
        description:
          "Cleanup, blackhead removal, pigmentation treatment, and specialized skin therapy for various skin types.",
        descriptionBn:
          "ক্লিনআপ, ব্ল্যাকহেড অপসারণ, পিগমেন্টেশন ট্রিটমেন্ট এবং বিভিন্ন ত্বকের ধরনের জন্য বিশেষায়িত স্কিন থেরাপি।",
      },
    ],
    benefits: [
      "Certified beauty experts",
      "Branded premium products",
      "Bridal specialists available",
      "Female artists only",
      "Trial makeup available",
      "Package deals for weddings",
    ],
    benefitsBn: [
      "প্রত্যয়িত বিউটি বিশেষজ্ঞ",
      "ব্র্যান্ডেড প্রিমিয়াম পণ্য",
      "ব্রাইডাল বিশেষজ্ঞ উপলব্ধ",
      "শুধু মহিলা আর্টিস্ট",
      "ট্রায়াল মেকআপ উপলব্ধ",
      "বিয়ের জন্য প্যাকেজ ডিল",
    ],
    process: [
      {
        step: "Book Consultation",
        stepBn: "পরামর্শ বুক করুন",
        description:
          "Discuss your beauty needs, occasion details, and preferred style with our team.",
        descriptionBn:
          "আপনার বিউটি প্রয়োজন, অনুষ্ঠানের বিবরণ এবং পছন্দের স্টাইল আমাদের টিমের সাথে আলোচনা করুন।",
      },
      {
        step: "Choose Package",
        stepBn: "প্যাকেজ বাছুন",
        description:
          "Select from bridal, party, or individual service packages. Custom packages available.",
        descriptionBn:
          "ব্রাইডাল, পার্টি বা ব্যক্তিগত সার্ভিস প্যাকেজ থেকে বেছে নিন। কাস্টম প্যাকেজ উপলব্ধ।",
      },
      {
        step: "Artist Arrives",
        stepBn: "আর্টিস্ট পৌঁছায়",
        description:
          "Certified beauty artist arrives with premium products and professional tools.",
        descriptionBn:
          "প্রত্যয়িত বিউটি আর্টিস্ট প্রিমিয়াম পণ্য এবং পেশাদার সরঞ্জাম নিয়ে পৌঁছায়।",
      },
      {
        step: "Look Beautiful",
        stepBn: "সুন্দর দেখান",
        description:
          "Enjoy expert treatment and step out looking radiant for your special occasion.",
        descriptionBn:
          "বিশেষজ্ঞ ট্রিটমেন্ট উপভোগ করুন এবং আপনার বিশেষ অনুষ্ঠানের জন্য উজ্জ্বল দেখান।",
      },
    ],
    faqs: [
      {
        question: "Do you offer bridal makeup packages?",
        questionBn: "আপনারা কি ব্রাইডাল মেকআপ প্যাকেজ অফার করেন?",
        answer:
          "Yes! We offer complete bridal packages including makeup, hairstyling, saree draping, and pre-bridal treatments. Contact us for detailed pricing.",
        answerBn:
          "হ্যাঁ! আমরা মেকআপ, হেয়ারস্টাইলিং, শাড়ি পরানো এবং প্রি-ব্রাইডাল ট্রিটমেন্ট সহ সম্পূর্ণ ব্রাইডাল প্যাকেজ অফার করি। বিস্তারিত মূল্যের জন্য যোগাযোগ করুন।",
      },
      {
        question: "Are your beauty artists certified?",
        questionBn: "আপনাদের বিউটি আর্টিস্টরা কি প্রত্যয়িত?",
        answer:
          "Absolutely! All our artists are professionally trained, certified, and have years of experience in bridal and party makeup.",
        answerBn:
          "অবশ্যই! আমাদের সব আর্টিস্ট পেশাদারভাবে প্রশিক্ষিত, প্রত্যয়িত এবং ব্রাইডাল ও পার্টি মেকআপে বছরের পর বছর অভিজ্ঞতা আছে।",
      },
      {
        question: "What brands of products do you use?",
        questionBn: "আপনারা কোন ব্র্যান্ডের পণ্য ব্যবহার করেন?",
        answer:
          "We use premium brands like MAC, Huda Beauty, Kryolan, Lakme, Bobbi Brown, and other international makeup brands based on client preference.",
        answerBn:
          "ক্লায়েন্টের পছন্দ অনুযায়ী আমরা MAC, Huda Beauty, Kryolan, Lakme, Bobbi Brown এবং অন্যান্য আন্তর্জাতিক মেকআপ ব্র্যান্ডের মতো প্রিমিয়াম ব্র্যান্ড ব্যবহার করি।",
      },
      {
        question: "Can I book a trial makeup session before my wedding?",
        questionBn: "আমি কি বিয়ের আগে ট্রায়াল মেকআপ সেশন বুক করতে পারি?",
        answer:
          "Yes! We highly recommend a trial session 15-30 days before your wedding to finalize your look. Trial cost is discounted if you book the wedding package.",
        answerBn:
          "হ্যাঁ! আপনার লুক চূড়ান্ত করতে আমরা বিয়ের ১৫-৩০ দিন আগে একটি ট্রায়াল সেশনের দৃঢ়ভাবে সুপারিশ করি। বিয়ের প্যাকেজ বুক করলে ট্রায়াল খরচে ডিসকাউন্ট পাবেন।",
      },
      {
        question: "How much does bridal makeup cost?",
        questionBn: "ব্রাইডাল মেকআপের খরচ কত?",
        answer:
          "Bridal makeup packages start from BDT 8,000 and vary based on services included (HD makeup, airbrush, hairstyling, saree draping, etc.). Contact for a personalized quote.",
        answerBn:
          "ব্রাইডাল মেকআপ প্যাকেজ ৮,০০০ টাকা থেকে শুরু হয় এবং অন্তর্ভুক্ত সার্ভিস অনুযায়ী পরিবর্তিত হয় (HD মেকআপ, এয়ারব্রাশ, হেয়ারস্টাইলিং, শাড়ি পরানো ইত্যাদি)। ব্যক্তিগতকৃত quote-এর জন্য যোগাযোগ করুন।",
      },
    ],
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}

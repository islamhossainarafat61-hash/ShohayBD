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
}

export const services: ServiceItem[] = [
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
      "SOHAY BD's verified electricians handle everything from small repairs to complete household wiring with safety-first practices.",
      "Whether it's a short circuit, a flickering light, a new switchboard installation, or a full home rewiring project, our professionals arrive fully equipped and get the job done right the first time.",
    ],
    descriptionBn: [
      "সহায় বিডি-এর যাচাইকৃত ইলেকট্রিশিয়ানরা ছোট মেরামত থেকে শুরু করে সম্পূর্ণ ঘরের ওয়্যারিং পর্যন্ত সব কাজ নিরাপত্তা-প্রথম নীতিতে পরিচালনা করেন।",
      "শর্ট সার্কিট, লাইট জ্বলা-নেভা, নতুন সুইচবোর্ড ইনস্টলেশন কিংবা পুরো বাড়ির রিওয়্যারিং — যেকোনো প্রয়োজনে আমাদের পেশাদাররা সম্পূর্ণ সরঞ্জাম নিয়ে এসে প্রথমবারেই কাজটি নিখুঁতভাবে সম্পন্ন করেন।",
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
  },
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
      "From a dripping tap to a full bathroom fitting overhaul, our plumbing professionals bring years of hands-on experience to every home.",
      "We diagnose the root cause instead of offering temporary fixes, ensuring your plumbing stays leak-free for the long run.",
    ],
    descriptionBn: [
      "টিপটিপ করে পানি পড়া ট্যাপ থেকে সম্পূর্ণ বাথরুম ফিটিং পরিবর্তন — আমাদের প্লাম্বিং পেশাদাররা প্রতিটি ঘরে বছরের পর বছর অভিজ্ঞতা নিয়ে আসেন।",
      "আমরা সাময়িক সমাধান না দিয়ে সমস্যার মূল কারণ নির্ণয় করি, যাতে দীর্ঘমেয়াদে আপনার প্লাম্বিং লিক-মুক্ত থাকে।",
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
  },
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
      "Beat the Rangpur heat with a fully serviced, efficient air conditioner. Our technicians are trained on all major AC brands and models.",
      "From routine servicing to gas refilling and emergency repairs, we make sure your AC runs cool, quiet and energy-efficient all year round.",
    ],
    descriptionBn: [
      "সম্পূর্ণ সার্ভিস করা, কার্যকর এসি দিয়ে রংপুরের গরমকে হারিয়ে দিন। আমাদের টেকনিশিয়ানরা সব প্রধান এসি ব্র্যান্ড ও মডেলে প্রশিক্ষিত।",
      "নিয়মিত সার্ভিসিং থেকে শুরু করে গ্যাস রিফিলিং এবং জরুরি মেরামত — আমরা নিশ্চিত করি আপনার এসি সারা বছর ঠান্ডা, নিঃশব্দ এবং বিদ্যুৎ-সাশ্রয়ী থাকে।",
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
  },
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
      "Enjoy a fresh, hygienic home without lifting a finger. Our home cleaning teams use safe cleaning agents and modern tools for a thorough clean.",
      "Perfect for weekly upkeep, move-in/move-out cleaning, or a quick refresh before guests arrive.",
    ],
    descriptionBn: [
      "একটুও পরিশ্রম না করে উপভোগ করুন সতেজ, স্বাস্থ্যকর একটি ঘর। আমাদের হোম ক্লিনিং টিম নিরাপদ ক্লিনিং এজেন্ট ও আধুনিক টুলস ব্যবহার করে পুঙ্খানুপুঙ্খ পরিষ্কার করে।",
      "সাপ্তাহিক রক্ষণাবেক্ষণ, বাসা পরিবর্তনের সময় পরিষ্কার, বা অতিথি আসার আগে দ্রুত ফ্রেশ করার জন্য উপযুক্ত।",
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
  },
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
      "Our deep cleaning service goes far beyond routine cleaning — targeting grease, grime, stains and hidden dirt in every corner of your home.",
      "Ideal for festival preparation, seasonal cleaning, or homes that need an intensive refresh.",
    ],
    descriptionBn: [
      "আমাদের ডিপ ক্লিনিং সার্ভিস নিয়মিত পরিষ্কারের চেয়েও অনেক বেশি — আপনার ঘরের প্রতিটি কোণে গ্রীজ, ময়লা, দাগ এবং লুকানো নোংরা দূর করি।",
      "উৎসব প্রস্তুতি, মৌসুমী পরিষ্কার, বা যে ঘরগুলোর নিবিড় ফ্রেশনেস দরকার — তার জন্য আদর্শ।",
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
  },
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
      "Keep your clothes fresh, clean and long-lasting with our doorstep dry wash service.",
      "We pick up, professionally clean, and deliver your garments back — saving you time without compromising on quality.",
    ],
    descriptionBn: [
      "আমাদের ডোরস্টেপ ড্রাই ওয়াশ সার্ভিসের মাধ্যমে আপনার কাপড় সতেজ, পরিষ্কার এবং দীর্ঘস্থায়ী রাখুন।",
      "আমরা কাপড় পিকআপ করি, পেশাদারভাবে পরিষ্কার করি এবং ফেরত ডেলিভারি করি — গুণগত মান বজায় রেখে আপনার সময় বাঁচাই।",
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
  },
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
      "Shifting homes is stressful — our team makes it simple. We handle packing, careful loading, safe transport and unloading at your new home.",
      "Fragile items are packed with extra care, and our crew treats your belongings like their own.",
    ],
    descriptionBn: [
      "ঘর পরিবর্তন করা কষ্টের — আমাদের টিম এটি সহজ করে দেয়। আমরা প্যাকিং, সাবধানে লোডিং, নিরাপদ পরিবহন এবং নতুন বাড়িতে আনলোডিং সব সামলাই।",
      "ভঙ্গুর জিনিসগুলো অতিরিক্ত যত্ন সহকারে প্যাক করা হয়, এবং আমাদের ক্রু আপনার জিনিসপত্রকে নিজের মতো করে যত্ন নেন।",
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
  },
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
      "Skip the salon queue — our trained stylists bring premium grooming services directly to your home.",
      "From haircuts to grooming packages, enjoy a relaxing salon experience in the comfort of your own space.",
    ],
    descriptionBn: [
      "সেলুনের লাইন এড়িয়ে চলুন — আমাদের প্রশিক্ষিত স্টাইলিস্টরা প্রিমিয়াম গ্রুমিং সার্ভিস সরাসরি আপনার ঘরে নিয়ে আসেন।",
      "চুল কাটা থেকে গ্রুমিং প্যাকেজ পর্যন্ত — নিজের ঘরের আরামে উপভোগ করুন রিলাক্সিং সেলুন অভিজ্ঞতা।",
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
  },
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
      "Whether it's a special occasion or a self-care day, our certified beauty professionals deliver premium beauty services at home.",
      "From bridal makeup to facials and skincare treatments, we help you look and feel your best.",
    ],
    descriptionBn: [
      "বিশেষ উপলক্ষ্য হোক বা সেলফ-কেয়ার দিন — আমাদের প্রত্যয়িত বিউটি পেশাদাররা বাড়িতে প্রিমিয়াম বিউটি সার্ভিস প্রদান করেন।",
      "ব্রাইডাল মেকআপ থেকে ফেসিয়াল এবং স্কিনকেয়ার ট্রিটমেন্ট পর্যন্ত — আমরা আপনাকে সেরা দেখাতে এবং অনুভব করাতে সাহায্য করি।",
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
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}

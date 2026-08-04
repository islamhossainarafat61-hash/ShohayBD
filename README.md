# SOHAY BD — Premium Home Service Platform (Website)

এই প্রজেক্টটি **React 19 + Vite + Tailwind CSS 4 + Framer Motion + React Router** দিয়ে তৈরি।

## 🖥️ VS Code-এ কিভাবে চালাবেন / এডিট করবেন

1. **Zip ফাইলটি Extract করুন** কোনো ফোল্ডারে, তারপর VS Code দিয়ে ঐ ফোল্ডারটি Open করুন
   (`File → Open Folder`)।
2. VS Code-এর Terminal খুলুন (`Ctrl + ~` অথবা `Terminal → New Terminal`)।
3. প্রথমবার নিচের কমান্ডটি চালিয়ে সব প্যাকেজ ইন্সটল করুন:
   ```bash
   npm install
   ```
4. Development mode-এ চালাতে (Live Preview সহ, কোড পরিবর্তন করলে সাথে সাথে ব্রাউজারে দেখা যাবে):
   ```bash
   npm run dev
   ```
   এরপর টার্মিনালে দেওয়া লোকাল লিংক (যেমন `http://localhost:5173`) ব্রাউজারে খুলুন।
5. Production Build তৈরি করতে (ডোমেইনে আপলোড করার জন্য):
   ```bash
   npm run build
   ```
   এতে `dist/index.html` নামে একটি ফাইল তৈরি হবে — পুরো ওয়েবসাইট একটি ফাইলেই বান্ডেল হয়ে যায়।
   এই `dist` ফোল্ডারটাই আপনার হোস্টিং/সার্ভারে (shohaybd.com) আপলোড করলেই ওয়েবসাইট লাইভ হয়ে যাবে।

## 📂 প্রজেক্ট স্ট্রাকচার (কোথায় কী এডিট করবেন)

```
src/
  data/
    brand.ts          → কোম্পানির তথ্য, লোগো লিংক, সোশ্যাল মিডিয়া লিংক (এখানে ইমেইল/ফোন/লিংক বদলাবেন)
    services.ts        → সব সার্ভিসের নাম, বিবরণ, ফিচার (নতুন সার্ভিস যোগ/এডিট এখানে করবেন)
  components/
    home/               → হোমপেজের প্রতিটি সেকশন (Hero, Services, About, FAQ ইত্যাদি)
    layout/             → Navbar, Footer, Floating বাটনসমূহ
    common/             → শেয়ার্ড কম্পোনেন্ট (যেমন Privacy/Terms পেজের লেআউট)
  pages/                → প্রতিটি আলাদা পেজ (Home, ServiceDetail, Contact, Privacy, Terms, AISupport, NotFound)
  context/              → থিম (Dark/Light) ও ভাষা (EN/BN) ম্যানেজমেন্ট
  lib/
    whatsapp.ts         → WhatsApp নাম্বার ও অটো-মেসেজ টেমপ্লেট
    groq.ts             → AI Chatbot-এর Groq API লজিক ও System Prompt
```

## 🤖 AI Chatbot (SOHAY AI) চালু করতে

1. প্রজেক্টের রুটে `.env` নামে একটি ফাইল তৈরি করুন (`.env.example` ফাইলটি কপি করে রিনেম করলেই হবে)।
2. [https://console.groq.com](https://console.groq.com) থেকে ফ্রি API Key নিন।
3. `.env` ফাইলে লিখুন:
   ```
   VITE_GROQ_API_KEY=আপনার_আসল_key_এখানে_বসান
   ```
4. `npm run dev` বা `npm run build` আবার চালান — এখন চ্যাটবট সত্যিকারের AI রিপ্লাই দেবে।
   (Key না দিলেও ওয়েবসাইট normally কাজ করবে, শুধু চ্যাটবট একটি সাধারণ মেসেজ দেখাবে যে WhatsApp-এ যোগাযোগ করতে।)

## 🎨 রঙ ও থিম পরিবর্তন

- Primary Color বদলাতে চাইলে `src/index.css` ফাইলে `@theme` ব্লকের `--color-brand-500` ইত্যাদি ভ্যালু বদলান।
- Dark/Light থিম টগল Navbar-এ আছে (Sun/Moon আইকন)। ডিফল্ট থিম Dark — এটা `src/context/ThemeContext.tsx` ফাইলে `useState<Theme>("dark")` থেকে বদলানো যাবে।

## 🖼️ লোগো/আইকন পরিবর্তন

`src/data/brand.ts` ফাইলে `logoWhite`, `logoBlack`, `iconWhite`, `iconBlack` — এই ৪টি লিংক বদলে আপনার নিজের ইমেজ লিংক (অথবা `public/` ফোল্ডারে ইমেজ রেখে `/images/logo.png` এভাবে path) বসিয়ে দিতে পারবেন।

## 🔗 প্রতিটি সার্ভিসের জন্য আলাদা পেজ

`/services/electrician`, `/services/plumbing` ইত্যাদি — প্রতিটি সার্ভিসের নিজস্ব পেজ আছে যেখানে বিস্তারিত তথ্য এবং
"Book via WhatsApp" বাটন আছে যেটা ক্লিক করলে WhatsApp-এ অটো-ফিল মেসেজসহ চলে যায়। নতুন সার্ভিস যোগ করতে
`src/data/services.ts`-এ একটি নতুন অবজেক্ট যোগ করলেই এর পেজ, Footer link, Services grid card — সব জায়গায় automatic যোগ হয়ে যাবে।

## ⚠️ গুরুত্বপূর্ণ

- `package.json` এবং `vite.config.ts` ফাইল দুটি হাত দিয়ে এডিট না করাই ভালো (নতুন প্যাকেজ লাগলে `npm install <package-name>` কমান্ড ব্যবহার করুন)।
- রাউটিং-এর জন্য `HashRouter` ব্যবহার করা হয়েছে (URL-এ `#/` দেখা যাবে) — এতে যেকোনো স্ট্যাটিক হোস্টিং-এ (যেমন cPanel, Netlify, GitHub Pages) সরাসরি আপলোড করলেও পেজ রিফ্রেশ বা ডিরেক্ট লিংকে সমস্যা হবে না।

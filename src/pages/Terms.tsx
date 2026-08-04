import LegalLayout from "../components/common/LegalLayout";
import { BRAND } from "../data/brand";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { lang } = useLanguage();

  // English content
  const contentEn = (
    <>
      <p>
        Welcome to {BRAND.name}. By booking a service or using our website, you
        agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2>1. Our Services</h2>
      <p>
        {BRAND.name} is a platform that connects customers with independent,
        verified service professionals for Electrical, Plumbing, AC Service,
        Cleaning, Beauty, Home Shifting, House Rent and related home services in{" "}
        {BRAND.area}.
      </p>

      <h2>2. Booking & Confirmation</h2>
      <p>
        Bookings made via WhatsApp, our website, or our AI Assistant are
        confirmed once a member of our team contacts you to verify the details,
        schedule, and pricing.
      </p>

      <h2>3. Pricing & Payment</h2>
      <p>
        Pricing is determined based on the type of service, scope of work, and
        materials required. Final pricing will always be communicated and agreed
        upon before the service begins. Payment is typically collected after
        successful completion of the service.
      </p>

      <h2>4. Cancellations & Rescheduling</h2>
      <p>
        You may cancel or reschedule a booking by contacting us on WhatsApp or
        phone before a professional is dispatched. Repeated last-minute
        cancellations may affect future bookings.
      </p>

      <h2>5. Professional Conduct</h2>
      <p>
        All professionals listed on {BRAND.name} are verified prior to
        onboarding. However, {BRAND.name} acts as a facilitator between
        customers and independent professionals and is not itself the employer
        of these professionals.
      </p>

      <h2 id="cookies">6. Cookies</h2>
      <p>
        Our website may use basic cookies and local storage to remember your
        theme and language preferences for a better browsing experience. We do
        not use cookies for third-party advertising.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        While we carefully vet our professionals, {BRAND.name} is not liable for
        indirect damages arising from service delays or professional conduct
        beyond our reasonable control.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may revise these Terms & Conditions periodically. Continued use of
        our services after changes constitutes acceptance of the updated terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        For any questions regarding these terms, please contact us at{" "}
        {BRAND.email} or {BRAND.phone}.
      </p>
    </>
  );

  // Bangla content
  const contentBn = (
    <>
      <p>
        {BRAND.name}-এ স্বাগতম। কোনো সার্ভিস বুক করে বা আমাদের ওয়েবসাইট ব্যবহার
        করে, আপনি নিচের শর্তাবলীতে সম্মত হচ্ছেন। অনুগ্রহ করে সেগুলো মনোযোগ
        সহকারে পড়ুন।
      </p>

      <h2>১. আমাদের সার্ভিস</h2>
      <p>
        {BRAND.name} একটি প্ল্যাটফর্ম যা {BRAND.area}-এ ইলেকট্রিক্যাল,
        প্লাম্বিং, এসি সার্ভিস, ক্লিনিং, বিউটি, হোম শিফটিং, হাউস রেন্ট এবং
        সংশ্লিষ্ট হোম সার্ভিসের জন্য গ্রাহকদের স্বাধীন, যাচাইকৃত সার্ভিস
        পেশাদারদের সাথে যুক্ত করে।
      </p>

      <h2>২. বুকিং ও কনফার্মেশন</h2>
      <p>
        হোয়াটসঅ্যাপ, আমাদের ওয়েবসাইট, বা আমাদের এআই অ্যাসিস্ট্যান্টের মাধ্যমে
        করা বুকিংগুলো তখনই কনফার্ম হয় যখন আমাদের টিমের একজন সদস্য বিবরণ,
        সময়সূচী এবং মূল্য যাচাই করার জন্য আপনার সাথে যোগাযোগ করেন।
      </p>

      <h2>৩. মূল্য ও পেমেন্ট</h2>
      <p>
        মূল্য নির্ধারিত হয় সার্ভিসের ধরন, কাজের পরিসর এবং প্রয়োজনীয় উপকরণের
        ভিত্তিতে। সার্ভিস শুরু হওয়ার আগেই সর্বদা চূড়ান্ত মূল্য জানানো হয় এবং
        সম্মতিতে গৃহীত হয়। সার্ভিস সফলভাবে সম্পন্ন হওয়ার পর সাধারণত পেমেন্ট
        সংগ্রহ করা হয়।
      </p>

      <h2>৪. বাতিল ও পুনঃনির্ধারণ</h2>
      <p>
        পেশাদার পাঠানোর আগে আপনি হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করে একটি বুকিং
        বাতিল বা পুনঃনির্ধারণ করতে পারেন। বারবার শেষ মুহূর্তে বাতিল করা
        ভবিষ্যতের বুকিংগুলোকে প্রভাবিত করতে পারে।
      </p>

      <h2>৫. পেশাদার আচরণ</h2>
      <p>
        {BRAND.name}-এ তালিকাভুক্ত সকল পেশাদারদের যুক্ত করার আগে যাচাই করা হয়।
        তবে, {BRAND.name} গ্রাহক এবং স্বাধীন পেশাদারদের মধ্যে একজন সহায়ক হিসেবে
        কাজ করে এবং এই পেশাদারদের নিজস্ব নিয়োগকর্তা নয়।
      </p>

      <h2 id="cookies">৬. কুকিজ</h2>
      <p>
        আমাদের ওয়েবসাইট আরো ভালো ব্রাউজিং অভিজ্ঞতার জন্য আপনার থিম এবং ভাষার
        পছন্দ মনে রাখতে সাধারণ কুকিজ এবং লোকাল স্টোরেজ ব্যবহার করতে পারে। আমরা
        তৃতীয় পক্ষের বিজ্ঞাপনের জন্য কুকিজ ব্যবহার করি না।
      </p>

      <h2>৭. দায়বদ্ধতার সীমাবদ্ধতা</h2>
      <p>
        আমরা আমাদের পেশাদারদের সতর্কতার সাথে যাচাই করলেও, {BRAND.name} সার্ভিস
        বিলম্ব বা আমাদের যুক্তিসঙ্গত নিয়ন্ত্রণের বাইরে পেশাদারদের আচরণ থেকে
        উদ্ভূত পরোক্ষ ক্ষতির জন্য দায়বদ্ধ নয়।
      </p>

      <h2>৮. শর্তাবলীর পরিবর্তন</h2>
      <p>
        আমরা মাঝে মাঝে এই শর্তাবলী সংশোধন করতে পারি। পরিবর্তনের পরে আমাদের
        সার্ভিসের ক্রমাগত ব্যবহার আপডেট করা শর্তাবলীর গ্রহণযোগ্যতা নির্দেশ করে।
      </p>

      <h2>৯. যোগাযোগ</h2>
      <p>
        এই শর্তাবলী সম্পর্কে কোনো প্রশ্নের জন্য, অনুগ্রহ করে আমাদের সাথে{" "}
        {BRAND.email} অথবা {BRAND.phone}-এ যোগাযোগ করুন।
      </p>
    </>
  );

  return (
    <LegalLayout
      title={lang === "bn" ? "শর্তাবলী" : "Terms & Conditions"}
      updated={lang === "bn" ? "জানুয়ারি ২০২৬" : "January 2026"}
    >
      {lang === "bn" ? contentBn : contentEn}
    </LegalLayout>
  );
}

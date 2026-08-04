import LegalLayout from "../components/common/LegalLayout";
import { BRAND } from "../data/brand";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  // English content
  const contentEn = (
    <>
      <p>
        At {BRAND.name}, we respect your privacy and are committed to protecting
        the personal information you share with us while using our home service
        platform in {BRAND.area}.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        When you book a service or contact us, we may collect your name, phone
        number, address, email, and service preferences. This information is
        used solely to provide and improve our services.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>
          To connect you with the right verified professional for your service
          request.
        </li>
        <li>
          To confirm bookings, send updates, and provide customer support.
        </li>
        <li>
          To improve our platform, services, and overall customer experience.
        </li>
        <li>
          To send occasional updates about new services or offers (only if you
          opt in).
        </li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We only share your booking details (such as name, phone number, and
        address) with the assigned professional so they can complete your
        service. We do not sell your personal data to third parties.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your
        information from unauthorized access, alteration, or disclosure.
      </p>

      <h2>5. WhatsApp & Communication</h2>
      <p>
        When you contact us via WhatsApp or our AI Assistant, your messages are
        used only to respond to your inquiry and improve our support quality.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        data at any time by contacting us at {BRAND.email}.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a revised "last updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please reach out to
        us at {BRAND.email} or {BRAND.phone}.
      </p>
    </>
  );

  // Bangla content
  const contentBn = (
    <>
      <p>
        {BRAND.name}-এ আমরা আপনার গোপনীয়তাকে সম্মান করি এবং {BRAND.area}-এ
        আমাদের হোম সার্ভিস প্ল্যাটফর্ম ব্যবহারের সময় আপনি আমাদের সাথে যে
        ব্যক্তিগত তথ্য শেয়ার করেন তা রক্ষায় প্রতিশ্রুতিবদ্ধ।
      </p>

      <h2>১. আমরা যে তথ্য সংগ্রহ করি</h2>
      <p>
        আপনি যখন কোনো সার্ভিস বুক করেন বা আমাদের সাথে যোগাযোগ করেন, তখন আমরা
        আপনার নাম, ফোন নম্বর, ঠিকানা, ইমেইল এবং সার্ভিস পছন্দসমূহ সংগ্রহ করতে
        পারি। এই তথ্য শুধুমাত্র আমাদের সার্ভিস প্রদান ও উন্নত করার জন্য ব্যবহৃত
        হয়।
      </p>

      <h2>২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি</h2>
      <ul>
        <li>
          আপনার সার্ভিস অনুরোধের জন্য সঠিক যাচাইকৃত পেশাদারের সাথে আপনাকে যুক্ত
          করতে।
        </li>
        <li>
          বুকিং নিশ্চিত করতে, আপডেট পাঠাতে এবং গ্রাহক সাপোর্ট প্রদান করতে।
        </li>
        <li>
          আমাদের প্ল্যাটফর্ম, সার্ভিস এবং সামগ্রিক গ্রাহক অভিজ্ঞতা উন্নত করতে।
        </li>
        <li>
          নতুন সার্ভিস বা অফার সম্পর্কে মাঝে মাঝে আপডেট পাঠাতে (শুধুমাত্র আপনি
          যদি সম্মতি দেন)।
        </li>
      </ul>

      <h2>৩. তথ্য শেয়ারিং</h2>
      <p>
        আমরা শুধুমাত্র আপনার বুকিং বিবরণ (যেমন নাম, ফোন নম্বর এবং ঠিকানা)
        নিযুক্ত পেশাদারের সাথে শেয়ার করি যাতে তারা আপনার সার্ভিস সম্পন্ন করতে
        পারেন। আমরা কখনোই তৃতীয় পক্ষের কাছে আপনার ব্যক্তিগত তথ্য বিক্রি করি না।
      </p>

      <h2>৪. তথ্য নিরাপত্তা</h2>
      <p>
        অননুমোদিত অ্যাক্সেস, পরিবর্তন বা প্রকাশ থেকে আপনার তথ্য রক্ষা করতে আমরা
        যুক্তিসঙ্গত প্রযুক্তিগত ও সাংগঠনিক ব্যবস্থা গ্রহণ করি।
      </p>

      <h2>৫. হোয়াটসঅ্যাপ ও যোগাযোগ</h2>
      <p>
        আপনি যখন হোয়াটসঅ্যাপ বা আমাদের এআই অ্যাসিস্ট্যান্টের মাধ্যমে যোগাযোগ
        করেন, তখন আপনার মেসেজগুলো শুধুমাত্র আপনার প্রশ্নের উত্তর দিতে এবং আমাদের
        সাপোর্টের মান উন্নত করতে ব্যবহৃত হয়।
      </p>

      <h2>৬. আপনার অধিকার</h2>
      <p>
        আপনি যেকোনো সময় {BRAND.email}-এ যোগাযোগ করে আপনার ব্যক্তিগত তথ্য দেখা,
        সংশোধন বা মুছে ফেলার অনুরোধ করতে পারেন।
      </p>

      <h2>৭. এই নীতির পরিবর্তন</h2>
      <p>
        আমরা মাঝে মাঝে এই প্রাইভেসি পলিসি আপডেট করতে পারি। যেকোনো পরিবর্তন এই
        পেজে একটি সংশোধিত "শেষ আপডেট" তারিখ সহ পোস্ট করা হবে।
      </p>

      <h2>৮. যোগাযোগ করুন</h2>
      <p>
        এই প্রাইভেসি পলিসি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের
        সাথে {BRAND.email} অথবা {BRAND.phone}-এ যোগাযোগ করুন।
      </p>
    </>
  );

  return (
    <LegalLayout
      title={lang === "bn" ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
      updated={lang === "bn" ? "জানুয়ারি ২০২৬" : "January 2026"}
    >
      {lang === "bn" ? contentBn : contentEn}
    </LegalLayout>
  );
}

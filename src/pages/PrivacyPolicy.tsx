import LegalLayout from "../components/common/LegalLayout";
import { BRAND } from "../data/brand";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  // English content
  const contentEn = (
    <>
      <p className="lead">
        At <strong>{BRAND.name}</strong>, we deeply respect your privacy and are
        fully committed to protecting the personal information you share with us
        while using our home service platform. This Privacy Policy explains how
        we collect, use, protect, and share your information when you interact
        with our website, mobile app, or services.
      </p>

      <p>
        By using {BRAND.name} services (through our website, WhatsApp, phone, or
        in-person), you agree to the practices described in this policy. Please
        read it carefully to understand our commitment to your privacy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information to provide better services and improve your
        experience. The types of information we may collect include:
      </p>

      <h3>1.1 Personal Information</h3>
      <ul>
        <li>
          <strong>Contact Details:</strong> Full name, phone number, email
          address, and physical address.
        </li>
        <li>
          <strong>Service Details:</strong> The specific service you need,
          preferred date/time, and any special instructions.
        </li>
        <li>
          <strong>Payment Information:</strong> Payment method preferences
          (cash, mobile banking, etc.) — we do not store your bank card details.
        </li>
        <li>
          <strong>Communication Records:</strong> Messages, calls, and chat
          history with our team via WhatsApp or AI Assistant.
        </li>
      </ul>

      <h3>1.2 Automatic Information</h3>
      <ul>
        <li>
          <strong>Device Information:</strong> Browser type, operating system,
          device model, and IP address.
        </li>
        <li>
          <strong>Usage Data:</strong> Pages visited, time spent, and
          interactions with our website.
        </li>
        <li>
          <strong>Location Data:</strong> Your general location (for service
          area verification) — we don't track real-time location without your
          explicit consent.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>Your information helps us to:</p>
      <ul>
        <li>
          Connect you with the right verified professional for your service
          request.
        </li>
        <li>
          Confirm bookings, send service updates, and provide timely customer
          support.
        </li>
        <li>Process payments and manage your service history.</li>
        <li>
          Improve our platform, service quality, and overall customer
          experience.
        </li>
        <li>
          Send important notifications about your bookings (SMS, WhatsApp, or
          email).
        </li>
        <li>
          Send occasional promotional updates about new services or special
          offers (only if you opt in — you can unsubscribe anytime).
        </li>
        <li>
          Prevent fraud, ensure platform security, and comply with legal
          obligations.
        </li>
        <li>Conduct analytics to understand how customers use our services.</li>
      </ul>

      <h2>3. Information Sharing & Disclosure</h2>
      <p>
        We take your privacy seriously and only share your information in
        specific, necessary circumstances:
      </p>

      <h3>3.1 With Service Professionals</h3>
      <p>
        We share your booking details (name, phone number, address, and service
        requirements) with the assigned professional so they can complete your
        service. Professionals are contractually bound to keep your information
        confidential.
      </p>

      <h3>3.2 With Service Providers</h3>
      <p>
        We may share limited information with trusted third-party providers
        (like SMS gateways, payment processors) who help us operate the
        platform. These providers are required to protect your data.
      </p>

      <h3>3.3 Legal Requirements</h3>
      <p>
        We may disclose your information if required by law, court order, or
        government request, or to protect the rights and safety of our
        customers, staff, and platform.
      </p>

      <h3>3.4 We Never Do</h3>
      <ul>
        <li>❌ Sell your personal data to third parties.</li>
        <li>❌ Share your data for third-party marketing without consent.</li>
        <li>❌ Rent or trade your contact information.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your
        information:
      </p>
      <ul>
        <li>
          <strong>Encryption:</strong> Data transmitted between you and our
          platform is encrypted using HTTPS/SSL protocols.
        </li>
        <li>
          <strong>Access Control:</strong> Only authorized {BRAND.name} staff
          can access your personal data, and only when necessary.
        </li>
        <li>
          <strong>Regular Audits:</strong> We regularly review our security
          practices to identify and address potential vulnerabilities.
        </li>
        <li>
          <strong>Secure Storage:</strong> Your data is stored on secure servers
          with restricted access.
        </li>
      </ul>
      <p>
        However, no method of transmission over the Internet or electronic
        storage is 100% secure. While we strive to protect your data, we cannot
        guarantee absolute security.
      </p>

      <h2>5. WhatsApp & Communication Privacy</h2>
      <p>
        When you contact us via WhatsApp, phone, email, or our AI Assistant:
      </p>
      <ul>
        <li>
          Your messages are used only to respond to your inquiry, process your
          booking, and improve our support quality.
        </li>
        <li>
          Chat history with our AI Assistant is stored locally on your device
          and can be cleared anytime using the "Clear Chat" button.
        </li>
        <li>
          WhatsApp communications are subject to WhatsApp's own privacy policy
          in addition to ours.
        </li>
        <li>We do not record phone calls without informing you first.</li>
      </ul>

      <h2>6. Cookies & Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar technologies to enhance your
        experience:
      </p>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> Required for the website to
          function properly (e.g., theme preferences, language settings).
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors
          use our site so we can improve it.
        </li>
        <li>
          <strong>Preference Cookies:</strong> Remember your choices (like dark
          mode, language) for a better experience.
        </li>
      </ul>
      <p>
        You can control or disable cookies through your browser settings, but
        this may affect website functionality.
      </p>

      <h2>7. Your Rights & Choices</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li>
          <strong>Right to Access:</strong> Request a copy of the personal data
          we hold about you.
        </li>
        <li>
          <strong>Right to Correction:</strong> Ask us to correct any inaccurate
          or outdated information.
        </li>
        <li>
          <strong>Right to Deletion:</strong> Request deletion of your personal
          data (subject to legal obligations).
        </li>
        <li>
          <strong>Right to Opt-Out:</strong> Unsubscribe from marketing
          communications anytime.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> Request your data in a
          portable format.
        </li>
        <li>
          <strong>Right to Object:</strong> Object to certain uses of your data.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <strong>{BRAND.email}</strong> or call <strong>{BRAND.phone}</strong>.
        We will respond within 30 days.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your personal information only as long as necessary to provide
        our services and comply with legal obligations:
      </p>
      <ul>
        <li>
          <strong>Active Customers:</strong> Data retained while your account is
          active and for 2 years after your last service.
        </li>
        <li>
          <strong>Service Records:</strong> Booking history retained for 3 years
          for warranty, tax, and legal purposes.
        </li>
        <li>
          <strong>Marketing Data:</strong> Retained until you unsubscribe or
          request deletion.
        </li>
      </ul>
      <p>
        After the retention period, your data is securely deleted or anonymized.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our services are not directed to children under 18 years of age. We do
        not knowingly collect personal information from children. If you believe
        we have collected information from a minor, please contact us
        immediately at {BRAND.email} and we will delete it promptly.
      </p>

      <h2>10. Third-Party Links & Services</h2>
      <p>
        Our website may contain links to third-party websites (like social
        media, payment platforms). We are not responsible for the privacy
        practices of these external sites. We encourage you to review their
        privacy policies before providing any information.
      </p>

      <h2>11. International Data Transfer</h2>
      <p>
        Your information is primarily stored and processed in Bangladesh. If we
        transfer data internationally (for example, using cloud services), we
        ensure appropriate safeguards are in place to protect your privacy.
      </p>

      <h2>12. AI Assistant Privacy</h2>
      <p>
        Our AI Assistant ({BRAND.name} AI) uses conversational AI technology
        (powered by Groq API). When you chat with our AI:
      </p>
      <ul>
        <li>Your messages are processed to generate relevant responses.</li>
        <li>
          Chat history is stored locally on your browser (localStorage) — not on
          our servers.
        </li>
        <li>
          You can clear chat history anytime using the "Clear Chat" button.
        </li>
        <li>
          We do not use AI conversations to train external AI models without
          your consent.
        </li>
      </ul>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, services, or legal requirements. When we make
        significant changes:
      </p>
      <ul>
        <li>The "Last Updated" date at the top will be revised.</li>
        <li>
          For major changes, we will notify you via email or a prominent notice
          on our website.
        </li>
        <li>
          Continued use of our services after changes means you accept the
          updated policy.
        </li>
      </ul>
      <p>
        We encourage you to review this page periodically to stay informed about
        how we protect your privacy.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or how we handle your personal data, please reach out to us:
      </p>
      <ul>
        <li>
          📧 <strong>Email:</strong>{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.email}
          </a>
        </li>
        <li>
          📞 <strong>Phone:</strong>{" "}
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.phone}
          </a>
        </li>
        <li>
          💬 <strong>WhatsApp:</strong>{" "}
          <a
            href={BRAND.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.phone}
          </a>
        </li>
        <li>
          📍 <strong>Address:</strong> {BRAND.area}
        </li>
        <li>
          🕒 <strong>Working Hours:</strong> {BRAND.hours}
        </li>
      </ul>

      <p className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm dark:border-brand-500/30 dark:bg-brand-500/10">
        <strong>Your Trust Matters:</strong> {BRAND.name} is committed to
        maintaining your trust by handling your data responsibly and
        transparently. Thank you for choosing us for your home service needs.
      </p>
    </>
  );

  // Bangla content
  const contentBn = (
    <>
      <p className="lead">
        <strong>{BRAND.name}</strong>-এ আমরা আপনার গোপনীয়তাকে গভীরভাবে সম্মান
        করি এবং আমাদের হোম সার্ভিস প্ল্যাটফর্ম ব্যবহারের সময় আপনি আমাদের সাথে
        যে ব্যক্তিগত তথ্য শেয়ার করেন তা রক্ষায় সম্পূর্ণ প্রতিশ্রুতিবদ্ধ। এই
        প্রাইভেসি পলিসি ব্যাখ্যা করে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার,
        সুরক্ষা এবং শেয়ার করি যখন আপনি আমাদের ওয়েবসাইট, মোবাইল অ্যাপ বা
        সার্ভিসের সাথে যোগাযোগ করেন।
      </p>

      <p>
        {BRAND.name} সার্ভিস (ওয়েবসাইট, হোয়াটসঅ্যাপ, ফোন বা সরাসরি) ব্যবহার
        করে, আপনি এই পলিসিতে বর্ণিত অনুশীলনগুলোতে সম্মত হন। আপনার গোপনীয়তার
        প্রতি আমাদের প্রতিশ্রুতি বুঝতে দয়া করে এটি মনোযোগ সহকারে পড়ুন।
      </p>

      <h2>১. আমরা যে তথ্য সংগ্রহ করি</h2>
      <p>
        আপনার অভিজ্ঞতা উন্নত করতে এবং ভালো সেবা দিতে আমরা তথ্য সংগ্রহ করি। আমরা
        যে ধরনের তথ্য সংগ্রহ করতে পারি:
      </p>

      <h3>১.১ ব্যক্তিগত তথ্য</h3>
      <ul>
        <li>
          <strong>যোগাযোগের বিবরণ:</strong> পুরো নাম, ফোন নম্বর, ইমেইল ঠিকানা
          এবং শারীরিক ঠিকানা।
        </li>
        <li>
          <strong>সার্ভিস বিবরণ:</strong> আপনার প্রয়োজনীয় নির্দিষ্ট সার্ভিস,
          পছন্দের তারিখ/সময় এবং যেকোনো বিশেষ নির্দেশনা।
        </li>
        <li>
          <strong>পেমেন্ট তথ্য:</strong> পেমেন্ট পদ্ধতির পছন্দ (নগদ, মোবাইল
          ব্যাংকিং ইত্যাদি) — আমরা আপনার ব্যাংক কার্ডের বিবরণ সংরক্ষণ করি না।
        </li>
        <li>
          <strong>যোগাযোগের রেকর্ড:</strong> হোয়াটসঅ্যাপ বা এআই সহকারী মাধ্যমে
          আমাদের টিমের সাথে বার্তা, কল এবং চ্যাট ইতিহাস।
        </li>
      </ul>

      <h3>১.২ স্বয়ংক্রিয় তথ্য</h3>
      <ul>
        <li>
          <strong>ডিভাইস তথ্য:</strong> ব্রাউজারের ধরন, অপারেটিং সিস্টেম, ডিভাইস
          মডেল এবং IP ঠিকানা।
        </li>
        <li>
          <strong>ব্যবহারের ডেটা:</strong> ভিজিট করা পেজ, ব্যয় করা সময় এবং
          আমাদের ওয়েবসাইটের সাথে ইন্টারঅ্যাকশন।
        </li>
        <li>
          <strong>অবস্থান ডেটা:</strong> আপনার সাধারণ অবস্থান (সার্ভিস এলাকা
          যাচাইয়ের জন্য) — আপনার স্পষ্ট সম্মতি ছাড়া আমরা রিয়েল-টাইম অবস্থান
          ট্র্যাক করি না।
        </li>
      </ul>

      <h2>২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি</h2>
      <p>আপনার তথ্য আমাদের সাহায্য করে:</p>
      <ul>
        <li>
          আপনার সার্ভিস অনুরোধের জন্য সঠিক যাচাইকৃত পেশাদারের সাথে আপনাকে যুক্ত
          করতে।
        </li>
        <li>
          বুকিং নিশ্চিত করতে, সার্ভিস আপডেট পাঠাতে এবং সময়মতো গ্রাহক সাপোর্ট
          প্রদান করতে।
        </li>
        <li>পেমেন্ট প্রক্রিয়া করতে এবং আপনার সার্ভিস ইতিহাস পরিচালনা করতে।</li>
        <li>
          আমাদের প্ল্যাটফর্ম, সার্ভিসের মান এবং সামগ্রিক গ্রাহক অভিজ্ঞতা উন্নত
          করতে।
        </li>
        <li>
          আপনার বুকিং সম্পর্কে গুরুত্বপূর্ণ বিজ্ঞপ্তি পাঠাতে (SMS, হোয়াটসঅ্যাপ
          বা ইমেইল)।
        </li>
        <li>
          নতুন সার্ভিস বা বিশেষ অফার সম্পর্কে মাঝে মাঝে প্রচারমূলক আপডেট পাঠাতে
          (শুধুমাত্র আপনি যদি সম্মতি দেন — আপনি যেকোনো সময় আনসাবস্ক্রাইব করতে
          পারেন)।
        </li>
        <li>
          জালিয়াতি প্রতিরোধ, প্ল্যাটফর্মের নিরাপত্তা নিশ্চিত এবং আইনি
          বাধ্যবাধকতা মেনে চলতে।
        </li>
        <li>
          গ্রাহকরা কীভাবে আমাদের সার্ভিস ব্যবহার করেন তা বুঝতে অ্যানালিটিক্স
          পরিচালনা করতে।
        </li>
      </ul>

      <h2>৩. তথ্য শেয়ারিং ও প্রকাশ</h2>
      <p>
        আমরা আপনার গোপনীয়তা গুরুত্ব সহকারে নিই এবং শুধুমাত্র নির্দিষ্ট,
        প্রয়োজনীয় পরিস্থিতিতে আপনার তথ্য শেয়ার করি:
      </p>

      <h3>৩.১ সার্ভিস পেশাদারদের সাথে</h3>
      <p>
        আমরা আপনার বুকিং বিবরণ (নাম, ফোন নম্বর, ঠিকানা এবং সার্ভিস প্রয়োজন)
        নিযুক্ত পেশাদারের সাথে শেয়ার করি যাতে তারা আপনার সার্ভিস সম্পন্ন করতে
        পারেন। পেশাদাররা চুক্তিগতভাবে আপনার তথ্য গোপন রাখতে বাধ্য।
      </p>

      <h3>৩.২ সার্ভিস প্রদানকারীদের সাথে</h3>
      <p>
        আমরা বিশ্বস্ত তৃতীয়-পক্ষের প্রদানকারীদের (যেমন SMS গেটওয়ে, পেমেন্ট
        প্রসেসর) সাথে সীমিত তথ্য শেয়ার করতে পারি যারা আমাদের প্ল্যাটফর্ম
        পরিচালনায় সাহায্য করে। এই প্রদানকারীদের আপনার ডেটা রক্ষা করতে হবে।
      </p>

      <h3>৩.৩ আইনি প্রয়োজন</h3>
      <p>
        আইন, আদালতের আদেশ বা সরকারি অনুরোধ দ্বারা প্রয়োজন হলে, বা আমাদের
        গ্রাহক, কর্মী এবং প্ল্যাটফর্মের অধিকার ও নিরাপত্তা রক্ষা করতে আমরা আপনার
        তথ্য প্রকাশ করতে পারি।
      </p>

      <h3>৩.৪ আমরা কখনোই করি না</h3>
      <ul>
        <li>❌ তৃতীয় পক্ষের কাছে আপনার ব্যক্তিগত ডেটা বিক্রি করি।</li>
        <li>
          ❌ সম্মতি ছাড়া তৃতীয়-পক্ষ মার্কেটিংয়ের জন্য আপনার ডেটা শেয়ার করি।
        </li>
        <li>❌ আপনার যোগাযোগের তথ্য ভাড়া বা বাণিজ্য করি।</li>
      </ul>

      <h2>৪. তথ্য নিরাপত্তা</h2>
      <p>
        আপনার তথ্য রক্ষা করতে আমরা শিল্প-মান নিরাপত্তা ব্যবস্থা প্রয়োগ করি:
      </p>
      <ul>
        <li>
          <strong>এনক্রিপশন:</strong> আপনার এবং আমাদের প্ল্যাটফর্মের মধ্যে
          প্রেরিত ডেটা HTTPS/SSL প্রোটোকল ব্যবহার করে এনক্রিপ্ট করা হয়।
        </li>
        <li>
          <strong>অ্যাক্সেস নিয়ন্ত্রণ:</strong> শুধুমাত্র অনুমোদিত {BRAND.name}{" "}
          কর্মীরা আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করতে পারেন, এবং শুধু যখন
          প্রয়োজন।
        </li>
        <li>
          <strong>নিয়মিত অডিট:</strong> সম্ভাব্য দুর্বলতা চিহ্নিত ও সমাধানের
          জন্য আমরা নিয়মিত আমাদের নিরাপত্তা অনুশীলনগুলো পর্যালোচনা করি।
        </li>
        <li>
          <strong>নিরাপদ স্টোরেজ:</strong> আপনার ডেটা সীমিত অ্যাক্সেস সহ নিরাপদ
          সার্ভারে সংরক্ষিত হয়।
        </li>
      </ul>
      <p>
        তবে, ইন্টারনেটে সংক্রমণ বা ইলেকট্রনিক স্টোরেজের কোনো পদ্ধতিই ১০০% নিরাপদ
        নয়। যদিও আমরা আপনার ডেটা রক্ষা করার চেষ্টা করি, আমরা সম্পূর্ণ
        নিরাপত্তার নিশ্চয়তা দিতে পারি না।
      </p>

      <h2>৫. হোয়াটসঅ্যাপ ও যোগাযোগের গোপনীয়তা</h2>
      <p>
        আপনি যখন হোয়াটসঅ্যাপ, ফোন, ইমেইল বা আমাদের এআই সহকারী মাধ্যমে যোগাযোগ
        করেন:
      </p>
      <ul>
        <li>
          আপনার বার্তাগুলো শুধুমাত্র আপনার প্রশ্নের উত্তর দিতে, আপনার বুকিং
          প্রক্রিয়া করতে এবং আমাদের সাপোর্টের মান উন্নত করতে ব্যবহৃত হয়।
        </li>
        <li>
          আমাদের এআই সহকারীর সাথে চ্যাট ইতিহাস আপনার ডিভাইসে স্থানীয়ভাবে
          সংরক্ষিত হয় এবং "চ্যাট মুছুন" বোতাম ব্যবহার করে যেকোনো সময় সাফ করা
          যেতে পারে।
        </li>
        <li>
          হোয়াটসঅ্যাপ যোগাযোগ আমাদের ছাড়াও হোয়াটসঅ্যাপের নিজস্ব গোপনীয়তা
          নীতির অধীন।
        </li>
        <li>আপনাকে আগে না জানিয়ে আমরা ফোন কল রেকর্ড করি না।</li>
      </ul>

      <h2>৬. কুকিজ ও ট্র্যাকিং প্রযুক্তি</h2>
      <p>
        আমাদের ওয়েবসাইট আপনার অভিজ্ঞতা উন্নত করতে কুকিজ এবং অনুরূপ প্রযুক্তি
        ব্যবহার করে:
      </p>
      <ul>
        <li>
          <strong>অপরিহার্য কুকিজ:</strong> ওয়েবসাইটের সঠিকভাবে কাজ করার জন্য
          প্রয়োজন (যেমন থিমের পছন্দ, ভাষা সেটিংস)।
        </li>
        <li>
          <strong>অ্যানালিটিক্স কুকিজ:</strong> দর্শকরা কীভাবে আমাদের সাইট
          ব্যবহার করেন তা বুঝতে সাহায্য করে যাতে আমরা এটি উন্নত করতে পারি।
        </li>
        <li>
          <strong>পছন্দ কুকিজ:</strong> ভালো অভিজ্ঞতার জন্য আপনার পছন্দগুলো মনে
          রাখে (যেমন ডার্ক মোড, ভাষা)।
        </li>
      </ul>
      <p>
        আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিয়ন্ত্রণ বা নিষ্ক্রিয় করতে
        পারেন, তবে এটি ওয়েবসাইটের কার্যকারিতা প্রভাবিত করতে পারে।
      </p>

      <h2>৭. আপনার অধিকার ও পছন্দ</h2>
      <p>আপনার ব্যক্তিগত ডেটা সম্পর্কে আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
      <ul>
        <li>
          <strong>অ্যাক্সেসের অধিকার:</strong> আমরা আপনার সম্পর্কে যে ব্যক্তিগত
          ডেটা রাখি তার একটি কপি অনুরোধ করুন।
        </li>
        <li>
          <strong>সংশোধনের অধিকার:</strong> কোনো ভুল বা পুরানো তথ্য সংশোধন করতে
          আমাদের বলুন।
        </li>
        <li>
          <strong>মুছে ফেলার অধিকার:</strong> আপনার ব্যক্তিগত ডেটা মুছে ফেলার
          অনুরোধ করুন (আইনি বাধ্যবাধকতা সাপেক্ষে)।
        </li>
        <li>
          <strong>অপ্ট-আউট অধিকার:</strong> মার্কেটিং যোগাযোগ থেকে যেকোনো সময়
          আনসাবস্ক্রাইব করুন।
        </li>
        <li>
          <strong>ডেটা পোর্টেবিলিটি অধিকার:</strong> পোর্টেবল ফরম্যাটে আপনার
          ডেটা অনুরোধ করুন।
        </li>
        <li>
          <strong>আপত্তির অধিকার:</strong> আপনার ডেটার কিছু ব্যবহারে আপত্তি
          করুন।
        </li>
      </ul>
      <p>
        এই অধিকারগুলোর যেকোনোটি প্রয়োগ করতে, <strong>{BRAND.email}</strong> এ
        আমাদের সাথে যোগাযোগ করুন অথবা <strong>{BRAND.phone}</strong> এ কল করুন।
        আমরা ৩০ দিনের মধ্যে উত্তর দিব।
      </p>

      <h2>৮. ডেটা সংরক্ষণ</h2>
      <p>
        আমরা শুধুমাত্র আমাদের সার্ভিস প্রদান এবং আইনি বাধ্যবাধকতা মেনে চলতে
        প্রয়োজনীয় সময়ের জন্য আপনার ব্যক্তিগত তথ্য সংরক্ষণ করি:
      </p>
      <ul>
        <li>
          <strong>সক্রিয় গ্রাহক:</strong> আপনার অ্যাকাউন্ট সক্রিয় থাকাকালীন
          এবং শেষ সার্ভিসের ২ বছর পর্যন্ত ডেটা সংরক্ষিত।
        </li>
        <li>
          <strong>সার্ভিস রেকর্ড:</strong> ওয়ারেন্টি, ট্যাক্স এবং আইনি
          উদ্দেশ্যে বুকিং ইতিহাস ৩ বছরের জন্য সংরক্ষিত।
        </li>
        <li>
          <strong>মার্কেটিং ডেটা:</strong> আপনি আনসাবস্ক্রাইব বা মুছে ফেলার
          অনুরোধ না করা পর্যন্ত সংরক্ষিত।
        </li>
      </ul>
      <p>
        সংরক্ষণের সময়কালের পরে, আপনার ডেটা নিরাপদে মুছে ফেলা বা বেনামী করা হয়।
      </p>

      <h2>৯. শিশুদের গোপনীয়তা</h2>
      <p>
        আমাদের সার্ভিস ১৮ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা জেনেশুনে শিশুদের
        কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না। যদি আপনি বিশ্বাস করেন যে আমরা
        একজন নাবালকের কাছ থেকে তথ্য সংগ্রহ করেছি, দয়া করে {BRAND.email} এ
        অবিলম্বে আমাদের সাথে যোগাযোগ করুন এবং আমরা এটি দ্রুত মুছে ফেলব।
      </p>

      <h2>১০. তৃতীয়-পক্ষ লিঙ্ক ও সার্ভিস</h2>
      <p>
        আমাদের ওয়েবসাইটে তৃতীয়-পক্ষের ওয়েবসাইটে (যেমন সোশ্যাল মিডিয়া,
        পেমেন্ট প্ল্যাটফর্ম) লিঙ্ক থাকতে পারে। এই বাহ্যিক সাইটগুলোর গোপনীয়তা
        অনুশীলনের জন্য আমরা দায়ী নই। কোনো তথ্য প্রদানের আগে তাদের গোপনীয়তা
        নীতি পর্যালোচনা করার জন্য আমরা আপনাকে উৎসাহিত করি।
      </p>

      <h2>১১. আন্তর্জাতিক ডেটা স্থানান্তর</h2>
      <p>
        আপনার তথ্য প্রাথমিকভাবে বাংলাদেশে সংরক্ষিত এবং প্রক্রিয়াজাত হয়। যদি
        আমরা আন্তর্জাতিকভাবে ডেটা স্থানান্তর করি (উদাহরণস্বরূপ, ক্লাউড সার্ভিস
        ব্যবহার করে), আমরা নিশ্চিত করি যে আপনার গোপনীয়তা রক্ষা করার জন্য
        উপযুক্ত সুরক্ষা রয়েছে।
      </p>

      <h2>১২. এআই সহকারী গোপনীয়তা</h2>
      <p>
        আমাদের এআই সহকারী ({BRAND.name} AI) কথোপকথন এআই প্রযুক্তি (Groq API
        দ্বারা চালিত) ব্যবহার করে। যখন আপনি আমাদের এআই এর সাথে চ্যাট করেন:
      </p>
      <ul>
        <li>প্রাসঙ্গিক প্রতিক্রিয়া তৈরিতে আপনার বার্তা প্রক্রিয়াজাত হয়।</li>
        <li>
          চ্যাট ইতিহাস আপনার ব্রাউজারে স্থানীয়ভাবে সংরক্ষিত হয় (localStorage)
          — আমাদের সার্ভারে নয়।
        </li>
        <li>
          "চ্যাট মুছুন" বোতাম ব্যবহার করে আপনি যেকোনো সময় চ্যাট ইতিহাস সাফ করতে
          পারেন।
        </li>
        <li>
          আপনার সম্মতি ছাড়া বাহ্যিক এআই মডেলগুলোকে প্রশিক্ষণ দিতে আমরা এআই
          কথোপকথন ব্যবহার করি না।
        </li>
      </ul>

      <h2>১৩. এই প্রাইভেসি পলিসিতে পরিবর্তন</h2>
      <p>
        আমরা মাঝে মাঝে আমাদের অনুশীলন, সার্ভিস বা আইনি প্রয়োজনের পরিবর্তনগুলো
        প্রতিফলিত করতে এই প্রাইভেসি পলিসি আপডেট করতে পারি। যখন আমরা গুরুত্বপূর্ণ
        পরিবর্তন করি:
      </p>
      <ul>
        <li>উপরের "সর্বশেষ আপডেট" তারিখ সংশোধন করা হবে।</li>
        <li>
          বড় পরিবর্তনের জন্য, আমরা আপনাকে ইমেইল বা আমাদের ওয়েবসাইটে একটি
          বিশিষ্ট বিজ্ঞপ্তির মাধ্যমে জানাব।
        </li>
        <li>
          পরিবর্তনের পরে আমাদের সার্ভিসের ক্রমাগত ব্যবহারের অর্থ আপনি আপডেট করা
          পলিসি গ্রহণ করেন।
        </li>
      </ul>
      <p>
        আপনার গোপনীয়তা রক্ষার বিষয়ে অবহিত থাকতে আমরা আপনাকে পর্যায়ক্রমে এই
        পেজটি পর্যালোচনা করতে উৎসাহিত করি।
      </p>

      <h2>১৪. যোগাযোগ করুন</h2>
      <p>
        এই প্রাইভেসি পলিসি বা আমরা কীভাবে আপনার ব্যক্তিগত ডেটা পরিচালনা করি সে
        সম্পর্কে আপনার কোনো প্রশ্ন, উদ্বেগ বা অনুরোধ থাকলে, দয়া করে আমাদের সাথে
        যোগাযোগ করুন:
      </p>
      <ul>
        <li>
          📧 <strong>ইমেইল:</strong>{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.email}
          </a>
        </li>
        <li>
          📞 <strong>ফোন:</strong>{" "}
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.phone}
          </a>
        </li>
        <li>
          💬 <strong>হোয়াটসঅ্যাপ:</strong>{" "}
          <a
            href={BRAND.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            {BRAND.phone}
          </a>
        </li>
        <li>
          📍 <strong>ঠিকানা:</strong> {BRAND.area}
        </li>
        <li>
          🕒 <strong>কাজের সময়:</strong> {BRAND.hours}
        </li>
      </ul>

      <p className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm dark:border-brand-500/30 dark:bg-brand-500/10">
        <strong>আপনার বিশ্বাস গুরুত্বপূর্ণ:</strong> {BRAND.name} দায়িত্বশীল
        এবং স্বচ্ছভাবে আপনার ডেটা পরিচালনা করে আপনার বিশ্বাস বজায় রাখতে
        প্রতিশ্রুতিবদ্ধ। আপনার হোম সার্ভিস প্রয়োজনের জন্য আমাদের বেছে নেওয়ার
        জন্য ধন্যবাদ।
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

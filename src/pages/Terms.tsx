import LegalLayout from "../components/common/LegalLayout";
import { BRAND } from "../data/brand";
import { useLanguage } from "../context/LanguageContext";

export default function Terms() {
  const { lang } = useLanguage();

  // English content
  const contentEn = (
    <>
      <p className="lead">
        Welcome to <strong>{BRAND.name}</strong>! These Terms & Conditions
        ("Terms") govern your use of our website, mobile app, and all services
        provided by {BRAND.name} in {BRAND.area}. By booking a service, using
        our platform, or contacting us, you agree to be bound by these Terms.
        Please read them carefully.
      </p>

      <p>
        If you do not agree with any part of these Terms, please do not use our
        services. These Terms constitute a legal agreement between you (the
        "Customer") and {BRAND.name} (the "Company," "we," "us," or "our").
      </p>

      <h2>1. Our Services</h2>
      <p>
        <strong>{BRAND.name}</strong> is a technology-driven home service
        platform that connects customers with verified, independent service
        professionals. Our services include:
      </p>
      <ul>
        <li>
          <strong>Electrical Services:</strong> Wiring, installations, repairs
        </li>
        <li>
          <strong>Plumbing:</strong> Leak repairs, fittings, drainage solutions
        </li>
        <li>
          <strong>AC Service:</strong> Installation, servicing, gas refilling
        </li>
        <li>
          <strong>Home Cleaning:</strong> Regular and deep cleaning
        </li>
        <li>
          <strong>Dry Wash & Laundry:</strong> Professional garment care
        </li>
        <li>
          <strong>Home Shifting:</strong> Packing, moving, and unloading
        </li>
        <li>
          <strong>Salon at Home:</strong> Haircuts, grooming, spa services
        </li>
        <li>
          <strong>Beauty Services:</strong> Makeup, facials, bridal packages
        </li>
      </ul>
      <p>
        We operate primarily in {BRAND.area}, with plans to expand across
        Bangladesh.
      </p>

      <h2>2. Booking & Confirmation</h2>

      <h3>2.1 How to Book</h3>
      <p>You can book services through:</p>
      <ul>
        <li>Our website ({BRAND.domain})</li>
        <li>WhatsApp ({BRAND.phone})</li>
        <li>Phone call</li>
        <li>Our AI Assistant</li>
        <li>Email ({BRAND.email})</li>
      </ul>

      <h3>2.2 Booking Confirmation</h3>
      <p>
        A booking is only <strong>confirmed</strong> when our team contacts you
        to verify:
      </p>
      <ul>
        <li>Service details and requirements</li>
        <li>Date, time, and location</li>
        <li>Estimated pricing</li>
        <li>Professional assignment</li>
      </ul>
      <p>
        You will receive a confirmation via WhatsApp, SMS, or phone call. Until
        confirmed, no service commitment exists.
      </p>

      <h3>2.3 Booking Requirements</h3>
      <p>To book a service, you must:</p>
      <ul>
        <li>Be at least 18 years old (or have parental consent)</li>
        <li>Provide accurate contact and address information</li>
        <li>Be available at the confirmed date and time</li>
        <li>Have a safe and accessible location for the professional</li>
      </ul>

      <h2>3. Pricing & Payment</h2>

      <h3>3.1 Pricing</h3>
      <p>Our pricing is based on:</p>
      <ul>
        <li>Type and scope of service</li>
        <li>Materials required (if applicable)</li>
        <li>Time and complexity of work</li>
        <li>Location and travel distance</li>
      </ul>
      <p>
        <strong>Transparent Pricing:</strong> Final pricing will always be
        communicated and agreed upon <em>before</em> the service begins. No
        hidden charges will be added.
      </p>

      <h3>3.2 Payment Methods</h3>
      <p>We accept the following payment methods:</p>
      <ul>
        <li>
          <strong>Cash on Service:</strong> Pay after work completion
        </li>
        <li>
          <strong>Mobile Banking:</strong> bKash, Nagad, Rocket
        </li>
        <li>
          <strong>Bank Transfer:</strong> For large bookings (upon request)
        </li>
      </ul>
      <p>
        Payment is typically collected after successful completion of the
        service. For large projects, we may request an advance deposit (agreed
        upon in advance).
      </p>

      <h3>3.3 Additional Charges</h3>
      <p>Additional charges may apply for:</p>
      <ul>
        <li>Extra materials or parts (with your prior approval)</li>
        <li>Emergency or after-hours service</li>
        <li>Locations outside our standard service area</li>
        <li>Additional work beyond the original scope (with your consent)</li>
      </ul>

      <h2>4. Cancellations & Rescheduling</h2>

      <h3>4.1 Cancellation Policy</h3>
      <ul>
        <li>
          <strong>Free Cancellation:</strong> Cancel up to 2 hours before the
          scheduled time without any charge.
        </li>
        <li>
          <strong>Late Cancellation:</strong> Cancellations within 2 hours of
          the appointment may incur a visit charge (BDT 200-500).
        </li>
        <li>
          <strong>Emergency Cancellation:</strong> No charge for genuine
          emergencies (illness, family emergency, etc.).
        </li>
      </ul>

      <h3>4.2 Rescheduling</h3>
      <p>
        You may reschedule bookings by contacting us on WhatsApp or phone. We'll
        do our best to accommodate your preferred new date/time based on
        professional availability.
      </p>

      <h3>4.3 No-Show Policy</h3>
      <p>
        If our professional arrives at your address and you're unavailable
        without prior notice, a visit charge may apply. Repeated no-shows may
        result in service restrictions.
      </p>

      <h2>5. Service Warranty & Guarantees</h2>

      <h3>5.1 Workmanship Warranty</h3>
      <p>We stand behind the quality of our work. Most services come with:</p>
      <ul>
        <li>
          <strong>Electrical Work:</strong> 6-month workmanship warranty
        </li>
        <li>
          <strong>Plumbing:</strong> 3-month workmanship warranty
        </li>
        <li>
          <strong>AC Service:</strong> 3-6 months (depending on service type)
        </li>
        <li>
          <strong>Home Shifting:</strong> Damage protection (as per agreement)
        </li>
      </ul>

      <h3>5.2 Product Warranty</h3>
      <p>
        Parts and materials come with the manufacturer's warranty (if
        applicable). We do not provide warranties beyond what the manufacturer
        offers.
      </p>

      <h3>5.3 Satisfaction Guarantee</h3>
      <p>
        If you're not satisfied with the service quality, contact us within 24
        hours. We'll investigate and, where appropriate, redo the work or
        provide a partial/full refund at our discretion.
      </p>

      <h2>6. Refund Policy</h2>
      <p>Refunds may be issued in the following situations:</p>
      <ul>
        <li>Service could not be provided due to our fault</li>
        <li>Significant service quality issues (verified by our team)</li>
        <li>Cancellation before professional dispatch</li>
        <li>Overcharging or billing errors</li>
      </ul>
      <p>
        <strong>Refund Processing:</strong> Approved refunds are processed
        within 7-14 business days via the original payment method.
      </p>
      <p>
        <strong>Non-Refundable:</strong> Completed services (unless there are
        quality issues), consumed materials, and no-show fees are generally
        non-refundable.
      </p>

      <h2>7. Professional Conduct & Responsibilities</h2>

      <h3>7.1 Our Professionals</h3>
      <p>
        All professionals on {BRAND.name} are verified prior to onboarding. They
        are expected to:
      </p>
      <ul>
        <li>Arrive on time and appropriately dressed</li>
        <li>Behave professionally and respectfully</li>
        <li>Complete work to industry standards</li>
        <li>Respect your property and privacy</li>
        <li>Follow safety protocols</li>
      </ul>

      <h3>7.2 Independent Contractors</h3>
      <p>
        <strong>Important:</strong> {BRAND.name} acts as a <em>facilitator</em>{" "}
        between customers and independent service professionals. Our
        professionals are independent contractors, not employees of {BRAND.name}
        . However, we take responsibility for the quality assurance and dispute
        resolution.
      </p>

      <h3>7.3 Reporting Issues</h3>
      <p>
        If you experience any issue with a professional's behavior or work
        quality, please report it immediately via WhatsApp, phone, or email. We
        take all complaints seriously and will investigate promptly.
      </p>

      <h2>8. Customer Responsibilities</h2>
      <p>As a customer, you agree to:</p>
      <ul>
        <li>Provide accurate and complete booking information</li>
        <li>Be available at the confirmed appointment time</li>
        <li>Ensure a safe working environment for the professional</li>
        <li>Communicate any special requirements in advance</li>
        <li>Treat our professionals with respect and courtesy</li>
        <li>Pay for services as per the agreed terms</li>
        <li>Not engage professionals privately outside our platform</li>
      </ul>

      <h2>9. Prohibited Activities</h2>
      <p>You may not use our services for:</p>
      <ul>
        <li>Any illegal or unauthorized purpose</li>
        <li>Harassing, threatening, or abusing our staff or professionals</li>
        <li>Providing false information</li>
        <li>Attempting to hire our professionals privately (bypassing us)</li>
        <li>Reselling our services without authorization</li>
        <li>
          Any activity that could damage our reputation or business operations
        </li>
      </ul>

      <h2>10. Limitation of Liability</h2>
      <p>
        While {BRAND.name} strives to provide the best possible service, we have
        certain limitations of liability:
      </p>
      <ul>
        <li>
          We are not liable for indirect, incidental, or consequential damages
          arising from service delays, cancellations, or professional conduct
          beyond our reasonable control.
        </li>
        <li>
          Our maximum liability for any claim is limited to the amount paid for
          the specific service in question.
        </li>
        <li>
          We are not responsible for damages caused by pre-existing issues
          (e.g., old wiring, faulty structures) that were not disclosed.
        </li>
        <li>
          Force majeure events (natural disasters, strikes, government actions)
          are not our liability.
        </li>
      </ul>

      <h2>11. Intellectual Property</h2>
      <p>
        All content on {BRAND.name}'s website and app (logo, design, text,
        images, code) is the intellectual property of {BRAND.name} and is
        protected by copyright laws. You may not:
      </p>
      <ul>
        <li>Copy, reproduce, or distribute our content without permission</li>
        <li>Use our brand name or logo for commercial purposes</li>
        <li>Reverse engineer or attempt to extract our source code</li>
      </ul>

      <h2 id="cookies">12. Cookies & Website Usage</h2>
      <p>Our website uses basic cookies and local storage to remember:</p>
      <ul>
        <li>Your theme preference (light/dark mode)</li>
        <li>Language selection (English/Bangla)</li>
        <li>AI chat history (stored locally on your browser)</li>
      </ul>
      <p>
        We do not use cookies for third-party advertising or tracking. For more
        details, see our{" "}
        <a
          href="/privacy-policy"
          className="text-brand-600 hover:underline dark:text-brand-300"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2>13. Dispute Resolution</h2>

      <h3>13.1 Direct Resolution</h3>
      <p>
        In case of any dispute, we encourage you to contact us first at{" "}
        <strong>{BRAND.email}</strong> or <strong>{BRAND.phone}</strong>. We aim
        to resolve most issues within 48 hours.
      </p>

      <h3>13.2 Mediation</h3>
      <p>
        If direct resolution fails, both parties agree to attempt mediation
        through a neutral third party before pursuing legal action.
      </p>

      <h3>13.3 Governing Law</h3>
      <p>
        These Terms are governed by the laws of the People's Republic of
        Bangladesh. Any legal disputes will be subject to the exclusive
        jurisdiction of the courts in Rangpur, Bangladesh.
      </p>

      <h2>14. Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms & Conditions at any time.
        When we make changes:
      </p>
      <ul>
        <li>The "Last Updated" date at the top will be revised</li>
        <li>
          Significant changes will be communicated via email or website notice
        </li>
        <li>
          Continued use of our services after changes constitutes acceptance of
          the updated terms
        </li>
      </ul>
      <p>
        We encourage you to review these Terms periodically to stay informed.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        If you have any questions, concerns, or feedback regarding these Terms &
        Conditions, please contact us:
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
        <strong>Thank You for Choosing {BRAND.name}!</strong> We are committed
        to providing you with reliable, professional, and trustworthy home
        services. By working together based on these Terms, we can ensure a
        smooth and satisfying experience for everyone.
      </p>
    </>
  );

  // Bangla content
  const contentBn = (
    <>
      <p className="lead">
        <strong>{BRAND.name}</strong>-এ স্বাগতম! এই শর্তাবলী ("শর্তাবলী") আমাদের
        ওয়েবসাইট, মোবাইল অ্যাপ এবং {BRAND.area}-এ {BRAND.name} দ্বারা প্রদত্ত
        সমস্ত সার্ভিস ব্যবহার নিয়ন্ত্রণ করে। কোনো সার্ভিস বুক করে, আমাদের
        প্ল্যাটফর্ম ব্যবহার করে বা আমাদের সাথে যোগাযোগ করে, আপনি এই শর্তাবলী
        দ্বারা বাধ্য হতে সম্মত হন। দয়া করে সেগুলো মনোযোগ সহকারে পড়ুন।
      </p>

      <p>
        যদি আপনি এই শর্তাবলীর কোনো অংশের সাথে সম্মত না হন, দয়া করে আমাদের
        সার্ভিস ব্যবহার করবেন না। এই শর্তাবলী আপনার ("গ্রাহক") এবং {BRAND.name}{" "}
        ("কোম্পানি," "আমরা," "আমাদের") মধ্যে একটি আইনি চুক্তি গঠন করে।
      </p>

      <h2>১. আমাদের সার্ভিস</h2>
      <p>
        <strong>{BRAND.name}</strong> একটি প্রযুক্তি-চালিত হোম সার্ভিস
        প্ল্যাটফর্ম যা গ্রাহকদের যাচাইকৃত, স্বাধীন সার্ভিস পেশাদারদের সাথে যুক্ত
        করে। আমাদের সার্ভিসগুলো:
      </p>
      <ul>
        <li>
          <strong>ইলেকট্রিক্যাল সার্ভিস:</strong> ওয়্যারিং, ইন্সটলেশন, মেরামত
        </li>
        <li>
          <strong>প্লাম্বিং:</strong> লিক মেরামত, ফিটিংস, ড্রেনেজ সমাধান
        </li>
        <li>
          <strong>এসি সার্ভিস:</strong> ইন্সটলেশন, সার্ভিসিং, গ্যাস রিফিলিং
        </li>
        <li>
          <strong>হোম ক্লিনিং:</strong> নিয়মিত এবং ডিপ ক্লিনিং
        </li>
        <li>
          <strong>ড্রাই ওয়াশ ও লন্ড্রি:</strong> পেশাদার কাপড়ের যত্ন
        </li>
        <li>
          <strong>হোম শিফটিং:</strong> প্যাকিং, পরিবহন এবং আনলোডিং
        </li>
        <li>
          <strong>সেলুন অ্যাট হোম:</strong> চুল কাটা, গ্রুমিং, স্পা সার্ভিস
        </li>
        <li>
          <strong>বিউটি সার্ভিস:</strong> মেকআপ, ফেসিয়াল, ব্রাইডাল প্যাকেজ
        </li>
      </ul>
      <p>
        আমরা প্রাথমিকভাবে {BRAND.area}-এ কাজ করি, বাংলাদেশ জুড়ে সম্প্রসারণের
        পরিকল্পনা সহ।
      </p>

      <h2>২. বুকিং ও কনফার্মেশন</h2>

      <h3>২.১ কীভাবে বুক করবেন</h3>
      <p>আপনি সার্ভিস বুক করতে পারেন:</p>
      <ul>
        <li>আমাদের ওয়েবসাইট ({BRAND.domain})</li>
        <li>হোয়াটসঅ্যাপ ({BRAND.phone})</li>
        <li>ফোন কল</li>
        <li>আমাদের এআই সহকারী</li>
        <li>ইমেইল ({BRAND.email})</li>
      </ul>

      <h3>২.২ বুকিং কনফার্মেশন</h3>
      <p>
        একটি বুকিং শুধুমাত্র <strong>কনফার্ম</strong> হয় যখন আমাদের টিম আপনার
        সাথে যোগাযোগ করে যাচাই করে:
      </p>
      <ul>
        <li>সার্ভিসের বিবরণ এবং প্রয়োজনীয়তা</li>
        <li>তারিখ, সময় এবং অবস্থান</li>
        <li>আনুমানিক মূল্য</li>
        <li>পেশাদার নিয়োগ</li>
      </ul>
      <p>
        আপনি হোয়াটসঅ্যাপ, SMS বা ফোন কলের মাধ্যমে একটি নিশ্চিতকরণ পাবেন।
        কনফার্ম না হওয়া পর্যন্ত, কোনো সার্ভিস প্রতিশ্রুতি বিদ্যমান নেই।
      </p>

      <h3>২.৩ বুকিং প্রয়োজনীয়তা</h3>
      <p>একটি সার্ভিস বুক করতে, আপনাকে অবশ্যই:</p>
      <ul>
        <li>কমপক্ষে ১৮ বছর বয়সী হতে হবে (বা অভিভাবকের সম্মতি থাকতে হবে)</li>
        <li>সঠিক যোগাযোগ এবং ঠিকানার তথ্য প্রদান করতে হবে</li>
        <li>নিশ্চিত তারিখ এবং সময়ে উপস্থিত থাকতে হবে</li>
        <li>পেশাদারের জন্য একটি নিরাপদ এবং অ্যাক্সেসযোগ্য অবস্থান থাকতে হবে</li>
      </ul>

      <h2>৩. মূল্য ও পেমেন্ট</h2>

      <h3>৩.১ মূল্য নির্ধারণ</h3>
      <p>আমাদের মূল্য ভিত্তিক:</p>
      <ul>
        <li>সার্ভিসের ধরন এবং পরিসর</li>
        <li>প্রয়োজনীয় উপকরণ (যদি প্রযোজ্য)</li>
        <li>কাজের সময় এবং জটিলতা</li>
        <li>অবস্থান এবং ভ্রমণ দূরত্ব</li>
      </ul>
      <p>
        <strong>স্বচ্ছ মূল্য:</strong> সার্ভিস শুরু হওয়ার <em>আগেই</em>{" "}
        চূড়ান্ত মূল্য সর্বদা জানানো হয় এবং সম্মতিতে গৃহীত হয়। কোনো লুকানো
        চার্জ যোগ করা হবে না।
      </p>

      <h3>৩.২ পেমেন্ট পদ্ধতি</h3>
      <p>আমরা নিম্নলিখিত পেমেন্ট পদ্ধতি গ্রহণ করি:</p>
      <ul>
        <li>
          <strong>সার্ভিসে নগদ:</strong> কাজ শেষে পেমেন্ট
        </li>
        <li>
          <strong>মোবাইল ব্যাংকিং:</strong> bKash, Nagad, Rocket
        </li>
        <li>
          <strong>ব্যাংক ট্রান্সফার:</strong> বড় বুকিংয়ের জন্য (অনুরোধে)
        </li>
      </ul>
      <p>
        সার্ভিস সফলভাবে সম্পন্ন হওয়ার পর সাধারণত পেমেন্ট সংগ্রহ করা হয়। বড়
        প্রজেক্টের জন্য, আমরা অগ্রিম ডিপোজিটের অনুরোধ করতে পারি (আগে সম্মতি
        নিয়ে)।
      </p>

      <h3>৩.৩ অতিরিক্ত চার্জ</h3>
      <p>অতিরিক্ত চার্জ প্রযোজ্য হতে পারে:</p>
      <ul>
        <li>অতিরিক্ত উপকরণ বা যন্ত্রাংশ (আপনার পূর্ব অনুমতি সহ)</li>
        <li>জরুরি বা অফ-আওয়ার সার্ভিস</li>
        <li>আমাদের স্ট্যান্ডার্ড সার্ভিস এলাকার বাইরের অবস্থান</li>
        <li>মূল কাজের বাইরে অতিরিক্ত কাজ (আপনার সম্মতি সহ)</li>
      </ul>

      <h2>৪. বাতিল ও পুনঃনির্ধারণ</h2>

      <h3>৪.১ বাতিলের নীতি</h3>
      <ul>
        <li>
          <strong>বিনামূল্যে বাতিল:</strong> নির্ধারিত সময়ের ২ ঘণ্টা আগে
          বিনামূল্যে বাতিল করুন।
        </li>
        <li>
          <strong>দেরিতে বাতিল:</strong> অ্যাপয়েন্টমেন্টের ২ ঘণ্টার মধ্যে
          বাতিলের জন্য ভিজিট চার্জ (২০০-৫০০ টাকা) প্রযোজ্য হতে পারে।
        </li>
        <li>
          <strong>জরুরি বাতিল:</strong> সত্যিকারের জরুরি অবস্থার জন্য কোনো চার্জ
          নেই (অসুস্থতা, পরিবারের জরুরি অবস্থা ইত্যাদি)।
        </li>
      </ul>

      <h3>৪.২ পুনঃনির্ধারণ</h3>
      <p>
        আপনি হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করে বুকিং পুনঃনির্ধারণ করতে পারেন।
        পেশাদারের উপলব্ধতার ভিত্তিতে আমরা আপনার পছন্দের নতুন তারিখ/সময় মিটাতে
        চেষ্টা করব।
      </p>

      <h3>৪.৩ নো-শো নীতি</h3>
      <p>
        আমাদের পেশাদার আপনার ঠিকানায় পৌঁছালে যদি আপনি পূর্ব বিজ্ঞপ্তি ছাড়া
        অনুপস্থিত থাকেন, একটি ভিজিট চার্জ প্রযোজ্য হতে পারে। বারবার নো-শো
        সার্ভিসের সীমাবদ্ধতা হতে পারে।
      </p>

      <h2>৫. সার্ভিস ওয়ারেন্টি ও গ্যারান্টি</h2>

      <h3>৫.১ কাজের ওয়ারেন্টি</h3>
      <p>আমরা আমাদের কাজের মানের পিছনে দাঁড়িয়েছি। বেশিরভাগ সার্ভিস আসে:</p>
      <ul>
        <li>
          <strong>ইলেকট্রিক্যাল কাজ:</strong> ৬ মাসের কাজের ওয়ারেন্টি
        </li>
        <li>
          <strong>প্লাম্বিং:</strong> ৩ মাসের কাজের ওয়ারেন্টি
        </li>
        <li>
          <strong>এসি সার্ভিস:</strong> ৩-৬ মাস (সার্ভিসের ধরনের উপর নির্ভর করে)
        </li>
        <li>
          <strong>হোম শিফটিং:</strong> ক্ষতি সুরক্ষা (চুক্তি অনুযায়ী)
        </li>
      </ul>

      <h3>৫.২ পণ্য ওয়ারেন্টি</h3>
      <p>
        যন্ত্রাংশ এবং উপকরণ প্রস্তুতকারকের ওয়ারেন্টির সাথে আসে (যদি প্রযোজ্য)।
        প্রস্তুতকারক যা অফার করে তার বাইরে আমরা ওয়ারেন্টি প্রদান করি না।
      </p>

      <h3>৫.৩ সন্তুষ্টির গ্যারান্টি</h3>
      <p>
        যদি আপনি সার্ভিসের মান নিয়ে সন্তুষ্ট না হন, ২৪ ঘণ্টার মধ্যে আমাদের সাথে
        যোগাযোগ করুন। আমরা তদন্ত করব এবং যেখানে উপযুক্ত, কাজটি আবার করব বা
        আংশিক/সম্পূর্ণ রিফান্ড প্রদান করব আমাদের বিবেচনায়।
      </p>

      <h2>৬. রিফান্ড নীতি</h2>
      <p>রিফান্ড নিম্নলিখিত পরিস্থিতিতে জারি করা হতে পারে:</p>
      <ul>
        <li>আমাদের দোষে সার্ভিস প্রদান করা যায়নি</li>
        <li>উল্লেখযোগ্য সার্ভিস মানের সমস্যা (আমাদের টিম দ্বারা যাচাইকৃত)</li>
        <li>পেশাদার পাঠানোর আগে বাতিল</li>
        <li>অতিরিক্ত চার্জ বা বিলিং ত্রুটি</li>
      </ul>
      <p>
        <strong>রিফান্ড প্রক্রিয়াকরণ:</strong> অনুমোদিত রিফান্ড ৭-১৪
        কার্যদিবসের মধ্যে মূল পেমেন্ট পদ্ধতির মাধ্যমে প্রক্রিয়াজাত হয়।
      </p>
      <p>
        <strong>অ-ফেরতযোগ্য:</strong> সম্পন্ন সার্ভিস (মান সমস্যা না থাকলে),
        ব্যবহৃত উপকরণ এবং নো-শো ফি সাধারণত অ-ফেরতযোগ্য।
      </p>

      <h2>৭. পেশাদার আচরণ ও দায়িত্ব</h2>

      <h3>৭.১ আমাদের পেশাদার</h3>
      <p>
        {BRAND.name}-এ সকল পেশাদারদের যুক্ত করার আগে যাচাই করা হয়। তাদের
        প্রত্যাশা করা হয়:
      </p>
      <ul>
        <li>সময়মতো পৌঁছানো এবং উপযুক্ত পোশাকে</li>
        <li>পেশাদারভাবে এবং শ্রদ্ধার সাথে আচরণ করা</li>
        <li>শিল্প মান অনুযায়ী কাজ সম্পন্ন করা</li>
        <li>আপনার সম্পত্তি এবং গোপনীয়তা সম্মান করা</li>
        <li>নিরাপত্তা প্রোটোকল অনুসরণ করা</li>
      </ul>

      <h3>৭.২ স্বাধীন কনট্রাক্টর</h3>
      <p>
        <strong>গুরুত্বপূর্ণ:</strong> {BRAND.name} গ্রাহক এবং স্বাধীন সার্ভিস
        পেশাদারদের মধ্যে একজন <em>সহায়ক</em> হিসাবে কাজ করে। আমাদের পেশাদাররা
        স্বাধীন কনট্রাক্টর, {BRAND.name}-এর কর্মচারী নন। তবে, আমরা মান নিশ্চয়তা
        এবং বিরোধ নিষ্পত্তির দায়িত্ব নিই।
      </p>

      <h3>৭.৩ সমস্যা রিপোর্টিং</h3>
      <p>
        যদি আপনি একজন পেশাদারের আচরণ বা কাজের মান নিয়ে কোনো সমস্যার সম্মুখীন
        হন, দয়া করে অবিলম্বে হোয়াটসঅ্যাপ, ফোন বা ইমেইলের মাধ্যমে রিপোর্ট করুন।
        আমরা সমস্ত অভিযোগ গুরুত্ব সহকারে নিই এবং দ্রুত তদন্ত করব।
      </p>

      <h2>৮. গ্রাহকের দায়িত্ব</h2>
      <p>একজন গ্রাহক হিসাবে, আপনি সম্মত হন:</p>
      <ul>
        <li>সঠিক এবং সম্পূর্ণ বুকিং তথ্য প্রদান করতে</li>
        <li>নিশ্চিত অ্যাপয়েন্টমেন্টের সময়ে উপস্থিত থাকতে</li>
        <li>পেশাদারের জন্য একটি নিরাপদ কাজের পরিবেশ নিশ্চিত করতে</li>
        <li>আগে থেকে যেকোনো বিশেষ প্রয়োজনীয়তা যোগাযোগ করতে</li>
        <li>আমাদের পেশাদারদের সম্মান এবং সৌজন্যের সাথে আচরণ করতে</li>
        <li>সম্মত শর্ত অনুযায়ী সার্ভিসের জন্য অর্থ প্রদান করতে</li>
        <li>
          আমাদের প্ল্যাটফর্মের বাইরে পেশাদারদের ব্যক্তিগতভাবে নিয়োগ না করতে
        </li>
      </ul>

      <h2>৯. নিষিদ্ধ কার্যকলাপ</h2>
      <p>আপনি আমাদের সার্ভিস ব্যবহার করতে পারবেন না:</p>
      <ul>
        <li>যেকোনো অবৈধ বা অননুমোদিত উদ্দেশ্যে</li>
        <li>আমাদের কর্মী বা পেশাদারদের হয়রানি, হুমকি বা অপব্যবহার করতে</li>
        <li>মিথ্যা তথ্য প্রদান করতে</li>
        <li>
          আমাদের পেশাদারদের ব্যক্তিগতভাবে নিয়োগ করার চেষ্টা করতে (আমাদের বাইপাস
          করে)
        </li>
        <li>অনুমোদন ছাড়া আমাদের সার্ভিস পুনঃবিক্রয় করতে</li>
        <li>
          এমন কোনো কার্যকলাপ যা আমাদের সুনাম বা ব্যবসায়িক ক্রিয়াকলাপ ক্ষতি
          করতে পারে
        </li>
      </ul>

      <h2>১০. দায়বদ্ধতার সীমাবদ্ধতা</h2>
      <p>
        যদিও {BRAND.name} সেরা সম্ভাব্য সার্ভিস প্রদান করার চেষ্টা করে, আমাদের
        কিছু দায়বদ্ধতার সীমাবদ্ধতা রয়েছে:
      </p>
      <ul>
        <li>
          সার্ভিস বিলম্ব, বাতিল বা আমাদের যুক্তিসঙ্গত নিয়ন্ত্রণের বাইরে পেশাদার
          আচরণ থেকে উদ্ভূত পরোক্ষ, ঘটনামূলক বা পরিণামমূলক ক্ষতির জন্য আমরা
          দায়বদ্ধ নই।
        </li>
        <li>
          কোনো দাবির জন্য আমাদের সর্বাধিক দায়বদ্ধতা প্রশ্নে থাকা নির্দিষ্ট
          সার্ভিসের জন্য প্রদত্ত পরিমাণ পর্যন্ত সীমাবদ্ধ।
        </li>
        <li>
          পূর্ব-বিদ্যমান সমস্যাগুলি (যেমন পুরানো ওয়্যারিং, ত্রুটিপূর্ণ কাঠামো)
          দ্বারা সৃষ্ট ক্ষতির জন্য আমরা দায়ী নই যা প্রকাশ করা হয়নি।
        </li>
        <li>
          ফোর্স ম্যাজিওর ঘটনা (প্রাকৃতিক দুর্যোগ, ধর্মঘট, সরকারি পদক্ষেপ) আমাদের
          দায়বদ্ধতা নয়।
        </li>
      </ul>

      <h2>১১. মেধাসম্পত্তি</h2>
      <p>
        {BRAND.name}-এর ওয়েবসাইট এবং অ্যাপের সমস্ত কন্টেন্ট (লোগো, ডিজাইন,
        টেক্সট, চিত্র, কোড) {BRAND.name}-এর মেধাসম্পত্তি এবং কপিরাইট আইন দ্বারা
        সুরক্ষিত। আপনি করতে পারবেন না:
      </p>
      <ul>
        <li>অনুমতি ছাড়া আমাদের কন্টেন্ট কপি, পুনরুৎপাদন বা বিতরণ</li>
        <li>বাণিজ্যিক উদ্দেশ্যে আমাদের ব্র্যান্ড নাম বা লোগো ব্যবহার</li>
        <li>রিভার্স ইঞ্জিনিয়ার বা আমাদের সোর্স কোড বের করার চেষ্টা</li>
      </ul>

      <h2 id="cookies">১২. কুকিজ ও ওয়েবসাইট ব্যবহার</h2>
      <p>
        আমাদের ওয়েবসাইট মনে রাখতে বেসিক কুকিজ এবং লোকাল স্টোরেজ ব্যবহার করে:
      </p>
      <ul>
        <li>আপনার থিম পছন্দ (লাইট/ডার্ক মোড)</li>
        <li>ভাষা নির্বাচন (ইংরেজি/বাংলা)</li>
        <li>এআই চ্যাট ইতিহাস (আপনার ব্রাউজারে স্থানীয়ভাবে সংরক্ষিত)</li>
      </ul>
      <p>
        আমরা তৃতীয়-পক্ষ বিজ্ঞাপন বা ট্র্যাকিংয়ের জন্য কুকিজ ব্যবহার করি না।
        আরো বিস্তারিত জানতে, দেখুন আমাদের{" "}
        <a
          href="/privacy-policy"
          className="text-brand-600 hover:underline dark:text-brand-300"
        >
          প্রাইভেসি পলিসি
        </a>
        ।
      </p>

      <h2>১৩. বিরোধ নিষ্পত্তি</h2>

      <h3>১৩.১ সরাসরি নিষ্পত্তি</h3>
      <p>
        যেকোনো বিরোধের ক্ষেত্রে, আমরা আপনাকে প্রথমে{" "}
        <strong>{BRAND.email}</strong> বা <strong>{BRAND.phone}</strong>-এ
        আমাদের সাথে যোগাযোগ করার জন্য উৎসাহিত করি। আমরা ৪৮ ঘণ্টার মধ্যে বেশিরভাগ
        সমস্যা সমাধান করার লক্ষ্য রাখি।
      </p>

      <h3>১৩.২ মধ্যস্থতা</h3>
      <p>
        যদি সরাসরি নিষ্পত্তি ব্যর্থ হয়, আইনি পদক্ষেপ নেওয়ার আগে উভয় পক্ষ একটি
        নিরপেক্ষ তৃতীয় পক্ষের মাধ্যমে মধ্যস্থতার চেষ্টা করতে সম্মত হয়।
      </p>

      <h3>১৩.৩ প্রযোজ্য আইন</h3>
      <p>
        এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের আইন দ্বারা নিয়ন্ত্রিত। যেকোনো
        আইনি বিরোধ রংপুর, বাংলাদেশের আদালতের একচেটিয়া এখতিয়ারের সাপেক্ষে
        থাকবে।
      </p>

      <h2>১৪. শর্তাবলীর পরিবর্তন</h2>
      <p>
        আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার সংরক্ষণ করি। যখন আমরা
        পরিবর্তন করি:
      </p>
      <ul>
        <li>উপরের "সর্বশেষ আপডেট" তারিখ সংশোধন করা হবে</li>
        <li>
          গুরুত্বপূর্ণ পরিবর্তন ইমেইল বা ওয়েবসাইট বিজ্ঞপ্তির মাধ্যমে যোগাযোগ
          করা হবে
        </li>
        <li>
          পরিবর্তনের পরে আমাদের সার্ভিসের ক্রমাগত ব্যবহার আপডেট করা শর্তাবলী
          গ্রহণের গঠন করে
        </li>
      </ul>
      <p>
        অবহিত থাকার জন্য আমরা আপনাকে পর্যায়ক্রমে এই শর্তাবলী পর্যালোচনা করতে
        উৎসাহিত করি।
      </p>

      <h2>১৫. যোগাযোগ করুন</h2>
      <p>
        এই শর্তাবলী সম্পর্কে আপনার কোনো প্রশ্ন, উদ্বেগ বা মতামত থাকলে, দয়া করে
        আমাদের সাথে যোগাযোগ করুন:
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
        <strong>{BRAND.name} বেছে নেওয়ার জন্য ধন্যবাদ!</strong> আমরা আপনাকে
        নির্ভরযোগ্য, পেশাদার এবং বিশ্বস্ত হোম সার্ভিস প্রদানে প্রতিশ্রুতিবদ্ধ।
        এই শর্তাবলীর ভিত্তিতে একসাথে কাজ করে, আমরা সবার জন্য একটি মসৃণ এবং
        সন্তোষজনক অভিজ্ঞতা নিশ্চিত করতে পারি।
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

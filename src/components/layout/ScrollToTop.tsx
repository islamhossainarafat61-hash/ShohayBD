import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // ১. যদি ইউজার ব্যাক বাটন চাপে (POP navigation)
    if (navType === "POP") {
      // ব্রাউজারকে তার নিজের মতো পজিশন রিস্টোর করতে দাও, আমরা ইন্টারফেয়ার করব না
      return;
    }

    // ২. যদি নতুন কোনো হ্যাশ লিংকে ক্লিক করে (যেমন #services)
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // একটু ডিলে দিয়ে স্ক্রল করো যাতে পেজ রেন্ডার হওয়ার সময় পায়
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        return;
      }
    }

    // ৩. যদি একদম নতুন পেজে যায় (PUSH navigation)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname, hash, navType]);

  return null;
}

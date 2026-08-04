import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { BRAND } from "../../data/brand";
import {
  buildWhatsappLink,
  GENERAL_WHATSAPP_MESSAGE,
} from "../../lib/whatsapp";

// Navigation items — each item has either `hash` (scroll to section)
// or `to` (navigate to a route).
type NavItem = {
  key: string;
  hash?: string;
  to?: string;
};

const navItemsBase: NavItem[] = [
  { key: "navHome", hash: "#home" },
  { key: "navServices", hash: "#services" },
  { key: "navAbout", to: "/about" },
  { key: "navHow", hash: "#how-it-works" },
  { key: "navReviews", hash: "#reviews" },
  { key: "navFaq", hash: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle click for both scroll-to-section and page navigation
  const handleNavClick = (item: NavItem) => {
    setOpen(false);

    // Page navigation (like /about)
    if (item.to) {
      navigate(item.to);
      return;
    }

    // Scroll to section (like #home, #services)
    if (item.hash) {
      if (location.pathname !== "/") {
        navigate(`/${item.hash}`);
      } else {
        const el = document.querySelector(item.hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-0" : "py-0"
      }`}
    >
      <div className="mx-auto max-w-7xl pl-1 pr-4 sm:pl-2 sm:pr-6 lg:pl-3 lg:pr-8">
        <div
          className={`flex items-center justify-between rounded-2xl pl-1 pr-4 transition-all duration-300 ${
            scrolled
              ? "glass shadow-[0_8px_30px_rgba(17,17,17,0.08)]"
              : "bg-transparent"
          }`}
        >
          <Link
            to="/"
            className="-my-4 flex items-center"
            aria-label="SOHAY BD Home"
          >
            <img
              src={theme === "dark" ? BRAND.logoWhite : BRAND.logoBlack}
              alt="SOHAY BD"
              className="h-20 w-auto object-contain sm:h-24 lg:h-28"
              loading="eager"
              style={{ maxHeight: "none" }}
            />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navItemsBase.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item)}
                className="group relative px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-600 dark:text-neutral-200 dark:hover:text-brand-300"
              >
                {t[item.key as keyof typeof t]}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-neutral-200 p-0.5 text-xs font-semibold sm:flex dark:border-white/10">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === "en"
                    ? "bg-brand-500 text-white"
                    : "text-neutral-500 dark:text-neutral-300"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("bn")}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === "bn"
                    ? "bg-brand-500 text-white"
                    : "text-neutral-500 dark:text-neutral-300"
                }`}
              >
                BN
              </button>
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:text-brand-600 dark:border-white/10 dark:text-neutral-200"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(111,66,229,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(111,66,229,0.55)] sm:flex"
            >
              {t.bookNow}
              <ChevronRight className="h-4 w-4" />
            </a>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 lg:hidden dark:border-white/10 dark:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-2xl glass p-4 shadow-xl">
                {navItemsBase.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item)}
                    className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700 hover:bg-brand-50 dark:text-neutral-200 dark:hover:bg-white/5"
                  >
                    {t[item.key as keyof typeof t]}
                  </button>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700 hover:bg-brand-50 dark:text-neutral-200 dark:hover:bg-white/5"
                >
                  {t.navContact}
                </Link>
                <a
                  href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 rounded-xl bg-brand-500 px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  {t.bookNow}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

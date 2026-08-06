import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronRight, MessageCircle } from "lucide-react";
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
  { key: "navTechnicians", to: "/technicians" },
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

  // Body scroll lock + add class when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("drawer-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
        setTimeout(() => {
          const el = document.querySelector(item.hash!);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250); // Small delay to let drawer close animation finish
      }
    }
  };

  // Contact label
  const contactLabel = t.navContact;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
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

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Language toggle - visible on all screens */}
              <div className="flex items-center rounded-full border border-neutral-200 p-0.5 text-[10px] font-semibold sm:text-xs dark:border-white/10">
                <button
                  onClick={() => setLang("en")}
                  aria-label="Switch to English"
                  className={`rounded-full px-2 py-1 transition-colors sm:px-2.5 ${
                    lang === "en"
                      ? "bg-brand-500 text-white"
                      : "text-neutral-500 dark:text-neutral-300"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("bn")}
                  aria-label="Switch to Bangla"
                  className={`rounded-full px-2 py-1 transition-colors sm:px-2.5 ${
                    lang === "bn"
                      ? "bg-brand-500 text-white"
                      : "text-neutral-500 dark:text-neutral-300"
                  }`}
                >
                  BN
                </button>
              </div>

              <button
                onClick={(e) => toggleTheme(e)}
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
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer + Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer - slides from right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden dark:bg-[#0b0713]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Drawer Header - Logo + Close */}
              <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-white/10">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                  aria-label="SOHAY BD Home"
                >
                  <img
                    src={theme === "dark" ? BRAND.logoWhite : BRAND.logoBlack}
                    alt="SOHAY BD"
                    className="h-14 w-auto object-contain"
                    loading="eager"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-white dark:hover:border-brand-400/50 dark:hover:text-brand-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu Items - scrollable */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <nav
                  className="flex flex-col gap-1"
                  aria-label="Mobile navigation"
                >
                  {navItemsBase.map((item, i) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.04, duration: 0.3 }}
                      onClick={() => handleNavClick(item)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:text-brand-300"
                    >
                      <span>{t[item.key as keyof typeof t]}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.button>
                  ))}

                  {/* Divider */}
                  <div className="my-3 border-t border-neutral-200 dark:border-white/10" />

                  {/* Contact link */}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + navItemsBase.length * 0.04,
                      duration: 0.3,
                    }}
                    onClick={() => {
                      setOpen(false);
                      navigate("/contact");
                    }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:text-neutral-200 dark:hover:bg-white/5 dark:hover:text-brand-300"
                  >
                    <span>{contactLabel}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </motion.button>
                </nav>
              </div>

              {/* Bottom CTA - Book Now + WhatsApp */}
              <div className="border-t border-neutral-200 p-4 dark:border-white/10">
                <motion.a
                  href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.bookNow}
                </motion.a>
                <p className="mt-3 text-center text-[11px] text-neutral-400">
                  {lang === "bn"
                    ? "© ২০২৬ সহায় বিডি কোম্পানি™"
                    : "© 2026 SOHAY BD COMPANY™"}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

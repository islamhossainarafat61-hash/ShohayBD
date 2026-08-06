import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

interface SubPageTopBarProps {
  title: string;
}

export default function SubPageTopBar({ title }: SubPageTopBarProps) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const handleBack = () => {
    // If there's history, go back; otherwise go home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#08060f]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Back button + Page name */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <motion.button
            onClick={handleBack}
            whileTap={{ scale: 0.9 }}
            aria-label="Go back"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-brand-400/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.button>

          <h1 className="truncate text-base font-semibold text-[#111111] sm:text-lg dark:text-white">
            {title}
          </h1>
        </div>

        {/* Right: Language + Theme toggles */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Language toggle */}
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

          {/* Theme toggle */}
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
        </div>
      </div>
    </header>
  );
}

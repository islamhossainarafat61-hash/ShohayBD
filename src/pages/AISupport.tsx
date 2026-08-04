import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, Trash2, Sparkles, User } from "lucide-react";
import { askGroq, type ChatMessage } from "../lib/groq";
import { BRAND } from "../data/brand";
import { useTheme } from "../context/ThemeContext";

const STORAGE_KEY = "sohay_ai_chat_history";

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm SOHAY AI 👋 I can help you with booking Electrician, Plumbing, AC Service, Cleaning, Beauty, Home Shifting, House Rent and more in Rangpur. How can I help you today?",
};

const SUGGESTED_QUESTIONS = [
  "How can I book an Electrician?",
  "What are your service charges?",
  "Do you provide AC repair?",
  "How to book a Plumber?",
  "Is home cleaning available?",
  "What areas do you cover?",
  "How to contact via WhatsApp?",
  "Do you offer Beauty services at home?",
  "What are your working hours?",
  "How can I become a service provider?",
];

function renderMessageContent(text: string): ReactNode {
  const combinedRegex =
    /(\[([^\]]+)\]\((https?:\/\/[^)]+)\))|(\*\*([^*]+)\*\*)|(https?:\/\/[^\s)]+)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = combinedRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      const linkText = match[2];
      const linkUrl = match[3];
      parts.push(
        <a
          key={key++}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md bg-brand-500/10 px-2 py-0.5 font-semibold text-brand-600 underline decoration-brand-400/50 underline-offset-2 transition-colors hover:bg-brand-500/20 hover:text-brand-700 hover:decoration-brand-500 dark:bg-brand-400/15 dark:text-brand-200 dark:hover:bg-brand-400/25 dark:hover:text-brand-100"
        >
          {linkText} ↗
        </a>,
      );
    } else if (match[4]) {
      parts.push(
        <strong key={key++} className="font-semibold">
          {match[5]}
        </strong>,
      );
    } else if (match[6]) {
      parts.push(
        <a
          key={key++}
          href={match[6]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 underline underline-offset-2 hover:text-brand-600 dark:text-brand-300"
        >
          {match[6]}
        </a>,
      );
    }

    lastIndex = combinedRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function AISupport() {
  const { theme } = useTheme();

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return [WELCOME];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text || loading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const contextMessages = newMessages.slice(-10);

    const apiKey = import.meta.env.VITE_GROQ_API_KEY as string | undefined;
    const reply = await askGroq(contextMessages, apiKey);

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    await sendMessage(input.trim());
  };

  const handleSuggestedClick = async (question: string) => {
    if (loading) return;
    await sendMessage(question);
  };

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages([WELCOME]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <main className="flex h-screen flex-col bg-gradient-to-b from-brand-50/40 to-white dark:from-[#0d0819] dark:to-[#08060f]">
      {/* Header - smaller circle, bigger icon */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-100 glass px-4 py-2.5 sm:px-8 dark:border-white/10">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-brand-600 dark:border-white/10 dark:text-neutral-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-brand-500/30 sm:h-11 sm:w-11 dark:bg-white/5">
            <img
              src={theme === "dark" ? BRAND.iconWhite : BRAND.iconBlack}
              alt="SOHAY AI"
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#111111] sm:text-base dark:text-white">
              SOHAY AI Assistant
            </p>
            <p className="flex items-center gap-1.5 text-[10px] text-neutral-500 sm:text-xs dark:text-neutral-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Online now
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleClearChat}
            aria-label="Clear chat history"
            title="Clear chat"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-red-300 hover:text-red-500 dark:border-white/10 dark:text-neutral-300 dark:hover:border-red-500/40 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <span className="hidden rounded-full bg-brand-500/10 px-3 py-1.5 text-[10px] font-semibold text-brand-600 sm:inline-block dark:text-brand-300">
            ⚡ Powered by Groq
          </span>
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-brand-500/30 dark:bg-white/10">
                    <img
                      src={theme === "dark" ? BRAND.iconWhite : BRAND.iconBlack}
                      alt="SOHAY AI"
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                )}
                <div
                  className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm sm:max-w-[65%] ${
                    m.role === "user"
                      ? "rounded-br-sm bg-gradient-to-br from-[#111111] to-brand-700 text-white"
                      : "rounded-bl-sm glass-panel text-neutral-700 dark:text-neutral-200"
                  }`}
                >
                  {renderMessageContent(m.content)}
                </div>
                {m.role === "user" && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    <User className="h-3.5 w-3.5" />
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-brand-500/30 dark:bg-white/10">
                <img
                  src={theme === "dark" ? BRAND.iconWhite : BRAND.iconBlack}
                  alt="SOHAY AI"
                  className="h-6 w-6 object-contain"
                />
              </span>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm glass-panel px-4 py-3.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-brand-400"
                  />
                ))}
              </div>
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Suggested Questions Slider - compact */}
      <div className="border-t border-neutral-100 bg-white/60 px-4 py-1.5 backdrop-blur-md sm:px-8 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-3xl">
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
            <div className="flex shrink-0 items-center gap-1 pr-1">
              <Sparkles className="h-3 w-3 text-brand-500" />
              <p className="text-[9px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Suggested
              </p>
            </div>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleSuggestedClick(q)}
                disabled={loading}
                className="shrink-0 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-medium text-brand-700 transition-all hover:border-brand-400 hover:bg-brand-100 hover:shadow-md disabled:opacity-50 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:border-brand-400/50 dark:hover:bg-brand-500/20"
              >
                {q}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="sticky bottom-0 border-t border-neutral-100 glass px-4 py-3 sm:px-8 dark:border-white/10"
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a service, pricing, or booking..."
            aria-label="Message SOHAY AI"
            className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm text-[#111111] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_10px_30px_rgba(111,66,229,0.5)] transition-shadow hover:shadow-[0_15px_40px_rgba(111,66,229,0.7)] disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </motion.button>
        </div>
      </form>
    </main>
  );
}

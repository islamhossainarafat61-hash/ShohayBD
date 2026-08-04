import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BRAND } from "../../data/brand";

export default function FloatingAIWidget() {
  const location = useLocation();
  if (location.pathname === "/ai-support") return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed bottom-24 right-6 z-40"
    >
      <Link
        to="/ai-support"
        aria-label="Ask SOHAY AI"
        className="group relative flex items-center"
      >
        {/* Layer 1: Rotating rainbow gradient glow (outermost) */}
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 -z-20 rounded-full opacity-70 blur-xl"
          style={{
            background:
              "conic-gradient(from 0deg, #6f42e5, #ec4899, #f59e0b, #10b981, #3b82f6, #6f42e5)",
          }}
        />

        {/* Layer 2: Pulsing brand glow */}
        <motion.span
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-2 -z-10 rounded-full bg-brand-500/50 blur-lg"
        />

        {/* Layer 3: Expanding ripple rings (like sonar) */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className="absolute inset-0 -z-10 rounded-full border-2 border-brand-400"
          />
        ))}

        {/* Layer 4: Floating sparkles around the button */}
        {[
          { top: "-10%", left: "20%", delay: 0 },
          { top: "10%", right: "-10%", delay: 0.5 },
          { bottom: "-5%", left: "10%", delay: 1 },
          { top: "50%", left: "-15%", delay: 1.5 },
          { bottom: "10%", right: "-5%", delay: 2 },
        ].map((s, i) => (
          <motion.span
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
            className="absolute -z-10 text-yellow-300"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              fontSize: "12px",
              filter: "drop-shadow(0 0 4px rgba(253, 224, 71, 0.8))",
            }}
          >
            ✨
          </motion.span>
        ))}

        {/* Main floating button - back to original size */}
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 via-purple-600 to-brand-700 shadow-[0_10px_35px_rgba(111,66,229,0.65)] ring-2 ring-white/40"
        >
          {/* Inner shimmer effect */}
          <motion.span
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          {/* Logo icon */}
          <img
            src={BRAND.iconWhite}
            alt="SOHAY AI"
            className="relative z-10 h-12 w-12 object-contain drop-shadow-lg"
          />
        </motion.span>

        {/* AI badge with pulse */}
        <motion.span
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-1 -top-1 z-20 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 px-1.5 text-[9px] font-bold text-white shadow-lg ring-2 ring-white"
        >
          AI
        </motion.span>

        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:right-24 group-hover:opacity-100">
          Ask SOHAY AI ✨
        </span>
      </Link>
    </motion.div>
  );
}

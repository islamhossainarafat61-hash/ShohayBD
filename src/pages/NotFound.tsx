import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center dark:bg-[#08060f]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="gradient-text text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-[#111111] sm:text-3xl dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(111,66,229,0.4)] transition-transform hover:-translate-y-1"
        >
          <Home className="h-4 w-4" /> Back to Home
        </Link>
      </motion.div>
      <motion.span
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute -z-10 h-96 w-96 rounded-full bg-brand-300/20 blur-[120px]"
      />
    </main>
  );
}

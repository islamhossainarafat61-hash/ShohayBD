import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Desktop: Vertical progress bar on right side */}
      <div
        className="fixed right-0 top-0 z-30 hidden h-full w-1 sm:block"
        aria-hidden="true"
      >
        {/* Background track (subtle) */}
        <div className="h-full w-full bg-neutral-200/30 dark:bg-white/5" />

        {/* Colorful progress fill */}
        <motion.div
          style={{
            scaleY,
            transformOrigin: "top",
            willChange: "transform",
          }}
          className="absolute inset-0 w-full bg-gradient-to-b from-brand-500 via-pink-500 to-cyan-500 shadow-[0_0_10px_rgba(111,66,229,0.5)]"
        />
      </div>

      {/* Mobile: Thin horizontal bar at top */}
      <div
        className="fixed left-0 right-0 top-0 z-30 h-0.5 sm:hidden"
        aria-hidden="true"
      >
        <motion.div
          style={{
            scaleX: scaleY,
            transformOrigin: "left",
            willChange: "transform",
          }}
          className="h-full w-full bg-gradient-to-r from-brand-500 via-pink-500 to-cyan-500 shadow-[0_0_8px_rgba(111,66,229,0.6)]"
        />
      </div>
    </>
  );
}

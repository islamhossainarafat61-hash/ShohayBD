import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsappLink, GENERAL_WHATSAPP_MESSAGE } from "../../lib/whatsapp";

export default function FloatingSupportWidget() {
  return (
    <motion.a
      href={buildWhatsappLink(GENERAL_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SOHAY BD on WhatsApp"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileHover="hover"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_40px_rgba(37,211,102,0.5)]"
      style={{ willChange: "transform" }}
    >
      <motion.span
        variants={{ hover: { width: "auto", opacity: 1, marginRight: 8, paddingLeft: 4 } }}
        initial={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden overflow-hidden whitespace-nowrap text-sm font-semibold sm:inline-block"
      >
        Chat with Us
      </motion.span>
      <motion.span
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.span>
    </motion.a>
  );
}

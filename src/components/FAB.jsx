import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineXMark,
  HiOutlineBolt,
} from "react-icons/hi2";

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const actionVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 320, damping: 22 },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.85,
      transition: { duration: 0.18 },
    },
  };

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-3">
      {/* Expanded Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-1">
            {/* WhatsApp Trigger */}
            <motion.div
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-3 group"
            >
              <span className="px-3 py-1.5 bg-base-100 border border-base-300 text-base-content text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-md pointer-events-none">
                Send Text
              </span>
              <a
                href="https://wa.me/971567058128?text=Hello%20AL%20Riyah,%20I%20need%20battery%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 bg-success text-success-content rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
                aria-label="Send WhatsApp Pin"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </motion.div>

            {/* Direct Call Trigger */}
            <motion.div
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.04 }}
              className="flex items-center gap-3 group"
            >
              <span className="px-3 py-1.5 bg-base-100 border border-base-300 text-base-content text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-md pointer-events-none">
                Call: 056 705 8128
              </span>
              <a
                href="tel:0567058128"
                className="w-13 h-13 bg-primary text-primary-content rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
                aria-label="Call AL Riyah Dispatch"
              >
                <HiOutlinePhone className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Trigger Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-neutral text-neutral-content rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform border border-base-300 cursor-pointer"
        aria-label="Toggle quick contact menu"
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-success" />
          </span>
        )}

        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isOpen ? (
            <HiOutlineXMark className="w-7 h-7" />
          ) : (
            <HiOutlineBolt className="w-7 h-7 text-primary" />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default FAB;
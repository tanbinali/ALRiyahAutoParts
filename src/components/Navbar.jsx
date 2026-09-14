import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import {
  HiOutlineInformationCircle,
  HiOutlineCube,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlinePhone,
} from "react-icons/hi2";

const menuItems = [
  {
    id: "about",
    label: "About",
    icon: <HiOutlineInformationCircle className="w-5 h-5" />,
  },
  {
    id: "products",
    label: "Batteries & Parts",
    icon: <HiOutlineCube className="w-5 h-5" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <HiOutlineEnvelope className="w-5 h-5" />,
  },
  {
    id: "map",
    label: "Musaffah M-6",
    icon: <HiOutlineMapPin className="w-5 h-5" />,
  },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const performScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navEl = navRef.current;
    const navHeight = navEl
      ? Math.ceil(navEl.getBoundingClientRect().height)
      : 0;

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offset = 20;
    const target = Math.max(0, sectionTop - navHeight - offset);

    window.scrollTo({ top: target, behavior: "smooth" });

    setTimeout(() => {
      const stillHidden = section.getBoundingClientRect().top < navHeight + 4;
      if (stillHidden) {
        window.scrollTo({ top: target + 2, behavior: "smooth" });
      }
    }, 650);
  };

  const handleDesktopClick = (id) => {
    performScroll(id);
    setIsOpen(false);
  };

  const handleMobileClick = (id) => {
    setPendingScrollId(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-base-100/90 backdrop-blur-xl border-base-200 shadow-md py-3"
          : "bg-base-100/70 backdrop-blur-md border-transparent py-4"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <motion.div
          onClick={() => performScroll("hero")}
          className="cursor-pointer flex items-center gap-3"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative p-1.5 rounded-xl">
            <img
              src={logo}
              alt="AL Riyah Car Battery Service & Auto Spare Parts"
              className="h-8 w-auto relative z-10"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black uppercase tracking-tight text-base-content leading-none">
              AL Riyah
            </span>
            <span className="text-[10px] font-semibold text-base-content/60 tracking-wider uppercase mt-0.5">
              Battery & Auto Parts
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleDesktopClick(item.id)}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-base-content/80 flex items-center gap-2 hover:text-primary hover:bg-base-200/60 transition-colors"
            >
              <span className="text-primary">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {/* Quick Call Action */}
          <a
            href="tel:0567058128"
            className="ml-3 px-4 py-2 bg-primary text-primary-content text-sm font-bold rounded-xl hover:bg-primary/90 shadow-sm transition-transform active:scale-95 flex items-center gap-2"
          >
            <HiOutlinePhone className="w-4 h-4" />
            <span>056 705 8128</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:0567058128"
            className="p-2.5 bg-primary text-primary-content rounded-xl active:scale-95 transition-transform"
            aria-label="Call AL Riyah"
          >
            <HiOutlinePhone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2.5 bg-base-200 text-base-content rounded-xl hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <HiOutlineXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3 className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingScrollId) {
            setTimeout(() => {
              performScroll(pendingScrollId);
              setPendingScrollId(null);
            }, 10);
          }
        }}
      >
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-base-100/98 backdrop-blur-2xl border-b border-base-200 shadow-xl overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-5 py-4 flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMobileClick(item.id)}
                  variants={mobileItemVariants}
                  className="w-full flex items-center gap-3.5 px-3 py-3 rounded-xl text-base-content font-semibold text-base hover:bg-base-200 active:bg-base-200 transition-colors"
                >
                  <div className="p-2 bg-base-200 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </motion.button>
              ))}

              <motion.a
                variants={mobileItemVariants}
                href="tel:0567058128"
                className="w-full mt-3 py-3.5 bg-primary text-primary-content text-base font-bold rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <HiOutlinePhone className="w-5 h-5" />
                <span>Call 056 705 8128</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
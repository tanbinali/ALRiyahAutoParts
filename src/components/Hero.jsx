import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineWrench,
  HiOutlineMapPin,
  HiOutlineBuildingStorefront,
  HiStar,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import videoMp4 from "../assets/hero-video.mp4";
import videoWebm from "../assets/hero-video.webm";
import poster from "../assets/hero-poster.webp";
import mobposter from "../assets/hero-poster-mobile.webp";

const Hero = () => {
  const scrollToMap = () => {
    const el = document.getElementById("map");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(
        "https://www.google.com/maps/search/?api=1&query=9GC7%2BPH+Abu+Dhabi",
        "_blank"
      );
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={mobposter}
          alt="AL Riyah Car Battery Service Abu Dhabi"
          className="w-full h-full object-cover md:hidden"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="hidden md:block w-full h-full object-cover"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        {/* Vertical gradient preserving clear video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/65" />
      </div>

      {/* Top Header Information Tag */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/50 border border-white/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase tracking-widest text-white/90 font-semibold">
              24/7 Mobile Fitting & Delivery
            </span>
          </div>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/50 border border-white/10 backdrop-blur-md text-amber-400 text-xs font-bold">
            <span className="text-white">5.0</span>
            <div className="flex text-amber-400">
              <HiStar className="w-3.5 h-3.5 fill-current" />
              <HiStar className="w-3.5 h-3.5 fill-current" />
              <HiStar className="w-3.5 h-3.5 fill-current" />
              <HiStar className="w-3.5 h-3.5 fill-current" />
              <HiStar className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Location pill */}
        <button
          onClick={scrollToMap}
          type="button"
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/80 hover:text-amber-400 transition-colors cursor-pointer bg-black/30 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur-md"
        >
          <HiOutlineMapPin className="w-4 h-4 text-amber-400" />
          <span>Musaffah M-6, Abu Dhabi (9GC7+PH)</span>
        </button>
      </div>

      {/* Center Hero Heading & Services */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 block mb-3">
            AL Riyah Car Battery Service & Auto Spare Parts
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.05] drop-shadow-lg">
            Rapid Car Battery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Replacement & Spare Parts
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow">
            Dead battery in Musaffah or anywhere across Abu Dhabi? We deliver and install fresh OEM batteries to your location in 25–35 minutes. In-store shopping and pick-up are also available at our Musaffah M-6 workshop.
          </p>

          {/* Fulfillment options indicator */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">
              ✓ On-Site Delivery
            </span>
            <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">
              ✓ In-Store Pick-Up
            </span>
            <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">
              ✓ In-Store Shopping
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Bottom Action Dock */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-black/75 border border-white/15 backdrop-blur-xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-2xl"
        >
          {/* Service Guarantees */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-white/10 text-white">
            <div className="flex items-center gap-3 px-1 sm:px-2">
              <HiOutlineClock className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[11px] uppercase text-white/50 tracking-wider">Arrival</span>
                <span className="text-xs sm:text-base font-bold">25-35 Min</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 sm:px-4">
              <HiOutlineShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[11px] uppercase text-white/50 tracking-wider">Warranty</span>
                <span className="text-xs sm:text-base font-bold">12-24 Mo.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-2 sm:px-4">
              <HiOutlineWrench className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="block text-[11px] uppercase text-white/50 tracking-wider">Diagnostics</span>
                <span className="text-xs sm:text-base font-bold">Free Check</span>
              </div>
            </div>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0567058128"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl transition-transform active:scale-95"
            >
              <HiOutlinePhone className="w-5 h-5 shrink-0" />
              <span>Call 056 705 8128</span>
            </a>

            <a
              href="https://wa.me/971567058128?text=Hello,%20I%20need%20car%20battery%20service%20in%20Abu%20Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl transition-transform active:scale-95"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" />
              <span>Send Location</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
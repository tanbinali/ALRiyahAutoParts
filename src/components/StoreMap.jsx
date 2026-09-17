import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineBuildingStorefront,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineTruck,
  HiOutlinePhone,
} from "react-icons/hi2";

const MAPS_URL = "https://maps.app.goo.gl/SrabtuhEefSrsLQ9A";
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.1409555156747!2d54.51355746770635!3d24.371611130664753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e417a5537edf1%3A0xf7c66db6047caad2!2sAL%20Riyah%20car%20battery%20service%20%26%20Auto%20Spare%20Parts!5e1!3m2!1sen!2sbd!4v1789367429777!5m2!1sen!2sbd";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "AL Riyah Car Battery Service & Auto Spare Parts",
  image: "https://alriyahcarbatteries.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musaffah - M6",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.371611,
    longitude: 54.513557,
    postalCode: "9GC7+PH",
  },
  telephone: "+971567058128",
  url: "https://alriyahcarbatteries.com",
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: "Abu Dhabi, UAE",
  hasMap: MAPS_URL,
  sameAs: [MAPS_URL],
};

const StoreMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="map"
      className="py-24 bg-base-100 text-base-content border-t border-base-300 relative overflow-hidden"
      aria-label="AL Riyah Car Battery Service & Auto Spare Parts Location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-base-300">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <HiOutlineBuildingStorefront className="w-4 h-4" />
              <span>Counter Depot & Mobile Fleet Station</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-base-content leading-none">
              Visit Musaffah M-6 <br />
              <span className="text-primary">Or Request Delivery.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-base-content/70 leading-relaxed font-sans">
            Drive in for retail battery sales, spare parts, and warranty diagnostics, or have our roadside team dispatch directly to your vehicle anywhere in Abu Dhabi.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-10 items-stretch"
        >
          {/* Workshop Facility Info */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-base-200 border border-base-300 p-6 sm:p-8 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-base-300">
                <span className="text-xs font-mono font-bold uppercase text-primary">
                  Hub Coordinates
                </span>
                <span className="text-xs font-mono font-bold bg-base-100 px-2.5 py-1 rounded text-base-content/80">
                  Plus Code: 9GC7+PH
                </span>
              </div>

              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                    <HiOutlineMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-base-content/50 block">
                      Workshop Location
                    </span>
                    <h3 className="text-lg font-bold text-base-content leading-tight">
                      Musaffah - M6
                    </h3>
                    <p className="text-sm text-base-content/70 mt-0.5">
                      Abu Dhabi, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary shrink-0">
                    <HiOutlineClock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-base-content/50 block">
                      Operating Hours
                    </span>
                    <h3 className="text-lg font-bold text-base-content leading-tight">
                      24 Hours / 7 Days
                    </h3>
                    <p className="text-sm text-base-content/70 mt-0.5">
                      Emergency Roadside Van Dispatch & Support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
                    <HiOutlineTruck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-base-content/50 block">
                      Dispatch Reach
                    </span>
                    <h3 className="text-lg font-bold text-base-content leading-tight">
                      All Abu Dhabi Sectors
                    </h3>
                    <p className="text-sm text-base-content/70 mt-0.5">
                      Musaffah, City Center, Yas, Reem & Highways
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-base-100 border border-base-300 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div>
                  <span className="block font-bold text-primary">In-Store</span>
                  <span className="text-[10px] text-base-content/60 uppercase">
                    Shopping
                  </span>
                </div>
                <div className="border-x border-base-300">
                  <span className="block font-bold text-secondary">Pick-Up</span>
                  <span className="text-[10px] text-base-content/60 uppercase">
                    Counter
                  </span>
                </div>
                <div>
                  <span className="block font-bold text-accent">Delivery</span>
                  <span className="text-[10px] text-base-content/60 uppercase">
                    25-35 Mins
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-base-300 flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 rounded-xl text-primary-content font-bold border-none flex items-center justify-center gap-2"
              >
                <span>Open Google Maps</span>
                <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
              </a>

              <a
                href="tel:0567058128"
                className="btn btn-neutral rounded-xl text-neutral-content font-bold flex items-center justify-center gap-2"
              >
                <HiOutlinePhone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>
          </motion.div>

          {/* Google Maps Viewport */}
          <motion.div
            variants={item}
            className="lg:col-span-7 min-h-[420px] rounded-3xl overflow-hidden border border-base-300 bg-base-200 relative shadow-sm"
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-base-200 flex flex-col items-center justify-center gap-3 z-10">
                <HiOutlineMapPin className="w-8 h-8 text-primary animate-bounce" />
                <span className="font-mono uppercase tracking-widest text-xs text-base-content/60">
                  Connecting to Map Satellite...
                </span>
              </div>
            )}

            <iframe
              src={EMBED_URL}
              className={`w-full h-full min-h-[420px] border-0 transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="AL Riyah Car Battery Service & Auto Spare Parts"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </section>
  );
};

export default StoreMap;
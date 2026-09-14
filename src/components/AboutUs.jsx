import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineBolt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineBuildingStorefront,
  HiOutlineArrowUpRight,
  HiOutlineCpuChip,
  HiOutlineCheck,
} from "react-icons/hi2";

import Banner500 from "../assets/Banner-500.webp";
import Banner768 from "../assets/Banner-768.webp";
import Banner1024 from "../assets/Banner-1024.webp";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "AL Riyah Car Battery Service & Auto Spare Parts",
  serviceType: "24/7 On-Site Car Battery Replacement & Parts Delivery",
  image: "https://alriyahbattery.com/banner.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musaffah - M6",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    postalCode: "9GC7+PH",
  },
  openingHours: "Mo-Su 00:00-23:59",
  telephone: "+971567058128",
  url: "https://alriyahbattery.com",
};

const serviceTiers = [
  {
    id: "mobile",
    title: "Mobile Emergency Dispatch",
    tag: "25–35 Min ETA",
    summary:
      "Field units stocked with high-torque impact gear, computer memory retainers, and battery lines across Japanese, European, and American chassis.",
    specs: ["On-Site Terminal Fitting", "Zero ECU Memory Loss", "Abu Dhabi Wide"],
    icon: <HiOutlineTruck className="w-5 h-5" />,
  },
  {
    id: "workshop",
    title: "Musaffah M-6 Parts Counter",
    tag: "Walk-Ins & Pickups",
    summary:
      "Physical store counter stocking genuine retail parts, wholesale batteries, starter units, and direct warranty verification stations.",
    specs: ["In-Store Pick-Up", "Counter Sales", "Direct Warranty Exchange"],
    icon: <HiOutlineBuildingStorefront className="w-5 h-5" />,
  },
  {
    id: "diagnostics",
    title: "Pre-Installation Electrical Analysis",
    tag: "Complimentary Check",
    summary:
      "Digital multi-point testing of alternator output, parasitic drain, and starter load before swapping out your old battery.",
    specs: ["Alternator Load Run", "Cranking Voltage Check", "Terminal Health Scan"],
    icon: <HiOutlineCpuChip className="w-5 h-5" />,
  },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(serviceTiers[0].id);
  const currentService = serviceTiers.find((item) => item.id === activeTab);

  const openDirections = () => {
    window.open(
      "https://maps.app.goo.gl/SrabtuhEefSrsLQ9A",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="about"
      className="py-24 bg-base-100 text-base-content border-t border-base-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Operational Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-base-300 text-xs uppercase tracking-widest font-mono text-base-content/60">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Facility ID: Musaffah M-6 (9GC7+PH)</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Rating: 5.0 / 5.0</span>
            <span className="hidden sm:inline">Fleet Ready: 24/7/365</span>
          </div>
        </div>

        {/* Technical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-stretch">
          
          {/* Left Column: Workshop Imagery as an Operational Viewport */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-base-300 bg-base-200 aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-[480px]">
              <img
                srcSet={`
                  ${Banner500} 500w,
                  ${Banner768} 768w,
                  ${Banner1024} 1024w
                `}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 500px"
                src={Banner1024}
                alt="AL Riyah Car Battery Service Musaffah Abu Dhabi workshop"
                loading="lazy"
                className="w-full h-full object-cover filter-none md:grayscale md:contrast-125 md:brightness-90 md:hover:grayscale-0 transition-all duration-700"
              />

              {/* Viewport Overlay Lines */}
              <div className="absolute inset-0 border border-base-content/10 pointer-events-none m-4 rounded-xl flex flex-col justify-between p-4 text-[10px] font-mono text-white/80">
                <div className="flex justify-between">
                  <span>DISPATCH: ON_CALL</span>
                  <span>LOC: 24.3411° N, 54.5126° E</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="bg-neutral/80 text-neutral-content px-2 py-1 rounded backdrop-blur">
                    OEM SPEC GUARANTEED
                  </span>
                  <span className="bg-primary text-primary-content px-2 py-1 rounded font-bold">
                    AL RIYAH M6
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Location Ribbon */}
            <div
              onClick={openDirections}
              className="mt-4 p-4 rounded-xl bg-base-200 border border-base-300 flex items-center justify-between hover:border-primary/40 cursor-pointer transition-colors"
            >
              <div>
                <p className="text-xs font-mono uppercase text-base-content/50">Counter Address</p>
                <p className="text-sm font-bold text-base-content">
                  Musaffah - M6 - Abu Dhabi, UAE
                </p>
              </div>
              <HiOutlineArrowUpRight className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic System & About Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
                <HiOutlineWrenchScrewdriver className="w-4 h-4" />
                <span>Operational Profile</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-base-content leading-none mb-6">
                Engineering <br />
                <span className="text-primary">Zero-Downtime</span> Power.
              </h2>

              <p className="text-base sm:text-lg text-base-content/75 leading-relaxed mb-6">
                <strong>AL Riyah Car Battery Service & Auto Spare Parts</strong> is built for the intense thermal demands of UAE driving. Operating directly from our Musaffah M-6 workshop, we deploy specialized on-site field technicians equipped with dealer-spec diagnostic gear while supplying walk-in customers with verified spare parts.
              </p>

              {/* Service Tab Switcher */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-base-300 pb-4">
                {serviceTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setActiveTab(tier.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tier.id
                        ? "bg-primary text-primary-content shadow-sm"
                        : "bg-base-200 text-base-content/70 hover:bg-base-300"
                    }`}
                  >
                    {tier.title}
                  </button>
                ))}
              </div>

              {/* Active Tab Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl bg-base-200 border border-base-300 mb-8"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-primary">
                      {currentService?.icon}
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        {currentService?.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-base-300 px-2 py-0.5 rounded text-base-content/60">
                      Standard Issue
                    </span>
                  </div>

                  <p className="text-sm text-base-content/80 leading-relaxed mb-5">
                    {currentService?.summary}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-2">
                    {currentService?.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg bg-base-100 border border-base-300/70 text-xs font-semibold text-base-content"
                      >
                        <HiOutlineCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Contact & Telemetry Strip */}
            <div className="pt-6 border-t border-base-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <HiOutlineBolt className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-base-content/50">Direct Dispatcher</p>
                  <a
                    href="tel:0567058128"
                    className="text-lg font-black text-base-content hover:text-primary transition-colors"
                  >
                    056 705 8128
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-base-content/60">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                <span>IN-STORE SHOPPING • PICK-UP • DELIVERY</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default AboutUs;
import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineBuildingStorefront,
  HiOutlineClock,
  HiArrowUpRight,
  HiStar,
} from "react-icons/hi2";

const Cards = () => {
  const openDirections = () => {
    window.open(
      "https://maps.app.goo.gl/SrabtuhEefSrsLQ9A",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-base-200 text-base-content relative overflow-hidden"
      aria-label="AL Riyah Car Battery Service and Capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-base-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-base-100 border border-base-300 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              <HiOutlineWrenchScrewdriver className="w-4 h-4" />
              <span>Service Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-base-content leading-tight">
              Built For Speed. <br />
              <span className="text-primary">Stocked For Any Car.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-base-content/70 leading-relaxed">
            <strong className="text-base-content">AL Riyah Car Battery Service & Auto Spare Parts</strong> pairs high-output mobile technicians with a fully stocked Musaffah warehouse to eliminate downtime across Abu Dhabi.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10"
        >
          {/* Card 1: Dispatch Feature */}
          <motion.div
            variants={item}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-base-100 border border-base-300 p-7 flex flex-col justify-between hover:border-primary/40 transition-colors group relative shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <HiOutlineTruck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded">
                  25–35 Min Arrival
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase text-base-content mb-2 group-hover:text-primary transition-colors">
                Rapid Roadside Dispatch
              </h3>
              <p className="text-sm text-base-content/70 leading-relaxed max-w-lg">
                Technicians carry commercial code scanners, memory savers, and high-torque terminal gear. Your vehicle receives prompt on-site replacement on the highway, basement levels, or office parking bays.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-base-200 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider text-base-content/60">
              <span className="bg-base-200 px-2.5 py-1 rounded">All Abu Dhabi Zones</span>
              <span className="bg-base-200 px-2.5 py-1 rounded">Computer Memory Retained</span>
              <span className="bg-base-200 px-2.5 py-1 rounded">Dead Battery Recycled</span>
            </div>
          </motion.div>

          {/* Card 2: Rating */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-base-100 border border-base-300 p-7 flex flex-col justify-between hover:border-warning/40 transition-colors group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-warning/10 text-warning">
                  <HiStar className="w-7 h-7 fill-current" />
                </div>
                <span className="text-2xl font-black text-base-content">5.0</span>
              </div>

              <h3 className="text-xl font-black uppercase text-base-content mb-2">
                Verified Reputation
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Consistent 5-star customer feedback across Abu Dhabi emergency rescues and counter sales.
              </p>
            </div>

            <div className="pt-6 border-t border-base-200 flex items-center justify-between text-xs font-semibold text-base-content/60">
              <span>Google Verified</span>
              <div className="flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Store Location */}
          <motion.div
            variants={item}
            onClick={openDirections}
            className="rounded-2xl bg-primary/10 border border-primary/30 p-7 flex flex-col justify-between cursor-pointer hover:border-primary transition-all group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary text-primary-content">
                  <HiOutlineBuildingStorefront className="w-7 h-7" />
                </div>
                <HiArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <h3 className="text-xl font-black uppercase text-base-content mb-1">
                Musaffah M-6 Counter
              </h3>
              <p className="text-xs text-primary font-bold mb-2">
                Plus Code: 9GC7+PH
              </p>
              <p className="text-xs text-base-content/70 leading-relaxed">
                In-store shopping, pickup, and warranty claims directly at our auto parts counter.
              </p>
            </div>

            <span className="text-xs font-bold text-primary uppercase tracking-wider underline underline-offset-4 pt-4">
              Get Directions →
            </span>
          </motion.div>

          {/* Card 4: Diagnostics */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-base-100 border border-base-300 p-7 flex flex-col justify-between hover:border-primary/40 transition-colors group shadow-sm"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-6">
                <HiOutlineBolt className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-black uppercase text-base-content mb-2 group-hover:text-primary transition-colors">
                Charging Diagnostics
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                We test your starter motor and alternator output before installation to make sure your charging system works properly.
              </p>
            </div>

            <div className="pt-6 border-t border-base-200 text-[11px] font-bold uppercase tracking-wider text-primary">
              Included With Callout
            </div>
          </motion.div>

          {/* Card 5: Inventory */}
          <motion.div
            variants={item}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-base-100 border border-base-300 p-7 flex flex-col justify-between hover:border-primary/40 transition-colors group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <HiOutlineShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                  Genuine Stock Only
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase text-base-content mb-2 group-hover:text-primary transition-colors">
                Automotive Spare Parts & Batteries
              </h3>
              <p className="text-sm text-base-content/70 leading-relaxed max-w-lg">
                Direct supply of standard lead-acid, EFB, and high-capacity AGM batteries. Backed by up to 24-month unconditional dealer replacement warranties.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-6 mt-4 border-t border-base-200 text-center">
              <div className="bg-base-200 p-2.5 rounded-lg border border-base-300">
                <span className="block text-xs font-black text-base-content">AGM / EFB</span>
                <span className="text-[10px] text-base-content/50 uppercase font-semibold">Start-Stop Ready</span>
              </div>
              <div className="bg-base-200 p-2.5 rounded-lg border border-base-300">
                <span className="block text-xs font-black text-base-content">12–24 Mo.</span>
                <span className="text-[10px] text-base-content/50 uppercase font-semibold">Full Warranty</span>
              </div>
              <div className="bg-base-200 p-2.5 rounded-lg border border-base-300">
                <span className="block text-xs font-black text-base-content">OEM Specs</span>
                <span className="text-[10px] text-base-content/50 uppercase font-semibold">All Makes</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Hotline */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-base-100 border border-base-300 p-7 flex flex-col justify-between hover:border-success/40 transition-colors group shadow-sm"
          >
            <div>
              <div className="p-3 w-fit rounded-xl bg-success/10 text-success mb-6">
                <HiOutlineClock className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-black uppercase text-base-content mb-2">
                24/7 Call Line
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed mb-4">
                Speak directly with an on-duty technician to confirm parts and request dispatch.
              </p>
            </div>

            <a
              href="tel:0567058128"
              className="text-xs font-black uppercase tracking-wider text-success hover:underline pt-4 border-t border-base-200 flex items-center justify-between"
            >
              <span>056 705 8128</span>
              <HiArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
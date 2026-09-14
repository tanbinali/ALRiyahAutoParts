import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClock,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiArrowUpRight,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "AL Riyah Car Battery Service & Auto Spare Parts",
  serviceType: "24/7 Mobile Car Battery Replacement & Auto Spare Parts",
  areaServed: "Abu Dhabi, UAE",
  telephone: "+971567058128",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971567058128",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  url: "https://alriyahbattery.com",
};

const Contact = () => {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
      id="contact"
      className="py-24 bg-base-200 text-base-content border-t border-base-300 relative overflow-hidden"
      aria-label="Contact AL Riyah Car Battery Service & Auto Spare Parts in Abu Dhabi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-base-300">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <HiOutlineClock className="w-4 h-4" />
              <span>Direct Emergency Link • Active 24/7/365</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-base-content leading-none">
              Immediate Dispatch <br />
              <span className="text-primary">& Parts Counter.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-base-content/70 leading-relaxed">
            Need on-site battery rescue or counter spare parts? Reach <strong className="text-base-content">AL Riyah Car Battery Service & Auto Spare Parts</strong> directly through mobile phone dispatch, live WhatsApp GPS coordinates, or at our Musaffah workshop.
          </p>
        </div>

        {/* Command Center Action Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-10"
        >
          {/* Primary Action 1: Voice Dispatch */}
          <motion.a
            variants={item}
            href="tel:0567058128"
            className="lg:col-span-6 rounded-3xl bg-base-100 border border-base-300 p-8 flex flex-col justify-between hover:border-primary/50 transition-all shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-primary text-primary-content">
                  <HiOutlinePhone className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase bg-base-200 px-3 py-1 rounded-full text-base-content/70">
                  <span className="w-2 h-2 rounded-full bg-error animate-ping" />
                  <span>Immediate Voice Line</span>
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-base-content/50">Emergency Rescue Line</span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-base-content tracking-tight mt-1 mb-3 group-hover:text-primary transition-colors">
                Call Technician
              </h3>
              <p className="text-sm sm:text-base text-base-content/70 leading-relaxed mb-8">
                Direct phone link straight to an on-duty technician. Explain your car make, symptoms, and location for immediate mobile van dispatch.
              </p>
            </div>

            <div className="pt-6 border-t border-base-200 flex items-center justify-between">
              <div>
                <span className="block text-[11px] font-mono uppercase text-base-content/50">Toll / Mobile</span>
                <span className="text-xl sm:text-2xl font-black text-primary font-mono">056 705 8128</span>
              </div>
              <div className="p-3 rounded-xl bg-base-200 group-hover:bg-primary group-hover:text-primary-content transition-colors">
                <HiArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.a>

          {/* Primary Action 2: WhatsApp Live Location */}
          <motion.a
            variants={item}
            href="https://wa.me/971567058128?text=Hello%20AL%20Riyah,%20I%20need%20battery%20replacement.%20Here%20is%20my%20location:"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-6 rounded-3xl bg-base-100 border border-base-300 p-8 flex flex-col justify-between hover:border-success/50 transition-all shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-success text-success-content">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase bg-base-200 px-3 py-1 rounded-full text-base-content/70">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span>GPS Location Share</span>
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-base-content/50">Fast Messaging Dispatch</span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-base-content tracking-tight mt-1 mb-3 group-hover:text-success transition-colors">
                Send WhatsApp Pin
              </h3>
              <p className="text-sm sm:text-base text-base-content/70 leading-relaxed mb-8">
                Stranded on the road or in a basement parking bay? Drop your live GPS location on WhatsApp to skip the navigation confusion and get an instant ETA.
              </p>
            </div>

            <div className="pt-6 border-t border-base-200 flex items-center justify-between">
              <div>
                <span className="block text-[11px] font-mono uppercase text-base-content/50">WhatsApp Connect</span>
                <span className="text-xl sm:text-2xl font-black text-success font-mono">+971 56 705 8128</span>
              </div>
              <div className="p-3 rounded-xl bg-base-200 group-hover:bg-success group-hover:text-success-content transition-colors">
                <HiArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.a>

          {/* Tertiary Information Grid (Full Span Bottom) */}
          <motion.div
            variants={item}
            className="lg:col-span-12 rounded-3xl bg-base-100 border border-base-300 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-sm"
          >
            {/* Workshop Address */}
            <div
              onClick={openDirections}
              className="flex items-start gap-4 p-4 rounded-2xl bg-base-200 hover:bg-base-300/80 transition-colors cursor-pointer group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <HiOutlineBuildingStorefront className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-base-content/50 block">Workshop & Counter</span>
                <h4 className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                  Musaffah - M6
                </h4>
                <p className="text-xs text-base-content/70 mt-0.5">Abu Dhabi, UAE (Plus Code: 9GC7+PH)</p>
              </div>
            </div>

            {/* Coverage Protocol */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-base-200">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <HiOutlineTruck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-base-content/50 block">Mobile Coverage Area</span>
                <h4 className="font-bold text-base text-base-content">
                  All Abu Dhabi Regions
                </h4>
                <p className="text-xs text-base-content/70 mt-0.5">Musaffah, City Center, Yas, Reem & Highways</p>
              </div>
            </div>

            {/* Fulfillment Types */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-base-200">
              <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                <HiOutlineShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-base-content/50 block">Fulfillment Modes</span>
                <h4 className="font-bold text-base text-base-content">
                  Delivery • Pick-up • Shop
                </h4>
                <p className="text-xs text-base-content/70 mt-0.5">On-site fitment or counter collection</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </section>
  );
};

export default Contact;
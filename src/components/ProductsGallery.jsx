import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMagnifyingGlassPlus,
  HiOutlineXMark,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlinePhone,
  HiOutlineTruck,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

import amaron from "../assets/Batteries/Amaron-din661.webp";
import fiamm from "../assets/Batteries/FIAMM-Titanium-Pro-L2X-64P_enl.webp";
import platinum from "../assets/Batteries/PLATINUM 55530.webp";
import sebang from "../assets/Batteries/SEBANG.webp";
import tuflong from "../assets/Batteries/tuflong-battery-_1_.webp";
import vartaAGM from "../assets/Batteries/VARTA AGM.webp";
import vartaBlue from "../assets/Batteries/VARTA Blue.webp";
import vartaDynamic from "../assets/Batteries/VARTA Dynamic SLI.webp";

const productCatalog = [
  {
    id: "amaron-din661",
    brand: "Amaron",
    model: "DIN661",
    type: "Hi-Life Pro",
    warranty: "18-24 Mo.",
    tech: "Silver Alloy",
    bestFor: "High Heat & Daily Commute",
    src: amaron,
    alt: "Amaron DIN661 car battery Abu Dhabi",
  },
  {
    id: "fiamm-titanium-pro",
    brand: "FIAMM",
    model: "Titanium Pro L2X-64P",
    type: "OEM Replacement",
    warranty: "12-18 Mo.",
    tech: "Calcium-Lead",
    bestFor: "European & Asian Sedans",
    src: fiamm,
    alt: "FIAMM Titanium Pro car battery Musaffah",
  },
  {
    id: "platinum-55530",
    brand: "Platinum",
    model: "55530 Heavy Duty",
    type: "Sealed Maintenance-Free",
    warranty: "12 Mo.",
    tech: "Expanded Grid",
    bestFor: "Reliable Standard Cranking",
    src: platinum,
    alt: "Platinum 55530 battery stock Abu Dhabi",
  },
  {
    id: "sebang-smf",
    brand: "SEBANG",
    model: "Global SMF Series",
    type: "Korean OEM Spec",
    warranty: "12-18 Mo.",
    tech: "Calcium Stamped Grid",
    bestFor: "Hyundai, Kia, Japanese Makes",
    src: sebang,
    alt: "Sebang battery Abu Dhabi auto parts",
  },
  {
    id: "tuflong-hd",
    brand: "Tuflong",
    model: "Japanese Industrial",
    type: "Premium JIS",
    warranty: "12-18 Mo.",
    tech: "High-Durability Alloy",
    bestFor: "Toyota, Nissan, Honda SUVs",
    src: tuflong,
    alt: "Tuflong car battery delivery Abu Dhabi",
  },
  {
    id: "varta-agm",
    brand: "VARTA",
    model: "Silver Dynamic AGM",
    type: "Advanced Start-Stop",
    warranty: "24 Mo.",
    tech: "Absorbent Glass Mat",
    bestFor: "German Luxury & Start-Stop",
    src: vartaAGM,
    alt: "VARTA AGM battery installation Abu Dhabi",
  },
  {
    id: "varta-blue",
    brand: "VARTA",
    model: "Blue Dynamic",
    type: "All-Round Cranking",
    warranty: "12-18 Mo.",
    tech: "PowerFrame Grid",
    bestFor: "Standard Electrical Demand",
    src: vartaBlue,
    alt: "VARTA Blue battery replacement Abu Dhabi",
  },
  {
    id: "varta-dynamic-sli",
    brand: "VARTA",
    model: "Dynamic SLI Commercial",
    type: "Heavy Cranking",
    warranty: "12-18 Mo.",
    tech: "Reinforced Plates",
    bestFor: "Fleet & Commercial Vehicles",
    src: vartaDynamic,
    alt: "VARTA Dynamic SLI car battery Musaffah",
  },
];

const ProductsGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterBrand, setFilterBrand] = useState("ALL");

  const brands = ["ALL", "VARTA", "Amaron", "FIAMM", "SEBANG", "Tuflong", "Platinum"];

  const filteredList =
    filterBrand === "ALL"
      ? productCatalog
      : productCatalog.filter((item) => item.brand.toUpperCase() === filterBrand.toUpperCase());

  return (
    <section id="products" className="py-24 bg-base-200 text-base-content border-t border-base-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Ribbon & Operational Data */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-base-300">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <HiOutlineCube className="w-4 h-4" />
              <span>Inventory Registry • Musaffah M-6 Hub</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-base-content leading-none">
              In-Stock Batteries <br />
              <span className="text-primary">& Auto Power Units.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-base-content/70">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-base-100 border border-base-300">
              <HiOutlineTruck className="w-4 h-4 text-primary" />
              <span>Delivery: 25–35 Mins</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-base-100 border border-base-300">
              <HiOutlineShieldCheck className="w-4 h-4 text-success" />
              <span>Dealer Warranty Honored</span>
            </div>
          </div>
        </div>

        {/* Brand Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-hide">
          <span className="text-xs font-mono uppercase text-base-content/50 mr-2 shrink-0">Filter Make:</span>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBrand(b)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer ${
                filterBrand === b
                  ? "bg-primary text-primary-content shadow-sm"
                  : "bg-base-100 border border-base-300 text-base-content/70 hover:bg-base-300"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Structured Product Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {filteredList.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-base-100 border border-base-300 p-5 flex flex-col justify-between hover:border-primary/50 transition-all group relative shadow-sm"
            >
              {/* Card Top Label */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-base-200 text-base-content/70">
                    {product.brand}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary">
                    {product.warranty} Warranty
                  </span>
                </div>

                {/* Battery Product Image Viewport */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full aspect-[4/3] rounded-xl bg-base-200 border border-base-300/60 p-4 flex items-center justify-center overflow-hidden cursor-pointer mb-4"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-base-content/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-base-100 text-base-content shadow">
                      <HiOutlineMagnifyingGlassPlus className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Model Title & Specs */}
                <h3 className="font-bold text-base text-base-content leading-tight mb-1">
                  {product.model}
                </h3>
                <p className="text-xs text-base-content/60 mb-3">{product.type}</p>

                <div className="space-y-1.5 py-3 border-y border-base-200 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-base-content/50">Tech:</span>
                    <span className="font-semibold text-base-content">{product.tech}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/50">Suitability:</span>
                    <span className="font-semibold text-base-content truncate max-w-[150px]">
                      {product.bestFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-1">
                <a
                  href={`https://wa.me/971567058128?text=Hello%20AL%20Riyah,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(
                    product.brand + " " + product.model
                  )}%20battery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm rounded-lg text-success-content font-bold flex items-center justify-center gap-1.5 border-none"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Order</span>
                </a>

                <a
                  href="tel:0567058128"
                  className="btn btn-primary btn-sm rounded-lg text-primary-content font-bold flex items-center justify-center gap-1.5 border-none"
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>Check Fit</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Counter & Pick-up Indicator Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-base-100 border border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <HiOutlineBolt className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-base-content">
                Need a specific amperage or DIN spec not listed here?
              </h4>
              <p className="text-xs text-base-content/70 font-mono">
                We carry complete ranges of DIN44 to DIN100, JIS sizes, AGM, and commercial batteries in Musaffah M-6.
              </p>
            </div>
          </div>

          <a
            href="tel:0567058128"
            className="btn btn-primary rounded-xl text-primary-content font-bold text-xs uppercase tracking-wider shrink-0 border-none"
          >
            Direct Parts Desk: 056 705 8128
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-neutral/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              className="relative z-10 w-full max-w-2xl bg-base-100 border border-base-300 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-base-content"
                aria-label="Close details"
              >
                <HiOutlineXMark className="w-5 h-5" />
              </button>

              <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div className="aspect-square bg-base-200 border border-base-300 rounded-xl p-4 flex items-center justify-center">
                  <img
                    src={selectedProduct.src}
                    alt={selectedProduct.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-primary">
                      {selectedProduct.brand} Genuine Component
                    </span>
                    <h3 className="text-2xl font-black uppercase text-base-content mt-1 leading-tight">
                      {selectedProduct.model}
                    </h3>
                    <p className="text-sm text-base-content/70 mt-1">{selectedProduct.type}</p>

                    <div className="mt-4 space-y-2 py-4 border-y border-base-200 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-base-content/50">Grid Technology:</span>
                        <span className="font-semibold text-base-content">{selectedProduct.tech}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/50">Warranty Cover:</span>
                        <span className="font-semibold text-success">{selectedProduct.warranty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-base-content/50">Application:</span>
                        <span className="font-semibold text-base-content">{selectedProduct.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-6">
                    <a
                      href={`https://wa.me/971567058128?text=I%20am%20ready%20to%20order%20the%20${encodeURIComponent(
                        selectedProduct.brand + " " + selectedProduct.model
                      )}%20for%20delivery.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success text-success-content font-bold border-none flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Order Delivery Via WhatsApp</span>
                    </a>
                    <a
                      href="tel:0567058128"
                      className="btn btn-primary text-primary-content font-bold border-none flex items-center justify-center gap-2"
                    >
                      <HiOutlinePhone className="w-5 h-5" />
                      <span>Call Technician: 056 705 8128</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsGallery;
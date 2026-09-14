import { FaWhatsapp } from "react-icons/fa";
import { 
  HiOutlinePhone, 
  HiOutlineMapPin,
  HiOutlineArrowUpRight,
  HiOutlineClock,
  HiOutlineShieldCheck
} from "react-icons/hi2";
import logo from "../assets/logo.png";

const MAPS_URL = "https://maps.app.goo.gl/SrabtuhEefSrsLQ9A";

const navLinks = [
  { name: "About Us", id: "about" },
  { name: "Batteries & Parts", id: "products" },
  { name: "Emergency Dispatch", id: "contact" },
  { name: "Musaffah M-6 Depot", id: "map" },
];

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer 
      className="bg-neutral text-neutral-content relative overflow-hidden pt-20 pb-8 border-t border-base-300"
      aria-label="AL Riyah Car Battery Service & Auto Spare Parts Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Operational Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6 p-2.5 rounded-2xl bg-base-100/10 border border-neutral-content/10">
              <img
                src={logo}
                alt="AL Riyah Car Battery Service & Auto Spare Parts Logo"
                className="w-10 h-10 object-contain bg-base-100 rounded-xl p-1"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-neutral-content uppercase leading-none">
                  AL Riyah
                </span>
                <span className="text-[10px] font-mono text-neutral-content/60 uppercase tracking-widest mt-0.5">
                  Battery & Auto Spare Parts
                </span>
              </div>
            </div>

            <p className="text-neutral-content/70 text-sm sm:text-base leading-relaxed max-w-sm mb-6 font-sans">
              Fast on-site battery replacement, vehicle diagnostics, and counter auto parts delivery across Abu Dhabi. Shop counter located in Musaffah M-6.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-mono text-neutral-content/80 hover:text-primary transition-colors p-2.5 rounded-xl bg-base-100/5 border border-neutral-content/10"
            >
              <HiOutlineMapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Musaffah - M6 - Abu Dhabi (Plus Code: 9GC7+PH)</span>
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono font-bold text-neutral-content uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-content/70 hover:text-primary transition-colors font-medium flex items-center group cursor-pointer"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all">
                      <HiOutlineArrowUpRight className="w-3.5 h-3.5 mr-1 text-primary" />
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-neutral-content/10 flex flex-col gap-2 text-xs font-mono text-neutral-content/60">
              <div className="flex items-center gap-2">
                <HiOutlineClock className="w-4 h-4 text-primary" />
                <span>24/7 Roadside Mobile Support</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineShieldCheck className="w-4 h-4 text-success" />
                <span>Up to 24 Months Warranty</span>
              </div>
            </div>
          </div>

          {/* Column 3: Emergency Dispatch Actions */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-mono font-bold text-neutral-content uppercase tracking-widest mb-6">
              24/7 Mobile Dispatch
            </h3>
            
            <div className="flex flex-col gap-3">
              {/* Phone Action */}
              <a
                href="tel:0567058128"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-base-100/5 border border-neutral-content/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-11 h-11 bg-primary text-primary-content rounded-xl flex items-center justify-center shrink-0">
                  <HiOutlinePhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-neutral-content/50 uppercase tracking-wider">
                    Emergency Call Line
                  </p>
                  <p className="text-base font-black text-neutral-content font-mono group-hover:text-primary transition-colors">
                    056 705 8128
                  </p>
                </div>
              </a>

              {/* WhatsApp Action */}
              <a
                href="https://wa.me/971567058128?text=Hello%20AL%20Riyah,%20I%20need%20battery%20replacement."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-base-100/5 border border-neutral-content/10 hover:border-success/50 transition-colors group"
              >
                <div className="w-11 h-11 bg-success text-success-content rounded-xl flex items-center justify-center shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-neutral-content/50 uppercase tracking-wider">
                    WhatsApp GPS Dispatch
                  </p>
                  <p className="text-base font-black text-neutral-content font-mono group-hover:text-success transition-colors">
                    +971 56 705 8128
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-base-100/5 border border-neutral-content/10 flex items-center justify-between text-[11px] font-mono text-neutral-content/70">
              <span>Service Status:</span>
              <span className="text-success font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Technicians On Patrol
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-content/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-content/50">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} AL Riyah Car Battery Service & Auto Spare Parts. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Musaffah M-6 • Abu Dhabi, UAE
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
# AL Riyah Car Battery Service & Auto Spare Parts

**Industrial Automotive Hub & 24/7 Roadside Rescue in Abu Dhabi** – A high-performance, mobile-first web platform engineered for rapid on-site battery dispatch, walk-in counter retail, and auto spare parts sales. Built with **React 18**, **Tailwind CSS**, **DaisyUI**, and **Framer Motion**.

---

## Table of Contents

* [Overview](https://www.google.com/search?q=%23overview)
* [Live Deployment](https://www.google.com/search?q=%23live-deployment)
* [Operational Profile](https://www.google.com/search?q=%23operational-profile)
* [Core Features](https://www.google.com/search?q=%23core-features)
* [Design System & Tech Stack](https://www.google.com/search?q=%23design-system--tech-stack)
* [Project Architecture](https://www.google.com/search?q=%23project-architecture)
* [SEO & Technical Schemas](https://www.google.com/search?q=%23seo--technical-schemas)
* [License](https://www.google.com/search?q=%23license)

---

## Overview

AL Riyah Car Battery Service & Auto Spare Parts provides emergency 24/7 roadside battery replacement and counter spare parts sales across Abu Dhabi. The web interface delivers immediate emergency conversion paths through direct phone dispatch, WhatsApp live GPS coordinate sharing, inventory filtering, and verified workshop route mapping.

---

## Live Deployment

* **Production Domain:** [https://alriyahcarbatteries.com](https://alriyahcarbatteries.com)
* **Direct Dispatcher:** `+971 56 705 8128`
* **Workshop Hub:** Musaffah - M6, Abu Dhabi, UAE (Plus Code: `9GC7+PH`)

---

## Operational Profile

| Metric | Specification |
| --- | --- |
| **Primary Operations** | 24/7 Roadside Battery Rescue, Alternator/Starter Testing, Auto Spare Parts |
| **Fulfillment Modes** | Mobile Field Dispatch, In-Store Shopping, Counter Pick-Up |
| **Emergency Arrival ETA** | 25–35 Minutes across Abu Dhabi sectors |
| **Battery Technologies** | AGM (Absorbent Glass Mat), EFB, SMF Calcium, Heavy Commercial |
| **Physical Depot** | Industrial Workshop Counter, Musaffah M-6 |

---

## Core Features

* **Direct Emergency Telemetry:** One-tap calling to `056 705 8128` and automated WhatsApp query links pre-populated with live GPS location requests.
* **Floating Operational Command (FAB):** Persistent bottom-right quick-action trigger with scroll-aware auto-collapse and live status pulse.
* **Dynamic Brand Filter Catalog:** Instant client-side filtering across tier-1 battery brands (VARTA, Amaron, FIAMM, SEBANG, Tuflong, Platinum) with technical spec cards.
* **Product Inspection Modal:** Lightbox diagnostics viewport displaying grid alloy details, recommended chassis fitment, and manufacturer warranty coverage.
* **Integrated Google Place Embed:** Direct Musaffah M-6 workshop map integration paired with coordinate badges and external turn-by-turn routing.
* **Adaptive Performance Media:** Responsive WebP image pipelines (`Banner-500`, `Banner-768`, `Banner-1024`) with layout shift mitigation.

---

## Design System & Tech Stack

* **Framework:** React 18 with Vite
* **Styling Engine:** Tailwind CSS + DaisyUI
* **Typography:** Chakra Petch (Technical Display/Headings) & Plus Jakarta Sans (Interface/Body)
* **Animation Pipeline:** Framer Motion (Spring-based physics, staggered entrances, layout transitions)
* **Icons:** React Icons (`hi2` Heroicons v2 & `fa` FontAwesome)
* **Semantic Theme Mapping:**
* Brand: `primary` (Deep Plum), `secondary`, `accent`
* Base Surfaces: `base-100` (Surface), `base-200` (Elevation), `base-300` (Borders/Dividers), `base-content`
* Feedback Channels: `success` (WhatsApp / Field Active), `error` (Emergency Live Pulse), `neutral`



---

## Project Architecture

```
src/
 ├─ assets/
 │   ├─ Batteries/        # Optimized WebP battery assets (Amaron, VARTA, FIAMM, etc.)
 │   ├─ Banner-*.webp     # Multi-resolution workshop visual assets
 │   └─ logo.png          # AL Riyah identity mark
 ├─ components/
 │   ├─ Navbar.jsx        # Navigation shell with quick call trigger
 │   ├─ Hero.jsx          # Industrial hero section with capability badges
 │   ├─ AboutUs.jsx       # Operational technical profile & diagnostic tab switcher
 │   ├─ ProductsGallery.jsx # Battery registry, brand filter bar & spec modal
 │   ├─ Contact.jsx       # Emergency voice & WhatsApp GPS dispatch terminals
 │   ├─ StoreMap.jsx      # Musaffah M-6 coordinate frame & verified embed
 │   ├─ FAB.jsx           # Floating emergency dispatch button
 │   └─ Footer.jsx        # Operational directory, hours, and legal indexing
 ├─ App.jsx               # Layout scaffold
 ├─ index.css             # Tailwind layers & Chakra Petch typography rules
 └─ main.jsx              # React DOM mounting

```

---

## SEO & Technical Schemas

* **JSON-LD Microdata:** Embedded `AutoPartsStore` and `AutomotiveBusiness` schemas detailing 24/7 operating schedules, Musaffah M-6 postal parameters, and phone touchpoints.
* **Search Metadata:** Targeted regional indexing for "car battery replacement Musaffah", "auto spare parts Abu Dhabi", and "24/7 mobile battery delivery UAE".
* **Crawler Directives:** Production XML sitemap and clean `robots.txt` configuration routing search crawlers to verified endpoints.

---

## License

MIT License © 2026 **AL Riyah Car Battery Service & Auto Spare Parts**. All rights reserved.
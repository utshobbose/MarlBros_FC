# MarlBros FC — Official Club Website & Jersey Shop

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)

> **From 7 to 30 Brothers Strong.** Official website and Batch #01 jersey ordering platform for MarlBros FC.

---

## ⚽ Project Overview

MarlBros FC is an independent football club founded in 2023 with 7 founding members and grown into a 30-member brotherhood.

### Two Core Mandates:
1. **Right Now (Phase 1):** Internal allocation round for the first **15 custom jerseys** (size, name, number) and establishing the club's public digital identity.
2. **Later (Phase 2):** Expansion into an open public merchandise store with automated payment processing.

---

## 🎨 Visual Design Language
- **The Hollywood Reporter Editorial Language:** High-contrast monochromatic palette (`#FFFFFF`, `#111111`, `#FAF6EE`), all-caps category kickers, bold tight-tracked display headlines (`Playfair Display`), and card grids with hairline dividers.
- **Official Team Jersey & Embroidered Crest:** Features the imperial crown and interlocking "MB" monogram in vintage ivory/cream (`#F3EBDD`) on deep crimson jacquard (`#70111A`), polo collar detailing, and athletic collegiate numbers.

---

## 🚀 Key Features

- **Interactive 2D Jersey Customizer (`/jersey`):** Real-time front and back view toggles with live custom name (up to 12 chars) and squad number (0–99) updating on the back.
- **Frictionless bKash & WhatsApp Ordering (`/order`):** Zero-friction checkout with 1-click bKash number copying and pre-filled WhatsApp confirmation receipt deep links.
- **Password-Gated Administrative Ledger (`/admin`):** Order tracking, real-time status updates (Pending -> Paid -> Fulfilled), and 1-click **Export Printer CSV** for the garment manufacturer.
- **Club Identity & Roster (`/about`):** Origin story, heraldic crest breakdown, and 30-member roster.
- **Media Archive & Lightbox (`/gallery`):** Category-filtered photo gallery with keyboard-accessible full-screen lightbox.
- **Contact & FAQ Desk (`/contact`):** Matchday location, leadership contact, and FAQ accordion.

---

## 📂 Context Documentation
Comprehensive versioned documentation is located in the [`context/`](./context) folder:
- [`context/v1.0-phase1-features.md`](./context/v1.0-phase1-features.md): Full Phase 1 features checklist.
- [`context/v1.0-phase1-architecture.md`](./context/v1.0-phase1-architecture.md): Technical architecture and data models.
- [`context/v1.0-phase1-supabase-setup.md`](./context/v1.0-phase1-supabase-setup.md): Supabase SQL schema and configuration.
- [`context/phase-roadmap.md`](./context/phase-roadmap.md): Roadmap for Phase 2 public shop expansion.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env.local` to configure bKash numbers, WhatsApp contact, admin passcode, and Supabase credentials:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
```

---

## 📄 License
© 2026 MarlBros FC. All rights reserved.

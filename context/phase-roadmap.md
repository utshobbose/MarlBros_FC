# MarlBros FC — Product Roadmap: Phase 1 to Phase 2

This document details the planned evolution of the MarlBros FC digital platform from internal batch ordering to a full public e-commerce store.

---

## Phase 1 (Current — Completed)
- **Goal:** Launch the club's public brand identity, establish editorial Hollywood Reporter design language, and collect the internal 15-unit jersey order from squad members.
- **Key Deliverables:**
  - [x] Editorial homepage with bold headline typography, breaking news ticker, lead features, and "Club Dispatch" sidebar rail.
  - [x] About page detailing the 7-to-30 brotherhood story, heraldic crest breakdown, and 30-member squad roster.
  - [x] Media gallery with category filtering and keyboard-navigable full-screen lightbox.
  - [x] Interactive 2D jersey simulator (front/back views, live name/number preview).
  - [x] Frictionless member order form with size guide and validation.
  - [x] Instant confirmation receipt with bKash manual Send Money box (1-click copy) and WhatsApp deep link (`wa.me/...`).
  - [x] Password-gated administrative ledger with real-time statistics, status toggles, and manufacturer CSV export.
  - [x] Resilient dual-layer data architecture (Supabase PostgreSQL + local cache fallback).
  - [x] Context folder with versioned documentation.

---

## Phase 2 (Future Scope — Public Store & Automated Checkout)
- **Goal:** Open public merchandising to fans, supporters, and football enthusiasts in Bangladesh and abroad.
- **Planned Features:**
  - **Multi-Product Catalog:** Expand beyond the home jersey to include:
    - Away / Third Kits
    - Training Bibs & Warm-up Tracksuits
    - Club Scarves, Caps & Supporters' Merchandise
  - **Automated Payment Gateway:**
    - Integrate SSLCommerz or ShurjoPay for automated bKash, Nagad, Rocket, Visa, and Mastercard checkouts.
    - Automated instant SMS & Email receipts upon transaction authorization.
  - **Inventory & Batch Management:**
    - Live inventory tracking by size (S, M, L, XL, XXL) with automated "Out of Stock" badges.
  - **Member Accounts & Order Tracking:**
    - Lightweight magic-link or phone OTP authentication to allow members to view order history and shipping tracking numbers.

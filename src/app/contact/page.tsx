"use client";

import React, { useState } from "react";
import { clubConfig } from "@/lib/config";
import { CrestLogo } from "@/components/crest-logo";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Shield,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the bKash payment verification work?",
      a: "Once you place an order on the site, use your bKash mobile app to 'Send Money' to our club number (01712-345678) with your order reference or name in the reference field. Then tap the 'Confirm on WhatsApp' button to notify the kit manager immediately.",
    },
    {
      q: "Can I choose my own jersey number and printed name?",
      a: "Yes! Every Batch #01 jersey is customized specifically for you. You can print any name up to 12 uppercase characters, and select any available squad number between 0 and 99.",
    },
    {
      q: "When will the 15 Batch #01 jerseys be delivered?",
      a: "Once all 15 allocations are filled and confirmed via bKash, production will commence with our screen printer. Production takes approximately 7–10 business days before local distribution.",
    },
    {
      q: "Can non-members order a jersey right now?",
      a: "Phase 1 is strictly prioritized for registered MarlBros FC squad members. In Phase 2, the public shop will open for supporters and external orders.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="border-b border-editorial-border py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="editorial-kicker text-[#70111A]">COMMUNICATION DESK</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
              Contact MarlBros FC.
            </h1>
            <p className="text-base text-neutral-600 font-light">
              Get in touch with club leadership, coordinate your jersey order, or connect for friendly fixtures and tournament inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (7 cols): Contact Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Primary Action Card: WhatsApp & bKash Desk */}
            <div className="bg-[#FAF6EE] p-8 rounded-xl border-2 border-[#E5D7C0] space-y-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="editorial-kicker text-[#70111A]">DIRECT COORDINATION</span>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    WhatsApp & bKash Order Desk
                  </h3>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                For order confirmations, payment receipts, sizing advice, or friendly match invites, our kit manager is available directly on WhatsApp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-[#DAC8AF]">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    bKash Send Money ({clubConfig.bKashType})
                  </span>
                  <span className="font-mono text-lg font-black text-neutral-900 mt-1 block">
                    {clubConfig.bKashNumber}
                  </span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#DAC8AF]">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    WhatsApp Desk
                  </span>
                  <span className="font-mono text-lg font-black text-emerald-700 mt-1 block">
                    +{clubConfig.whatsAppNumber}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/${clubConfig.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Club Coordination</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Matchday & Training Location */}
            <div className="border border-editorial-border p-6 rounded-xl space-y-4">
              <div className="flex items-center space-x-2 text-[#70111A]">
                <MapPin className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg text-[#111111]">
                  Home Pitch & Training Facility
                </h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                MarlBros FC trains twice weekly under floodlights and hosts weekend competitive fixtures at Victoria Stadium Turf.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700 pt-2 font-mono">
                <div className="p-3 bg-neutral-50 rounded">
                  <span className="font-bold block text-neutral-900">Training Nights:</span>
                  Tuesdays & Thursdays · 7:30 PM
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <span className="font-bold block text-neutral-900">Matchday Ties:</span>
                  Fridays & Saturdays · 4:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): FAQ Accordion & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="editorial-kicker text-neutral-400">COMMON INQUIRIES</span>
              <h3 className="font-serif text-2xl font-bold text-[#111111]">
                Frequently Asked Questions
              </h3>

              <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full py-3.5 px-4 text-left flex items-center justify-between font-serif font-bold text-sm text-[#111111] hover:bg-neutral-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform ${
                          openFaq === idx ? "rotate-180 text-black" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 bg-neutral-900 text-white rounded-xl space-y-3">
              <span className="editorial-kicker text-[#C2A267]">SOCIAL LEDGER</span>
              <h4 className="font-serif font-bold text-lg">Follow the MarlBros Squad</h4>
              <p className="text-xs text-neutral-400">
                Match highlights, post-game photography, and lineup announcements are posted to our community channels.
              </p>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-xs font-mono font-medium transition-colors"
                >
                  Instagram @MarlBrosFC
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-xs font-mono font-medium transition-colors"
                >
                  Facebook /MarlBrosFC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

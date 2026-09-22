"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Order } from "@/types/order";
import { clubConfig, formatBDT, generateWhatsAppLink } from "@/lib/config";
import {
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Printer,
  Sparkles,
} from "lucide-react";

interface OrderConfirmationProps {
  order: Order;
  onReset?: () => void;
}

export function OrderConfirmation({ order, onReset }: OrderConfirmationProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(clubConfig.bKashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = generateWhatsAppLink(
    clubConfig.whatsAppNumber,
    order.order_reference,
    order.member_name,
    order.jersey_size,
    order.jersey_name,
    order.jersey_number,
    order.quantity
  );

  return (
    <div className="bg-white border border-editorial-border rounded-xl shadow-card overflow-hidden max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
      {/* Top Banner */}
      <div className="bg-[#111111] text-white p-6 sm:p-8 text-center border-b border-[#262626]">
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="editorial-kicker text-neutral-400">Order Successfully Recorded</span>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white mt-1">
          Thank You, {order.member_name}
        </h2>
        <div className="mt-3 inline-flex items-center space-x-2 bg-[#1E1E1E] px-4 py-1.5 rounded-full border border-[#333333]">
          <span className="text-xs text-neutral-400 font-mono">Order Ref:</span>
          <span className="text-xs font-mono font-bold text-[#F3EBDD] tracking-wider">
            {order.order_reference}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* 1. Itemized Order Summary */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-sans border-b border-editorial-border pb-2">
            Jersey Specifications
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                Jersey Name
              </span>
              <span className="font-serif font-bold text-base text-[#70111A]">
                {order.jersey_name}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                Number
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                #{order.jersey_number}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                Size
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                {order.jersey_size}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                Quantity
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                {order.quantity} unit{order.quantity > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-1 text-sm">
            <span className="text-neutral-600">Total Payable Amount:</span>
            <span className="font-mono text-xl font-black text-[#111111]">
              {formatBDT(order.total_amount)}
            </span>
          </div>
        </div>

        {/* 2. bKash Manual Payment Box */}
        <div className="p-6 bg-[#FAF6EE] rounded-xl border-2 border-[#E5D7C0] space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#E2136E]"></span>
              <span className="font-serif font-bold text-base text-[#111111]">
                Step 1: Send Money via bKash
              </span>
            </div>
            <span className="bg-[#E2136E] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
              Manual Transfer
            </span>
          </div>

          <p className="text-xs text-neutral-700 leading-relaxed">
            Please transfer exactly <strong>{formatBDT(order.total_amount)}</strong> to the official club bKash number below using the <strong>Send Money</strong> option.
          </p>

          {/* Phone Number Copy Box */}
          <div className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-[#DAC8AF]">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                Club bKash ({clubConfig.bKashType})
              </span>
              <span className="font-mono text-lg font-black text-neutral-900 tracking-wider">
                {clubConfig.bKashNumber}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyNumber}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-neutral-900 hover:bg-black text-white text-xs font-bold transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>

          <div className="text-[11px] text-neutral-600 bg-white/70 p-3 rounded border border-neutral-200/60">
            <strong>Important:</strong> Put your name or Reference:{" "}
            <code className="bg-neutral-200 px-1 py-0.5 rounded text-neutral-900 font-mono font-bold">
              {order.order_reference}
            </code>{" "}
            in the bKash reference field.
          </div>
        </div>

        {/* 3. WhatsApp Deep Link Confirmation CTA */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="font-serif font-bold text-base text-[#111111]">
              Step 2: Confirm on WhatsApp
            </span>
          </div>

          <p className="text-xs text-neutral-600">
            After sending money, click the button below to send your pre-filled order receipt directly to the club coordination desk on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Confirm Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-editorial-border flex flex-wrap items-center justify-between gap-3 text-xs">
          {onReset && (
            <button
              onClick={onReset}
              className="text-neutral-600 hover:text-black font-semibold underline"
            >
              Submit Another Jersey Order
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="inline-flex items-center space-x-1.5 text-neutral-600 hover:text-black py-1.5 px-3 rounded border border-neutral-300"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
}

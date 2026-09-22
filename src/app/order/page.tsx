"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { OrderForm } from "@/components/order-form";
import { OrderConfirmation } from "@/components/order-confirmation";
import { JerseyPreview } from "@/components/jersey-preview";
import { Order, JerseySize } from "@/types/order";
import { clubConfig, formatBDT } from "@/lib/config";
import { ShoppingBag, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

function OrderContent() {
  const searchParams = useSearchParams();
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);

  // Read pre-filled customization values from URL query parameters
  const initialValues = {
    jersey_size: (searchParams.get("size") as JerseySize) || "L",
    jersey_name: searchParams.get("name") || "",
    jersey_number: searchParams.get("number") ? parseInt(searchParams.get("number")!, 10) : 10,
    quantity: searchParams.get("quantity") ? parseInt(searchParams.get("quantity")!, 10) : 1,
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* If order is confirmed, render confirmation receipt */}
        {confirmedOrder ? (
          <div className="space-y-6">
            <OrderConfirmation
              order={confirmedOrder}
              onReset={() => setConfirmedOrder(null)}
            />
          </div>
        ) : (
          /* Order Placement Screen */
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="editorial-kicker text-[#70111A]">INTERNAL ALLOCATION DESK</span>
              <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
                Claim Your Squad Jersey
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600 font-light">
                Please provide your exact printing specifications and contact number. Payment is settled manually via bKash and confirmed on WhatsApp.
              </p>
            </div>

            {/* Form + Mini Preview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form (7 cols) */}
              <div className="lg:col-span-7">
                <OrderForm
                  initialValues={initialValues}
                  onOrderSuccess={(order) => setConfirmedOrder(order)}
                />
              </div>

              {/* Sidebar Guide & Mini Spec (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-editorial-border rounded-lg p-6 space-y-4 shadow-sm">
                  <span className="editorial-kicker text-neutral-400">HOW IT WORKS</span>
                  <h3 className="font-serif font-bold text-lg text-[#111111]">
                    3-Step Frictionless Ordering
                  </h3>

                  <ol className="space-y-3 text-xs text-neutral-700">
                    <li className="flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                        1
                      </span>
                      <div>
                        <strong>Submit Order:</strong> Specify your name, squad number, and size.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                        2
                      </span>
                      <div>
                        <strong>Send Money via bKash:</strong> Transfer {formatBDT(clubConfig.jerseyPrice)} per jersey to {clubConfig.bKashNumber}.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                        3
                      </span>
                      <div>
                        <strong>Confirm on WhatsApp:</strong> One tap opens your pre-filled receipt to our kit manager for swift approval!
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Batch Guarantee Box */}
                <div className="bg-[#FAF6EE] border border-[#EDE3D2] rounded-lg p-5 space-y-2 text-xs">
                  <div className="flex items-center space-x-2 text-[#70111A] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Batch #01 Guarantee</span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">
                    All jerseys are manufactured using high-tensile athletic jacquard with genuine embroidered crest patches and authentic collar piping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 text-neutral-500 font-mono text-xs">
          Loading Order Desk...
        </div>
      }
    >
      <OrderContent />
    </Suspense>
  );
}

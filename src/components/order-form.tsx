"use client";

import React, { useState } from "react";
import { OrderFormData, JerseySize } from "@/types/order";
import { clubConfig, formatBDT } from "@/lib/config";
import { Check, Copy, MessageCircle, AlertCircle, ShoppingBag, ShieldAlert, Sparkles } from "lucide-react";

interface OrderFormProps {
  initialValues?: Partial<OrderFormData>;
  onOrderSuccess: (order: any) => void;
  isSubmitting?: boolean;
}

export function OrderForm({
  initialValues,
  onOrderSuccess,
  isSubmitting = false,
}: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    member_name: initialValues?.member_name || "",
    phone_number: initialValues?.phone_number || "",
    jersey_size: initialValues?.jersey_size || "L",
    jersey_name: initialValues?.jersey_name || "",
    jersey_number: initialValues?.jersey_number !== undefined ? initialValues.jersey_number : 10,
    quantity: initialValues?.quantity || 1,
    notes: initialValues?.notes || "",
  });

  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sizes: JerseySize[] = ["S", "M", "L", "XL", "XXL"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "jersey_name") {
      setFormData((prev) => ({
        ...prev,
        jersey_name: value.toUpperCase().slice(0, 12),
      }));
    } else if (name === "jersey_number") {
      const num = parseInt(value, 10);
      setFormData((prev) => ({
        ...prev,
        jersey_number: isNaN(num) ? 0 : Math.min(99, Math.max(0, num)),
      }));
    } else if (name === "quantity") {
      const q = parseInt(value, 10);
      setFormData((prev) => ({
        ...prev,
        quantity: isNaN(q) ? 1 : Math.max(1, Math.min(15, q)),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Form Validations
    if (!formData.member_name.trim()) {
      setErrorMsg("Please enter your member name.");
      return;
    }

    const cleanPhone = formData.phone_number.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid Bangladeshi phone number (e.g. 01XXXXXXXXX).");
      return;
    }

    if (!formData.jersey_name.trim()) {
      setErrorMsg("Please enter the name to print on your jersey (max 12 characters).");
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to submit order.");
      }

      onOrderSuccess(json.order);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const totalAmount = formData.quantity * clubConfig.jerseyPrice;

  return (
    <div className="bg-white border border-editorial-border rounded-lg p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="border-b border-editorial-border pb-5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="editorial-kicker">Batch #01 Allocation</span>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#111111] mt-1">
              Member Jersey Order Form
            </h2>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs text-neutral-500 block font-medium">Price per unit</span>
            <span className="font-mono text-lg font-bold text-[#70111A]">
              {formatBDT(clubConfig.jerseyPrice)}
            </span>
          </div>
        </div>
        <p className="text-xs text-neutral-600 mt-2">
          Internal allocation round for the first 15 custom jerseys. Specify your custom print details below.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Member Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Member Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="member_name"
              value={formData.member_name}
              onChange={handleInputChange}
              required
              placeholder="e.g. Tanvir Ahmed"
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Phone Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
              placeholder="017XXXXXXXX"
              className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* 2. Custom Jersey Print Details */}
        <div className="p-4 bg-[#FAF6EE] rounded-lg border border-[#EDE3D2] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70111A] flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Printing Details</span>
            </span>
            <span className="text-[11px] text-neutral-500 font-mono">
              Embroidery & Serif Print
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Name on Jersey <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-neutral-500 font-mono">
                  {formData.jersey_name.length}/12
                </span>
              </div>
              <input
                type="text"
                name="jersey_name"
                value={formData.jersey_name}
                onChange={handleInputChange}
                required
                maxLength={12}
                placeholder="e.g. TANVIR"
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded text-sm font-serif font-bold tracking-wider uppercase text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#70111A] focus:border-transparent transition-all"
              />
              <p className="text-[10px] text-neutral-500 mt-1">
                Printed in classic serif capitals across upper back.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Jersey Number <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-neutral-500 font-mono">0 - 99</span>
              </div>
              <input
                type="number"
                name="jersey_number"
                value={formData.jersey_number}
                onChange={handleInputChange}
                required
                min={0}
                max={99}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded text-sm font-mono font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#70111A] focus:border-transparent transition-all"
              />
              <p className="text-[10px] text-neutral-500 mt-1">
                Collegiate double-stroke athletic digits.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Size Selector & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Select Size <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                className="text-[11px] text-[#70111A] underline font-semibold hover:text-black"
              >
                {sizeGuideOpen ? "Close Chart" : "View Sizing Guide"}
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, jersey_size: sz }))}
                  className={`py-2.5 text-xs font-bold rounded border transition-all ${
                    formData.jersey_size === sz
                      ? "bg-[#111111] text-white border-black shadow-sm"
                      : "bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Sizing Chart Modal/Drawer */}
            {sizeGuideOpen && (
              <div className="mt-3 p-3 bg-neutral-100 rounded text-[11px] border border-neutral-200 animate-in fade-in duration-150">
                <div className="font-bold text-neutral-800 mb-1.5 uppercase tracking-wider text-[10px]">
                  Official Garment Sizing (Inches)
                </div>
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 text-neutral-500 text-[10px]">
                      <th className="py-1">Size</th>
                      <th className="py-1">Chest</th>
                      <th className="py-1">Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 font-mono">
                    <tr><td className="py-1 font-bold">S</td><td>38"</td><td>27"</td></tr>
                    <tr><td className="py-1 font-bold">M</td><td>40"</td><td>28"</td></tr>
                    <tr><td className="py-1 font-bold">L</td><td>42"</td><td>29"</td></tr>
                    <tr><td className="py-1 font-bold">XL</td><td>44"</td><td>30"</td></tr>
                    <tr><td className="py-1 font-bold">XXL</td><td>46"</td><td>31"</td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Quantity
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min={1}
                max={15}
                className="w-24 px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm font-mono font-bold text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="text-xs text-neutral-600">
                Total: <span className="font-bold text-[#111111] font-mono text-sm">{formatBDT(totalAmount)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Notes / Special Request */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
            Special Notes / Fitting Preferences (Optional)
          </label>
          <textarea
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="e.g. Captain print, sleeve fit preference, or delivery note..."
            className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded text-xs text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* 5. Pricing & Submit Button */}
        <div className="pt-4 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-600">
            Payment via <span className="font-bold text-neutral-900">bKash</span> manual transfer upon confirmation.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#111111] hover:bg-black text-white px-8 py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            <ShoppingBag className="w-4 h-4 text-[#F3EBDD]" />
            <span>{isSubmitting ? "Submitting Order..." : "Confirm & Place Order"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

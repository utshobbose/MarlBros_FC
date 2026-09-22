import { ClubConfig } from "@/types/order";

export const clubConfig: ClubConfig = {
  name: "MarlBros FC",
  shortName: "MBFC",
  foundedYear: 2023,
  originalMembers: 7,
  currentMembers: 30,
  batchSize: 15, // Phase 1 internal run limit
  jerseyPrice: 850, // ৳850 BDT
  bKashNumber: process.env.NEXT_PUBLIC_BKASH_NUMBER || "01712-345678",
  bKashType: "Personal",
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8801712345678",
  adminPasscode: process.env.NEXT_PUBLIC_ADMIN_PASSCODE || "marlbros2026",
};

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("en-BD")}`;
}

export function generateOrderRef(): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `MBFC-${year}-${randomSuffix}`;
}

export function generateWhatsAppLink(
  phoneNumber: string,
  orderRef: string,
  memberName: string,
  size: string,
  jerseyName: string,
  jerseyNumber: number,
  quantity: number
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  const message = `Hi MarlBros FC! I just submitted my jersey order:\n- Order Ref: ${orderRef}\n- Member: ${memberName}\n- Jersey Name: ${jerseyName}\n- Number: ${jerseyNumber}\n- Size: ${size}\n- Quantity: ${quantity}\n\nPlease confirm my order. I am sending payment via bKash.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

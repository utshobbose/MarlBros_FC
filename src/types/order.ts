export type JerseySize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type OrderStatus = 'pending_payment' | 'paid' | 'fulfilled' | 'cancelled';

export interface Order {
  id: string;
  created_at: string;
  order_reference: string;
  member_name: string;
  phone_number: string;
  jersey_size: JerseySize;
  jersey_name: string;
  jersey_number: number;
  quantity: number;
  status: OrderStatus;
  notes?: string;
  total_amount: number;
}

export interface OrderFormData {
  member_name: string;
  phone_number: string;
  jersey_size: JerseySize;
  jersey_name: string;
  jersey_number: number;
  quantity: number;
  notes?: string;
}

export interface ClubConfig {
  name: string;
  shortName: string;
  foundedYear: number;
  originalMembers: number;
  currentMembers: number;
  batchSize: number;
  jerseyPrice: number; // in BDT
  bKashNumber: string;
  bKashType: 'Personal' | 'Merchant';
  whatsAppNumber: string; // international format without plus e.g. 8801700000000
  adminPasscode: string;
}

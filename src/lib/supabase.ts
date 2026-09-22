import { createClient } from "@supabase/supabase-js";
import { Order, OrderFormData, OrderStatus } from "@/types/order";
import { clubConfig, generateOrderRef } from "./config";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("your-project")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Local storage fallback for seamless testing without Supabase credentials
const LOCAL_STORAGE_KEY = "marlbros_fc_orders_v1";

// Seed sample orders for demo/admin view if empty
export const initialSeedOrders: Order[] = [
  {
    id: "seed-1",
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    order_reference: "MBFC-2026-1001",
    member_name: "Tanvir Ahmed",
    phone_number: "01711223344",
    jersey_size: "L",
    jersey_name: "TANVIR",
    jersey_number: 10,
    quantity: 1,
    status: "paid",
    notes: "Captain's jersey - size L fits perfectly",
    total_amount: 850,
  },
  {
    id: "seed-2",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    order_reference: "MBFC-2026-1002",
    member_name: "Rifat Hasan",
    phone_number: "01819876543",
    jersey_size: "XL",
    jersey_name: "RIFAT",
    jersey_number: 7,
    quantity: 1,
    status: "pending_payment",
    notes: "Wing forward",
    total_amount: 850,
  },
  {
    id: "seed-3",
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    order_reference: "MBFC-2026-1003",
    member_name: "Shakil Mahmud",
    phone_number: "01912345678",
    jersey_size: "M",
    jersey_name: "SHAKIL",
    jersey_number: 1,
    quantity: 1,
    status: "fulfilled",
    notes: "Goalkeeper edition",
    total_amount: 850,
  },
];

function getStoredLocalOrders(): Order[] {
  if (typeof window === "undefined") return initialSeedOrders;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeedOrders));
      return initialSeedOrders;
    }
    return JSON.parse(raw);
  } catch {
    return initialSeedOrders;
  }
}

function saveStoredLocalOrders(orders: Order[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
  } catch (err) {
    console.error("Failed to save local orders:", err);
  }
}

export async function submitOrder(formData: OrderFormData): Promise<{ data: Order | null; error: string | null }> {
  const orderReference = generateOrderRef();
  const totalAmount = formData.quantity * clubConfig.jerseyPrice;

  const newOrder: Order = {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `order-${Date.now()}`,
    created_at: new Date().toISOString(),
    order_reference: orderReference,
    member_name: formData.member_name.trim(),
    phone_number: formData.phone_number.trim(),
    jersey_size: formData.jersey_size,
    jersey_name: formData.jersey_name.trim().toUpperCase(),
    jersey_number: Number(formData.jersey_number),
    quantity: Number(formData.quantity) || 1,
    status: "pending_payment",
    notes: formData.notes?.trim() || "",
    total_amount: totalAmount,
  };

  // If live Supabase is configured, insert into Postgres
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("orders")
        .insert([
          {
            order_reference: newOrder.order_reference,
            member_name: newOrder.member_name,
            phone_number: newOrder.phone_number,
            jersey_size: newOrder.jersey_size,
            jersey_name: newOrder.jersey_name,
            jersey_number: newOrder.jersey_number,
            quantity: newOrder.quantity,
            status: newOrder.status,
            notes: newOrder.notes,
            total_amount: newOrder.total_amount,
          },
        ])
        .select()
        .single();

      if (error) {
        console.warn("Supabase insert error, falling back to local storage:", error.message);
      } else if (data) {
        // Also sync local cache
        const local = getStoredLocalOrders();
        saveStoredLocalOrders([data as Order, ...local]);
        return { data: data as Order, error: null };
      }
    } catch (e: any) {
      console.warn("Supabase network error, fallback to local:", e?.message);
    }
  }

  // Fallback to local storage
  const current = getStoredLocalOrders();
  const updated = [newOrder, ...current];
  saveStoredLocalOrders(updated);
  return { data: newOrder, error: null };
}

export async function fetchAllOrders(): Promise<{ data: Order[]; error: string | null }> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return { data: data as Order[], error: null };
      }
    } catch (e: any) {
      console.warn("Supabase fetch failed, loading local orders:", e?.message);
    }
  }

  return { data: getStoredLocalOrders(), error: null };
}

export async function updateOrderStatus(
  orderId: string,
  newStatus: OrderStatus
): Promise<{ success: boolean; error: string | null }> {
  if (supabase) {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId);

      if (error) {
        console.warn("Supabase update error:", error.message);
      }
    } catch (e: any) {
      console.warn("Supabase update failed:", e?.message);
    }
  }

  // Update local
  const current = getStoredLocalOrders();
  const updated = current.map((ord) =>
    ord.id === orderId ? { ...ord, status: newStatus } : ord
  );
  saveStoredLocalOrders(updated);
  return { success: true, error: null };
}

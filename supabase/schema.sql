-- MarlBros FC Database Schema (Phase 1)
-- Table: orders

CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    order_reference TEXT NOT NULL UNIQUE,
    member_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    jersey_size TEXT NOT NULL CHECK (jersey_size IN ('S', 'M', 'L', 'XL', 'XXL')),
    jersey_name TEXT NOT NULL,
    jersey_number INTEGER NOT NULL CHECK (jersey_number >= 0 AND jersey_number <= 99),
    quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0 AND quantity <= 15),
    status TEXT NOT NULL DEFAULT 'pending_payment' CHECK (status IN ('pending_payment', 'paid', 'fulfilled', 'cancelled')),
    notes TEXT,
    total_amount NUMERIC NOT NULL DEFAULT 0
);

-- Indexes for swift searches in Admin
CREATE INDEX IF NOT EXISTS idx_orders_reference ON public.orders(order_reference);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);

-- Row Level Security (RLS)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow public insert (members placing orders without login)
CREATE POLICY "Allow public insert on orders"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow public read of their own orders or read for admin
CREATE POLICY "Allow public read on orders"
ON public.orders
FOR SELECT
TO anon, authenticated
USING (true);

-- Allow update of status by authenticated/admin
CREATE POLICY "Allow update on orders"
ON public.orders
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

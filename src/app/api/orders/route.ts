import { NextResponse } from "next/server";
import { OrderFormData } from "@/types/order";
import { submitOrder, fetchAllOrders } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await fetchAllOrders();
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ orders: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: OrderFormData = await request.json();

    if (!body.member_name || !body.phone_number || !body.jersey_name) {
      return NextResponse.json(
        { error: "Missing required fields (member name, phone number, jersey name)" },
        { status: 400 }
      );
    }

    const { data, error } = await submitOrder(body);
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ order: data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

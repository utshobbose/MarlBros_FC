"use client";

import React, { useState, useEffect } from "react";
import { Order, OrderStatus } from "@/types/order";
import { fetchAllOrders, updateOrderStatus } from "@/lib/supabase";
import { clubConfig, formatBDT } from "@/lib/config";
import {
  Download,
  Search,
  Filter,
  Lock,
  Unlock,
  CheckCircle,
  Clock,
  Package,
  MessageCircle,
  RefreshCw,
  Eye,
  AlertCircle,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Check saved admin session in sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("mbfd_admin_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
        loadOrders();
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === clubConfig.adminPasscode) {
      setIsAuthenticated(true);
      setPasscodeError(false);
      sessionStorage.setItem("mbfd_admin_auth", "true");
      loadOrders();
    } else {
      setPasscodeError(true);
    }
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const { data } = await fetchAllOrders();
      setOrders(data || []);
    } catch (err) {
      console.error("Failed to load orders", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: OrderStatus) => {
    const res = await updateOrderStatus(orderId, newStatus);
    if (res.success) {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      setActionSuccess(`Order updated to ${newStatus}`);
      setTimeout(() => setActionSuccess(null), 3000);
    }
  };

  // CSV Export for the Garment Screen Printer
  const handleExportCSV = () => {
    if (orders.length === 0) return;

    const headers = [
      "Order Ref",
      "Timestamp",
      "Member Name",
      "Phone",
      "Size",
      "Jersey Name (Print)",
      "Jersey Number (Print)",
      "Quantity",
      "Status",
      "Notes",
      "Total (BDT)",
    ];

    const rows = orders.map((o) => [
      `"${o.order_reference}"`,
      `"${new Date(o.created_at).toLocaleString()}"`,
      `"${o.member_name.replace(/"/g, '""')}"`,
      `"${o.phone_number}"`,
      `"${o.jersey_size}"`,
      `"${o.jersey_name.replace(/"/g, '""')}"`,
      o.jersey_number,
      o.quantity,
      `"${o.status}"`,
      `"${(o.notes || "").replace(/"/g, '""')}"`,
      o.total_amount,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `marlbros_fc_jersey_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.member_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.jersey_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.phone_number.includes(searchQuery) ||
      order.order_reference.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const totalOrders = orders.length;
  const totalJerseys = orders.reduce((sum, o) => sum + (o.quantity || 1), 0);
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const pendingCount = orders.filter((o) => o.status === "pending_payment").length;
  const paidCount = orders.filter((o) => o.status === "paid").length;
  const fulfilledCount = orders.filter((o) => o.status === "fulfilled").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-neutral-50 px-4">
        <div className="max-w-md w-full bg-white border border-editorial-border p-8 rounded-xl shadow-card text-center space-y-6">
          <div className="w-12 h-12 bg-[#70111A] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <span className="editorial-kicker text-neutral-400">MANAGEMENT PORTAL</span>
            <h1 className="font-serif text-2xl font-bold text-[#111111]">
              MarlBros FC Order Desk
            </h1>
            <p className="text-xs text-neutral-500">
              Enter the club management passcode to review and export orders.
            </p>
          </div>

          {passcodeError && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
              Incorrect passcode. Default is <code className="font-mono font-bold">marlbros2026</code>.
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode..."
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded text-center text-sm font-mono tracking-widest focus:bg-white focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />

            <button
              type="submit"
              className="w-full bg-[#111111] hover:bg-black text-white py-3 rounded text-xs font-bold uppercase tracking-widest transition-all"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-[11px] text-neutral-400 font-mono">
            Default test PIN: <span className="font-bold text-neutral-600">marlbros2026</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-editorial-border pb-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="editorial-kicker text-[#70111A]">ADMINISTRATIVE DESK</span>
              <span className="text-neutral-400">·</span>
              <span className="text-xs font-mono text-emerald-600 font-bold">Authorized</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-[#111111] mt-1">
              Batch #01 Order Ledger
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={loadOrders}
              className="p-2.5 bg-white border border-neutral-300 rounded text-neutral-700 hover:bg-neutral-100 transition-colors"
              title="Refresh Orders"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleExportCSV}
              disabled={orders.length === 0}
              className="inline-flex items-center space-x-2 bg-[#70111A] hover:bg-[#580B13] text-white px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export Printer CSV</span>
            </button>
          </div>
        </div>

        {/* Action feedback */}
        {actionSuccess && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center space-x-2 animate-in fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Total Orders</span>
            <span className="font-mono text-2xl font-black text-[#111111]">{totalOrders}</span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Jerseys Ordered</span>
            <span className="font-mono text-2xl font-black text-[#70111A]">
              {totalJerseys} <span className="text-xs text-neutral-400 font-sans">/ 15</span>
            </span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Pending bKash</span>
            <span className="font-mono text-2xl font-black text-amber-600">{pendingCount}</span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Paid & Verified</span>
            <span className="font-mono text-2xl font-black text-emerald-600">{paidCount}</span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Fulfilled / Printed</span>
            <span className="font-mono text-2xl font-black text-blue-600">{fulfilledCount}</span>
          </div>

          <div className="bg-white p-4 rounded-lg border border-editorial-border">
            <span className="text-[10px] uppercase font-bold text-neutral-400 block">Total Booked</span>
            <span className="font-mono text-xl font-black text-[#111111]">{formatBDT(totalRevenue)}</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-lg border border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search member, jersey name, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded text-xs font-semibold focus:outline-none"
            >
              <option value="all">All Statuses ({orders.length})</option>
              <option value="pending_payment">Pending Payment</option>
              <option value="paid">Paid</option>
              <option value="fulfilled">Fulfilled</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-editorial-border rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-100 border-b border-editorial-border text-[10px] uppercase tracking-wider font-extrabold text-neutral-500">
                  <th className="py-3 px-4">Order Ref</th>
                  <th className="py-3 px-4">Member Name</th>
                  <th className="py-3 px-4">Jersey Name</th>
                  <th className="py-3 px-4">No.</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Qty</th>
                  <th className="py-3 px-4">Phone / WhatsApp</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-8 text-center text-neutral-400">
                      No orders found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => {
                    const cleanPhone = order.phone_number.replace(/[^0-9]/g, "");
                    const waLink = `https://wa.me/88${cleanPhone}?text=Hi%20${encodeURIComponent(
                      order.member_name
                    )}%2C%20regarding%20your%20MarlBros%20FC%20Jersey%20Order%20(${order.order_reference})...`;

                    return (
                      <tr key={order.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-neutral-800">
                          {order.order_reference}
                          <div className="text-[10px] text-neutral-400 font-sans font-normal">
                            {new Date(order.created_at).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-semibold text-neutral-900">
                          {order.member_name}
                          {order.notes && (
                            <div className="text-[10px] text-neutral-500 font-normal italic">
                              "{order.notes}"
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 font-serif font-bold text-[#70111A]">
                          {order.jersey_name}
                        </td>
                        <td className="py-3 px-4 font-mono font-black text-neutral-800">
                          #{order.jersey_number}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 bg-neutral-200 text-neutral-800 rounded font-mono font-bold text-[11px]">
                            {order.jersey_size}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono">{order.quantity}</td>
                        <td className="py-3 px-4 font-mono">
                          <div className="flex items-center space-x-2">
                            <span>{order.phone_number}</span>
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chat on WhatsApp"
                              className="text-emerald-600 hover:text-emerald-700"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-neutral-900">
                          {formatBDT(order.total_amount)}
                        </td>
                        <td className="py-3 px-4">
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(order.id, e.target.value as OrderStatus)
                            }
                            className={`px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider border focus:outline-none ${
                              order.status === "paid"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                                : order.status === "fulfilled"
                                ? "bg-blue-50 text-blue-700 border-blue-300"
                                : "bg-amber-50 text-amber-700 border-amber-300"
                            }`}
                          >
                            <option value="pending_payment">Pending</option>
                            <option value="paid">Paid</option>
                            <option value="fulfilled">Fulfilled</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() =>
                              handleStatusChange(
                                order.id,
                                order.status === "pending_payment" ? "paid" : "fulfilled"
                              )
                            }
                            className="text-[11px] font-bold text-[#70111A] hover:underline"
                          >
                            {order.status === "pending_payment" ? "Mark Paid" : "Mark Done"}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

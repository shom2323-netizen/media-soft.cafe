"use client";

import { Printer, FileText, Image, Copy } from "lucide-react";

const services = [
  { icon: FileText, label: "طباعة مستندات", count: 23, price: "250 د.ع" },
  { icon: Image, label: "طباعة صور", count: 8, price: "500 د.ع" },
  { icon: Copy, label: "نسخ وتصوير", count: 16, price: "100 د.ع" },
];

const recentOrders = [
  { id: 1, type: "طباعة مستند", pages: 15, customer: "أحمد محمد", total: "750 د.ع", time: "10:30" },
  { id: 2, type: "طباعة صور", pages: 4, customer: "سارة علي", total: "2,000 د.ع", time: "11:15" },
  { id: 3, type: "نسخ", pages: 30, customer: "محمد حسن", total: "1,500 د.ع", time: "12:00" },
  { id: 4, type: "طباعة مستند", pages: 8, customer: "فاطمة أحمد", total: "400 د.ع", time: "13:45" },
  { id: 5, type: "طباعة صور", pages: 2, customer: "عمر خالد", total: "1,000 د.ع", time: "14:20" },
];

export default function PrintingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">خدمات الطباعة</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          إدارة طلبات الطباعة والنسخ والتصوير
        </p>
      </div>

      {/* Services Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex items-center gap-4 rounded-xl border bg-card p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <service.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm text-muted-foreground">
                {service.label}
              </span>
              <span className="text-lg font-bold text-card-foreground">
                {service.count} طلب
              </span>
              <span className="text-xs text-muted-foreground">
                {"السعر: "}{service.price}{" / صفحة"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* New Order Button */}
      <div className="flex">
        <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          <Printer className="h-4 w-4" />
          طلب طباعة جديد
        </button>
      </div>

      {/* Recent Orders */}
      <div className="overflow-x-auto rounded-xl border bg-card">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-bold text-card-foreground">
            الطلبات الأخيرة
          </h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                النوع
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                العميل
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                الصفحات
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                المبلغ
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                الوقت
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 font-medium text-card-foreground">
                  {order.type}
                </td>
                <td className="px-6 py-4 text-card-foreground">
                  {order.customer}
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {order.pages}
                </td>
                <td className="px-6 py-4 font-medium text-card-foreground">
                  {order.total}
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {order.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

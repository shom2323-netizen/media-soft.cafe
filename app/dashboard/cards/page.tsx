"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";

interface Card {
  id: number;
  holder: string;
  number: string;
  status: "active" | "expired" | "suspended";
  expiresAt: string;
}

const initialCards: Card[] = [
  { id: 1, holder: "أحمد محمد", number: "MS-001", status: "active", expiresAt: "2026-06-15" },
  { id: 2, holder: "سارة علي", number: "MS-002", status: "active", expiresAt: "2026-04-20" },
  { id: 3, holder: "محمد حسن", number: "MS-003", status: "expired", expiresAt: "2026-01-10" },
  { id: 4, holder: "فاطمة أحمد", number: "MS-004", status: "active", expiresAt: "2026-08-01" },
  { id: 5, holder: "عمر خالد", number: "MS-005", status: "suspended", expiresAt: "2026-03-25" },
  { id: 6, holder: "ليلى حسين", number: "MS-006", status: "active", expiresAt: "2026-09-30" },
];

const statusLabels: Record<Card["status"], string> = {
  active: "نشطة",
  expired: "منتهية",
  suspended: "معلقة",
};

const statusColors: Record<Card["status"], string> = {
  active: "bg-primary/10 text-primary",
  expired: "bg-destructive/10 text-destructive",
  suspended: "bg-secondary/80 text-secondary-foreground",
};

export default function CardsPage() {
  const [search, setSearch] = useState("");
  const [cards] = useState<Card[]>(initialCards);

  const filtered = cards.filter(
    (c) =>
      c.holder.includes(search) || c.number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">إدارة البطاقات</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            عرض وإدارة بطاقات العملاء
          </p>
        </div>
        <button className="flex items-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          بطاقة جديدة
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="بحث بالاسم أو رقم البطاقة..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-input bg-background py-2.5 pe-4 ps-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                رقم البطاقة
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                صاحب البطاقة
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                الحالة
              </th>
              <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                تاريخ الانتهاء
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((card) => (
              <tr key={card.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 font-medium text-card-foreground">
                  {card.number}
                </td>
                <td className="px-6 py-4 text-card-foreground">{card.holder}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusColors[card.status]}`}
                  >
                    {statusLabels[card.status]}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {card.expiresAt}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-muted-foreground"
                >
                  لا توجد نتائج
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

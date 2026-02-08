"use client";

import {
  CreditCard,
  Monitor,
  Printer,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "البطاقات النشطة",
    value: "124",
    change: "+12%",
    icon: CreditCard,
  },
  {
    label: "الأجهزة المتصلة",
    value: "18",
    change: "3 متاح",
    icon: Monitor,
  },
  {
    label: "طلبات الطباعة اليوم",
    value: "47",
    change: "+8%",
    icon: Printer,
  },
  {
    label: "إيرادات اليوم",
    value: "2,450 د.ع",
    change: "+15%",
    icon: TrendingUp,
  },
];

const recentActivity = [
  { id: 1, action: "بطاقة جديدة", user: "أحمد محمد", time: "منذ 5 دقائق" },
  { id: 2, action: "طباعة مستند", user: "سارة علي", time: "منذ 12 دقيقة" },
  { id: 3, action: "تجديد اشتراك", user: "محمد حسن", time: "منذ 30 دقيقة" },
  { id: 4, action: "جلسة كمبيوتر", user: "فاطمة أحمد", time: "منذ 45 دقيقة" },
  { id: 5, action: "بطاقة جديدة", user: "عمر خالد", time: "منذ ساعة" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">لوحة التحكم</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          نظرة عامة على أداء المقهى
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start justify-between rounded-xl border bg-card p-5"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-primary font-medium">
                {stat.change}
              </span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <stat.icon className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border bg-card">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-bold text-card-foreground">
            النشاط الأخير
          </h2>
        </div>
        <div className="divide-y">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-card-foreground">
                  {item.action}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.user}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

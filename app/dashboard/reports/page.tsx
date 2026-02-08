"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";

const weeklyData = [
  { day: "السبت", revenue: 4200 },
  { day: "الأحد", revenue: 3800 },
  { day: "الاثنين", revenue: 5100 },
  { day: "الثلاثاء", revenue: 4700 },
  { day: "الأربعاء", revenue: 6200 },
  { day: "الخميس", revenue: 5800 },
  { day: "الجمعة", revenue: 7100 },
];

const summaryStats = [
  {
    label: "إجمالي الإيرادات",
    value: "36,900 د.ع",
    change: "+18%",
    up: true,
    icon: DollarSign,
  },
  {
    label: "عدد العملاء",
    value: "284",
    change: "+12%",
    up: true,
    icon: Users,
  },
  {
    label: "متوسط الإنفاق",
    value: "130 د.ع",
    change: "-3%",
    up: false,
    icon: TrendingDown,
  },
  {
    label: "معدل النمو",
    value: "15%",
    change: "+5%",
    up: true,
    icon: TrendingUp,
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          التقارير والإحصائيات
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          تحليل أداء المقهى خلال الفترة الحالية
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start justify-between rounded-xl border bg-card p-5"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </span>
              <span
                className={`text-xs font-medium ${
                  stat.up ? "text-primary" : "text-destructive"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <stat.icon className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="mb-6 text-lg font-bold text-card-foreground">
          إيرادات الأسبوع
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="day"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--card-foreground))",
                }}
              />
              <Bar
                dataKey="revenue"
                fill="hsl(var(--primary))"
                radius={[6, 6, 0, 0]}
                name="الإيرادات (د.ع)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import {
  Monitor,
  Printer,
  CreditCard,
  BarChart3,
  MapPin,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "إدارة البطاقات",
    description: "تتبع البطاقات النشطة وإدارة الاشتراكات بسهولة",
  },
  {
    icon: Printer,
    title: "خدمات الطباعة",
    description: "إدارة طلبات الطباعة والمسح الضوئي والتصوير",
  },
  {
    icon: Monitor,
    title: "أجهزة الكمبيوتر",
    description: "مراقبة حالة الأجهزة وجلسات الاستخدام",
  },
  {
    icon: BarChart3,
    title: "التقارير والإحصائيات",
    description: "تقارير مفصلة عن الإيرادات والمصروفات",
  },
  {
    icon: MapPin,
    title: "إدارة الفروع",
    description: "إدارة فروع متعددة من لوحة تحكم واحدة",
  },
  {
    icon: Shield,
    title: "أمان متقدم",
    description: "حماية بيانات العملاء بأحدث تقنيات الأمان",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-card border-b">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Monitor className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            MediaSoft Cafe
          </span>
        </div>
        <Link
          href="/login"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          تسجيل الدخول
        </Link>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          نظام إدارة المقاهي
          <span className="block text-primary">الأكثر تطوراً</span>
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          أدر مقهاك بكل سهولة - تتبع البطاقات، خدمات الطباعة، الأجهزة،
          والإيرادات من مكان واحد
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/login"
            className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ابدأ الآن
          </Link>
          <a
            href="#features"
            className="rounded-lg border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
          >
            اكتشف المزيد
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-card">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
            كل ما تحتاجه لإدارة مقهاك
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            مجموعة أدوات متكاملة صممت خصيصاً لتلبية احتياجات المقاهي ومراكز
            الخدمات
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-xl border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center px-6 py-8 border-t">
        <p className="text-sm text-muted-foreground">
          {"© 2026 MediaSoft Cafe - جميع الحقوق محفوظة"}
        </p>
      </footer>
    </div>
  );
}

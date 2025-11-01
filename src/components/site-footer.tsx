import Link from "next/link";

const footerLinks = [
  { label: "Sazanami-Analytics", href: "/services" },
  { label: "会社情報", href: "/company" },
  { label: "ポリシー", href: "/policies" },
  { label: "お問い合わせ", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="badge border-primary/40 bg-primary/10 text-primary-light">
              Sazanami Inc.
            </p>
            <p className="mt-4 max-w-xl text-sm text-slate-400">
              教育領域におけるAI×データ活用の社会実装を通じ，高校生の挑戦が正当に評価される世界を目指しています。
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sazanami Inc. All rights reserved.
          </p>
          <p>お問い合わせへの初回返信は3営業日以内を目安としています。</p>
        </div>
      </div>
    </footer>
  );
}

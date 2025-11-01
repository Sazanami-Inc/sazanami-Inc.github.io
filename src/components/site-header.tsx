"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Sazanami-Analytics", href: "/services" },
  { name: "会社情報", href: "/company" },
  { name: "ポリシー", href: "/policies" },
  { name: "お問い合わせ", href: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-wide text-white"
        >
          <span className="badge border-primary/60 bg-primary/20 text-sm uppercase tracking-[0.3em] text-primary-light">
            Sazanami Inc.
          </span>
          <span className="hidden text-sm font-medium text-slate-300 sm:inline">
            高校生の努力を証拠に変える
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-white">
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            導入相談はこちら
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-white/20 p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="メニューを開閉"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30"
            >
              導入相談はこちら
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

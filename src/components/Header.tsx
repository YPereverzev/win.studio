"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink/90 text-mist backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent text-mist"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group relative z-10">
          <span className="font-display text-2xl tracking-tight text-mist transition group-hover:text-amber-soft sm:text-[1.65rem]">
            {site.shortName}
          </span>
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.28em] text-mist/60">
            Nails · {site.city}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition ${
                  active ? "text-amber-soft" : "text-mist/75 hover:text-mist"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/termin"
            className="hidden rounded-sm bg-amber px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-amber-soft sm:inline-flex"
          >
            Termin buchen
          </Link>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="relative z-10 flex h-10 w-10 items-center justify-center xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-500 xl:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-ink/95 px-5 py-6 backdrop-blur-md">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 font-display text-2xl text-mist/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/termin"
                className="inline-flex rounded-sm bg-amber px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink"
              >
                Termin buchen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

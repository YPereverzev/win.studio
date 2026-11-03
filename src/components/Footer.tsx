import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer-deep text-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-tight">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/65">
            Nagelstudio in {site.city} für Maniküre, Pediküre, Wimpernverlängerung
            und Waxing — präzise, hygienisch, in ruhigem Atelier-Ambiente.
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-soft">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/45">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-mist/75 transition hover:text-amber-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/45">
              Rufen Sie uns an
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-xl text-mist hover:text-amber-soft"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/45">
              Schreiben Sie uns
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-sm text-mist/75 hover:text-amber-soft"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/45">
              Unsere Adresse
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist/75">
              {site.address}
              <br />
              {site.zip}
              <br />
              <span className="text-mist/50">{site.hours}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-mist/40 lg:px-8">
        © {new Date().getFullYear()} {site.name} · Demo-Marketingseite · Keine
        Verbindung zur Originalmarke
      </div>
    </footer>
  );
}

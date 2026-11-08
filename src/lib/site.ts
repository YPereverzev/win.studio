export const site = {
  name: "Auralis Nails",
  shortName: "Auralis",
  tagline: "Maniküre · Wimpern · Waxing",
  city: "Dortmund",
  phone: "+49 160 9580 6050",
  phoneHref: "tel:+4916095806050",
  whatsapp: "+49 160 9580 6050",
  whatsappHref: "https://wa.me/4916095806050",
  email: "hallo@auralis-nails.demo",
  address: "Schwanenwall 7",
  zip: "44145 Dortmund",
  hours: "Mo–Sa · 10:00–19:00",
} as const;

export const nav = [
  { href: "/manikuere", label: "Maniküre & Pediküre" },
  { href: "/wimpern", label: "Wimpern" },
  { href: "/waxing", label: "Waxing" },
  { href: "/preise", label: "Preise" },
  { href: "/gutscheine", label: "Gutscheine" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    href: "/manikuere",
    title: "Maniküre & Pediküre",
    lead: "Präzise Nagelpflege von klassisch bis Gel — Hände und Füße in ruhigem Atelier-Ambiente.",
    imageKey: "nails" as const,
  },
  {
    href: "/wimpern",
    title: "Wimpernverlängerung",
    lead: "Natürlicher Schwung oder dramatischer Look — Einzelwimpern, Volumen und Auffüllen.",
    imageKey: "lashes" as const,
  },
  {
    href: "/waxing",
    title: "Waxing & Epilation",
    lead: "Sanfte Wachsbehandlung für Gesicht und Körper — glatte Haut mit klaren Hygienestandards.",
    imageKey: "waxing" as const,
  },
] as const;

export const manicurePrices = [
  { label: "Klassische Maniküre", price: "40 €" },
  { label: "Maniküre mit Nagellack", price: "45 €" },
  { label: "Spa-Maniküre Orchidea", price: "53 €" },
  { label: "Maniküre mit Gellack", price: "55 €" },
  { label: "Maniküre mit Gel verstärken", price: "70 €" },
  { label: "French / Babyboomer", price: "+10 €" },
  { label: "Nagelverlängerung mit Gel", price: "85 €" },
  { label: "Gel / Acryl entfernen", price: "15 €" },
] as const;

export const pedicurePrices = [
  { label: "Fußpflege komplett", price: "45 €" },
  { label: "Fußpflege mit Nagellack", price: "53 €" },
  { label: "Spa-Fußpflege Orchidea", price: "63 €" },
  { label: "Fußpflege mit Gellack", price: "65 €" },
  { label: "French / Babyboomer", price: "+10 €" },
] as const;

export const lashPrices = [
  { label: "Classic 1:1 — Neuset", price: "89 €" },
  { label: "Classic 1:1 — Auffüllen (bis 3 Wochen)", price: "49 €" },
  { label: "Volumen 2–3D — Neuset", price: "109 €" },
  { label: "Volumen — Auffüllen (bis 3 Wochen)", price: "59 €" },
  { label: "Mega-Volumen — Neuset", price: "129 €" },
  { label: "Wimpernentfernung", price: "25 €" },
  { label: "Lifting & Färben", price: "55 €" },
] as const;

export const waxingPrices = [
  { label: "Augenbrauen", price: "18 €" },
  { label: "Oberlippe", price: "12 €" },
  { label: "Kinn", price: "14 €" },
  { label: "Gesicht komplett", price: "39 €" },
  { label: "Achseln", price: "22 €" },
  { label: "Unterarme", price: "28 €" },
  { label: "Beine halb", price: "35 €" },
  { label: "Beine ganz", price: "55 €" },
  { label: "Bikini klassisch", price: "32 €" },
  { label: "Brazilian", price: "55 €" },
] as const;

export const locations = [
  {
    name: "Auralis Nails City",
    address: "Schwanenwall 7, 44145 Dortmund",
    focus: "Maniküre, Wimpern & Waxing im Zentrum",
  },
  {
    name: "Auralis Nails Kreuzviertel",
    address: "Lindermannstr. 23, 44137 Dortmund",
    focus: "Nagelpflege & Beauty im Kreuzviertel",
  },
  {
    name: "Auralis Atelier Hellweg",
    address: "Wambeler Hellweg 118, 44143 Dortmund",
    focus: "Erweiterte Beauty-Behandlungen",
  },
] as const;

export const strengths = [
  {
    title: "Präzision",
    text: "Erfahrene Meisterinnen mit individuellem Blick für Form, Länge und Hauttyp.",
  },
  {
    title: "Hygiene",
    text: "Sterile Instrumente, klare Abläufe und höchste Standards in jedem Behandlungsraum.",
  },
  {
    title: "Qualität",
    text: "Ausgewählte Produkte und Materialien — langanhaltend, hautverträglich, modern.",
  },
  {
    title: "55.000+ Gäste",
    text: "Viele Stammkundinnen und -kunden, die für Pflege und Atmosphäre wiederkommen.",
  },
] as const;

export const reviews = [
  {
    name: "Cinderella K.",
    text: "Nagelstudio top — sauber, freundlich, Maniküre hält lange. Immer wieder gerne.",
  },
  {
    name: "Murat G.",
    text: "Sehr erholsam und professionell. Kann ich nur weiterempfehlen.",
  },
  {
    name: "S. K.",
    text: "Termin pünktlich, Beratung ehrlich, Ergebnis genau wie besprochen.",
  },
  {
    name: "Nadine W.",
    text: "Wimpern sehen natürlich aus, Waxing war sanft. Ambiente sehr schön.",
  },
] as const;

export const faqsHome = [
  {
    q: "Wo bekomme ich in Dortmund eine professionelle Maniküre?",
    a: "Bei Auralis Nails bieten wir klassische Maniküre, Gellack, Gelmodellage und Spa-Behandlungen an mehreren Standorten in Dortmund an.",
  },
  {
    q: "Welche Wimpernverlängerungen gibt es?",
    a: "Wir arbeiten mit Classic 1:1, Volumen und Mega-Volumen sowie Lifting & Färben — abgestimmt auf Ihren Augen- und Lifestyle-Typ.",
  },
  {
    q: "Ist Waxing auch für empfindliche Haut geeignet?",
    a: "Ja. Wir wählen Wachs und Technik nach Hautzone und Empfindlichkeit und beraten Sie vor der Behandlung.",
  },
  {
    q: "Kann man einen Gutschein verschenken?",
    a: "Ja. Gutscheine für Maniküre, Pediküre, Wimpern oder Waxing eignen sich für Geburtstag, Jahrestag oder als kleine Aufmerksamkeit.",
  },
] as const;

export const faqsMani = [
  {
    q: "Was gehört zu einer professionellen Maniküre?",
    a: "Formgebung, Nagelhautpflege und je nach Wahl Lack, Gel oder Spa-Extras wie Peeling und Massage.",
  },
  {
    q: "Was ist der Unterschied zwischen Maniküre und Pediküre?",
    a: "Die Maniküre gilt den Händen und Fingernägeln, die Pediküre den Füßen — beide können separat gebucht werden.",
  },
  {
    q: "Gibt es Maniküre für Männer?",
    a: "Ja. Viele Gäste buchen eine schlichte Pflege ohne Lack — saubere Form und gepflegte Nagelhaut.",
  },
] as const;

export const faqsLashes = [
  {
    q: "Wie lange hält eine Wimpernverlängerung?",
    a: "Je nach Wachstumszyklus etwa 3–5 Wochen. Auffülltermine halten den Look frisch.",
  },
  {
    q: "Schadet die Verlängerung den Naturwimpern?",
    a: "Bei fachgerechter Applikation und Pflege nicht. Wir achten auf Gewicht, Länge und Kleberqualität.",
  },
  {
    q: "Classic oder Volumen — was passt zu mir?",
    a: "Classic wirkt natürlich und definiert, Volumen füllt lückige Wimpern kräftiger auf. Wir beraten vor Ort.",
  },
] as const;

export const faqsWax = [
  {
    q: "Wie oft sollte man Waxing wiederholen?",
    a: "Typischerweise alle 4–6 Wochen, sobald die Haare wieder greifbar nachgewachsen sind.",
  },
  {
    q: "Tut Waxing weh?",
    a: "Ein kurzer Zug ist spürbar. Mit der richtigen Technik und Vorbereitung bleibt es gut aushaltbar.",
  },
  {
    q: "Was sollte ich vor dem Termin beachten?",
    a: "Haare idealerweise 5–8 mm lang lassen, keine frische Sonnenbräune und Haut am Termin rein und uncremt.",
  },
] as const;

/** Atmospheric stock imagery (Unsplash) — original, not from the source site */
export const images = {
  hero: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2000&q=80",
  nails: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1600&q=80",
  lashes: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1600&q=80",
  waxing: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
  studio: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
  /** Local brand illustration for the home “Nagelstudio mit Liebe zum Detail” strip */
  eyelashExtension: "/images/eyelash_extension_area.jpg",
  detail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
  gift: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=80",
  hands: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80",
} as const;

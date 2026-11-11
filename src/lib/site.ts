export const site = {
  name: "WIN.Studio",
  shortName: "WIN.Studio",
  tagline: "Maniküre · Wimpern · Waxing",
  city: "Grünberg",
  phone: "0152 31655018",
  phoneHref: "tel:+4915231655018",
  whatsapp: "0152 31655018",
  whatsappHref: "https://wa.me/4915231655018",
  instagram: "https://www.instagram.com/win.studio2024_/",
  instagramHandle: "@win.studio2024_",
  address: "Gießener Str. 4",
  zip: "35305 Grünberg",
} as const;

export const openingHours = [
  { day: "Montag", hours: "Geschlossen" },
  { day: "Dienstag", hours: "9:00–18:00" },
  { day: "Mittwoch", hours: "9:00–18:00" },
  { day: "Donnerstag", hours: "10:00–19:00" },
  { day: "Freitag", hours: "10:00–19:00" },
  { day: "Samstag", hours: "9:00–18:00" },
  { day: "Sonntag", hours: "Geschlossen" },
] as const;

export const nav = [
  { href: "/manikuere", label: "Maniküre & Pediküre" },
  { href: "/wimpern", label: "Wimpern" },
  { href: "/waxing", label: "Waxing" },
  { href: "/preise", label: "Preise" },
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
  { label: "Maniküre mit Gellack", price: "48 €" },
  { label: "Maniküre mit French Gellack oder Design", price: "53 €" },
  { label: "Spa Maniküre mit Gellack", price: "58 €" },
  { label: "Spa Maniküre mit French Gellack oder Design", price: "63 €" },
  { label: "Maniküre ohne Lack", price: "35 €" },
  { label: "Spa Maniküre ohne Lack", price: "45 €" },
  { label: "Nagelverlängerung", price: "70 €" },
  { label: "Nagelverlängerung mit French Gellack oder Design", price: "75 €" },
  { label: "Spa Maniküre mit Nagelverlängerung", price: "80 €" },
  {
    label: "Spa Maniküre mit Nagelverlängerung mit French Gellack oder Design",
    price: "85 €",
  },
  { label: "Nagelverlängerung Ausfüllen", price: "60 €" },
  { label: "Nagelverlängerung Ausfüllen mit French oder Design", price: "65 €" },
  { label: "Nagelverlängerung oder Gellack entfernen", price: "20 €" },
] as const;

export const manicureExpressPrices = [
  { label: "Maniküre-Express mit Gellack", price: "30 €" },
  { label: "Maniküre-Express mit French Gellack oder Design", price: "35 €" },
  { label: "Nagelverlängerung-Express mit Akryl-Gel", price: "50 €" },
  { label: "Nagelverlängerung-Express mit French oder Design", price: "55 €" },
  { label: "Nagelverlängerung-Express mit Akryl-Gel Ausfüllen", price: "45 €" },
  {
    label: "Nagelverlängerung-Express Ausfüllen mit French oder Design",
    price: "50 €",
  },
] as const;

export const pedicurePrices = [
  { label: "Pediküre mit Gellack", price: "53 €" },
  { label: "Pediküre mit French oder Design", price: "58 €" },
  { label: "Spa Pediküre mit Gellack", price: "63 €" },
  { label: "Spa Pediküre mit Gellack mit French oder Design", price: "68 €" },
  { label: "Pediküre ohne Lack", price: "43 €" },
  { label: "Spa Pediküre ohne Lack", price: "53 €" },
] as const;

export const pedicureExpressPrices = [
  { label: "Pediküre-Express mit Gellack (nur Nagel)", price: "35 €" },
] as const;

export const spaPrices = [
  { label: "Spa für Hände (ohne Maniküre)", price: "20 €" },
  {
    label: "Spa für Hände oder Füße mit Maniküre oder Pediküre",
    price: "10 €",
  },
] as const;

export const lashTopPrices = [
  { label: "1:1 Methode Neuauflage", price: "110 €" },
  { label: "1:1 Auffüllen bis 3 Wochen", price: "55 €" },
  { label: "1:1 Auffüllen bis 4 Wochen", price: "70 €" },
  { label: "1:1 Auffüllen bis 5 Wochen", price: "90 €" },
  { label: "Volumentechnik Neuauflage", price: "130 €" },
  { label: "Volumen Auffüllen bis 3 Wochen", price: "65 €" },
  { label: "Volumen Auffüllen bis 4 Wochen", price: "80 €" },
  { label: "Volumen Auffüllen bis 5 Wochen", price: "100 €" },
] as const;

export const lashJuniorPrices = [
  { label: "1:1 Methode Neuauflage", price: "90 €" },
  { label: "1:1 Auffüllen bis 3 Wochen", price: "50 €" },
  { label: "1:1 Auffüllen bis 4 Wochen", price: "60 €" },
  { label: "1:1 Auffüllen bis 5 Wochen", price: "75 €" },
  { label: "Volumentechnik Neuauflage", price: "100 €" },
  { label: "Volumen Auffüllen bis 3 Wochen", price: "55 €" },
  { label: "Volumen Auffüllen bis 4 Wochen", price: "70 €" },
  { label: "Volumen Auffüllen bis 5 Wochen", price: "85 €" },
] as const;

export const lashRefillNote = "Nach den 6 Wochen nur Neuanlage.";

export const lashExpressPrices = [
  { label: "Neuauflage", price: "70 €" },
  { label: "Auffüllen bis 3 Wochen", price: "40 €" },
  { label: "Auffüllen bis 4 Wochen", price: "50 €" },
] as const;

export const lashExpressNote = "Nach den 5 Wochen nur Neuanlage.";

export const lashRemovalPrices = [
  {
    label: "Entfernung ohne anschließende Verlängerung",
    price: "20 €",
  },
  {
    label: "Entfernung mit anschließender Verlängerung",
    price: "kostenlos",
  },
] as const;

export const browPrices = [
  { label: "Augenbrauenkorrektur", price: "10 €" },
  { label: "Augenbrauen färben", price: "12 €" },
  { label: "Augenbrauen färben & zupfen", price: "20 €" },
  { label: "Wimpernlaminierung", price: "55 €" },
  { label: "Augenbrauenlifting mit färben", price: "40 €" },
  { label: "Wimpernfarben", price: "12 €" },
] as const;

export const waxingPrices = [
  { label: "Beine", price: "49 €" },
  { label: "Oberschenkel", price: "31 €" },
  { label: "Unterschenkel", price: "27 €" },
  { label: "Achseln", price: "15 €" },
  { label: "Arme", price: "30 €" },
  { label: "Oberarme", price: "17 €" },
  { label: "Unterarme", price: "19 €" },
  { label: "Bauch", price: "17 €" },
  { label: "Brust", price: "17 €" },
  { label: "Rücken", price: "25 €" },
  { label: "Lendenbereich", price: "14 €" },
  { label: "Intim (inkl. Pofalte)", price: "39 €" },
  { label: "Bikini Lines", price: "16 €" },
  { label: "Pofalte", price: "9 €" },
  { label: "Pobacken", price: "13 €" },
  { label: "Pofalte + Pobacken", price: "20 €" },
  { label: "Gesicht", price: "25 €" },
  { label: "Oberlippe", price: "8 €" },
  { label: "Kinn", price: "8 €" },
  { label: "Wangen", price: "12 €" },
  { label: "Nase", price: "7 €" },
  { label: "Hals", price: "12 €" },
  { label: "Nacken", price: "12 €" },
  { label: "Fake-Tattoo", price: "15 €" },
] as const;

export const locations = [
  {
    name: "WIN.Studio",
    address: "Gießener Str. 4, 35305 Grünberg",
    focus: "Maniküre, Wimpern & Waxing",
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
    q: "Wo bekomme ich in Grünberg eine professionelle Maniküre?",
    a: "Bei WIN.Studio in der Gießener Str. 4 bieten wir klassische Maniküre, Gellack, Gelmodellage und Spa-Behandlungen an.",
  },
  {
    q: "Welche Wimpernverlängerungen gibt es?",
    a: "Wir arbeiten mit der 1:1-Methode und Volumentechnik — Neuauflage oder Auffüllen, auch als Express. Dazu Augenbrauen, Wimpernlaminierung und Lifting.",
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
    q: "1:1 oder Volumen — was passt zu mir?",
    a: "Die 1:1-Methode wirkt natürlich und definiert, Volumentechnik füllt lückige Wimpern kräftiger auf. Wir beraten vor Ort.",
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
  nails: "/images/salon_photos/nails_franch.jpg",
  lashes: "/images/salon_photos/eyebrow_extensions.jpg",
  waxing: "/images/salon_photos/eyelash_extension_area.jpg",
  studio: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
  /** Home “Nagelstudio mit Liebe zum Detail” strip */
  eyelashExtension: "/images/salon_photos/cabinet_for_nail_polishes.jpg",
  detail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
  gift: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=80",
  hands: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80",
} as const;

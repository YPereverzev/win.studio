import { Reveal } from "./Reveal";

export function Faq({
  items,
  title = "Häufig gestellte Fragen",
}: {
  items: readonly { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-ink/10">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group py-5">
                <summary className="cursor-pointer list-none pr-8 font-display text-lg text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-amber transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

export function PriceTable({
  title,
  rows,
}: {
  title: string;
  rows: readonly { label: string; price: string }[];
}) {
  return (
    <Reveal>
      <div>
        <h3 className="font-display text-2xl tracking-tight text-ink">{title}</h3>
        <ul className="mt-6 divide-y divide-ink/10">
          {rows.map((row) => (
            <li
              key={row.label}
              className="flex items-baseline justify-between gap-4 py-3.5"
            >
              <span className="text-sm text-ink-soft">{row.label}</span>
              <span className="shrink-0 font-display text-lg text-amber-deep">
                {row.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

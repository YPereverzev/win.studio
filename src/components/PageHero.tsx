import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[58vh] overflow-hidden bg-ink text-mist">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-8">
        {eyebrow ? (
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl animate-fade-up-delay font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl animate-fade-up-late text-base leading-relaxed text-mist/75 sm:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}

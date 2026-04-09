export function RaceHeader({ meeting }) {
  return (
    <section className="surface-grid overflow-hidden rounded-md border border-gold/20 bg-charcoal">
      <div className="grid lg:grid-cols-[1fr_360px]">
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2">
            <Badge tone="gold">{meeting.status}</Badge>
            <Badge>{meeting.venue}</Badge>
            <Badge>{meeting.rail}</Badge>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-black text-porcelain sm:text-5xl">
            Serious race-day decisions, priced before the jump.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Compare live odds, model edge, trip notes, and staking discipline across the card.
          </p>
          <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
            <HeroMetric label="Next post" value={meeting.races[0].time} />
            <HeroMetric label="Card" value={`${meeting.races.length} races`} />
            <HeroMetric label="Surface" value="Turf / AWT" />
          </div>
        </div>
        <div className="relative min-h-64 border-t border-line lg:border-l lg:border-t-0">
          <img
            src="/golden-stallion-banner.png"
            alt="Golden Stallion race mark"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-md border border-gold/20 bg-ink/80 p-4">
            <p className="text-xs font-black uppercase text-scarlet">Prime pick</p>
            <p className="mt-1 text-2xl font-black text-gold">R2 #1 Fast As Lightning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({ label, value }) {
  return (
    <div className="rounded-md border border-line bg-ink/70 p-3">
      <p className="text-xs font-black uppercase text-muted">{label}</p>
      <p className="mt-1 text-lg font-black text-porcelain">{value}</p>
    </div>
  );
}

function Badge({ children, tone = "default" }) {
  const classes =
    tone === "gold"
      ? "border-gold/40 bg-gold text-ink"
      : "border-line bg-ink/70 text-muted";
  return <span className={`rounded-md border px-3 py-1 text-xs font-black uppercase ${classes}`}>{children}</span>;
}

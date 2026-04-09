export function MarketTicker({ moves }) {
  return (
    <div className="overflow-hidden border-y border-line bg-ink">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
        <span className="shrink-0 rounded-md bg-scarlet px-3 py-1 text-xs font-black uppercase text-porcelain">
          Market
        </span>
        {moves.map((move) => (
          <div
            key={move.label}
            className="flex shrink-0 items-center gap-2 rounded-md border border-line bg-white/5 px-3 py-1 text-xs"
          >
            <span className="font-bold text-porcelain">{move.label}</span>
            <span className="font-black text-gold">{move.value}</span>
            <span className="text-muted">{move.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

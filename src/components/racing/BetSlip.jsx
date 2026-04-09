import { Button } from "../ui/Button.jsx";

export function BetSlip({ selections }) {
  const totalStake = selections.reduce((sum, item) => sum + Number(item.stake.replace("$", "")), 0);
  const totalReturn = selections.reduce((sum, item) => sum + Number(item.return.replace("$", "")), 0);

  return (
    <aside className="rounded-md border border-gold/30 bg-charcoal p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase text-scarlet">Bet Slip</p>
          <h2 className="mt-1 text-xl font-black text-porcelain">Singles Queue</h2>
        </div>
        <span className="rounded-md border border-mint/30 bg-mint/10 px-2 py-1 text-xs font-black text-mint">
          Live
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {selections.map((selection) => (
          <div key={`${selection.race}-${selection.runner}`} className="rounded-md border border-line bg-ink p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-gold">{selection.race}</p>
                <p className="mt-1 font-bold text-porcelain">{selection.runner}</p>
              </div>
              <span className="odds-chip rounded-md border border-gold/30 bg-gold px-2 py-1 text-sm font-black text-ink">
                {selection.odds}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <Metric label="Stake" value={selection.stake} />
              <Metric label="Return" value={selection.return} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-md border border-line bg-panel p-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Total stake</span>
          <span className="font-black text-porcelain">${totalStake.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-muted">Potential return</span>
          <span className="font-black text-mint">${totalReturn.toFixed(2)}</span>
        </div>
      </div>

      <Button className="mt-4 w-full" variant="gold">
        Review Ticket
      </Button>
    </aside>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className="font-black text-porcelain">{value}</p>
    </div>
  );
}

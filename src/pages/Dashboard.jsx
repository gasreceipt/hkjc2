import { Link } from "react-router-dom";
import { Card, CardHeader } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { BetSlip } from "../components/racing/BetSlip.jsx";
import { InsightCarousel } from "../components/racing/InsightCarousel.jsx";
import { RaceHeader } from "../components/racing/RaceHeader.jsx";
import { RaceAccordion } from "../components/racing/RaceAccordion.jsx";
import { StatGrid } from "../components/racing/StatGrid.jsx";
import { betSlip, meeting } from "../data/mockData.js";

export default function Dashboard() {
  const topPicks = meeting.races.map((race) => ({
    raceNo: race.raceNo,
    ...race.runners[0],
  }));
  const best = topPicks.sort((a, b) => b.edge - a.edge)[0];

  return (
    <div className="space-y-6">
      <RaceHeader meeting={meeting} />

      <section className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-6">
          <StatGrid meeting={meeting} />

          <section className="rounded-md border border-gold/25 bg-panel p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase text-scarlet">Highest expected value</p>
                <h2 className="mt-2 text-3xl font-black text-gold">
                  R{best.raceNo} #{best.no} {best.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{best.note}</p>
              </div>
              <Button asChild variant="gold">
                <Link to="/races">Build Card</Link>
              </Button>
            </div>
            <dl className="mt-5 grid gap-3 sm:grid-cols-4">
              <Metric label="Odds" value={best.odds.toFixed(1)} />
              <Metric label="Edge" value={`${best.edge.toFixed(1)}%`} />
              <Metric label="Jockey" value={best.jockey} />
              <Metric label="Draw" value={best.draw} />
            </dl>
          </section>

          <section className="min-w-0 overflow-hidden">
            <div className="mb-4">
              <p className="text-xs font-black uppercase text-scarlet">Sharp Money</p>
              <h2 className="text-xl font-black text-porcelain">Best angles on the card</h2>
            </div>
            <InsightCarousel races={meeting.races} />
          </section>
        </div>

        <div className="min-w-0">
          <BetSlip selections={betSlip} />
        </div>
      </section>

      <section className="rounded-md border border-line bg-panel p-5">
        <CardHeader
          eyebrow="Race-by-race"
          title="Market board"
          action={
            <Button asChild variant="ghost">
              <Link to="/races">Full card</Link>
            </Button>
          }
        >
          Expand each race for runner notes, model edge, and current prices.
        </CardHeader>
        <RaceAccordion races={meeting.races} />
      </section>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-md border border-line bg-ink p-3">
      <dt className="text-xs font-black uppercase text-muted">{label}</dt>
      <dd className="mt-1 font-bold text-porcelain">{value}</dd>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button.jsx";
import { Card, CardHeader } from "../components/ui/Card.jsx";
import { RaceAccordion } from "../components/racing/RaceAccordion.jsx";
import { StatGrid } from "../components/racing/StatGrid.jsx";
import { archiveRows, marketMoves, meeting, news } from "../data/mockData.js";

const dataCards = [
  {
    label: "Live odds",
    value: "15 runners",
    text: "Race prices, runner notes, draw, jockey, trainer, rating, and model confidence.",
  },
  {
    label: "Historical archive",
    value: "782k rows",
    text: "Runs, race conditions, results, comments, barrier trials, horse info, and trackwork.",
  },
  {
    label: "Race context",
    value: "7 datasets",
    text: "Meeting status, going, weather, rail position, pace notes, and late market movement.",
  },
];

export default function Dashboard() {
  const allRunners = meeting.races.flatMap((race) =>
    race.runners.map((runner) => ({ ...runner, raceNo: race.raceNo, time: race.time })),
  );
  const shortestOdds = [...allRunners].sort((a, b) => a.odds - b.odds).slice(0, 5);

  return (
    <div className="bg-ink">
      <Hero />
      <OddsStrip />

      <section id="live-races" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-scarlet">Live Dashboard</p>
            <h2 className="mt-2 text-4xl font-black uppercase leading-none text-porcelain sm:text-5xl">
              Race Data Surface
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              Odds, runners, meeting conditions, and recent context are available from the first screen.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-md border border-gold/20 bg-charcoal p-2 text-center text-xs">
            <TerminalMetric label="Races" value={meeting.races.length} />
            <TerminalMetric label="Going" value={meeting.going} />
            <TerminalMetric label="Rail" value={meeting.rail} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-6">
            <StatGrid meeting={meeting} />

            <Card className="border-gold/20 bg-panel">
              <CardHeader
                eyebrow="Today"
                title="Live Race Odds"
                action={
                  <Button asChild variant="ghost">
                    <Link to="/races">Open full board</Link>
                  </Button>
                }
              >
                Current race cards consolidated in one place for quick scanning.
              </CardHeader>
              <RaceAccordion races={meeting.races} />
            </Card>
          </div>

          <aside className="space-y-6">
            <OddsSnapshot runners={shortestOdds} />
            <DataSummary />
          </aside>
        </div>
      </section>

      <DataLibrary />
      <HistoryAndNews />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src="/golden-stallion-banner.png"
        alt="Racehorse in motion"
        className="absolute inset-0 h-full w-full scale-110 object-cover grayscale"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.55),rgba(7,8,7,0.94)),radial-gradient(circle_at_center,rgba(214,180,76,0.12),transparent_34rem)]" />
      <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(160deg,transparent_0,transparent_14px,rgba(255,255,255,0.08)_15px,transparent_17px)]" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-md border border-mint/20 bg-ink/70 px-4 py-2 text-[11px] font-black uppercase text-muted">
            <span className="mr-2 mt-1 inline-block h-2 w-2 rounded-full bg-mint" />
            Race data terminal active
          </div>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-porcelain sm:text-7xl lg:text-8xl">
            HKJC - Max and Lee
            <span className="block text-gold">AI Odds At A Glance</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            Quickly scan live race cards, runner odds, meeting conditions, archive context, and
            race-week notes from one focused dashboard.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg" className="min-w-52">
              <a href="#live-races">View Race Odds</a>
            </Button>
            <Button asChild size="lg" className="min-w-52 bg-gold/10">
              <Link to="/archive">Browse Data</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OddsStrip() {
  return (
    <div className="overflow-hidden border-y border-line bg-[#050605]">
      <div className="flex min-w-max animate-[ticker_26s_linear_infinite] gap-10 px-4 py-3 text-xs uppercase">
        {[...marketMoves, ...marketMoves].map((move, index) => (
          <div key={`${move.label}-${index}`} className="flex items-center gap-3">
            <span className="text-muted">{move.label}</span>
            <span className="font-black text-gold">{move.value}</span>
            <span className="rounded-sm bg-mint/15 px-2 py-1 font-black text-mint">{move.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OddsSnapshot({ runners }) {
  return (
    <Card className="bg-charcoal">
      <CardHeader eyebrow="Market" title="Shortest Prices" />
      <div className="space-y-3">
        {runners.map((runner) => (
          <div key={`${runner.raceNo}-${runner.no}`} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-md border border-line bg-ink p-3">
            <span className="text-xs font-black text-gold">R{runner.raceNo}</span>
            <div className="min-w-0">
              <p className="truncate font-black uppercase text-porcelain">{runner.name}</p>
              <p className="text-xs text-muted">{runner.time} · Draw {runner.draw}</p>
            </div>
            <span className="odds-chip rounded-md border border-gold/30 bg-gold px-3 py-2 font-black text-ink">
              {runner.odds.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TerminalMetric({ label, value }) {
  return (
    <div className="min-w-24 rounded-md bg-ink px-3 py-2">
      <p className="font-black uppercase text-muted">{label}</p>
      <p className="mt-1 truncate font-black text-gold">{value}</p>
    </div>
  );
}

function DataSummary() {
  return (
    <Card className="bg-charcoal">
      <CardHeader eyebrow="Meeting" title="Data Coverage" />
      <div className="space-y-3 text-sm">
        {[
          ["Venue", meeting.venue],
          ["Date", meeting.date],
          ["Going", meeting.going],
          ["Rail", meeting.rail],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-line pb-3">
            <span className="text-muted">{label}</span>
            <span className="font-bold text-porcelain">{value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DataLibrary() {
  return (
    <section className="surface-grid border-y border-line bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-black uppercase text-scarlet">Available Data</p>
          <h2 className="mt-2 text-4xl font-black uppercase text-porcelain">Everything Important Up Front</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            The homepage prioritizes the fast-read fields users need first, while future pages
            remain available for deeper archive views and model tooling.
          </p>
        </div>
      <div className="grid gap-5 md:grid-cols-3">
        {dataCards.map((card) => (
          <article key={card.label} className="rounded-md border border-line bg-[#202221]/95 p-7">
            <p className="text-xs font-black uppercase text-scarlet">{card.label}</p>
            <h3 className="mt-5 text-3xl font-black text-gold">{card.value}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function HistoryAndNews() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <Card className="bg-panel">
        <CardHeader eyebrow="Archive" title="Recent Meetings" />
        <div className="space-y-3">
          {archiveRows.slice(0, 4).map((row) => (
            <div key={`${row.date}-${row.venue}`} className="grid grid-cols-[1fr_auto] gap-4 rounded-md border border-line bg-ink p-3 text-sm">
              <div>
                <p className="font-black text-porcelain">{row.date}</p>
                <p className="text-muted">{row.venue} · {row.races} races</p>
              </div>
              <span className={row.roi.startsWith("+") ? "font-black text-mint" : "font-black text-scarlet"}>
                {row.roi}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-panel">
        <CardHeader eyebrow="Race Notes" title="Latest Context" />
        <div className="grid gap-3 sm:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="rounded-md border border-line bg-ink p-4">
              <p className="text-[10px] font-black uppercase text-scarlet">{item.source}</p>
              <h3 className="mt-4 text-sm font-black leading-5 text-porcelain">{item.title}</h3>
              <p className="mt-3 text-xs text-muted">{item.time}</p>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-[10px] uppercase text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <p>© 2026 Golden Stallion AI. Race odds and data dashboard.</p>
      <div className="flex flex-wrap gap-6">
        <Link className="transition hover:text-gold" to="/races">Race Cards</Link>
        <Link className="transition hover:text-gold" to="/archive">Archive</Link>
        <Link className="transition hover:text-gold" to="/news">Insights</Link>
        <Link className="transition hover:text-gold" to="/settings">Data Setup</Link>
      </div>
      <a
        className="font-black text-gold transition hover:text-porcelain"
        href="https://maxwell.ltd"
        target="_blank"
        rel="noreferrer"
      >
        Made by maxwell.ltd
      </a>
    </footer>
  );
}

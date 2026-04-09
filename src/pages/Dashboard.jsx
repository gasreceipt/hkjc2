import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button.jsx";
import { marketMoves, meeting } from "../data/mockData.js";

const featureCards = [
  {
    kicker: "01",
    title: "Quantitative Precision",
    text: "Leverage non-linear regression models and thousands of historical HKJC variables to predict outcomes with mechanical accuracy.",
  },
  {
    kicker: "02",
    title: "Real-Time HKJC Sync",
    text: "Direct API integration captures late money, live price pressure, and race-card changes before the jump.",
  },
  {
    kicker: "03",
    title: "Sovereign Risk Management",
    text: "Automated Kelly Criterion controls and exposure limits for disciplined capital preservation.",
  },
];

const recentPicks = [
  ["01", "Sha Tin R5", "Master Eight", "WIN $18.50"],
  ["02", "Happy Valley R3", "Whizz Kid", "WIN $4.20"],
  ["03", "Sha Tin R8", "Romantic Warrior", "WIN $2.10"],
];

export default function Dashboard() {
  return (
    <div className="bg-ink">
      <Hero />
      <OddsStrip />
      <FeatureGrid />
      <Performance />
      <Testimonial />
      <ClubCta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-line">
      <img
        src="/golden-stallion-banner.png"
        alt="Racehorse in motion"
        className="absolute inset-0 h-full w-full scale-110 object-cover grayscale"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.58),rgba(7,8,7,0.9)),radial-gradient(circle_at_center,rgba(214,180,76,0.12),transparent_34rem)]" />
      <div className="absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(160deg,transparent_0,transparent_14px,rgba(255,255,255,0.08)_15px,transparent_17px)]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-6xl flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 rounded-md border border-mint/20 bg-ink/70 px-4 py-2 text-[11px] font-black uppercase text-muted">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-mint" />
          Sovereign Engine v4.0 Active
        </div>
        <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-porcelain sm:text-7xl lg:text-8xl">
          Quantitative
          <span className="block text-gold">Equine Dominance</span>
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-6 text-muted sm:text-base">
          Experience the convergence of heritage and high-frequency AI. We provide the elite
          precision required to navigate the volatile HKJC markets with sovereign authority.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg" className="min-w-52">
            <Link to="/settings">Access the Bot</Link>
          </Button>
          <Button asChild size="lg" className="min-w-52 bg-gold/10">
            <Link to="/races">View Live Odds</Link>
          </Button>
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

function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="rounded-md border border-line bg-[#202221] p-8">
            <p className="text-2xl font-black text-gold">{card.kicker}</p>
            <h2 className="mt-8 text-xl font-black text-porcelain">{card.title}</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
      <div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black uppercase text-porcelain">Verified Performance</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              Live data reflecting the engine's capability across the current racing season.
              Actual results from the Master Account.
            </p>
          </div>
          <div className="hidden rounded-md border border-line bg-panel p-4 text-right sm:block">
            <p className="text-[10px] font-black uppercase text-muted">All ROI</p>
            <p className="text-3xl font-black text-mint">+142.8%</p>
          </div>
        </div>

        <div className="mt-10 rounded-md border border-line bg-panel p-7">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs font-black uppercase text-porcelain">Capital Growth Curve</p>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-mint" />
              <span className="h-2 w-2 rounded-full bg-gold" />
            </div>
          </div>
          <div className="flex h-44 items-end gap-3">
            {[34, 48, 44, 58, 72, 88].map((height, index) => (
              <div key={height} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className={[
                    "w-full rounded-t-sm",
                    index === 5 ? "bg-gold" : "bg-graphite",
                  ].join(" ")}
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] font-bold uppercase text-muted">
                  {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:pt-28">
        <p className="mb-4 text-xs font-black uppercase text-porcelain">Recent Elite Picks</p>
        <div className="space-y-4">
          {recentPicks.map(([rank, race, horse, win]) => (
            <div key={horse} className="grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-md bg-[#202221] p-4">
              <span className="text-lg font-black text-gold/70">{rank}</span>
              <div>
                <p className="text-[10px] font-black uppercase text-muted">{race}</p>
                <p className="font-black uppercase text-porcelain">{horse}</p>
              </div>
              <span className="border-b border-mint pb-1 text-xs font-black text-mint">{win}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="text-5xl font-black text-gold">"</p>
      <blockquote className="mx-auto mt-8 max-w-4xl text-3xl italic leading-tight text-porcelain sm:text-5xl">
        The engine has transformed my approach from pure gambling to disciplined systematic
        arbitrage. It is the most sophisticated tool I've seen in twenty years of HKJC racing.
      </blockquote>
      <div className="mx-auto mt-12 h-12 w-12 rounded-md border border-gold/30 bg-panel" />
      <p className="mt-5 text-xs font-black text-porcelain">Trusted by the most disciplined bettors.</p>
      <p className="mt-1 text-[10px] font-black uppercase text-muted">Elite tier member since 2021</p>
    </section>
  );
}

function ClubCta() {
  return (
    <section className="surface-grid border-y border-line bg-charcoal px-4 py-28 text-center sm:px-6 lg:px-8">
      <h2 className="text-4xl font-black uppercase text-porcelain sm:text-6xl">Enter The Inner Circle</h2>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-muted">
        Access to Golden Stallion is strictly limited to 500 active members to ensure market
        liquidity stability.
      </p>
      <Button asChild variant="gold" size="lg" className="mt-10 min-w-72 uppercase">
        <Link to="/settings">Join The Elite Club</Link>
      </Button>
      <p className="mt-8 text-[10px] font-black uppercase text-muted">Currently 12/500 slots remaining</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-[10px] uppercase text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <p>© 2026 Golden Stallion AI. The Sovereign Engine.</p>
      <div className="flex flex-wrap gap-6">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Gambling Awareness</span>
        <span>API Documentation</span>
      </div>
      <span className="font-black text-gold">G</span>
    </footer>
  );
}

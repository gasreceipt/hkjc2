import { NavLink } from "react-router-dom";
import { Button } from "./components/ui/Button.jsx";
import { MarketTicker } from "./components/racing/MarketTicker.jsx";
import { marketMoves } from "./data/mockData.js";

const navItems = [
  { to: "/", label: "Live Matrix", end: true },
  { to: "/races", label: "Race Cards" },
  { to: "/archive", label: "Archive" },
  { to: "/news", label: "News" },
  { to: "/settings", label: "Setup" },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ink text-porcelain">
      <div className="border-b border-line bg-ink/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src="/golden-stallion-banner.png"
                alt="Golden Stallion"
                className="h-14 w-14 rounded-md border border-gold/30 object-cover"
              />
              <div>
                <p className="text-xs font-bold uppercase text-scarlet">Hong Kong racing desk</p>
                <h1 className="text-2xl font-black text-gold sm:text-3xl">
                  Golden Stallion AI
                </h1>
              </div>
            </NavLink>
            <div className="flex flex-col gap-3 rounded-md border border-line bg-charcoal px-4 py-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase text-muted">Session</p>
                <p className="text-sm font-semibold text-porcelain">Sha Tin evening card</p>
              </div>
              <Button asChild variant="gold">
                <NavLink to="/settings">Risk Settings</NavLink>
              </Button>
            </div>
          </header>

          <nav aria-label="Primary navigation" className="flex gap-2 overflow-x-auto pb-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "whitespace-nowrap rounded-md border px-4 py-2 text-sm font-bold transition",
                    isActive
                      ? "border-gold bg-gold text-ink"
                      : "border-line bg-white/5 text-muted hover:border-scarlet/60 hover:text-porcelain",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <MarketTicker moves={marketMoves} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}

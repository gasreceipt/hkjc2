import { NavLink } from "react-router-dom";
import { Button } from "./components/ui/Button.jsx";

const navItems = [
  { to: "/", label: "Live Odds", end: true },
  { to: "/races", label: "Race Cards" },
  { to: "/archive", label: "Data Archive" },
  { to: "/news", label: "Race Notes" },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ink text-porcelain">
      <div className="sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <header className="flex min-w-0 items-center gap-6">
            <NavLink to="/" className="shrink-0 text-sm font-black uppercase italic text-gold">
              Golden Stallion AI
            </NavLink>

            <nav aria-label="Primary navigation" className="hidden gap-5 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      "border-b py-1 text-xs font-bold transition",
                      isActive
                        ? "border-gold text-gold"
                        : "border-transparent text-muted hover:border-gold hover:text-gold",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </header>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="gold" size="sm">
              <NavLink to="/races">Open Odds</NavLink>
            </Button>
            <Button asChild size="sm">
              <NavLink to="/settings">Data Setup</NavLink>
            </Button>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}

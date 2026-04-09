import { RaceAccordion } from "../components/racing/RaceAccordion.jsx";
import { StatGrid } from "../components/racing/StatGrid.jsx";
import { Card, CardHeader } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { PageShell } from "../components/ui/PageShell.jsx";
import { meeting } from "../data/mockData.js";

export default function Races() {
  return (
    <>
      <PageShell
        eyebrow="Live Odds"
        title="Market Board"
        meta={
          <div>
            <p className="text-xs font-black uppercase text-muted">Current Meeting</p>
            <p className="mt-2 text-2xl font-black text-gold">{meeting.venue}</p>
            <p className="mt-1 text-muted">{meeting.date}</p>
          </div>
        }
      >
        Sort the board before the bell. Compare price, draw, rider, edge, and race notes.
      </PageShell>
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <Card className="border-gold/20 bg-charcoal">
          <CardHeader eyebrow="Race Cards" title={`${meeting.venue} · ${meeting.date}`} />
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <Input placeholder="Search runner, jockey, trainer" aria-label="Search race card" />
            <div className="rounded-md border border-line bg-ink px-4 py-2 text-sm font-bold text-muted">
              {meeting.races.length} races open
            </div>
          </div>
        </Card>
        <StatGrid meeting={meeting} />
        <RaceAccordion races={meeting.races} />
      </div>
    </>
  );
}

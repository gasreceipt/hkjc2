import { RaceAccordion } from "../components/racing/RaceAccordion.jsx";
import { StatGrid } from "../components/racing/StatGrid.jsx";
import { Card, CardHeader } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { meeting } from "../data/mockData.js";

export default function Races() {
  return (
    <div className="space-y-6">
      <Card className="border-gold/20 bg-charcoal">
        <CardHeader eyebrow="Race Cards" title={`${meeting.venue} · ${meeting.date}`}>
          Sort the board before the bell. Compare price, draw, rider, edge, and race notes.
        </CardHeader>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <Input placeholder="Search runner, jockey, trainer" aria-label="Search race card" />
          <div className="rounded-md border border-white/10 bg-ink px-4 py-2 text-sm font-bold text-muted">
            {meeting.races.length} races open
          </div>
        </div>
      </Card>
      <StatGrid meeting={meeting} />
      <RaceAccordion races={meeting.races} />
    </div>
  );
}

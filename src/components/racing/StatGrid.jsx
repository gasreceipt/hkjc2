import { Card } from "../ui/Card.jsx";

export function StatGrid({ meeting }) {
  const stats = [
    ["Venue", meeting.venue],
    ["Date", meeting.date],
    ["Going", meeting.going],
    ["Weather", meeting.weather],
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(([label, value]) => (
        <Card key={label} className="border-line bg-charcoal">
          <p className="text-xs font-black uppercase text-muted">{label}</p>
          <p className="mt-2 text-lg font-black text-porcelain">{value}</p>
        </Card>
      ))}
    </div>
  );
}

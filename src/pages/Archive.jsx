import { Card, CardHeader } from "../components/ui/Card.jsx";
import { archiveRows } from "../data/mockData.js";

export default function Archive() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader eyebrow="Archive" title="Historical performance ledger">
          Past meetings, hit rate, and return profile for the model slate.
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase text-muted">
                <th className="pb-3">Date</th>
                <th className="pb-3">Venue</th>
                <th className="pb-3">Races</th>
                <th className="pb-3">Top-three hits</th>
                <th className="pb-3">Model ROI</th>
              </tr>
            </thead>
            <tbody>
              {archiveRows.map((row) => (
                <tr key={`${row.date}-${row.venue}`} className="border-b border-line">
                  <td className="py-4 font-bold text-porcelain">{row.date}</td>
                  <td className="py-4 text-muted">{row.venue}</td>
                  <td className="py-4 text-porcelain">{row.races}</td>
                  <td className="py-4 text-porcelain">{row.winners}</td>
                  <td className={row.roi.startsWith("+") ? "py-4 font-bold text-mint" : "py-4 font-bold text-scarlet"}>
                    {row.roi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {["Runs", "Races", "Trackwork"].map((label) => (
          <Card key={label} className="bg-charcoal">
            <p className="text-xs font-black uppercase text-scarlet">{label}</p>
            <p className="mt-3 text-3xl font-black text-gold">Tracked</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Form, pace, and condition signals ready for deeper review.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

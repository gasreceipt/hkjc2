import { Card, CardHeader } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { Textarea } from "../components/ui/Textarea.jsx";
import { Button } from "../components/ui/Button.jsx";
import { PageShell } from "../components/ui/PageShell.jsx";

export default function Settings() {
  return (
    <>
      <PageShell
        eyebrow="Bot Access"
        title="Operator Console"
        meta={
          <div>
            <p className="text-xs font-black uppercase text-muted">Membership</p>
            <p className="mt-2 text-2xl font-black text-gold">12 Slots</p>
            <p className="mt-1 text-muted">Remaining this cycle</p>
          </div>
        }
      >
        Configure feed access, model routing, and disciplined exposure defaults.
      </PageShell>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Card className="h-fit bg-charcoal">
          <CardHeader eyebrow="Data Contract" title="Feed architecture" />
          <div className="space-y-4 text-sm leading-6 text-muted">
            <p><strong className="text-porcelain">GET /api/meetings</strong> returns meetings, races, and runners.</p>
            <p><strong className="text-porcelain">GET /api/archive</strong> returns historical rows and model metrics.</p>
            <p><strong className="text-porcelain">GET /api/news</strong> returns curated HKJC headlines.</p>
          </div>
          <div className="mt-8 grid gap-3">
            {["Live HKJC sync", "Kelly risk guard", "Archive backtest"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-md border border-line bg-ink p-3">
                <span className="font-bold text-porcelain">{item}</span>
                <span className="text-xs font-black uppercase text-mint">Ready</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader eyebrow="Configuration" title="Operator controls">
            Session defaults for live racing, model notes, and risk limits.
          </CardHeader>
          <form className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-porcelain">API base URL</span>
              <Input placeholder="http://localhost:8000" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-porcelain">Stake ceiling</span>
              <Input placeholder="$500 per race" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-porcelain">Operator notes</span>
              <Textarea placeholder="Track bias, model notes, pool timing, exposure caps" />
            </label>
            <Button type="button" variant="gold">Save Operator Settings</Button>
          </form>
        </Card>
      </div>
    </>
  );
}

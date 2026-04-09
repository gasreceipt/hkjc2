import { Card, CardHeader } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";
import { Textarea } from "../components/ui/Textarea.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function Settings() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Card className="h-fit bg-charcoal">
        <CardHeader eyebrow="Setup" title="Data contract">
          Keep the race desk pointed at the right feed and model service.
        </CardHeader>
        <div className="space-y-3 text-sm leading-6 text-muted">
          <p><strong className="text-porcelain">GET /api/meetings</strong> returns meetings, races, and runners.</p>
          <p><strong className="text-porcelain">GET /api/archive</strong> returns historical rows and model metrics.</p>
          <p><strong className="text-porcelain">GET /api/news</strong> returns curated HKJC headlines.</p>
        </div>
      </Card>

      <Card>
        <CardHeader eyebrow="Configuration" title="Operator controls">
          Session defaults for live racing, model notes, and risk limits.
        </CardHeader>
        <form className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-porcelain">API base URL</span>
            <Input placeholder="http://localhost:8000" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-porcelain">Operator notes</span>
            <Textarea placeholder="Track bias, model notes, pool timing, exposure caps" />
          </label>
          <Button type="button" variant="gold">Save preview settings</Button>
        </form>
      </Card>
    </div>
  );
}

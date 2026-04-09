import { CardHeader } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { PageShell } from "../components/ui/PageShell.jsx";
import { news } from "../data/mockData.js";

export default function News() {
  return (
    <>
      <PageShell
        eyebrow="AI Insights"
        title="Race-Week Intelligence"
        meta={
          <div>
            <p className="text-xs font-black uppercase text-muted">Signal Feed</p>
            <p className="mt-2 text-2xl font-black text-gold">3 Briefs</p>
            <p className="mt-1 text-muted">Updated pre-card</p>
          </div>
        }
      >
        Track notes, late money, and market context before the pools settle.
      </PageShell>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <CardHeader eyebrow="Editorial Desk" title="Latest briefs" />
        <div className="grid gap-4 lg:grid-cols-3">
          {news.map((item, index) => (
            <article key={item.title} className="rounded-md border border-line bg-charcoal p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase text-scarlet">{item.source}</p>
                <span className="text-sm font-black text-gold">0{index + 1}</span>
              </div>
              <h2 className="mt-8 text-2xl font-black leading-8 text-porcelain">{item.title}</h2>
              <p className="mt-5 text-sm text-muted">{item.time}</p>
              <Button className="mt-8" variant="ghost">Open brief</Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

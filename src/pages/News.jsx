import { CardHeader } from "../components/ui/Card.jsx";
import { Button } from "../components/ui/Button.jsx";
import { news } from "../data/mockData.js";

export default function News() {
  return (
    <div className="space-y-6">
      <section>
        <CardHeader eyebrow="News" title="Race-week intelligence">
          Track notes, late money, and market context before the pools settle.
        </CardHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="rounded-md border border-line bg-charcoal p-5">
              <p className="text-xs font-black uppercase text-scarlet">{item.source}</p>
              <h2 className="mt-3 text-xl font-black leading-7 text-porcelain">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.time}</p>
              <Button className="mt-5" variant="ghost">Open brief</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

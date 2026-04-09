import * as Accordion from "@radix-ui/react-accordion";
import { RunnerDialog } from "./RunnerDialog.jsx";

export function RaceAccordion({ races }) {
  return (
    <Accordion.Root type="multiple" defaultValue={["race-1"]} className="space-y-3">
      {races.map((race) => {
        const leader = race.runners[0];
        return (
          <Accordion.Item
            key={race.raceNo}
            value={`race-${race.raceNo}`}
            className="overflow-hidden rounded-md border border-white/10 bg-panel"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full flex-col gap-3 px-5 py-4 text-left transition hover:bg-white/5 lg:flex-row lg:items-center lg:justify-between">
                <span>
                  <span className="text-xs font-black uppercase text-scarlet">
                    Race {race.raceNo} · {race.time}
                  </span>
                  <span className="mt-1 block text-lg font-black text-porcelain">
                    {race.className} · {race.distance} · {race.surface}
                  </span>
                </span>
                <span className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-md border border-gold/30 bg-gold px-3 py-1 font-black text-ink">
                    {leader.odds.toFixed(1)}
                  </span>
                  <span className="font-bold text-gold">
                    {leader.no}. {leader.name}
                  </span>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="border-t border-white/10 px-5 py-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[860px] border-collapse text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase text-muted">
                      <th className="pb-3">No.</th>
                      <th className="pb-3">Runner</th>
                      <th className="pb-3">Jockey</th>
                      <th className="pb-3">Draw</th>
                      <th className="pb-3">Odds</th>
                      <th className="pb-3">Confidence</th>
                      <th className="pb-3">Edge</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {race.runners.map((runner) => (
                      <tr key={runner.no} className="border-t border-line">
                        <td className="py-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gold/30 bg-ink font-black text-gold">
                            {runner.no}
                          </span>
                        </td>
                        <td className="py-3">
                          <p className="font-bold text-porcelain">{runner.name}</p>
                          <p className="max-w-72 truncate text-xs text-muted">{runner.note}</p>
                        </td>
                        <td className="py-3 text-muted">{runner.jockey}</td>
                        <td className="py-3 text-porcelain">{runner.draw}</td>
                        <td className="py-3">
                          <span className="odds-chip rounded-md border border-gold/30 bg-gold px-3 py-2 font-black text-ink">
                            {runner.odds.toFixed(1)}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="h-2 w-32 rounded-md bg-ink">
                            <div
                              className="h-2 rounded-md bg-gold"
                              style={{ width: `${runner.confidence}%` }}
                            />
                          </div>
                          <span className="mt-1 block text-xs text-muted">{runner.confidence}%</span>
                        </td>
                        <td className="py-3">
                          <span className="rounded-md border border-mint/30 bg-mint/10 px-2 py-1 font-black text-mint">
                            +{runner.edge.toFixed(1)}%
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <RunnerDialog runner={runner} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

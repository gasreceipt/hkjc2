import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/Button.jsx";

export function RunnerDialog({ runner, open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children ? <Dialog.Trigger asChild>{children}</Dialog.Trigger> : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-md border border-gold/25 bg-charcoal p-6 shadow-2xl">
          <Dialog.Title className="text-2xl font-black text-gold">
            {runner.no}. {runner.name}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6 text-muted">
            {runner.note}
          </Dialog.Description>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <Metric label="Jockey" value={runner.jockey} />
            <Metric label="Trainer" value={runner.trainer} />
            <Metric label="Draw" value={runner.draw} />
            <Metric label="Rating" value={runner.rating} />
            <Metric label="Odds" value={runner.odds.toFixed(1)} />
            <Metric label="Model Edge" value={`${runner.edge.toFixed(1)}%`} />
          </dl>
          <Dialog.Close asChild>
            <Button className="mt-6 w-full" variant="gold">Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-md border border-line bg-ink p-3">
      <dt className="text-xs font-black uppercase text-muted">{label}</dt>
      <dd className="mt-1 font-bold text-porcelain">{value}</dd>
    </div>
  );
}

export function PageShell({ eyebrow, title, children, meta }) {
  return (
    <div className="bg-ink">
      <section className="surface-grid border-b border-line bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase text-scarlet">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none text-porcelain sm:text-6xl">
                {title}
              </h1>
              {children ? <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">{children}</p> : null}
            </div>
            {meta ? (
              <div className="rounded-md border border-gold/25 bg-ink/80 p-5 text-sm">
                {meta}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

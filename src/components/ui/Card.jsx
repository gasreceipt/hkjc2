export function Card({ className = "", children, ...props }) {
  return (
    <section
      className={[
        "rounded-md border border-line bg-panel p-5 shadow-[0_16px_48px_rgba(0,0,0,0.24)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

export function CardHeader({ eyebrow, title, action, children }) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        {eyebrow ? <p className="mb-1 text-xs font-black uppercase text-scarlet">{eyebrow}</p> : null}
        {title ? <h2 className="text-xl font-black text-porcelain">{title}</h2> : null}
        {children ? <div className="mt-2 text-sm leading-6 text-muted">{children}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

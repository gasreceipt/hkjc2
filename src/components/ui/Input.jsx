export function Input({ className = "", ...props }) {
  return (
    <input
      className={[
        "w-full rounded-md border border-line bg-ink px-3 py-2 text-sm text-porcelain outline-none transition placeholder:text-muted focus:border-gold",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={[
        "min-h-28 w-full resize-y rounded-md border border-line bg-ink px-3 py-2 text-sm text-porcelain outline-none transition placeholder:text-muted focus:border-gold",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

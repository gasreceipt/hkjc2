import { cloneElement, isValidElement } from "react";

export function Button({
  asChild = false,
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const variants = {
    default: "border-line bg-white/8 text-porcelain hover:border-porcelain hover:bg-porcelain hover:text-ink",
    gold: "border-gold bg-gold text-ink hover:border-porcelain hover:bg-porcelain hover:text-ink",
    scarlet: "border-scarlet bg-scarlet text-porcelain hover:border-porcelain hover:bg-porcelain hover:text-ink",
    ghost: "border-transparent bg-transparent text-muted hover:border-gold hover:bg-gold hover:text-ink",
  };
  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <Comp
      className={[
        "inline-flex items-center justify-center rounded-md border font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
}

function Slot({ children, ...props }) {
  const child = Array.isArray(children) ? children[0] : children;
  if (!isValidElement(child)) return null;
  return cloneElement(child, {
    ...props,
    className: [props.className, child.props.className].filter(Boolean).join(" "),
  });
}

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
    default: "border-line bg-white/8 text-porcelain hover:border-scarlet/70 hover:bg-white/12",
    gold: "border-gold bg-gold text-ink hover:bg-porcelain",
    scarlet: "border-scarlet bg-scarlet text-porcelain hover:bg-scarlet/80",
    ghost: "border-transparent bg-transparent text-muted hover:bg-white/8 hover:text-porcelain",
  };
  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <Comp
      className={[
        "inline-flex items-center justify-center rounded-md border font-bold transition disabled:cursor-not-allowed disabled:opacity-50",
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

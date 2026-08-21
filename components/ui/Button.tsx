import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  icon?: ReactNode;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  type = "button",
  className = "",
  children,
}: ButtonProps) {
  const base = variant === "primary" ? "btn-primary-custom" : "btn-secondary-custom";
  const sizeClass = size === "sm" ? "btn-sm-custom" : "";
  const classes = `${base} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}

import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  hoverLift?: boolean;
  className?: string;
};

export default function Card({ children, hoverLift = true, className = "" }: CardProps) {
  return (
    <div className={`card-custom ${hoverLift ? "hover-lift" : ""} ${className}`.trim()}>{children}</div>
  );
}

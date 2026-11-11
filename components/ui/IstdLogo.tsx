import Image from "next/image";

type IstdLogoProps = {
  size?: number;
  className?: string;
};

// Indian Society for Training & Development logo (official artwork, 500×380).
export default function IstdLogo({ size = 72, className = "" }: IstdLogoProps) {
  return (
    <Image
      src="/images/istd-logo.png"
      alt="Indian Society for Training & Development (ISTD)"
      width={size}
      height={Math.round((size * 380) / 500)}
      className={`istd-logo ${className}`}
      style={{ background: "#fff", borderRadius: 8, padding: 4, objectFit: "contain" }}
    />
  );
}

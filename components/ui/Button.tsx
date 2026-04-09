import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide transition-all duration-200 active:scale-95";

  const styles = {
    primary:
      "bg-accent text-black hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.3)]",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-black hover:scale-105",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        style={{ fontFamily: "var(--font-sora)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

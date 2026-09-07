import { Sparkle } from "./Sparkle";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

// Design-system section header: sparkle + lavender uppercase label → bold title → muted sub.
export function SectionHeading({ eyebrow, title, sub, align = "center", className }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className ?? ""}`}>
      <div className={`mb-4 flex items-center gap-2.5 ${isCenter ? "justify-center" : "justify-start"}`}>
        <Sparkle className="text-dk-lavender h-4 w-4 md:h-5 md:w-5" />
        <span className="font-display text-dk-lavender text-xs font-semibold tracking-[0.22em] uppercase md:text-base">
          {eyebrow}
        </span>
      </div>
      <h3 className="font-kr text-dk-ink text-2xl font-black tracking-[-0.01em] md:text-5xl md:leading-[1.1]">
        {title}
      </h3>
      {sub && <p className="font-kr text-dk-muted mt-4 text-base md:text-xl">{sub}</p>}
    </div>
  );
}

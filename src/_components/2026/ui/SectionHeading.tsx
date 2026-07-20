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
      <div
        className={`mb-4 flex items-center gap-2.5 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        <Sparkle className="h-4 w-4 text-dk-lavender md:h-5 md:w-5" />
        <span className="font-display text-xs font-semibold tracking-[0.22em] text-dk-lavender uppercase md:text-base">
          {eyebrow}
        </span>
      </div>
      <h3 className="font-kr text-2xl font-black tracking-[-0.01em] text-dk-ink md:text-5xl md:leading-[1.1]">
        {title}
      </h3>
      {sub && <p className="mt-4 font-kr text-base text-dk-muted md:text-xl">{sub}</p>}
    </div>
  );
}

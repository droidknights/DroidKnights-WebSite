import { Sparkle } from "./Sparkle";

interface GlowSectionProps {
  children: React.ReactNode;
  /** base surface tone */
  tone?: "space" | "surface";
  /** accent glow colour */
  glow?: "purple" | "blue" | "none";
  /** scatter a few sparkles behind the content */
  sparkles?: boolean;
  className?: string;
}

const TONE: Record<NonNullable<GlowSectionProps["tone"]>, string> = {
  space: "bg-dk-space",
  surface: "bg-dk-surface",
};

const GLOW: Record<NonNullable<GlowSectionProps["glow"]>, string> = {
  purple:
    "radial-gradient(720px 520px at 78% 30%, rgba(123,92,255,0.28), transparent 60%), radial-gradient(560px 440px at 15% 85%, rgba(45,123,255,0.18), transparent 60%)",
  blue: "radial-gradient(680px 520px at 50% 8%, rgba(45,123,255,0.30), transparent 62%)",
  none: "none",
};

// A few fixed sparkle positions (percentages) so we don't need randomness.
const SPARKS = [
  { top: "12%", left: "8%", size: 14, o: 0.85 },
  { top: "26%", left: "88%", size: 11, o: 0.7 },
  { top: "70%", left: "16%", size: 12, o: 0.65 },
  { top: "82%", left: "72%", size: 10, o: 0.6 },
  { top: "44%", left: "40%", size: 8, o: 0.5 },
];

export function GlowSection({
  children,
  tone = "space",
  glow = "purple",
  sparkles = false,
  className,
}: GlowSectionProps) {
  return (
    <section className={`relative overflow-hidden ${TONE[tone]} ${className ?? ""}`}>
      {glow !== "none" && <div className="pointer-events-none absolute inset-0" style={{ background: GLOW[glow] }} />}
      {sparkles &&
        SPARKS.map((s, i) => (
          <Sparkle
            key={i}
            className="text-dk-lavender pointer-events-none absolute"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.o,
              filter: "drop-shadow(0 0 6px rgba(177,140,255,0.8))",
            }}
          />
        ))}
      <div className="relative">{children}</div>
    </section>
  );
}

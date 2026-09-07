"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { FAQ_KEYS } from "../../_models/2026/Faq";

import { GlowSection } from "./ui/GlowSection";
import { SectionHeading } from "./ui/SectionHeading";

export function Faqs() {
  const t = useTranslations("app.2026.faqs");

  return (
    <GlowSection tone="space" glow="purple" className="border-t border-white/5">
      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} className="mb-8 md:mb-12" />
        <div className="mx-auto max-w-[790px]">
          <Divider />
          {FAQ_KEYS.map((key) => (
            <div key={key}>
              <FaqItem question={t(`items.${key}.question`)} answer={t(`items.${key}.answer`)} />
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </GlowSection>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className="flex w-full items-start justify-between py-[15px] text-left"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
    >
      <div className="mr-4">
        <div className="text-dk-ink font-semibold md:text-2xl">{question}</div>
        <div className={`text-dk-muted text-sm font-medium md:text-xl ${open ? "visible mt-2" : "invisible mt-0 h-0"}`}>
          {answer}
        </div>
      </div>
      <ToggleIcon open={open} />
    </button>
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="text-dk-lavender h-6 w-6 shrink-0 md:h-8 md:w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      {!open && <path d="M12 5v14" />}
    </svg>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

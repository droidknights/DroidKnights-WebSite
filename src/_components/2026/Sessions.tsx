"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { ENGLISH_SESSION_KEYS, SESSION_APPLY_LINKS, SESSION_KEYS, SessionKey } from "@/src/_models/2026/Session";

import { GlowSection } from "./ui/GlowSection";
import { Portal } from "./ui/Portal";
import { SectionHeading } from "./ui/SectionHeading";
import { Sparkle } from "./ui/Sparkle";

// Only the detail popup carries the hero's blue→lavender clip — running it on all 12 cards,
// where the title stands alone without a summary, reads as noise.
const TITLE_GRADIENT = "from-dk-blue to-dk-lavender bg-linear-to-r bg-clip-text text-transparent";

export function Sessions() {
  const t = useTranslations("app.2026.sessions");

  return (
    <GlowSection tone="space" glow="blue" className="border-t border-white/5">
      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("subtitle")} className="mb-8 md:mb-10" />
        <OnlyOnSite />
        <div className="mx-auto grid max-w-[1366px] gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {SESSION_KEYS.map((key) => (
            <SessionCard key={key} sessionKey={key} />
          ))}
        </div>
      </div>
    </GlowSection>
  );
}

// 올해부터 발표 영상을 남기지 않는다. 세션 목록 바로 위에 두어 12개 세션 전체에 걸리도록 한다.
function OnlyOnSite() {
  const t = useTranslations("app.2026.sessions.onlySite");

  return (
    <div className="mb-12 text-center md:mb-20">
      <span className="border-dk-lavender/40 bg-dk-lavender/10 text-dk-lavender font-display inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase md:text-sm">
        <Sparkle className="h-3.5 w-3.5 md:h-4 md:w-4" />
        {t("badge")}
      </span>
      <p className="font-kr text-dk-subtle mx-auto mt-[18px] max-w-[760px] text-base leading-[1.7] md:text-lg">
        {t.rich("body", { br: () => <br /> })}
      </p>
    </div>
  );
}

function SessionCard({ sessionKey }: { sessionKey: SessionKey }) {
  const t = useTranslations("app.2026.sessions");
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="bg-dk-navy flex h-full cursor-pointer flex-col gap-3 rounded-[22px] border border-white/10 p-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-1 hover:border-white/20"
      >
        <h4 className="font-kr text-dk-ink text-[17px] leading-[1.42] font-black tracking-[-0.02em]">
          {t(`items.${sessionKey}.title`)}
        </h4>
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
          <span className="text-dk-ink text-sm font-bold">{t(`items.${sessionKey}.speaker`)}</span>
          <span className="font-code text-dk-muted text-[11px]">{t(`items.${sessionKey}.org`)}</span>
          {ENGLISH_SESSION_KEYS.includes(sessionKey) && <EnglishBadge label={t("english")} />}
        </div>
      </button>
      {open && <SessionDetailPopup sessionKey={sessionKey} close={() => setOpen(false)} />}
    </>
  );
}

function SessionDetailPopup({ sessionKey, close }: { sessionKey: SessionKey; close: () => void }) {
  const t = useTranslations("app.2026.sessions");
  const applyLink = SESSION_APPLY_LINKS[sessionKey];

  return (
    <Portal selector="#popup-root">
      <div
        className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-[6px]"
        onClick={close}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="bg-dk-navy max-h-full w-full max-w-[620px] overflow-y-auto rounded-[22px] border border-white/10 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] md:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-5">
            <h4
              className={`font-kr ${TITLE_GRADIENT} text-xl leading-[1.35] font-black tracking-[-0.02em] md:text-[26px]`}
            >
              {t(`items.${sessionKey}.title`)}
            </h4>
            <button type="button" onClick={close} aria-label={t("close")} className="shrink-0 cursor-pointer">
              <CloseIcon />
            </button>
          </div>

          <div className="my-5 h-px w-full bg-white/10 md:my-6" />

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-dk-ink text-base font-bold md:text-lg">{t(`items.${sessionKey}.speaker`)}</span>
            <span className="font-code text-dk-muted text-xs md:text-sm">{t(`items.${sessionKey}.org`)}</span>
            {ENGLISH_SESSION_KEYS.includes(sessionKey) && <EnglishBadge label={t("english")} />}
          </div>

          <p className="font-kr text-dk-subtle mt-4 text-sm leading-[1.8] md:text-base">
            {t.rich(`items.${sessionKey}.summary`, { br: () => <br /> })}
          </p>

          {applyLink && (
            <Link
              href={applyLink}
              target="_blank"
              rel="noreferrer noopener"
              className="from-dk-blue to-dk-purple mt-7 inline-flex items-center gap-1.5 rounded-full bg-linear-to-br px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(45,123,255,0.35)] transition-opacity hover:opacity-90"
            >
              {t("apply")}
              <span aria-hidden>→</span>
            </Link>
          )}
        </div>
      </div>
    </Portal>
  );
}

function EnglishBadge({ label }: { label: string }) {
  return (
    <span className="font-code border-dk-lavender/35 bg-dk-lavender/10 text-dk-lavender rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap">
      {label}
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="text-dk-muted hover:text-dk-ink h-6 w-6 transition-colors md:h-7 md:w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

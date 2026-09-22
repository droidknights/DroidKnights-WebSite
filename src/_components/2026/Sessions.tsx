"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import {
  BreakLabel,
  ENGLISH_SESSION_KEYS,
  SESSION_APPLY_LINKS,
  SessionKey,
  TIMETABLE,
  TimetableRow,
} from "@/src/_models/2026/Session";

import { GlowSection } from "./ui/GlowSection";
import { Portal } from "./ui/Portal";
import { SectionHeading } from "./ui/SectionHeading";
import { Sparkle } from "./ui/Sparkle";

// Only the detail popup carries the hero's blue→lavender clip — running it on all 12 cards,
// where the title stands alone without a summary, reads as noise.
const TITLE_GRADIENT = "from-dk-blue to-dk-lavender bg-linear-to-r bg-clip-text text-transparent";

type TrackIndex = 0 | 1;

const TRACKS = [
  { hall: "main", dot: "bg-dk-blue" },
  { hall: "sub", dot: "bg-dk-lavender" },
] as const;

const BREAK_STYLES: Record<BreakLabel, string> = {
  registration: "bg-dk-blue/15 py-3.5 text-dk-ink",
  lunch: "bg-dk-blue/15 py-3.5 text-dk-ink",
  keynote: "bg-dk-lavender/12 py-3.5 text-dk-lavender",
  break: "py-2.5 text-sm text-dk-muted",
};

const TABLE_COLS = "grid-cols-2 md:grid-cols-[128px_1fr_1fr]";

const formatRange = (start: string, end: string) => `${start} – ${end}`;

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export function Sessions() {
  const t = useTranslations("app.2026.sessions");

  return (
    <GlowSection tone="space" glow="blue" className="border-t border-white/5">
      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("subtitle")} className="mb-8 md:mb-10" />
        <OnlyOnSite />
        <Timetable />
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

// overflow-hidden은 트랙 헤더의 sticky를 끊으므로 모서리는 overflow-clip으로 자른다.
function Timetable() {
  return (
    <div className="bg-dk-surface mx-auto max-w-[1120px] overflow-clip rounded-[22px] border border-white/10">
      <div className={`bg-dk-surface sticky top-[77px] z-10 grid border-b border-white/10 ${TABLE_COLS}`}>
        <div className="hidden border-r border-white/10 md:block" />
        <TrackHeader track={0} />
        <TrackHeader track={1} />
      </div>
      <div className="divide-y divide-white/10">
        {TIMETABLE.map((row) => (
          <div key={row.start} className={`grid ${TABLE_COLS}`}>
            <RowTime start={row.start} end={row.end} />
            {row.kind === "session" ? (
              <div className="col-span-2 grid grid-cols-2 gap-2 p-2 md:gap-3 md:p-3">
                {row.tracks.map((key, track) => (
                  <SessionCard key={key} sessionKey={key} track={track as TrackIndex} start={row.start} end={row.end} />
                ))}
              </div>
            ) : (
              <BreakCell row={row} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackHeader({ track }: { track: TrackIndex }) {
  const t = useTranslations("app.2026.sessions.timetable");

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-4 md:px-6">
      <span className={`h-2 w-2 rounded-full ${TRACKS[track].dot}`} />
      <span className="font-display text-dk-ink text-sm font-semibold tracking-[0.15em] uppercase">
        {t("track", { number: track + 1 })}
      </span>
      <span className="font-kr text-dk-muted text-sm">{t(`halls.${TRACKS[track].hall}`)}</span>
    </div>
  );
}

function RowTime({ start, end }: { start: string; end: string }) {
  const t = useTranslations("app.2026.sessions.timetable");

  return (
    <div className="font-code hidden flex-col justify-center border-r border-white/10 px-5 py-3 text-base md:flex">
      <span className="text-dk-ink">{start}</span>
      <span className="text-dk-muted">– {end}</span>
      <span className="text-dk-blue mt-0.5 text-xs">
        ({t("duration", { minutes: toMinutes(end) - toMinutes(start) })})
      </span>
    </div>
  );
}

function BreakCell({ row }: { row: Extract<TimetableRow, { kind: "break" }> }) {
  const t = useTranslations("app.2026.sessions.timetable.breaks");

  return (
    <div
      className={`font-kr col-span-2 flex items-center justify-center gap-2.5 px-5 font-bold ${BREAK_STYLES[row.label]}`}
    >
      {row.label === "keynote" && <Sparkle className="h-3.5 w-3.5" />}
      {t(row.label)}
      <span className="font-code text-dk-muted text-[11px] font-normal md:hidden">
        {formatRange(row.start, row.end)}
      </span>
    </div>
  );
}

type SessionSlot = { sessionKey: SessionKey; track: TrackIndex; start: string; end: string };

function SessionCard({ sessionKey, track, start, end }: SessionSlot) {
  const t = useTranslations("app.2026.sessions");
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="hover:border-dk-blue/60 flex h-full cursor-pointer flex-col gap-3 rounded-[18px] border border-white/12 bg-[#15254f] p-4 text-left shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#182b5c] md:px-6 md:py-[22px]"
      >
        <span className="font-code text-dk-blue text-[11px] md:hidden">{formatRange(start, end)}</span>
        <h4 className="font-kr text-dk-ink text-[15px] leading-[1.42] font-black tracking-[-0.02em] md:text-[17px]">
          {t(`items.${sessionKey}.title`)}
        </h4>
        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/10 pt-3 md:pt-3.5">
          <span className="text-dk-ink text-sm font-bold">{t(`items.${sessionKey}.speaker`)}</span>
          <span className="font-code text-dk-muted text-[11px] wrap-anywhere">{t(`items.${sessionKey}.org`)}</span>
          {ENGLISH_SESSION_KEYS.includes(sessionKey) && <EnglishBadge label={t("english")} />}
        </div>
      </button>
      {open && (
        <SessionDetailPopup
          sessionKey={sessionKey}
          track={track}
          start={start}
          end={end}
          close={() => setOpen(false)}
        />
      )}
    </>
  );
}

function SessionDetailPopup({ sessionKey, track, start, end, close }: SessionSlot & { close: () => void }) {
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
            <div>
              <p className="font-code text-dk-muted mb-3 text-xs md:text-sm">
                {formatRange(start, end)} · {t("timetable.track", { number: track + 1 })}{" "}
                {t(`timetable.halls.${TRACKS[track].hall}`)}
              </p>
              <h4
                className={`font-kr ${TITLE_GRADIENT} text-xl leading-[1.35] font-black tracking-[-0.02em] md:text-[26px]`}
              >
                {t(`items.${sessionKey}.title`)}
              </h4>
            </div>
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

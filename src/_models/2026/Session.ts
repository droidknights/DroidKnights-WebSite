/** 사전(app.2026.sessions.items)에 정의된 세션 키. */
export type SessionKey =
  | "lazyRow"
  | "crashToPr"
  | "aiQa"
  | "workflowAx"
  | "webviewLoading"
  | "a2ui"
  | "haptic"
  | "overseasCareer"
  | "baseline"
  | "biometric"
  | "audioPlugin"
  | "resumeFeedback";

/** 영어로 진행되는 세션. 카드와 상세에 English 배지를 붙인다. */
export const ENGLISH_SESSION_KEYS: readonly SessionKey[] = ["biometric", "audioPlugin"];

/** 이력서 공개처형 지원 폼. 세션 상세 팝업과 모집 섹션이 함께 쓴다. */
export const RESUME_APPLY_LINK = "https://forms.gle/hsXzkiF5LymoWbmR8";

/** 참가자를 따로 모집하는 세션의 신청 폼. 상세 팝업 하단에 CTA로 노출한다. */
export const SESSION_APPLY_LINKS: Partial<Record<SessionKey, string>> = {
  resumeFeedback: RESUME_APPLY_LINK,
};

export type BreakLabel = "registration" | "keynote" | "break" | "lunch";

export type TimetableRow =
  | { kind: "session"; start: string; end: string; tracks: readonly [SessionKey, SessionKey] }
  | { kind: "break"; start: string; end: string; label: BreakLabel };

/** 2026-11-02 확정 시간표. tracks는 [Track 1 메인홀, Track 2 서브홀] 순서다. */
export const TIMETABLE: readonly TimetableRow[] = [
  { kind: "break", start: "09:30", end: "10:40", label: "registration" },
  { kind: "break", start: "10:40", end: "11:00", label: "keynote" },
  { kind: "session", start: "11:00", end: "11:30", tracks: ["baseline", "haptic"] },
  { kind: "break", start: "11:30", end: "11:50", label: "break" },
  { kind: "session", start: "11:50", end: "12:35", tracks: ["crashToPr", "lazyRow"] },
  { kind: "break", start: "12:35", end: "13:55", label: "lunch" },
  { kind: "session", start: "13:55", end: "14:25", tracks: ["overseasCareer", "biometric"] },
  { kind: "break", start: "14:25", end: "14:45", label: "break" },
  { kind: "session", start: "14:45", end: "15:30", tracks: ["a2ui", "resumeFeedback"] },
  { kind: "break", start: "15:30", end: "15:50", label: "break" },
  { kind: "session", start: "15:50", end: "16:35", tracks: ["aiQa", "audioPlugin"] },
  { kind: "break", start: "16:35", end: "16:55", label: "break" },
  { kind: "session", start: "16:55", end: "17:40", tracks: ["workflowAx", "webviewLoading"] },
];

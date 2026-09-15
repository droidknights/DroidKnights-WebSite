/** 사전(app.2026.sessions.items)에 정의된 세션 키. 노출 순서를 함께 정의한다. */
export const SESSION_KEYS = [
  "lazyRow",
  "crashToPr",
  "aiQa",
  "workflowAx",
  "webviewLoading",
  "a2ui",
  "haptic",
  "overseasCareer",
  "baseline",
  "biometric",
  "audioPlugin",
  "resumeFeedback",
] as const;

export type SessionKey = (typeof SESSION_KEYS)[number];

/** 영어로 진행되는 세션. 카드와 상세에 English 배지를 붙인다. */
export const ENGLISH_SESSION_KEYS: readonly SessionKey[] = ["biometric", "audioPlugin"];

/** 이력서 공개처형 지원 폼. 세션 상세 팝업과 모집 섹션이 함께 쓴다. */
export const RESUME_APPLY_LINK = "https://forms.gle/hsXzkiF5LymoWbmR8";

/** 참가자를 따로 모집하는 세션의 신청 폼. 상세 팝업 하단에 CTA로 노출한다. */
export const SESSION_APPLY_LINKS: Partial<Record<SessionKey, string>> = {
  resumeFeedback: RESUME_APPLY_LINK,
};

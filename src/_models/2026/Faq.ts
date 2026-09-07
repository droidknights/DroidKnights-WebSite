/** 사전(app.2026.faqs.items)에 정의된 질문 키. 노출 순서를 함께 정의한다. */
export const FAQ_KEYS = ["onsiteTicket", "groupPurchase", "attendanceCertificate"] as const;

export type FaqKey = (typeof FAQ_KEYS)[number];

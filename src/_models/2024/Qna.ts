/** 사전(app.2024.qna.items)에 정의된 질문 키. 노출 순서를 함께 정의한다. */
export const QNA_KEYS = ["onsiteTicket", "attendanceCertificate"] as const;

export type QnaKey = (typeof QNA_KEYS)[number];

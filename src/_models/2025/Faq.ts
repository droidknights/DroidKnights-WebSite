export interface Faq {
  question: string;
  answer: string;
}

export const faqList: Faq[] = [
  {
    question: "Q. 행사 당일날 현장에서도 티켓 구매가 가능한가요?",
    answer: "아니요, 현장에서는 따로 참가 신청을 받지 않습니다.",
  },
  {
    question: "Q. 행사 참석확인증은 어떻게 발급받나요?",
    answer:
      "티켓 구매 시 참석확인증에 필요한 정보를 입력해주세요. 행사 종료 일주일 이내에 실제 참석 여부 확인 후 확인증을 발송해드리도록 하겠습니다.",
  },
];

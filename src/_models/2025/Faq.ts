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
      "티켓은 예매자가 구매한 사이트에서 발급할 수 있습니다. [나의 예매 > 예매 상세] 화면에서 티켓 오른쪽의 [⋮] 버튼을 눌러 발급해주세요.",
  },
];

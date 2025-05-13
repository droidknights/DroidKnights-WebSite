export interface Faq {
  question: string;
  answer: string;
}

export const faqList: Faq[] = [
  {
    question: "Q. 행사 당일 현장에서 티켓 구매가 가능한가요?",
    answer: "아니요. 모든 티켓은 온라인으로만 판매되며, 행사 당일 현장에서는 구매하실 수 없습니다.",
  },
  {
    question: "Q. 단체로 티켓을 구매할 수 있나요?",
    answer:
      "별도의 단체구매 기능은 제공하지 않지만, 한 번에 최대 10장까지 구매하실 수 있습니다. 여러번 나누어 구매해 주세요.",
  },
  {
    question: "Q. 참석확인증은 어떻게 발급받을 수 있나요?",
    answer:
      "예매하신 사이트의 [나의 예매 > 예매 상세] 화면에서, 티켓 오른쪽에 있는 [⋮] 버튼을 눌러 참석확인증을 발급받을 수 있습니다.",
  },
];

export enum Type {
  ANDROID = "Android",
  GENERAL = "General",
}

export interface Session {
  title: string;
  speaker: string;
  type?: Type;
  startTime: string;
  endTime: string;
  detail?: SessionDetail;
}

export interface SessionDetail {
  company?: string;
  description: string;
  speakerDescription: string;
}

export const sessionList: { title: string; speaker: string }[] = [
  {
    title: "다양한 스크롤 뷰에서의 영상 재생",
    speaker: "이가은",
  },
  {
    title: "Benchmark와 BaselineProfile을 사용해 LazyColumn 스크롤 성능을 75% 개선하기까지의 여정",
    speaker: "송상윤",
  },
  {
    title: "제미나이와 함께 안드로이드 공부하기",
    speaker: "양찬석",
  },
  {
    title: "Android에서 실현 가능한 모든 AI",
    speaker: "강사룡",
  },
  {
    title: "Bytecode Manipulation 을 통해 생산성 높이기",
    speaker: "강대규",
  },
  {
    title: "전방위 자동화 시대, CI/CD를 넘어 PM과 QA까지 확장하기",
    speaker: "김호중",
  },
  {
    title: "나도 edgeToEdge 적용하기 싫어. 근데 누군가는 해야 하잖아?",
    speaker: "이지훈",
  },
  {
    title: "KMP로 Figma 아이콘 동기화, 클릭 한 번이면 끝!",
    speaker: "옥수환",
  },
  {
    title: "ReadMoreTextView: 텍스트 '더보기' 기능 구현하기",
    speaker: "안성용",
  },
  {
    title: "당신의 클린아키텍처는 틀렸다",
    speaker: "박상권",
  },
  {
    title: "컴포즈 스냅샷 내부원리 찍어먹기",
    speaker: "강다현",
  },
  {
    title: "카카오뱅크 Compose 적용기",
    speaker: "이수호",
  },
  {
    title: "Jetpack XR 살펴보기: XR 개발은 어떻게 이루어지는가?",
    speaker: "윤희성",
  },
  {
    title: "레드팀 화이트해커의 Offensive 관점 안드로이드 앱 보안(feat. CVE-2025-****)",
    speaker: "김주원",
  },
];

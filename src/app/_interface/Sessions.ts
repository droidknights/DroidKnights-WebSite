enum Type {
  ANDROID = "Android",
  GENERAL = "General",
}

export interface Session {
  title: string;
  speaker: string;
  type?: Type;
  startTime: string;
  endTime: string;
}

export interface Track {
  sessions: Session[];
}

export const COUNT_BEFORE_LUNCH = 3;

export const track1: Track = {
  sessions: [
    {
      title: "키노트",
      speaker: "Speaker",
      type: undefined,
      startTime: "10:40",
      endTime: "11:00",
    },
    {
      title: "Compose 성능 최적화를 위한 Stability 마스터하기",
      speaker: "엄재웅",
      type: Type.ANDROID,
      startTime: "11:00",
      endTime: "11:30",
    },
    {
      title: "시니어와 주니어의 협업 다리: 온라인 및 오프라인 페어코딩의 통찰",
      speaker: "정동진, 최재웅",
      type: Type.GENERAL,
      startTime: "11:50",
      endTime: "12:35",
    },
    // 점심시간
    {
      title: "Compose UI 컴포넌트 설계와 테스트",
      speaker: "김수현",
      type: Type.ANDROID,
      startTime: "13:55",
      endTime: "14:25",
    },
    {
      title: "개발자가 아닙니다 (다양한 기술직군의 경력관리 이야기)",
      speaker: "김민구, 박동후, 양찬석",
      type: Type.GENERAL,
      startTime: "14:45",
      endTime: "15:15",
    },
    {
      title: "당신의 앱 빌드는 안녕하십니까?",
      speaker: "차영호",
      type: Type.ANDROID,
      startTime: "15:45",
      endTime: "16:30",
    },
    {
      title: "Compose Material3 커스텀 디자인 시스템 구축기",
      speaker: "권대원",
      type: Type.ANDROID,
      startTime: "16:55",
      endTime: "17:20",
    },
  ],
};

export const track2: Track = {
  sessions: [
    {
      title: "키노트",
      speaker: "Speaker",
      type: undefined,
      startTime: "10:40",
      endTime: "11:00",
    },
    {
      title: "Accessibility in android",
      speaker: "신현성",
      type: Type.ANDROID,
      startTime: "11:00",
      endTime: "11:30",
    },
    {
      title: "앱 성능 영혼까지 끌어올리기",
      speaker: "배필주",
      type: Type.ANDROID,
      startTime: "11:50",
      endTime: "12:35",
    },
    // 점심시간
    {
      title: "혹시 API Mocking좀 해주실래요? - API Mocking 도구로 생산성 올리기",
      speaker: "문종락",
      type: Type.ANDROID,
      startTime: "13:55",
      endTime: "14:25",
    },
    {
      title: "Github Actions로 효율적인 배포 환경 만들기",
      speaker: "김태성",
      type: Type.GENERAL,
      startTime: "14:45",
      endTime: "15:15",
    },
    {
      title: "플레이어 SDK 개발자의 Kotlin Multiplatform 도입기",
      speaker: "모진섭",
      type: Type.ANDROID,
      startTime: "15:45",
      endTime: "16:30",
    },
    {
      title: "Compose로 Animation 만들기 feat.holgraphic Card",
      speaker: "최우성",
      type: Type.ANDROID,
      startTime: "16:55",
      endTime: "17:20",
    },
  ],
};

export const track3: Track = {
  sessions: [
    {
      title: "키노트",
      speaker: "Speaker",
      type: undefined,
      startTime: "10:40",
      endTime: "11:00",
    },
    {
      title: "코틀린 제로베이스 DSL",
      speaker: "히카맹",
      type: Type.GENERAL,
      startTime: "11:00",
      endTime: "11:30",
    },
    {
      title: "무엇이든 물어보세요",
      speaker: "Junior",
      type: Type.GENERAL,
      startTime: "11:50",
      endTime: "12:35",
    },
    // 점심시간
    {
      title: "고객사의 context에 최소 영향으로 채널톡 SDK에 다크모드 적용하기",
      speaker: "윤혁",
      type: Type.ANDROID,
      startTime: "13:55",
      endTime: "14:25",
    },
    {
      title: "compose-video 오픈소스 라이브러리 개발기 (배포까지)",
      speaker: "이상훈",
      type: Type.ANDROID,
      startTime: "14:45",
      endTime: "15:15",
    },
    {
      title: "무엇이든 물어보세요",
      speaker: "Senior",
      type: Type.GENERAL,
      startTime: "15:45",
      endTime: "16:30",
    },
    {
      title: "TextField 씹고 뜯고 맛보고 즐기고",
      speaker: "이현우",
      type: Type.ANDROID,
      startTime: "16:55",
      endTime: "17:20",
    },
  ],
};

export const tracks = [track1, track2, track3];

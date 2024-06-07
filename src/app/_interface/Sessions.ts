enum Type {
  ANDROID = "Android",
  GENERAL = "General",
}

export interface SessionDetail {
  company: string;
  description: string;
  speakerDescription: string;
}

export interface Session {
  title: string;
  speaker: string;
  type?: Type;
  startTime: string;
  endTime: string;
  detail?: SessionDetail;
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
      detail: {
        company: "Stream",
        speakerDescription:
          "Android & Kotlin GDE로 기여하고 있으며, Stream이라는 미국 회사에서 Lead Android Developer Advocate로 재직 중입니다. skydoves라는 닉네임으로 오픈소스 활동을 즐겨 하고 있습니다.",
        description:
          "Jetpack Compose에서 앱 성능에 영향을 미치는 Recomposition과 Stability에 대한 이해, Smart Recomposition의 작동 방식, Composable 함수의 안정성 추론 메커니즘, Composable 함수를 stable하게 만들기 위한 annotation 및 Strong Skipping Mode 등 Compose의 성능 최적화를 위한 다양한 방법들을 소개합니다.",
      },
    },
    {
      title: "시니어와 주니어의 협업 다리: 온라인 및 오프라인 페어코딩의 통찰",
      speaker: "정동진, 최재웅",
      type: Type.GENERAL,
      startTime: "11:50",
      endTime: "12:35",
      detail: {
        company: "NAVER",
        speakerDescription:
          "최재웅\n현재 Naver에서 Cafe 앱을 개발하고 있습니다. Android 개발자로 시작하여 6년정도 하고 있습니다.\n\n정동진\n2009년 부터 Android를 시작했고 Naver에는 2021년 부터 합류 했습니다.",
        description:
          "1. 발표자소개\n2. 간략한 PairCoding 소개\n3. PairCoding 방법 팁\n\t(a) 온라인\n\t(b) 오프라인\n4. 주니어 입장에서 바라본 PairCoding\n\t(a) 장점\n\t(b) 뜻밖의 소득?\n5. 시니어 입장에서 바라본 PairCoding\n\t(a) 장점\n\t(b) 시니어도 성장한다?\n6. 실전에서 얻은 PairCoding 효과\n7. 결론\n8. Q&A",
      },
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
      detail: {
        company: "LINE Plus",
        speakerDescription:
          "LINE Plus에서 안드로이드 개발자 분들의 업무 효율을 높이기 위한 여러가지 업무개선작업을 진행하고 있습니다.",
        description:
          "생산성과 앱빌드\n\n빌드 안정성 개선\n\t• build requirement checker\n\t• Repository Content Filtering\n\t• Mirroring\n\n빌드 성능 개선\n\t• 커스터마이징\n\t• JVM 옵션 최적화\n\t• JVM 교체\n\t• BuildConfig\n\t• Gradle Remote Build Cache\n\t• On Demand Configuration\n\t• Configuration Cache\n\n트렌드 따라가기",
      },
    },
    {
      title: "Compose Material3 커스텀 디자인 시스템 구축기",
      speaker: "권대원",
      type: Type.ANDROID,
      startTime: "16:50",
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
      startTime: "16:50",
      endTime: "17:20",
      detail: {
        company: "ONE Store",
        speakerDescription:
          "요새 운동에 푹빠진 ONE store에서 일하고있는 Android 개발자입니다. 사용자의 인터렉션에 대해 관심이 많고, 남들에게 공유하는것을 좋아합니다.",
        description:
          "이번에 발표할 챕터는 Compose로 Animation 만들기입니다. LookAheadLayout과 sharedTransition에 대해 알아보고, Card를 이용하여 뒤집는 애니메이션, 핸드폰의 움직임에 따른 인터렉션, Pallarax 애니메이션을 다룰 예정입니다.",
      },
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
      startTime: "16:50",
      endTime: "17:20",
    },
  ],
};

export const tracks = [track1, track2, track3];

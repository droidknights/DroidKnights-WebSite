enum Type {
  ANDROID = "Android",
  GENERAL = "General",
}

export interface SessionDetail {
  company?: string;
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
      detail: {
        company: "우아한형제들",
        speakerDescription:
          "우아한형제들에서 우아한테크코스 모바일 안드로이드 교육 분야를 운영합니다. GDG Korea Android와 드로이드나이츠의 Organizer로 활동하고 있습니다.",
        description:
          "기존 Android View에서는 화면(Activity, Fragment) 단위의 UI 테스트가 일반적이였으나, Compose에서는 컴포넌트 단위의 UI 테스트를 할 수 있습니다. 테스트 가능한 컴포넌트를 디자인하는 방법을 실제 예시 기반으로 설명합니다. 이 과정에서 Compose보다 역사가 긴 React의 컴포넌트 설계 노하우를 참고합니다.",
      },
    },
    {
      title: "개발자가 아닙니다 (다양한 기술직군의 경력관리 이야기)",
      speaker: "김민구, 박동후, 양찬석",
      type: Type.GENERAL,
      startTime: "14:45",
      endTime: "15:15",
      detail: {
        company: "구글 코리아",
        speakerDescription:
          "김민구\n웹 개발자로 시작하여, 샌드위치카페를 하다가 안드로이드 앱개발을 하였고, 이후 자동차소프트웨어 개발을 하다가 TPM(Technical PM)직을 맡으며 현재 직무에 발을 딛게 되었고, 구글에서는 Technical Consultant일을 하다가 지금은 TAM(Technical Account Manager) 업무를 하고 있습니다. 앱/게임 개발사들을 도와 각 회사들이 기술적 및 비즈니스적으로 성공하는 일을 돕고 있습니다.\n\n박동후\nWearOS Technical Solution Consultant로 OEM들이 WearOS를 이용하여 성공적인 제품을 출시하도록 돕고 있습니다. 구글에서는 만 3년 정도 TSC로 일을 하고 있는데, 개발자로서는 할 수 없는 정말 다양한 경험을 하고 있습니다. 개발자로 일 할 때는 기술을 제일의 가치로 두고 일했었는데, business 관점에서 가장 중요한 것은 Communication이라는 것을 몸소 체험하고 있습니다. 이러한 경험을 여러분과 함께 나누고 싶습니다!\n\n양찬석\n안드로이드 2.0 시절, 앱 개발자로 안드로이드에 발을 들였습니다. 시간이 꽤 흘러 현재는 순수 개발 일 대신 Google Korea 개발자 관계 팀에서 앱 개발자 분들이 더 좋은 앱을 만들 수 있도록 돕는 일을 하고 있습니다. 개발자 커뮤니티  활동에 관심이 많고, 종종 안드로이드 관련된 내용을 소개하는 발표를 진행하기도 했습니다.",
        description:
          "Google 에서 개발자 관계, 파트너 엔지니어, 테크니컬 어카운트 매니지먼트 팀에서 일하는 세 명이 한 자리에 모였습니다. 개발직군이지만 개발자는 아닌, 아직은 생소할 수 있는 각 직책에 대해 소개하고, 왜 이런 일을 하게되었는지, 경력 관리 측면에서는 어떤 장단점이 있는지 솔직 담백하게 이야기 드리려고 합니다. 안드로이드 플랫폼이라는 큰 생태계 안에서 앱 개발자가 아닌 다른 기술직군 이야기에 관심 있는 분들의 참여를 기다립니다.",
      },
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
      detail: {
        company: "컬리",
        speakerDescription:
          "현재 컬리에 재직 중이며, 기존 서비스에 Compose를 적용하고, KPDS(Kurly Product Design System)를 만들어 나가는 과정에서의 경험들을 공유합니다.",
        description:
          "1. 기존 Material3 은 어떻게 디자인 컴포넌트를 구성하고 있었는지\n2. Compose Material3를 커스텀 하여 디자인 시스템을 구축하는 과정에서 겪은 트러블 슈팅 경험\n3. Compose 마이그레이션 과정에서 어떤 경험들이 있었는지\n4. 위 내용보다 중요할지 모르는 디자인팀과 디자인 시스템 구축 과정에서의 커뮤니케이션 & 트러블슈팅",
      },
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
      detail: {
        speakerDescription:
          "UI와 사용자 경험에 관심이 많은 개발자 입니다. 최근에는 디자인 시스템 개발에 참여하여 유저 경험 뿐만 아니라 동료의 개발 경험도 개선하고 있습니다.",
        description:
          "정부에서 시행한 모바일 앱 접근성 준수 지침이 의무화 되었습니다. 혹시 여러분들은 개발하실 때, 접근성을 고려하고 계시나요? 접근성에 대해 가볍게 알아보고, 향상시키는 기술적 방안들을 소개합니다. 이번 기회에 모든 사용자가 쉽게 사용할 수 있는 앱을 만드는 방법을 함께 배워봅시다!",
      },
    },
    {
      title: "앱 성능 영혼까지 끌어올리기",
      speaker: "배필주",
      type: Type.ANDROID,
      startTime: "11:50",
      endTime: "12:35",
      detail: {
        company: "네이버제트",
        speakerDescription:
          "현재는 네이버제트에서 제페토 서비스를 좀 더 빠르고 쾌적하게 즐길 수 있게 하기 위한 이런 저런 고민들을 하고 있습니다. 또한 개발 이야기 나누는 것을 좋아해서 GDG Korea Android 운영진으로도 활동하고 있습니다.",
        description:
          "이 발표에서는, 어떻게 네이버제트가 앱의 성능을 측정하고 개선 포인트를 찾아서 적용했는지 공유하려 합니다. 단지 성공적인 사례를 넘어서, 개발자들이 서비스를 고도화 할 때 직면할 수 있는 성능 문제에 대한 도전과 그 해결 방법을 포함하고자 합니다. 네이버제트의 경험을 통해, 청자들도 앱이 당면한 성능 문제를 극복하고, 최종 사용자에게 최상의 경험을 제공하는 방법을 발견할 수 있기를 바랍니다.",
      },
    },
    // 점심시간
    {
      title: "혹시 API Mocking좀 해주실래요? - API Mocking 도구로 생산성 올리기",
      speaker: "문종락",
      type: Type.ANDROID,
      startTime: "13:55",
      endTime: "14:25",
      detail: {
        company: "카카오뱅크",
        speakerDescription:
          "안녕하세요. `안되는 건 없다! 된다고 하게`라는 마음으로 카카오뱅크에서 다양한 도전을 하고 있는 문종락입니다.",
        description:
          "우리가 알게 모르게 행해왔던 API Mocking에 대해 전반적인 개념을 설명하고 각 프로젝트 사정에 맞는 API Mocking 방법에 대해 고민해 봅니다. 또한 카카오뱅크에서는 어떠한 방법으로 API를 Mocking 하고 생산성을 올리고 있는지에 대해 간단한 샘플과 코드를 통해 알아볼 예정입니다.",
      },
    },
    {
      title: "Github Actions로 효율적인 배포 환경 만들기",
      speaker: "김태성",
      type: Type.GENERAL,
      startTime: "14:45",
      endTime: "15:15",
      detail: {
        speakerDescription: "동료들이 효율적으로 일할 수 있도록 개발 환경에 대해 고민하고 개선하고 있어요.",
        description:
          "Github Action을 간단하게만 사용하고 계시나요? 실제 업무에 바로 활용할 수 있는 팁과 사례들을 통해 업무 효율성을 함께 높여봐요.",
      },
    },
    {
      title: "플레이어 SDK 개발자의 Kotlin Multiplatform 도입기",
      speaker: "모진섭",
      type: Type.ANDROID,
      startTime: "15:45",
      endTime: "16:30",
      detail: {
        company: "네이버",
        speakerDescription:
          "현재 네이버에서 PRISM Player SDK를 개발하고 있습니다. KMP에 푹 빠져있으며, 공유 코드가 늘어날 때마다 흐뭇한 표정을 짓습니다.",
        description:
          "네이버 공통 플레이어 SDK에 KMP를 도입한 경험과 고민했던 내용을 공유합니다.\n\n- 왜 KMP를 도입하게 됐나요?\n- 어떻게 기존 프로젝트를 KMP로 마이그레이션했나요?\n- UI는 어떻게 했나요?\n- 도입하면서 어떤 어려움이 있었나요?\n- 그래서 KMP 쓸만한가요?",
      },
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

export const tracks = [track1, track2];

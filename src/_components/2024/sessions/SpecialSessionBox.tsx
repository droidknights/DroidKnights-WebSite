import { useTranslations } from "next-intl";

function Divider() {
  return <div className="h-px bg-[#46A7E0]" />;
}

/** 모바일은 제목/시간을 두 줄로, 데스크톱은 한 줄로 보여준다. */
function SpecialSession({ title, time, className }: { title: string; time: string; className?: string }) {
  return (
    <div className={`text-left ${className ?? ""}`}>
      <div className="text-xl font-semibold text-[#46A7E0] md:hidden md:text-4xl">
        <p>{title}</p>
        <p>{time}</p>
      </div>
      <div className="hidden text-xl font-semibold text-[#46A7E0] md:block md:text-4xl">
        {title} {time}
      </div>
    </div>
  );
}

export function SpecialSessionBox() {
  const t = useTranslations("app.2024.sessions.special");

  return (
    <div className="mt-10 w-full md:mt-[72px]">
      <h3 className="mt-8 mb-9 text-2xl font-bold text-white md:my-[72px] md:text-5xl xl:text-6xl">{t("title")}</h3>
      {/** 이력서 / 포트폴리오 */}
      <SpecialSession title={t("resumeFeedback")} time={t("resumeFeedbackTime")} className="mb-10 md:mb-20" />
      <SpecialSession title={t("resumeQna")} time={t("resumeQnaTime")} className="mb-10 md:mb-20" />

      {/** 라이트닝토크 */}
      <SpecialSession title={t("lightningTalk")} time={t("lightningTalkTime")} className="mb-3 md:mb-4" />
      <Divider />
      <div className="mt-3 text-left text-sm font-medium text-[#888888] md:mt-4 md:text-2xl">
        {t("lightningTalkDescription")}
      </div>
    </div>
  );
}

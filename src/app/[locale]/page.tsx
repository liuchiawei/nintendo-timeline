import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";
import { gameConsoles } from "@/data/gameConsoles";

type ConsoleKey =
  | "Famicom"
  | "SuperFamicom"
  | "Nintendo64"
  | "GameCube"
  | "Wii"
  | "WiiU"
  | "Switch"
  | "Switch2";

export default function Home() {
  const t = useTranslations("");
  const unit = t("Home.unit");
  const sales = t("Home.sales");
  const data = gameConsoles.map((consoleItem) => {
    const key = consoleItem.key as ConsoleKey;
    return {
      time: consoleItem.time,
      content: t(`${key}.content`),
      title: t(`${key}.title`),
      subtitle: t(`${key}.subtitle`),
      url: consoleItem.url,
      solds: consoleItem.solds,
      topgame: t(`${key}.topgame`),
      topgame_url: consoleItem.topgame_url,
      topgame_solds: consoleItem.topgame_solds,
    };
  });
  return (
    <div className="w-full">
      <HeaderLines
        title={t("Home.title")}
        subtitle={t("Home.subtitle")}
        description={t("Home.description")}
      />
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-black dark:text-white max-w-4xl">
          {t("Home.intro_title")}
        </h2>
        <h3 className="text-base md:text-2xl mb-8 max-w-4xl">
          {t("Home.intro_subtitle")}
        </h3>
        {/* {t("Home.intro_description", { returnObjects: true }).map(
          (desc: string, i: number) => (
            <p
              key={i}
              className="text-neutral-600 dark:text-neutral-500 text-sm md:text-base max-w-sm text-justify"
            >
              {desc}
            </p>
          )
        )} */}
        <p className="text-neutral-600 dark:text-neutral-500 text-sm md:text-base max-w-sm text-justify">
          {t("Home.intro_description.0")} <br />
          {t("Home.intro_description.1")} <br />
          {t("Home.intro_description.2")}
        </p>
      </div>
      <Timeline data={data} sales={sales} unit={unit} />
      <Footer name="HAL東京 | リュウチャーウェイ" />
    </div>
  );
}

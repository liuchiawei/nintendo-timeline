import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/footer";
import BackToTop from "@/components/back_to_top";
import { data } from "@/data/data";
import ScrollDown from "@/components/scroll_down";
import { useTranslations } from "next-intl";

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
  return (
    <div>
      <HeaderLines
        title={t("Home.title")}
        subtitle={t("Home.subtitle")}
        description={t("Home.description")}
      />
      <div
        className="h-full md:h-screen max-w-7xl mx-auto py-20 flex flex-col justify-center items-center px-4 relative"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-black dark:text-white max-w-4xl">
          {t("Home.intro_title")}
        </h2>
        <h3 className="text-base md:text-2xl mb-8 max-w-4xl">
          {t("Home.intro_subtitle")}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-500 text-sm md:text-base max-w-sm text-justify">
          {t("Home.intro_description.0")}<br />
          {t("Home.intro_description.1")}<br />
          {t("Home.intro_description.2")}<br />
        </p>
        <ScrollDown />
      </div>
      <Timeline data={data} />
      <Footer name="HAL東京 リュウチャーウェイ" />
      <BackToTop />
    </div>
  );
}

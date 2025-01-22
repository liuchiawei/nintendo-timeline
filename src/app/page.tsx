import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
export default function Home() {
  const data: {
    time: string;
    content: string;
    title: string;
    subtitle: string;
    url: string;
    solds: number;
  }[] = [
    {
      time: "1983",
      content:
        "ファミリーコンピュータ、通称「ファミコン」として親しまれ、8ビットの性能で多くの名作ゲームが生まれました。家庭用ゲーム機の定番となり、日本中で大ヒットしました。",
      title: "ファミコン",
      subtitle: "Famicom",
      url: "/images/famicom.png",
      solds: 6191,
    },
    {
      time: "1990",
      content:
        "16ビットに進化し、グラフィックや音質が大幅に向上。『スーパーマリオワールド』や『ゼルダの伝説』など、多くの名作が登場しました。",
      title: "スーパーファミコン",
      subtitle: "Super Famicom",
      url: "/images/super_famicom.png",
      solds: 4910,
    },
    {
      time: "1996",
      content:
        "64ビットの性能で、初の3Dゲーム体験を提供。『スーパーマリオ64』や『ゼルダの伝説 時のオカリナ』など、革新的な作品が生まれました。",
      title: "ニンテンドー64",
      subtitle: "Nintendo 64",
      url: "/images/n64.jpg",
      solds: 3293,
    },
    {
      time: "2001",
      content:
        "コンパクトなデザインと高性能を兼ね備え、8cmの光ディスクを採用。『大乱闘スマッシュブラザーズDX』などが人気を博しました",
      title: "ゲームクーバー",
      subtitle: "GameCube",
      url: "/images/game_cube.png",
      solds: 2174,
    },
    {
      time: "2006",
      content:
        "モーションコントロールを導入し、体感型ゲームを実現。『Wii Sports』は家族や友人と楽しめるゲームとして大ヒットしました。",
      title: "Wii",
      subtitle: "Wii",
      url: "/images/wii.webp",
      solds: 10163,
    },
    {
      time: "2012",
      content:
        "タブレット型コントローラー「Wii U GamePad」を採用し、テレビと手元画面のデュアルプレイが可能に。新しいゲーム体験を提供しました。",
      title: "Wii U",
      subtitle: "Wii U",
      url: "/images/wii_u.webp",
      solds: 1356,
    },
    {
      time: "2017",
      content:
        "据え置きと携帯のハイブリッド型ゲーム機。『ゼルダの伝説 ブレス オブ ザ ワイルド』や『スプラトゥーン2』など、多くの人気タイトルが登場し、現在も多くのユーザーに愛されています。",
      title: "Switch",
      subtitle: "スイッチ",
      url: "/images/switch.png",
      solds: 14604,
    },
  ];
  return (
    <div className="w-full">
      <HeaderLines
        title="Nintendo Timeline"
        subtitle="任天堂の歴史"
        description="任天堂の歴史"
      />
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          1990 from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}

import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/footer";
export default function Home() {
  const data: {
    time: string;
    content: string;
    title: string;
    subtitle: string;
    url: string;
    solds: number | string;
    topgame: string;
    topgame_url: string;
    topgame_solds: number | string;
  }[] = [
    {
      time: "1983",
      content:
        "ファミリーコンピュータ、通称「ファミコン」として親しまれ、8ビットの性能で多くの名作ゲームが生まれました。家庭用ゲーム機の定番となり、日本中で大ヒットしました。",
      title: "ファミコン",
      subtitle: "Famicom",
      url: "/images/famicom.png",
      solds: 6191,
      topgame: "スーパーマリオブラザーズ",
      topgame_url: "/images/games/super_mario_bros.png",
      topgame_solds: 4024,
    },
    {
      time: "1990",
      content:
        "16ビットに進化し、グラフィックや音質が大幅に向上。『スーパーマリオワールド』や『ゼルダの伝説』など、多くの名作が登場しました。",
      title: "スーパーファミコン",
      subtitle: "Super Famicom",
      url: "/images/super_famicom.png",
      solds: 4910,
      topgame: "スーパーマリオワールド",
      topgame_url: "/images/games/super_mario_world.jpg",
      topgame_solds: 2061,
    },
    {
      time: "1996",
      content:
        "64ビットの性能で、初の3Dゲーム体験を提供。『スーパーマリオ64』や『ゼルダの伝説 時のオカリナ』など、革新的な作品が生まれました。",
      title: "ニンテンドー64",
      subtitle: "Nintendo 64",
      url: "/images/n64.png",
      solds: 3293,
      topgame: "スーパーマリオ64",
      topgame_url: "/images/games/super_mario_64.jpg",
      topgame_solds: 1191,
    },
    {
      time: "2001",
      content:
        "コンパクトなデザインと高性能を兼ね備え、8cmの光ディスクを採用。『大乱闘スマッシュブラザーズDX』などが人気を博しました",
      title: "ゲームクーバー",
      subtitle: "GameCube",
      url: "/images/game_cube.png",
      solds: 2174,
      topgame: "大乱闘スマッシュブラザーズDX",
      topgame_url: "/images/games/super_smash_bros_dx.webp",
      topgame_solds: 738,
    },
    {
      time: "2006",
      content:
        "モーションコントロールを導入し、体感型ゲームを実現。『Wii Sports』は家族や友人と楽しめるゲームとして大ヒットしました。",
      title: "Wii",
      subtitle: "Wii",
      url: "/images/wii.webp",
      solds: 10163,
      topgame: "Wii Sports",
      topgame_url: "/images/games/wii_sports.webp",
      topgame_solds: 8287,
    },
    {
      time: "2012",
      content:
        "タブレット型コントローラー「Wii U GamePad」を採用し、テレビと手元画面のデュアルプレイが可能に。新しいゲーム体験を提供しました。",
      title: "Wii U",
      subtitle: "Wii U",
      url: "/images/wii_u.webp",
      solds: 1356,
      topgame: "マリオカート8",
      topgame_url: "/images/games/mario_kart_8.jpg",
      topgame_solds: 846,
    },
    {
      time: "2017",
      content:
        "据え置きと携帯のハイブリッド型ゲーム機。『ゼルダの伝説 ブレス オブ ザ ワイルド』や『スプラトゥーン2』など、多くの人気タイトルが登場し、現在も多くのユーザーに愛されています。",
      title: "Switch",
      subtitle: "スイッチ",
      url: "/images/switch.png",
      solds: 14604,
      topgame: "マリオカート8 デラックス",
      topgame_url: "/images/games/mario_kart_8_dx.webp",
      topgame_solds: 6427,
    },
    {
      time: "2025",
      content:
        "任天堂は2025年に次世代機「Nintendo Switch 2」を発売予定です。 本体は現行モデルよりも大型化し、画面サイズも拡大される見込みです。新しいJoy-Conは横から差し込むタイプに変更され、操作性の向上が期待されています。また、初代Switchのソフトもプレイ可能で、互換性が確保されています。",
      title: "Switch 2",
      subtitle: "スイッチ2",
      url: "/images/switch2.webp",
      solds: "???",
      topgame: "coming soon",
      topgame_url: "/images/splatoon2.webp",
      topgame_solds: "???",
    },
  ];
  return (
    <div className="w-full">
      <HeaderLines
        title="任天堂"
        subtitle="クロニクル"
        description="Nintendo Chronology"
      />
      <div className="max-w-7xl mx-auto py-20 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-black dark:text-white max-w-4xl">
          任天堂の軌跡
        </h2>
        <h3 className="text-base md:text-2xl mb-8 max-w-4xl">
          ゲーム機の進化を辿る旅へ
        </h3>
        <p className="text-gray-600 dark:text-gray-500 text-sm md:text-base max-w-sm text-justify">
          任天堂が2025年に「Nintendo Switch 2」を発売することを発表しましたね。
          このサイトでは、初代ファミリーコンピュータから最新機種まで、任天堂の歴代ゲーム機の進化と革新の歴史を詳しく紹介します。各ハードウェアの特徴や発売当時のエピソード、代表的なゲームタイトルなどを網羅し、任天堂ファンやゲーム愛好者にとって貴重な情報源となることを目指しています。
        </p>
      </div>
      <Timeline data={data} />
      <Footer name="HAL東京 リュウチャーウェイ" />
    </div>
  );
}

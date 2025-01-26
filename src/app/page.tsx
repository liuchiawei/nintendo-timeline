import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/footer";
import BackToTop from "@/components/back_to_top";
import { data } from "@/data/data";
import ScrollDown from "@/components/scroll_down";

export default function Home() {
  return (
    <div className="w-full">
      <HeaderLines
        title="任天堂"
        subtitle="クロニクル"
        description="The Evolution of Nintendo"
      />
      <div
        className="h-full md:h-screen max-w-7xl mx-auto py-20 flex flex-col justify-center items-center px-4 relative"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-black dark:text-white max-w-4xl">
          任天堂の軌跡
        </h2>
        <h3 className="text-base md:text-2xl mb-8 max-w-4xl">
          8ビットから次世代へ
        </h3>
        <p className="text-neutral-600 dark:text-neutral-500 text-sm md:text-base max-w-sm text-justify">
          任天堂が2025年に「Nintendo Switch 2」を発表しますね！ <br />
          このサイトでは、初代ファミリーコンピュータから最新機種まで、任天堂のゲーム機がどのように進化し、革新を続けてきたのかを詳しく紹介しています。各ハードの特徴や発売当時のエピソード、そして名作ゲームの数々まで、たっぷりとお届け！
          <br />
          任天堂ファンはもちろん、ゲームの歴史に興味がある方にも楽しんでいただける情報満載のサイトです。ぜひ、懐かしの名機から最新ハードまで、一緒に任天堂の軌跡を振り返ってみませんか？
        </p>
        <ScrollDown />
      </div>
      <Timeline data={data} />
      <Footer name="HAL東京 リュウチャーウェイ" />
      <BackToTop />
    </div>
  );
}

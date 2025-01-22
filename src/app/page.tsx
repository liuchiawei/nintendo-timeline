import { HeaderLines } from "@/components/header_lines";
import { Timeline } from "@/components/ui/timeline";
export default function Home() {
  const data: {
    time: string;
    content: string;
    title: string;
    subtitle: string;
    url: string;
  }[] = [
    {
      time: "1983",
      content: "Deployed 5 new components on Aceternity today",
      title: "ファミコン",
      subtitle: "Famicom",
      url: "/images/famicom.png",
    },
    {
      time: "1990",
      content:
        "I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum. Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.",
      title: "スーパーファミコン",
      subtitle: "Super Famicom",
      url: "/images/super_famicom.png",
    },
    {
      time: "1996",
      content: "Deployed 5 new components on Aceternity today",
      title: "ニンテンドー64",
      subtitle: "Nintendo 64",
      url: "/images/n64.jpg",
    },
    {
      time: "1993",
      content: "Deployed 5 new components on Aceternity today",
      title: "ゲームクーバー",
      subtitle: "GameCube",
      url: "/images/game_cube.png",
    },
    {
      time: "1995",
      content: "Deployed 5 new components on Aceternity today",
      title: "Wii",
      subtitle: "Wii",
      url: "/images/wii.webp",
    },
    {
      time: "1996",
      content: "Deployed 5 new components on Aceternity today",
      title: "Wii U",
      subtitle: "Wii U",
      url: "/images/wii_u.webp",
    },
    {
      time: "2011",
      content: "Deployed 5 new components on Aceternity today",
      title: "Nintendo 3DS",
      subtitle: "ニンテンドー3DS",
      url: "/images/3ds.webp",
    },
    {
      time: "2017",
      content: "Deployed 5 new components on Aceternity today",
      title: "Switch",
      subtitle: "スイッチ",
      url: "/images/switch.png",
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

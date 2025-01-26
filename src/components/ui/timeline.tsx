"use client";
import AnimatedCounter from "@/components/animated_counter";
import PopupCard from "@/components/popup_card";
import StickyComponent from "@/components/sticky_component";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Element, Link } from "react-scroll";
import { useFormatter } from "next-intl";

interface TimelineEntry {
  time: string;
  content: string;
  title: string;
  subtitle: string;
  url: string;
  solds: number;
  topgame: string;
  topgame_url: string | null;
  topgame_solds: number;
}

export const Timeline = ({
  data,
  sold_title,
  unit,
  game_unit,
  hover_hint,
}: {
  data: TimelineEntry[];
  sold_title: string;
  unit: string;
  game_unit: string;
  hover_hint: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  // ナビゲーションバーの表示/非表示
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // height of the Button to show: 1000px
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 左のスクロールバーの高さを取得
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `${height}px`]
  );

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // 売り上げの単位を変更
  const format = useFormatter();
  const compact = (value: number) =>
    format.number(value, {
      notation: "compact",
    });
  const compactNumber = (value: number) =>
    Number(parseFloat(compact(value)).toFixed(1));
  const compactUnit = (value: number) => compact(value).replace(/[0-9.]/g, "");

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <nav
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } fixed top-1/2 right-8 -translate-y-1/2 w-10 hidden md:flex flex-col items-center gap-4 z-50 bg-transparent transition-opacity duration-300`}
        >
          <div className="h-full bg-foreground/50 absolute top-0 left-1/2 -translate-x-1/2 border border-foreground/50 z-0" />
          {data.map((item, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <Link
                  to={index.toString()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="scale-130 brightness-50 dark:brightness-200"
                  className="ring-3 ring-background size-3 rounded-full bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500 dark:hover:bg-neutral-500 transition-all duration-100 transform cursor-pointer"
                >
                  <TooltipTrigger className="w-full h-full cursor-pointer" />
                </Link>
                <TooltipContent>
                  <p>{item.time}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
        {data.map((item, index) => (
          <Element
            key={index}
            name={index.toString()} //Linkのtoと同じ
            className="flex justify-start pt-8 md:pt-20 md:gap-10"
          >
            <StickyComponent
              time={item.time}
              title={item.title}
              content={item.content}
            />
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Time Section */}
              <h3 className="md:hidden block text-4xl mb-4 text-left font-bold text-foreground">
                {item.time}
              </h3>
              <div>
                <p className="block md:hidden text-neutral-600 dark:text-neutral-500 text-xs md:text-sm font-normal mb-4">
                  {item.content}
                </p>
                <div className="flex flex-col gap-4">
                  {/* Scroll Card Frame*/}
                  <div className="rounded-lg object-cover h-[500px] md:h-[600px] w-full flex flex-col items-center justify-center gap-3">
                    <PopupCard
                      url={item.url}
                      title={item.title}
                      subtitle={item.subtitle}
                      topgame={item.topgame}
                      topgame_url={item.topgame_url ?? ""}
                      topgame_solds={compactNumber(item.topgame_solds)}
                      topgame_compact_unit={compactUnit(item.topgame_solds)}
                      game_unit={game_unit}
                      hover_hint={hover_hint}
                    />
                    <h3 className="text-md md:text-xl text-center">
                      {sold_title}
                    </h3>
                    <div className="flex justify-center items-end gap-2">
                      <AnimatedCounter
                        value={compactNumber(item.solds)}
                        className="text-4xl md:text-8xl font-bold"
                      />
                      <h3 className="text-md md:text-xl">
                        {compactUnit(item.solds) + unit}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-t from-red-400 via-red-700 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import PopupCard from "@/components/popup_card";
import AnimatedCounter from "@/components/animated_counter";
import StickyComponent from "@/components/sticky_component";
import { Link, Element } from "react-scroll";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface TimelineEntry {
  time: string;
  content: string;
  title: string;
  subtitle: string;
  url: string;
  solds: number | string;
  topgame: string;
  topgame_url: string | null;
  topgame_solds: number | string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <nav
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } fixed top-1/2 right-8 -translate-y-1/2 w-10 hidden md:flex flex-col items-center gap-4 z-50 bg-transparent transition-opacity duration-300`}
        >
          {data.map((item, index) => (
            <TooltipProvider key={index} delayDuration={300}>
              <Tooltip>
                <Link
                  to={index.toString()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="scale-150 bg-accent"
                  className="size-3 rounded-full bg-foreground/20 hover:bg-foreground/70 transition-all duration-100 transform cursor-pointer"
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
                      topgame_solds={item.topgame_solds}
                    />
                    <h3 className="text-md md:text-xl text-center">売上台数</h3>
                    <div className="flex justify-center items-end gap-2">
                      <AnimatedCounter
                        value={item.solds}
                        className="text-4xl md:text-8xl font-bold"
                      />
                      <h3 className="text-md md:text-xl">万台</h3>
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

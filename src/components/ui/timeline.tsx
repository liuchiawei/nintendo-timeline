"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  time: string;
  content: string;
  title: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

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

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 top-2 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2" />
              </div>
              {/* {Desktop Time Section TODO: Delete after testing} */}
              <div className="hidden md:block pl-20">
                <h3 className="text-6xl text-gray-200 dark:text-gray-700">
                  {item.time}
                </h3>
                <p className="mt-10 text-md font-normal text-gray-700 dark:text-gray-400">
                  {item.content}
                </p>
              </div>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* {Mobile Time Section TODO: Delete after testing} */}
              <h3 className="md:hidden block text-4xl mb-4 text-left font-bold text-gray-500 dark:text-gray-400">
                {item.time}
              </h3>
              <div>
                <p className="block md:hidden text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  {item.content}
                </p>
                <div className="flex flex-col gap-4">
                  {/* TODO: Card Image */}
                  <div className="rounded-lg object-cover h-20 md:h-40 lg:h-[700px] w-full bg-gray-200 dark:bg-gray-700" />
                  <h3 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg text-center font-normal mb-4">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 dark:via-gray-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-400 via-rose-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

"use client";

import { useInView } from "react-intersection-observer";
import React from "react";

interface StickyComponentProps {
  time: string;
  title: string;
  content: string;
}

const StickyComponent = ({ time, title, content }: StickyComponentProps) => {
  const { ref, inView } = useInView({
    threshold: 1, // 要素が完全にビューポート内に入ったときにトリガー
  });

  return (
    <div
      ref={ref}
      className="sticky top-20 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full"
    >
      <div className="h-10 absolute left-3 top-4 w-10 rounded-full bg-background flex items-center justify-center">
        <div
          className={`rounded-full transition-all duration-500 ${
            inView
              ? "bg-background ring-4 p-1 ring-foreground"
              : "p-2 bg-neutral-200 dark:bg-neutral-800"
          }`}
        />
      </div>
      <div className="hidden md:block pl-20">
        <h3
          className={`text-7xl transition-all duration-500 ${
            inView
              ? "text-foreground"
              : "text-neutral-200 dark:text-neutral-800"
          }`}
        >
          {time}
        </h3>
        <h3 className="my-4 text-lg font-bold dark:font-normal text-neutral-600 dark:text-neutral-300">
          {title}
        </h3>
        <p className="text-md font-normal text-neutral-600 dark:text-neutral-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default StickyComponent;

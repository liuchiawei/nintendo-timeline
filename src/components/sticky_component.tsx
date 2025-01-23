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
      <div className="h-10 absolute left-3 top-2 w-10 rounded-full bg-background flex items-center justify-center">
        <div
          className={`h-4 w-4 rounded-full p-2 transition-all duration-500 ${
            inView ? "bg-accent dark:bg-accent" : "bg-gray-200 dark:bg-gray-800"
          }`}
        />
      </div>
      <div className="hidden md:block pl-20">
        <h3
          className={`text-7xl transition-all duration-500 ${
            inView
              ? "text-accent dark:text-accent"
              : "text-gray-200 dark:text-gray-800"
          }`}
        >
          {time}
        </h3>
        <h3 className="my-4 text-lg font-bold dark:font-normal text-gray-600 dark:text-gray-300">
          {title}
        </h3>
        <p className="text-md font-normal text-gray-600 dark:text-gray-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default StickyComponent;

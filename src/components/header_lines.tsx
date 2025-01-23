import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function HeaderLines({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-7xl lg:text-8xl relative z-20 font-black tracking-tight select-none">
        {title} <br /> {subtitle}
      </h2>
      <p className="mt-4 max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        {description}
      </p>
    </BackgroundLines>
  );
}

"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollDown = () => {
  const scrollDown = () => {
    if (window.visualViewport) {  
      window.scrollTo({ top: window.visualViewport?.height, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  return (
    <Button onClick={scrollDown} variant="outline" className={`absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer`}>
      <ArrowDown className="size-4" />
    </Button>
  );
}

export default ScrollDown;

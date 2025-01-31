import { useState } from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import ReactCardFlip from "react-card-flip";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function PopupCard({
  url,
  title,
  subtitle,
  topgame,
  topgame_url,
  topgame_solds,
}: {
  url: string;
  title: string;
  subtitle: string;
  topgame: string;
  topgame_url: string;
  topgame_solds: number | string;
}) {
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(340)}, ${hue(10)})`;
  const [isFlipped, setIsFlipped] = useState(false);
  /** 
    @function handleFlip
    @description: カードを裏返す関数
  */
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
    <motion.div
      className="card-container"
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      onClick={handleFlip}
    >
      <div style={{ ...splash, background }} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          variants={cardVariants}
          className="w-[240px] h-[180px] md:w-[400px] md:h-[300px] flex flex-col items-center justify-center origin-[10%_60%]"
        >
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            cardZIndex="50"
          >
            <TooltipProvider delayDuration={200}>
              <CardContainer>
                <CardBody className="w-[240px] h-[180px] md:w-[400px] md:h-[300px] flex flex-col items-center justify-center origin-[10%_60%]">
                  <CardItem translateZ={20}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image
                          src={url}
                          alt={title}
                          width={500}
                          height={300}
                          className="cursor-pointer"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>トップゲームはどれ？</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardItem>
                  <CardItem translateZ={80}>
                    <h3 className="text-white text-md md:text-xl text-center font-normal drop-shadow-sm cursor-pointer">
                      {subtitle}
                    </h3>
                  </CardItem>
                  <CardItem translateZ={100}>
                    <h1 className="text-white text-2xl md:text-4xl text-center font-bold drop-shadow-md cursor-pointer">
                      {title}
                    </h1>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </TooltipProvider>
            <CardContainer>
              <CardBody
                className={`w-[240px] h-[210px] md:w-[400px] md:h-[350px] flex flex-col items-center justify-center origin-[10%_60%] transition-all duration-100 rounded-3xl bg-neutral-600 shadow-lg ${
                  isFlipped ? "" : "opacity-0"
                }`}
              >
                <div
                  onClick={handleFlip}
                  className="absolute z-0 w-full h-full rounded-3xl"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${topgame_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "darken",
                  }}
                />
                <CardItem translateZ={50}>
                  <h3 className="text-neutral-200 text-md md:text-2xl text-center font-normal drop-shadow-sm cursor-pointer">
                    {topgame}
                  </h3>
                </CardItem>
                <CardItem translateZ={120}>
                  <h1 className="text-white text-2xl md:text-7xl text-center font-bold drop-shadow-sm cursor-pointer">
                    {topgame_solds}
                    <span className="text-neutral-200 text-sm md:text-base text-normal">
                      {" "}
                      万本
                    </span>
                  </h1>
                </CardItem>
              </CardBody>
            </CardContainer>
          </ReactCardFlip>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 40,
    rotate: -8,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

/**
 * ==============   Styles   ================
 */

const cardContainer: React.CSSProperties = {
  width: "100%",
  maxWidth: "500px",
  height: 450,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

import { animate, stagger, motion } from "motion/react";

export default function AnimatedCounter ({ value }: { value: number }) {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" animate={controls}>
      {value}
    </motion.div>
  );
};
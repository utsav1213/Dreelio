"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RollButtonProps {
  text: string;
  className?: string;
}

export default function RollButton({ text, className }: RollButtonProps) {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className={cn(
        "relative h-[58px] overflow-hidden rounded-full px-10",
        "bg-[#140f0f] text-white",
        className,
      )}
    >
      {/* Text Wrapper */}
      <div className="relative h-[24px] overflow-hidden">
        {/* Top Text */}
        <motion.span
          variants={{
            rest: { y: 0 },
            hover: { y: -28 },
          }}
          transition={{
            duration: 0.35,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="block text-[18px] font-medium"
        >
          {text}
        </motion.span>

        {/* Bottom Text */}
        <motion.span
          variants={{
            rest: { y: 28 },
            hover: { y: 0 },
          }}
          transition={{
            duration: 0.35,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute left-0 top-0 block text-[18px] font-medium"
        >
          {text}
        </motion.span>
      </div>
    </motion.button>
  );
}

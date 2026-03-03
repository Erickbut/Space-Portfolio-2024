"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.2;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
      className="
        transition-all duration-300 ease-out
        hover:scale-110
        hover:-translate-y-2
        hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]
        cursor-pointer
      "
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
      />
    </motion.div>
  );
};

export default SkillDataProvider;
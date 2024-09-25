"use client";
import Image from "next/image";
import React, { useRef } from "react";
import appScreen from "../../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
const ProductShowCaseAnmation = () => {
  const refImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: refImage, // theo dõi scroll của refImage
    offset: ["start end", "end end"], // khi scroll từ start -> end thì scrollYProgress từ 0 -> 1
  });
  //nếu scrollYProgress từ 0 -> 1 thì rotateX từ 15 -> 0
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{
        opacity: opacity,
        rotateX: rotateX,
        transformPerspective: "800px",
      }}
    >
      <Image
        src={appScreen}
        alt="The Product Screenshot"
        className="mt-14"
        ref={refImage}
      />
    </motion.div>
  );
};

export default React.memo(ProductShowCaseAnmation);

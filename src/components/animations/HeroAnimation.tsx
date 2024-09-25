"use client";
import messageImage from "../../assets/images/message.png";
import cursorImage from "../../assets/images/cursor.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <>
      <motion.div
        className="absolute right-[470px] top-[109px] hidden sm:inline"
        drag // ảnh có thể kéo
        dragSnapToOrigin // trả ảnh về vị trí ban đầu
      >
        <Image
          draggable={false}
          src={cursorImage}
          height={200}
          quality={100}
          alt="cursor-image"
          className="max-w-none"
        ></Image>
      </motion.div>
      <motion.div
        className="absolute top-[56px] left-[498px] hidden sm:inline"
        drag
        dragSnapToOrigin
      >
        <Image
          src={messageImage}
          draggable={false}
          width={200}
          height={200}
          quality={100}
          className="max-w-none"
          alt="message-image"
        ></Image>
      </motion.div>
    </>
  );
};

export default React.memo(HeroAnimation);

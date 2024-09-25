"use client";
import acmeLogo from "../../assets/images/acme.png";
import quantumLogo from "../../assets/images/quantum.png";
import echoLogo from "../../assets/images/echo.png";
import celestialLogo from "../../assets/images/celestial.png";
import pulseLogo from "../../assets/images/pulse.png";
import apexLogo from "../../assets/images/apex.png";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LogoTickerAnimation = () => {
  return (
    <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
      <motion.div
        animate={{ translateX: "-50%" }}
        transition={{
          duration: "10", // 10s thì chạy qua hết
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ translateX: 0 }}
        className="flex-none flex gap-16 pr-16"
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="flex-none h-8 w-auto"
            />
          );
        })}
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="flex-none h-8 w-auto"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default React.memo(LogoTickerAnimation);

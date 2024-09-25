"use client";
import React from "react";
import EcosytemIcon from "../../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const FeatureAnimation = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px , black , transparent)`;
  const borderRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateMousemovenPosition = (e: MouseEvent) => {
      if (!borderRef.current) return;
      // lấy ra vị trí của borderRef
      const borderRect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x); // lấy ra vị trí x của chuột so với borderRef
      offsetY.set(e.y - borderRect?.y); // lấy ra vị trí y của chuột so với borderRef
    };
    window.addEventListener("mousemove", updateMousemovenPosition);
    return () => {
      window.removeEventListener("mousemove", updateMousemovenPosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="border border-white/30 px-5 py-10 text-center rounded-xl relative">
        <motion.div
          className="absolute inset-0 border-2 border-purple-400 rounded-xl "
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
          }}
          ref={borderRef}
        ></motion.div>
        <div className="inline-flex rounded-xl h-14 w-14 bg-white text-black justify-center items-center sm:flex-1">
          <EcosytemIcon />
        </div>
        <h3 className="mt-6 font-bold ">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </div>
    </>
  );
};

export default React.memo(FeatureAnimation);

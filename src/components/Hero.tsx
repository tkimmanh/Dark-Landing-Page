import ArrowIcon from "../assets/icons/arrow-w.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeroAnimation from "./animations/HeroAnimation";

export const Hero = () => {
  const t = useTranslations("HomePage.hero");
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-hidden">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="border inline-flex gap-3 py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              {t("title")}
            </span>
            <span className="inline-flex items-center gap-1 ">
              {t("readMore")}
              <ArrowIcon></ArrowIcon>
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center ">
              One Task <br />
              at a time
            </h1>
            <HeroAnimation></HeroAnimation>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            {t("description")}
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black rounded-lg font-medium py-3 px-5 ">
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
};

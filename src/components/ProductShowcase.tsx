import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { useTranslations } from "next-intl";

export const ProductShowcase = () => {
  const t = useTranslations("HomePage.productShowCase");
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold sm:text-6xl tracking-tighter">
          {t("title")}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            {t("description")}
          </p>
        </div>
        <Image
          src={appScreen}
          alt="the product screenshot"
          className="mt-14 "
        ></Image>
      </div>
    </div>
  );
};

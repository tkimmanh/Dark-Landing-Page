import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const CallToAction = () => {
  const t = useTranslations("HomePage.callToAction");
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container max-w-xl overflow-hidden relative">
        {/* <div>
          <Image
            src={helixImage}
            alt="Helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </div>
        <div>
          <Image
            src={emojiStarImage}
            alt="Emoji star"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </div> */}

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          {t("title")}
        </h2>
        <p className="text-xl text-white/70 mt-5 text-center">
          {t("description")}
        </p>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
        >
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 sm:py-2 py-3 font-medium placeholder-text-[#FFFFFF]_50% flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            {t("button")}
          </button>
        </form>
      </div>
    </div>
  );
};

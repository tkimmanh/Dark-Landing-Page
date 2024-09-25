import { useTranslations } from "next-intl";
import ProductShowCaseAnmation from "./animations/ProductShowCaseAnimation";

export const ProductShowcase = () => {
  const t = useTranslations("HomePage.productShowCase");
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container max-w-6xl">
        <h2 className="text-center text-5xl font-bold sm:text-6xl tracking-tighter">
          {t("title")}
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            {t("description")}
          </p>
        </div>
        <ProductShowCaseAnmation />
      </div>
    </div>
  );
};

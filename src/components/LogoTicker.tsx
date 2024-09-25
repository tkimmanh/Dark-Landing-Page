import { useTranslations } from "next-intl";

import LogoTickerAnimation from "./animations/LogoTickerAnimation";

export const LogoTicker = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">{t("logoTicker")}</h2>
        <LogoTickerAnimation></LogoTickerAnimation>
      </div>
    </div>
  );
};

import { useTranslations } from "next-intl";
import Link from "next/link";

export const Banner = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="py-3 text-center bg-custom-gradient">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">{t("banner")} - </span>
          <Link href="#" className="underline underline-offset-4 ">
            {t("banner2")}
          </Link>
        </p>
      </div>
    </div>
  );
};

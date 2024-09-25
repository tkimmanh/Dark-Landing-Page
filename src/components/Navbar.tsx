import Image from "next/image";
import LogoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ChangeLanguage from "./ChangeLanguage";
export const Navbar = () => {
  const t = useTranslations("HomePage.menu");
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={LogoImage} alt="logo" className="w-12 h-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 rounded-lg w-10 h-10 inline-flex items-center justify-center sm:hidden">
            <MenuIcon className="text-white"></MenuIcon>
          </div>
          <nav className="text-white hidden sm:flex gap-6 items-center">
            <Link
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
              href="#"
            >
              {t("about")}
            </Link>
            <Link
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
              href="#"
            >
              {t("feature")}
            </Link>
            <Link
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
              href="#"
            >
              {t("updates")}
            </Link>
            <Link
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
              href="#"
            >
              {t("helps")}
            </Link>
            <Link
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
              href="#"
            >
              {t("customer")}
            </Link>

            <ChangeLanguage></ChangeLanguage>

            <button className="bg-white py-2 px-4 rounded-lg text-black">
              {t("forfree")}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

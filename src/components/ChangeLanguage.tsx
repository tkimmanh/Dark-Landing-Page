"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, locales } from "@/i18n/config";

const ChangeLanguage = () => {
  const t = useTranslations("HomePage.SwitchLanguage");
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    router.replace(pathname, {
      locale: value as Locale,
    });
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="max-w-[160px] text-white/60 py-2 px-4 rounded-lg"
      >
        {t("title")}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute mt-2 max-w-[200px] shadow-lg rounded-lg"
          >
            {locales.map((locale, index) => (
              <div
                key={index}
                onClick={() => handleSelectChange(locale)}
                className="py-2 px-4 max-w-[300px] text-white cursor-pointer"
              >
                {t(locale)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChangeLanguage;

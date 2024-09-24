"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React, { Suspense } from "react";

const ChangeLanguage = () => {
  const local = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* <Select
        value={local}
        onValueChange={(value) => {
          router.replace(pathname, {
            locale: value as Locale,
          });
          router.refresh();
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("title")} />
        </SelectTrigger>
        <SelectContent>
          {locales.map((locale, index) => {
            return (
              <SelectItem key={index + 1} value={locale}>
                {t(locale)}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select> */}
    </>
  );
};

export default ChangeLanguage;

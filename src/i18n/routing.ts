import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

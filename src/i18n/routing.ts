import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./config";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "vi",
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

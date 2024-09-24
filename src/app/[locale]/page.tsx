import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { unstable_setRequestLocale } from "next-intl/server";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}

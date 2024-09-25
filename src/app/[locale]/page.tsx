import { Banner } from "@/components/Banner";
import { CallToAction } from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
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
      <LogoTicker></LogoTicker>
      <Features></Features>
      <ProductShowcase></ProductShowcase>
      <FAQs></FAQs>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}

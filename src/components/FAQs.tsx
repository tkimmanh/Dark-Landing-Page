"use client";
import { useTranslations } from "next-intl";
import AccordionItem from "@/components/animations/AccordionAnimation";
import { items } from "@/util/constans";

export const FAQs = () => {
  const t = useTranslations("HomePage.faqs");
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CAB] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          {t("title")}
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item) => (
            <AccordionItem
              key={item.question}
              answer={item.answer}
              question={item.question}
            ></AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
};

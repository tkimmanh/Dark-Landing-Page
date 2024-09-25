"use client";
import { useTranslations } from "next-intl";
import AccordionItem from "@/components/animations/AccordionAnimation";
const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

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

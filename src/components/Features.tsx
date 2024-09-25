import { useTranslations } from "next-intl";
import FeatureAnimation from "./animations/FeatureAnimation";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  const t = useTranslations("HomePage.feature");
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          {t("title")}
        </h2>
        <div className=" max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            {t("description")}
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:flex-1">
          {features.map((feature, index) => {
            return (
              <FeatureAnimation
                key={feature.title}
                description={feature.description}
                title={feature.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

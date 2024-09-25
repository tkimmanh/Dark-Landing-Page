import { useTranslations } from "next-intl";
import EcosytemIcon from "../assets/icons/ecosystem.svg";
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
        <div className="mt-16 flex flex-col sm:flex-row  gap-4">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="border border-white/30 px-5 py-10 text-center rounded-xl"
              >
                <div className="inline-flex rounded-xl h-14 w-14 bg-white text-black justify-center items-center sm:flex-1">
                  <EcosytemIcon />
                </div>
                <h3 className="mt-6 font-bold ">{feature.title}</h3>
                <p className="mt-2 text-white/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

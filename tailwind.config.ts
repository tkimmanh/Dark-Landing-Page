import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 55, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))",
      },
    },
  },
  plugins: [],
};
export default config;

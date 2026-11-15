import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D7A3E", // Main Clean Energy Green
          deep: "#062E1B",    // Deep Midnight Eco Forest
          navy: "#071E3D",    // MAP Corporate Deep Tech Navy
          blue: "#00549A",    // MAP Official Brand Blue
          sky: "#0284C7",     // Solar Photovoltaic Sky Blue
          green: "#16A34A",   // Luminous Clean Energy Green
          yellow: "#F59E0B",  // Solar Gold Accent
          "green-hover": "#15803D",
          "primary-hover": "#0A6633",
          "blue-hover": "#00427A",
          "yellow-hover": "#D97706",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          bg: "#F5F8FC",     // Light Sky-Tinted Tech Surface (Blue Vibe)
          blue: "#EBF4FA",   // Light Tech Blue Card Surface
          green: "#EAF5EE",  // Clean Energy Green Highlight
          border: "#D4E2ED", // Crisp Blue-Slate Technical Border
        },
        text: {
          primary: "#0A1C30",   // Deep Corporate Tech Navy
          secondary: "#354C63", // Slate Navy Secondary Text
          muted: "#637D96",
        },
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        bangla: ["Hind Siliguri", "Noto Sans Bengali", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(8, 43, 89, 0.06), 0 1px 3px 0 rgba(8, 43, 89, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(8, 43, 89, 0.12), 0 4px 10px 0 rgba(8, 43, 89, 0.06)",
        float: "0 20px 40px -10px rgba(0, 84, 154, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

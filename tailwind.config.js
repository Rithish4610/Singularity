/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        singularity: {
          bg: "#050805",
          surface: "#0B1008",
          card: "#101700",
          primary: "#D8FF00",
          glow: "#E8FF3B",
          border: "#6F8500",
          text: "#F5F7F0",
          secondary: "#AEB5A0",
          danger: "#FF453A",
          warning: "#FFD60A",
        },
      },
      boxShadow: {
        lime: "0 0 20px rgba(216,255,0,0.18)",
        "lime-strong": "0 0 30px rgba(216,255,0,0.30)",
      },
      borderRadius: { xl2: "18px" },
    },
  },
  plugins: [],
};


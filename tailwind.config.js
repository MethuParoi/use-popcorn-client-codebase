/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#608BC1",
          secondary: "#133E87",
          accent: "#CBDCEB",
          neutral: "#F3F3E0",
          "base-100": "#ffffff",
          "base-200": "#EEEEEE",
        },
      },
      {
        dark: {
          primary: "#1E293B",
          secondary: "#334155",
          accent: "#64748B",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
        },
      },
    ],
  },
};

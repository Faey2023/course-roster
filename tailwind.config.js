/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c43e50",
          secondary: "#e06ded",
          accent: "#7865f2",
          neutral: "#231f33",
          info: "#57a0e5",
          success: "#249e5d",
          warning: "#e1a605",
          error: "#ee6388",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

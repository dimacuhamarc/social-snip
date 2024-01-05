/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        SocialSnap: {
          "primary": "#8b5cf6",
          "secondary": "#f84900",
          "accent": "#6d28d9",
          "neutral": "#f5f5f5",
          "base-100": "#262626",
          "info": "#6d28d9",
          "success": "#15803d",
          "warning": "#f97316",
          "error": "#e11d48",
        },
      }
    ],
  },
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
    require("tailwindcss-animate"),
  ],
  variants: {
    scrollbar: ['rounded'],
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgba(38, 125, 255, 1)",
        "text-primary": "rgba(0, 99, 247, 1)",
        "text-neutral-700": "rgba(55, 65, 81, 1)",
        "text-neutral-900": "rgba(17, 24, 39, 1)",
        "text-neutral-500": "rgba(107, 114, 128, 1)",
        "generic-white": "rgba(255, 255, 255, 1)",
      },
      spacing: {
        "165px": "165px",
        "button": "25px",
      }
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    screens: {
      "sm": "640px",
      "md": "768px",
    },
    fontSize: {
      xl: ["52px", "56px"],
      md: ["18px", "28px"],
      bullet: ["16px", "24px"],
      lg: ["32px", "40px"],
      h2: ["36px", "44px"],
      h6: ["20px", "28px"],
      h4: ["28px", "36px"],
      tiny: ["10px", "20px"],
      h5: ["24px", "32px"],
      smallScreen: ["14px", "20px"],
      smallScreenHeader: ["18px", "24px"],
    },
  },
  plugins: [],
}


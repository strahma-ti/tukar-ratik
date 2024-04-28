/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    screens: {
      xl: { max: "2560px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "320px" },
    },
    extend: {
      colors: {
        grey: {
          50: "#F6F6F6",
          100: "#ECECEC",
          200: "#E3E3E3",
          300: "#D2D2D2",
          400: "#BDBDBD",
          500: "#979797",
          600: "#727272",
          700: "#4C4C4C",
          800: "#3D3D3D",
          900: "#2D2D2D",
        },
        primary: {
          50: "#EBF9F7",
          100: "#DEF5F2",
          200: "#CDF0EC",
          300: "#BCEBE6",
          400: "#ACE6DF",
          500: "#9BE1D9",
          600: "#81BBB5",
          700: "#4E716D",
          800: "#344B48",
          900: "#1F2D2B",
        },
        secondary: {
          50: "#E0F0FB",
          100: "#CCE5F8",
          200: "#B2D8F4",
          300: "#99CCF1",
          400: "#80BFED",
          500: "#66B2EA",
          600: "#44779C",
          700: "#335975",
          800: "#223B4E",
          900: "#14242F",
        },
        tertiary: {
          50: "#E3FBED",
          100: "#D1F8E1",
          200: "#B9F4D2",
          300: "#A2F0C4",
          400: "#8BEDB5",
          500: "#74E9A6",
          600: "#4D9B6F",
          700: "#3A7553",
          800: "#274E37",
          900: "#172F21",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        100: "0px 8px 8px -4px rgba(24, 39, 75, 0.08), 0px 4px 6px -4px rgba(24, 39, 75, 0.12)",
        200: "0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12)",
        300: "0px 10px 32px -4px rgba(24, 39, 75, 0.1), 0px 6px 14px -6px rgba(24, 39, 75, 0.12)",
        400: "0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12)",
        500: "0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)",
      },
      lineHeight: {
        120: "120%",
      },
      fontSize: {
        H1: [
          "45px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        H2: [
          "32px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        H3: [
          "24px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        Title: [
          "18px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "500",
          },
        ],
        Subtitle: [
          "15px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        Caption: [
          "12px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [flowbite.plugin()],
};

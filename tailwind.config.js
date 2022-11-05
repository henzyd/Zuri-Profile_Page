/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          Primary25: "#F5FAFF",
          Primary50: "#EFF8FF",
          Primary100: "#D1E9FF",
          Primary200: "#B2DDFF",
          Primary300: "#84CAFF",
          Primary400: "#53B1FD",
          Primary500: "#2E90FA",
          Primary600: "#1570EF",
          Primary700: "#175CD3",
          Primary800: "#1849A9",
          Primary900: "#194185",
        },
        Gray: {
          Gray25: "#FCFCFD",
          Gray50: "#F9FAFB",
          Gray100: "#F2F4F7",
          Gray200: "#EAECF0",
          Gray300: "#D0D5DD",
          Gray400: "#98A2B3",
          Gray500: "#667085",
          Gray600: "#475467",
          Gray700: "#344054",
          Gray800: "#1D2939",
          Gray900: "#101828",
        },
      },
      screens: {
        SmallPhones: { min: " 220px", max: "380px" },
        // => @media (min-width: 320px) { ... }

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        // MediumPhones: "375px",
        // // => @media (min-width: 375px) { ... }

        TheRest: { max: "620px" },

        // LargePhones: { min: "425px", max: "767px" },
        // // => @media (min-width: 425px) { ... }
        LargePhones: { min: "621px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        Tablet: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px) { ... }

        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};

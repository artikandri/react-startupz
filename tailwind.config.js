/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./_frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      container: {
        width: true,
        center: true,
        screens: {
          sm: "480px",
          md: "768px",
          lg: "1024px",
        },
      },
      fontFamily: {
        custom: ["CircularStd", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        white: "#fff",
        gray: {
          100: "#fbfbfa",
          200: "#939393",
        },
        darkslategray: "#3d4f5c",
        whitesmoke: "#f3f3f3",
        "secondary-yellow": "#ffc351",
        "complementary-green": "#46b8c8",
        coral: "#fb8958",
        mediumpurple: "#8b60d3",
        darkcyan: "#00a0b6",
        lightsteelblue: "#8bb5c9",
        darkseagreen: "#a9bc87",
        snow: "#fbfafa",
      },
      spacing: {
        98: "26rem",
        100: "28rem",
        102: "30rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "13xl-5": "32.5px",
        "3xs": "10px",
        "30xl": "49px",
        "11xl": "30px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

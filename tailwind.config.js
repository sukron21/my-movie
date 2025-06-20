/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1240px",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        hyperLink: "#036EBC",
        shadeRed: "#B50A0F",
        supportiveRed: "#CE181E",
        white: "#FFFEFE",
        reliableBlack3: "#F8F8F8",
        reliableBlack5: "#F4F4F4",
        reliableBlack10: "#E9E9E9",
        reliableBlack20: "#D3D2D2",
        reliableBlack30: "#BDBCBC",
        reliableBlack50: "#918F8F",
        reliableBlack60: "#7B7979",
        reliableBlack70: "#656263",
        reliableBlack80: "#4F4C4D",
        reliableBlack90: "#393536",
        reliableBlack: "#231F20",
        grey: "#5F5F5F",
        bermudaGray: "#8EA1AE",
        text500: "#918F8F",
        text700: "#656263",
        text900: "#231F20",
        darkCharcoal: "#1C1C1C",
        charcoalGray: "#313131",
        graphiteGray: "#2D2D2D",
        slateGray: "#33333F",
        redDark: "#9B1018",
        lightRose: "#F5C5C3",
        grayMedium: "#848484",
        foggyGray: "#667085",
        vibrantBlue: "#005BAA",
        deepBlue: "#003A67",
        oceanBlue: "#003051",
        reliableBlack100: "#F5F5F5",
        softYellow: "#FFFAEB",
        "sky-blue-600": "#2788CD",
        smoke: "#B1B1B1",
        astraBlue500: "#005BAA",
        astraBlue400: "#3079BB",
        black400: "#989898",
      },
      keyframes: {
        "loading-bar": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "loading-bar": "loading-bar 1.5s ease-in-out infinite",
      },
    },
  },
  safelist: [
    {
      pattern: /^bg-/,
    },
  ],
  plugins: [],
}


module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  important: true,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#2FC5DE",
        mom: "#E6FBFF",
        dropdown: "#22D1EE",
      }),
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        // "-30": "-30",
        // "-40": "-40",
        // "-50": "-50",
      },
      textColor: {
        primary: "#22D1EE",
        postcardcolor: "#232324",
      },
      screens: {
        xxs: { min: "320px", max: "400px" },
        xs: { min: "400px", max: "640px" },
        mdplus: { min: "768px", max: "90px" },
        lgplus: { min: "1024px", max: "1190px" },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};

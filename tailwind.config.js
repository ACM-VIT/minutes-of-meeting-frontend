module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#2FC5DE",
        mom: "#E6FBFF",
      }),
      textColor: {
        primary: "#22D1EE",
      },
      screens: {
        xs: { min: "400px", max: "640px" },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};

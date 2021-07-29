module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#2FC5DE",
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};

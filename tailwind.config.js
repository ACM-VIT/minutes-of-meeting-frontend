module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#2FC5DE",
      // secondary: "#ffed4a",
      // danger: "#e3342f",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yolo: {
          black: "#2E313C",
        },
      },

      maxWidth: {
        header: "1192px",
        menu: "467px",
        icon: "22px",
      },
      maxHeight: {
        icon: "22px",
        footer: "312px",
      },
      minWidth: {
        icon: "22px",
      },
      minHeight: {
        icon: "22px",
      },
      flex: {
        header: "0 0 160px",
      },
      fontSize: {
        menu: [
          "15px",
          {
            letterSpacing: "0.08em",
            lineHeight: "21px",
          },
        ],
        footer: [
          "15px",
          {
            letterSpacing: "0.07em",
            lineHeight: "25px",
          },
        ],
      },
    },
  },
  plugins: [],
};

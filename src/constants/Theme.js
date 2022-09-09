export const theme = Object.freeze({
  colors: {
    primaryColor: "#FAEBD7",
    secondaryColor: "#ff3333",
    accentColor: "#df9f28",
    backgroundColor: "#0e0000",
    borderColor: "#8f6b29",
    overlayColor: "rgba(8, 0, 0, 0.8)",
    disabled: "#A9A9A9",
    boxShadow: `0px 1px 4px 0px #8f6b29`,
  },

  fonts: {
    mainFont: "'Poppins', sans-serif",
    titleFont: "Arima",
    numbersFont: "Open Sans",
  },
  fontSizing: {
    mainFontSize: "14px",
    preTitleFontSize: "16px",
    titleFontSize: "19px",
    headingFontSize: "34px",
  },
  media: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1280px",
  },

  spacing: (value) => `${4 * value}px`,
});

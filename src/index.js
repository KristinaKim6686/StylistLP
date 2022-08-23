import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import i18next from "i18next";

import { ThemeProvider } from "styled-components";
import { theme } from "./constants/Theme";
import App from "./App";
import "./utils/i18next";

document.documentElement.lang = i18next.language;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

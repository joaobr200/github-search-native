import React from "react";
import { ThemeProvider } from "styled-components/native";

const theme = {
  background: "#1c1c1c",
  colors: {
    white: "#fff",
    gray200: "#e1e1e6",
    gray500: "#c9c9c9",
    gray700: "#4F4F4F",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

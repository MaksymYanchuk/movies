import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { SnackbarProvider } from "notistack";
import GlobalStyles from "./style/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const theme = {
  colors: {
    red: "#9f0013",
    primary: "rgba(255,255,255,.8)",
    grey: "rgba(255,255,255,.5)",
    lightGrey: "rgba(255,255,255,.9)",
    darkGrey: "rgba(255,255,255,.2)",
    white: "#FFFFFF",
    backgroundIn: "#111111",
    backgroundOut: "#1E1E1E",
  },
  media: {
    phone: "(max-width: 767px)",
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SnackbarProvider preventDuplicate maxSnack={3}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode> 
);

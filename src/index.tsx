import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContextproiders/AppContextProviders";
import { GlobalStyle } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <GlobalStyle />
    <App />
  </AppContextProvider>
);
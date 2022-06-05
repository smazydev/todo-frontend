import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./components/styles/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={DarkTheme}>
          <GlobalStyles actualTheme={DarkTheme} />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import "../src/styles/index.css";
import AppProvider from "./hooks";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./styles/MaterialUi";
import { IntlProvider } from "react-intl";
import { getLocale } from "./language";

type IntlProviderProps = React.ComponentProps<typeof IntlProvider>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function loadLocaleData(locale: string) {
  switch (locale) {
    case "en":
      return import("./language/en.json");
    case "es":
      return import("./language/es.json");
    case "pt":
      return import("./language/pt-br.json");
    default:
      return import("./language/en.json");
  }
}

export async function bootstrapApplication(locale: string) {
  const languages = await loadLocaleData(locale);

  const messages =
    languages.default as unknown as IntlProviderProps["messages"];

  return (
    <React.StrictMode>
      <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
        <ThemeProvider theme={defaultTheme}>
          <Router>
            <AppProvider>
              <Routes />
            </AppProvider>
          </Router>
          <CssBaseline />
        </ThemeProvider>
      </IntlProvider>
    </React.StrictMode>
  );
}

const locale = getLocale();

bootstrapApplication(locale).then((app) => {
  root.render(app);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

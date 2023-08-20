import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppThemeProvider } from "./_shared/theme/ThemeContext.tsx";
import GlobalStyle from "./_shared/theme/global.ts";
import AppContext from "./_shared/context/AppContext.tsx";
import "rsuite/dist/rsuite.min.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContext>
      <AppThemeProvider>
        <GlobalStyle theme={undefined} />
        <App />
      </AppThemeProvider>
    </AppContext>
  </React.StrictMode>
);

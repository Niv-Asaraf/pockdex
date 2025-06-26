// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </StrictMode>,
);

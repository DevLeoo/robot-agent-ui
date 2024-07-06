import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./hooks/auth";
import App from "./app";
//import { ThemeProvider } from "./hooks/theme";


import "./global.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <AuthProvider>
        <App  />
      </AuthProvider>
  </React.StrictMode>
);

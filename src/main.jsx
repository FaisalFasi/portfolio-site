import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NasaParticle from "./components/particles/NasaParticle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NasaParticle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

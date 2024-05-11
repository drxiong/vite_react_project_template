import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
document.addEventListener('DOMContentLoaded', (event) => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initBackgroundAnimation } from "./utils/backgroundAnimation.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize background animation after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBackgroundAnimation);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import React from "react";

// @ts-ignore
createRoot(document.getElementById("root")).render(<App />);

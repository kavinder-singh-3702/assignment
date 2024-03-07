import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About_bitcoin from "./sections/about_bitcoin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/:id" element={<About_bitcoin />} />
    </Routes>
  </BrowserRouter>
);

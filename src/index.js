import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetail } from "./components/CardDetail";
import { AlertMessage } from "./components/AlertMessage";

import "antd/dist/antd.css";
import "./index.css";
import "animate.css";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/issues/:id" element={<CardDetail />} />
        <Route
          path="*"
          element={<AlertMessage description="Page not found" message="The page that you trying to go is not found" type="error" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing></Routing>
  </React.StrictMode>,
  document.getElementById("root")
);

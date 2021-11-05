import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetail } from "./components/CardDetail";
import 'antd/dist/antd.css';
import './index.css';
import 'animate.css';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/issues/:id" element={<CardDetail />} />
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

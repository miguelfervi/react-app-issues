import React from "react";
import ReactDOM from "react-dom";
import { Routing } from "./routes";
import { Header } from "./components/Header";

import "antd/dist/antd.css";
import "./index.css";
import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Routing></Routing>
  </React.StrictMode>,
  document.getElementById("root")
);

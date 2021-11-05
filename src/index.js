import React from "react";
import ReactDOM from "react-dom";
import { Routing } from "./routes";

import "antd/dist/antd.css";
import "./index.css";
import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <Routing></Routing>
  </React.StrictMode>,
  document.getElementById("root")
);

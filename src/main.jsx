import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/global.scss";
import "antd/dist/antd.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HeroHeaderProvider from "./context/HeroHeaderContext";
import UserProvider from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <HeroHeaderProvider>
          <App />
        </HeroHeaderProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/global.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HeroHeaderProvider from "./context/HeroHeaderContext";
import UserProvider from "./context/UserContext";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <HeroHeaderProvider>
          <ScrollToTop />
          <App />
        </HeroHeaderProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";

import GlobalStyle from "./Theme/globalStyle";
import Router from "./Components/Router";
import { colorPallet } from "./Theme/commonStyle";
// import Toggle from "./Utils/Toggle/toggle";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [theme, setTheme] = useState(false);
// setTheme={theme ? "light" : "dark"}
root.render(
  <Fragment>
    <ConfigProvider
      theme={{ token: { colorPrimary: colorPallet.primaryColor } }}
    >
      <Router />
      <GlobalStyle />
      {/* <Toggle /> */}
    </ConfigProvider>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

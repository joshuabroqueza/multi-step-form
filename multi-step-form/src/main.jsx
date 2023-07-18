import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Appv2 from "./Appv2.jsx";
import Appv3 from "./Appv3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Appv2 /> */}
    <Appv3 />
  </React.StrictMode>
);

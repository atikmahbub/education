import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/index.css";
import "./styles/css/footer.css";
import "./styles/css/home.css";
import "./styles/css/card.css";
import "./styles/css/title.css";
import "./styles/css/tutoring.css";
import "./styles/css/hosting.css";
import "./styles/css/feature.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

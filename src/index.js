import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let post = [
  {id:1, message: "Как дела", count: 2 },
  { id: 2, message: "нормально", count: 5 },
];
ReactDOM.render(
  <React.StrictMode>
    <App post={post}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

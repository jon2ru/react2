import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addPost, updatenewPost} from "./Redux/State" /* урок 32 экспорт не по дефолту */


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App stateaa={state} addPost={addPost} 
      updatenewPost={updatenewPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );/* урок 33 отрисовываю заново */
  };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

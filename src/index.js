import "./index.css";
import store from "./Redux/new-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import { HashRouter } from "react-router-dom";

//let rerenderEntireTree = (state) => {
  ReactDOM.render(
  //  <React.StrictMode>
  // <HashRouter > был BrowserRouter
  <HashRouter basename={process.env.PUBLIC_URL}>
    {/* чтобы путь работал и в git */}
    <Provider store={store}>
      <App
       /*
       store={store}
       stateaa={state}
        dispatch={store.dispatch.bind(store)}
        */
      />
      </Provider>
    </HashRouter>,
 /*   </React.StrictMode>,*/
    document.getElementById("root")
  ); 
//};
/*rerenderEntireTree(store.getState()); 
 урок 33 отрисовываю тут 
store.subscribe(()=>{
  let state= store.getState();
  rerenderEntireTree(state)
});
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

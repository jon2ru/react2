import "./index.css";
import { rerenderEntireTree } from "./Render";

import reportWebVitals from "./reportWebVitals";
import state from "./Redux/State";
import { addPost } from "./Redux/State"; /* урок 32 экспорт не по дефолту */

rerenderEntireTree(state); /* урок 33 отрисовываю заново */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

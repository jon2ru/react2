import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import sidebarReduser from "./sidebarReduser ";
import authReduser from "./authReduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogPages: dialogReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  auth: authReduser,
});
let store = createStore(redusers);
//window.store = store;урок 59, 29:38
export default store;

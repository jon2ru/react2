import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import sidebarReduser from "./sidebarReduser ";
import authReduser from "./authReduser";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogPages: dialogReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  form: formReducer,
  auth: authReduser,
});
let store = createStore(redusers,applyMiddleware(thunk));
//window.store = store;урок 59, 29:38
export default store;

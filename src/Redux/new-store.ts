import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
import sidebarReduser from "./sidebarReduser ";
import authReduser from "./authReduser";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'
import appReduser from "./app-Reduser";

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogPages: dialogReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  form: formReducer,
  auth: authReduser,
  app: appReduser,
});
type RootReduserType=typeof redusers // получил глобальный стейт
export type AppStateType=ReturnType<RootReduserType>// ReturnType-определи тип
let store = createStore(redusers,applyMiddleware(thunk));
// @ts-ignore
window.store = store;
//урок 59, 29:38
export default store;
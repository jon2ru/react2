import {combineReducers, createStore} from "redux";
import dialogReduser from './dialogReduser';
import profileReduser from './profileReduser';
import sidebarReduser from './sidebarReduser ';
let redusers = combineReducers({
    profilePage: profileReduser,
    dialogPages: dialogReduser,
    sidebar: sidebarReduser
})
let store = createStore(redusers);
export default store ;
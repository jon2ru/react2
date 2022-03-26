import { stopSubmit } from "redux-form";
import { loginApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
//начальный state
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        //isAuth: true,
      };
    default:
      return state;
  }
};
export const setAuthUserData = (email, login, id, isAuth) => ({ type: SET_USER_DATA, data: { email, login, id, isAuth } });
export const getAuthDataUser = () => async (dispatch) => {
  // return (dispatch)=>{
  let response = await loginApi.me()
  // .then((response) => {
  if (response.data.resultCode === 0) {
    let { email, login, id } = response.data.data;
    dispatch(setAuthUserData(email, login, id, true));
  }
  // });
  // }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
  //login с маленькой
  // return (dispatch)=>{
  let response = await loginApi.login(email, password, rememberMe)
  // .then((response) => {
  if (response.data.resultCode === 0) {
    dispatch(getAuthDataUser());
  }
  //79 ещё, если неправильно введены пароль или email то:
  else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] :
      "Неправильный логин или пароль";
    dispatch(stopSubmit("login", { _error: message }));
    
  }
}
export const logout = () => async (dispatch) => {
  //logout с маленькой
  // return (dispatch)=>{
  let response = await loginApi.logout()
  // .then((response) => {
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    //вылогинились и зачищаеи пароль почта id isAuth
  }
  //     });
  // }
}
export default authReduser;

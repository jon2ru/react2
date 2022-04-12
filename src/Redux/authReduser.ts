import { stopSubmit } from "redux-form";
import { loginApi, securityApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPCHA_URL_SUCCESS = "GET_CAPCHA_URL_SUCCESS"
// ******************************
export type initialStateType = {
  id: number|null,
  email:string|null,
  login: string|null,
  isAuth: boolean,
  capchaUrl:string|null,
};
let initialState:initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  capchaUrl: null,
};
//начальный state
const authReduser = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.data,
        //isAuth: true,
      };
    default:
      return state;
  }
};
// **************************
type setAuthUserDataType={
  type:typeof SET_USER_DATA,
  data: {email:string|null,
    login:string|null,
    id:number|null,
    isAuth:boolean }
}
export const setAuthUserData = (email:string|null, login:string|null, id:number|null, isAuth:boolean):setAuthUserDataType => ({ type: SET_USER_DATA, data: { email, login, id, isAuth } });
// ***********
type getCaptchaSuccessActionType={
  type:typeof GET_CAPCHA_URL_SUCCESS,
   data: { capchaUrl:string }
}
export const getCaptchaSuccess = (capchaUrl:string):getCaptchaSuccessActionType => ({ type: GET_CAPCHA_URL_SUCCESS, data: { capchaUrl } });
// ******************
export const getAuthDataUser = () => async (dispatch:any) => {
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
export const login = (email:string, password:string, rememberMe:boolean,captcha:any) => async (dispatch:any) => {
  //login с маленькой
  // return (dispatch)=>{
  let response = await loginApi.login(email, password, rememberMe,captcha)
  // .then((response) => {
  if (response.data.resultCode === 0) {
    dispatch(getAuthDataUser());
  }
  //79 ещё, если несколько раз неправильно введены пароль или email то:
  else {
    if (response.data.resultCode === 10) {
      dispatch(captcha2());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] :
      "Неправильный логин или пароль";
    dispatch(stopSubmit("login", { _error: message }));
  }
}
export const logout = () => async (dispatch:any) => {
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
export const captcha2 = () => async (dispatch:any) => {
  let response = await securityApi.getCaptchaUrl()
  // .then((response) => {
  const capchaUrl = response.data.url
  //  нужно объявить в инициализации выше capchaUrl:null
  dispatch(getCaptchaSuccess(capchaUrl));
  //вызываю экшн кревтор
}
export default authReduser;

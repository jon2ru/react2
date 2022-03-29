import { stopSubmit } from "redux-form";
import { loginApi, securityApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPCHA_URL_SUCCESS = "GET_CAPCHA_URL_SUCCESS"

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  capchaUrl: null,
};
//начальный state
const authReduser = (state = initialState, action) => {
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
export const setAuthUserData = (email, login, id, isAuth) => ({ type: SET_USER_DATA, data: { email, login, id, isAuth } });
export const getCaptchaSuccess = (capchaUrl) => ({ type: GET_CAPCHA_URL_SUCCESS, data: { capchaUrl } });

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
export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
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
export const captcha2 = () => async (dispatch) => {
  let response = await securityApi.getCaptchaUrl()
  // .then((response) => {
  const capchaUrl = response.data.url
  //  нужно объявить в инициализации выше capchaUrl:null
  dispatch(getCaptchaSuccess(capchaUrl));
  //вызываю экшн кревтор
}
export default authReduser;

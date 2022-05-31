import { ResultCodeEnum, ResultCodeforCaptchaEnum } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { FormAction, stopSubmit } from "redux-form";
import { AppStateType, BaseThunkType, InferActionsTypes } from './new-store';
import { Dispatch } from 'redux';
import { loginApi } from '../api/login-api';
import { securityApi } from '../api/security-api';

export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes |FormAction>
// FormAction- не устраивает так как any,но просто чтоб работало 110 1:16
let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  capchaUrl: null as string | null
};
//начальный state
const authReduser = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
    case "GET_CAPCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.data //,isAuth: true,
      };
    default:
      return state;
  }
};
// **************************
export const actions = {
  setAuthUserData: (email: string | null, login: string | null, id: number | null, isAuth: boolean) => ({ type: "SET_USER_DATA", data: { email, login, id, isAuth } } as const),
  getCaptchaSuccess: (capchaUrl: string) => ({ type: "GET_CAPCHA_URL_SUCCESS", data: { capchaUrl } } as const),
};

export const getAuthDataUser = ():ThunkType => async (dispatch) => {
  // return (dispatch)=>{
  let data = await loginApi.me()
  // .then((response) => {
  if (data.resultCode === ResultCodeEnum.Success) {
    let { email, login, id } = data.data;
    //  let email=meData.data.data.email
    //   let login=meData.data.data.login
    //  let id=meData.data.data.id

    dispatch(actions.setAuthUserData(email, login, id, true));
  }
  // });
  // }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any):ThunkType => async (dispatch) => {
  //login с маленькой
  // return (dispatch)=>{
  let LoginData = await loginApi.login(email, password, rememberMe, captcha)
  // .then((response) => {
  if (LoginData.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthDataUser());
  }
  //79 ещё, если несколько раз неправильно введены пароль или email то:
  else {
    if (LoginData.resultCode === ResultCodeforCaptchaEnum.CaptchaIsRequired) {
      dispatch(captcha2());
    }
    let message = LoginData.messages.length > 0 ? LoginData.messages[0] :
      "Неправильный логин или пароль";
    dispatch(stopSubmit("login", { _error: message }));
  }
}
export const logout = ():ThunkType => async (dispatch) => {
  //logout с маленькой
  // return (dispatch)=>{
  let response = await loginApi.logout()
  // .then((response) => {
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
    //вылогинились и зачищаеи пароль почта id isAuth
  }
  //     });
  // }
}
export const captcha2 = ():ThunkType => async (dispatch) => {
  let data = await securityApi.getCaptchaUrl()
  // .then((response) => {
  const capchaUrl = data.url
  //  нужно объявить в инициализации выше capchaUrl:null
  dispatch(actions.getCaptchaSuccess(capchaUrl));
  //вызываю экшн кревтор
}
export default authReduser;

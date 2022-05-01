import { getAuthDataUser } from "./authReduser";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
// ******************************
export type initialStateType = {
  initialized: boolean,
};
let initialState:initialStateType = {
  initialized: false,
};
//начальный state
// ******************************
const appReduser = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};
type initializedSuccessActionType={
  type:typeof INITIALIZED_SUCCESS//"INITIALIZED_SUCCESS"
}
export const initializedSuccess = ():initializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });
export const initializeApp = () => {
  return (dispatch:any) => {
    let promise = dispatch(getAuthDataUser());
   Promise.all ([promise]).then(() => {
      dispatch(initializedSuccess())
    })
  }
}
/* export const login =(email,password,rememberMe)=>{
  //login с маленькой
  return (dispatch)=>{
    loginApi.login(email,password,rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthDataUser());
      }
      //79 ещё, если неправильно введены пароль или email то:
      else {
        let message=response.data.messages.length>0?response.data.messages[0]:
         "Неправильный логин или пароль";
        dispatch(stopSubmit("login",{_error: message}));
      }
    });
}
}
export const logout =()=>{
  //logout с маленькой
  return (dispatch)=>{
    loginApi.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null,null,null,false));
      //вылогинились и зачищаеи пароль почта id isAuth
      }
    });
}
} */
export default appReduser;

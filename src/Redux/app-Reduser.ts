import { getAuthDataUser } from "./authReduser";
import { InferActionsTypes } from "./new-store";
// ******************************
type ActionsType = InferActionsTypes<typeof actions>
export type initialStateType = typeof initialState
let initialState = {
  initialized: false,
};
//начальный state
// ******************************
const appReduser = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};
const actions = {
  initializedSuccess: () => ({ type: "INITIALIZED_SUCCESS" } as const)
};
export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(getAuthDataUser());
    Promise.all([promise]).then(() => {
      dispatch(actions.initializedSuccess())
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

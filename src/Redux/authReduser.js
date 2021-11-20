import { loginApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id:  null,
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
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setAuthUserData = (email,login,id) => ({ type: SET_USER_DATA, data:{email,login,id} });
export const getAuthDataUser =()=>{
  return (dispatch)=>{
    loginApi.me()
    .then((response) => {
      if (response.data.resultCode === 0) {
        let {email,login,id} = response.data.data;
        dispatch(setAuthUserData(email,login,id));
      }
    });
}
}
export default authReduser;

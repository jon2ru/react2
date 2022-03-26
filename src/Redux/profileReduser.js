import { profileApi } from "../api/api";
import { stopSubmit } from "redux-form";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_STATUS = "GET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
let initialState = {
  post: [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ],
  //newPostText: "",
  profile: null,
  status: "",
};
//начальный state
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // скобка {} чтобы писать одну и ту же переменную
      // let stateCopy тут и ниже
      let newPost = {
        id: 3,
       message: action.newPostText,
        count: 0,
      };
      return {
        ...state,
        post: [...state.post, newPost],
        //it is array []
       // newPostText: "", // стираю текст в textarea
        //после return функция не выполняется это вместо break
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case GET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile,
        photos: action.photos}
      };
    default:
      return state;
  }
};
export const addhhPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getuStatus = (status) => ({
  type: GET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
//thunk
export const profilesData = (userIdd) => async(dispatch) =>{
  // return (dispatch) => {
   let response=await profileApi.getProfileApi(userIdd)
    // .then((response) => {
      //запрос в api.js
      dispatch(setUserProfile(response.data));
  //   });
  // }
}
export const getStatus = (userIdd) =>async(dispatch) => {
  // return (dispatch) => {
    let response=await profileApi.getUserStatus(userIdd)
    // .then((response) => {
      //запрос в api.js получить статус
      dispatch(getuStatus(response.data));
  //   });
  // }
}
export const updateUserStatus = (status) =>async(dispatch) => {
  // return (dispatch) => {
    let response=await profileApi.updateStatus(status)
    // .then((response) => {
      //запрос в api.js установить статус
      if (response.data.resultCode === 0) {
        dispatch(getuStatus(status));
      }
      //вызывается тот же экшн креатор ,что и выше  и обновляется status
  //   });
  // }
}
export const savePhoto = (file) =>async(dispatch) => {
  // return (dispatch) => {
    let response=await profileApi.savePhoto(file)
      //запрос в api.js 
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
}
export const saveProfile = (profile) =>async(dispatch,getState) => {
  const useruidi= getState().auth.id
  // getState достал значение из глобального стейта 
    let response=await profileApi.saveProfile(profile)
      //запрос в api.js .Сохранил изменения профиля на сервере 
      if (response.data.resultCode === 0) {
        dispatch(profilesData(useruidi));
            //  обновил профиль
      }
      else{
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
      }
}
export default profileReduser;

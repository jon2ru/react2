import { profileApi } from "../api/api";
import { stopSubmit } from "redux-form";
import { photosType, postType,profileType,contactType } from "../types/types";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_STATUS = "GET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export type initialStateType = typeof initialState
let initialState = {
  post: [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ]as Array<postType>,
  //newPostText: "",
  profile:null as profileType|null,
  status: "",
  newPostText: ""
};
//начальный state
const profileReduser = (state = initialState, action:any):initialStateType => {
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
        photos: action.photos}as profileType// после испаравить
      };
    default:
      return state;
  }
};
type addhhPostActionCreatorType={
  type:typeof ADD_POST,
   newPostText:string
}
export const addhhPostActionCreator = (newPostText:string):addhhPostActionCreatorType => ({ type: ADD_POST, newPostText });
type setUserProfileAcType={
  type:typeof SET_USER_PROFILE,
  profile:profileType
}
export const setUserProfile = (profile:profileType):setUserProfileAcType => ({
  type: SET_USER_PROFILE,
  profile,
});
type getuStatusAcType={
  type:typeof GET_STATUS,
  status:string
}
export const getuStatus = (status:string):getuStatusAcType => ({
  type: GET_STATUS,
  status,
});
type savePhotoSuccessAcType={
  type:typeof SAVE_PHOTO_SUCCESS,
  photos:photosType
}
export const savePhotoSuccess = (photos:photosType) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
//thunk
export const profilesData = (userIdd:number) => async(dispatch:any) =>{
  // return (dispatch) => {
   let response=await profileApi.getProfileApi(userIdd)
    // .then((response) => {
      //запрос в api.js
      dispatch(setUserProfile(response.data));
  //   });
  // }
}
export const getStatus = (userIdd:number) =>async(dispatch:any) => {
  // return (dispatch) => {
    let response=await profileApi.getUserStatus(userIdd)
    // .then((response) => {
      //запрос в api.js получить статус
      dispatch(getuStatus(response.data));
  //   });
  // }
}
export const updateUserStatus = (status:string) =>async(dispatch:any) => {
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
export const savePhoto = (file:any) =>async(dispatch:any) => {
  // return (dispatch) => {
    let response=await profileApi.savePhoto(file)
      //запрос в api.js 
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
}
export const saveProfile = (profile:profileType) =>async(dispatch:any,getState:any) => {
  const useruidi= getState().auth.id
  // getState достал значение из глобального стейта 
    let response=await profileApi.saveProfile(profile)
      //запрос в api.js .Сохранил изменения профиля на сервере 
      if (response.data.resultCode === 0) {
        dispatch(profilesData(useruidi));
            //  обновил профиль
      }
      else{
        dispatch(stopSubmit("edit-profile", {"contacts":{ "facebook": response.data.messages[0]} }));
        // contacts- объект facebook-ключ в объекте.
        //  Надо распарсить строку и сделать для всех input
        return Promise.reject(response.data.messages[0])
      }
}
export default profileReduser;

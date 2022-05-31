import { ThunkAction } from 'redux-thunk';
import { AppStateType, BaseThunkType, InferActionsTypes } from './new-store';
import { profileApi } from '../api/profile-api';
import { FormAction, stopSubmit } from 'redux-form';
import { photosType, postType, profileType, contactType } from "../types/types";
import { Dispatch } from 'redux';
export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes |FormAction>
let initialState = {
  post: [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ] as Array<postType>,
  //newPostText: "",
  profile: null as profileType | null,
  status: "",
  newPostText: ""
};
//начальный state
const profileReduser = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "ADD_POST":
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
    case "SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "GET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SAVE_PHOTO_SUCCESS":
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        } as profileType// после испаравить
      };
    default:
      return state;
  }
};
export type SavePhotosResponceDataType = {
  photos: photosType
}
// выше добавил photos в описании к api у димыча на сайте не правильно нет api а должен быть
export const actions = {
  addhhPostActionCreator: (newPostText: string) => ({ type: "ADD_POST", newPostText } as const),
  setUserProfile: (profile: profileType) => ({ type: "SET_USER_PROFILE", profile, } as const),
  getuStatus: (status: string) => ({ type: "GET_STATUS", status, } as const),
  savePhotoSuccess: (photos: photosType) => ({ type: "SAVE_PHOTO_SUCCESS", photos, } as const)
};
//thunk
// type DispatchType = Dispatch<ActionTypes>
// type GetStateType = () => AppStateType
// type ThunkType = ThunkAction<Promise<void>
//   , AppStateType, unknown, ActionTypes>
export const profilesData = (userIdd: number): ThunkType => async (dispatch) => {
  // return (dispatch) => {
  let data = await profileApi.getProfileApi(userIdd)

  dispatch(actions.setUserProfile(data));
  //   });
  // }
}
export const getStatus = (userIdd: number): ThunkType => async (dispatch) => {
  // return (dispatch) => {
  let data = await profileApi.getUserStatus(userIdd)
  // .then((response) => {
  //запрос в api.js получить статус
  dispatch(actions.getuStatus(data));
  //   });
  // }
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  // return (dispatch) => {
  let data = await profileApi.updateStatus(status)
  // .then((response) => {
  //запрос в api.js установить статус
  if (data.resultCode === 0) {
    dispatch(actions.getuStatus(status));
  }
  //вызывается тот же экшн креатор ,что и выше  и обновляется status
  //   });
  // }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  // return (dispatch) => {
  let data = await profileApi.savePhoto(file)
  //запрос в api.js 
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
}
export const saveProfile = (profile: profileType): ThunkType => async (dispatch, getState) => {
  const useruidi = getState().auth.id
  // getState достал значение из глобального стейта 
  let data = await profileApi.saveProfile(profile)
  //запрос в api.js .Сохранил изменения профиля на сервере 
  if (data.resultCode === 0) {
    if (useruidi !=null){
    dispatch(profilesData(useruidi));
    //  обновил профиль
      }else {throw new Error ("useruidi can't be null")}
  }
  else {
    dispatch(stopSubmit("edit-profile", { "contacts": { "facebook": data.messages[0] } }));
    // contacts- объект facebook-ключ в объекте.
    //  Надо распарсить строку и сделать для всех input
    return Promise.reject(data.messages[0])
  }
}
export default profileReduser;

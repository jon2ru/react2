import { profileApi } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_STATUS = "GET_STATUS";
let initialState = {
  post: [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ],
  newPostText: "",
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
        message: state.newPostText,
        //message -получаю значение напрямую из state
        count: 0,
      };
      return {
        ...state,
        post: [...state.post, newPost],
        //it is array []
        newPostText: "", // стираю текст в textarea
        //после return функция не выполняется это вместо break
      };
    case UPDATE_NEW_POST_TEXT:
      /*функция для побуквенной 
               отрисовки при изменении в ul */
      return {
        ...state,
        newPostText: action.newText /* урок 34 
    тут запись текста в state*/,
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
    default:
      return state;
  }
};
export const addhhPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (newtext5) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newtext5,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getuStatus = (status) => ({
  type: GET_STATUS,
  status,
});

//thunk
export const profilesData = (userIdd) => {
  return (dispatch) => {
    profileApi.getProfileApi(userIdd).then((response) => {
      //запрос в api.js
      dispatch(setUserProfile(response.data));
    });
  }
}
export const getStatus = (userIdd) => {
  return (dispatch) => {
    profileApi.getUserStatus(userIdd).then((response) => {
      //запрос в api.js получить статус
      dispatch(getuStatus(response.data));
    });
  }
}
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((response) => {
      //запрос в api.js установить статус
      if (response.data.resultCode === 0) {
        dispatch(getuStatus(status));
      }
      //вызывается тот же экшн креатор ,что и выше  и обновляется status
    });
  }
}
export default profileReduser;

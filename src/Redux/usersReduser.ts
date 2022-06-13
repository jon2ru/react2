import { AppStateType, BaseThunkType, InferActionsTypes } from './new-store';
import { UserType } from "../types/types";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { usersApi } from '../api/users-api';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10, //сколько показывать юзеров
  totalUsersCount: 0, //сколько всего юзеров
  currentPage: 1, // выделен жирным номер страницы
  isFetching: false,
  followingInProgress: [] as Array<number>,//массив user id
  filter:{
    term:''
  }
};
export type initialStateType = typeof initialState
export type filterType = typeof initialState.filter
const usersReduser = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter:action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: /*...state.users, появляются дубли*/ action.users,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "FOLLOWING_IS_FETCHING":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};
type ActionTypes = InferActionsTypes<typeof actions>
export const actions={
 followSuccess : (userId: number) => ({ type: "FOLLOW", userId }as const),

unfollowSuccess : (userId: number) => ({ type: "UNFOLLOW", userId }as const),

setusers : (users: Array<UserType>) => ({ type: "SET_USERS", users }as const),
setFilter : (term:string) => ({ type: "SET_FILTER",payload:{term} }as const),

setcurrentpage : (currentPage: number) => ({type: "SET_CURRENT_PAGE",currentPage}as const),
setTotalUsersCount : (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT",count: totalUsersCount,
}as const),

toggleIsFetching : (isFetching: boolean)=> ({type: "TOGGLE_IS_FETCHING",isFetching,}as const),
toggleFollowInProgress : (isFetching: boolean, userId: number) => ({type: "FOLLOWING_IS_FETCHING",
  isFetching,
  userId
}as const),
}
//Thunk внизу getUserThunkCreator
type DispatchType = Dispatch<ActionTypes>
type GetStateType = () => AppStateType
type ThunkType = BaseThunkType<ActionTypes>
export const getUserThunkCreator = (currentPage: number, pageSize: number,term:string): ThunkType => {
  return async (dispatch, getState) => {
    // return (dispatch:DispatchType,getState:GetStateType) => {
    // выше 2 способа типизации thunk 1Й заккомменирован
    dispatch(actions.toggleIsFetching(true));
    //внизу выделяю жирным цифру страница users
    dispatch(actions.setcurrentpage(currentPage));
    dispatch(actions.setFilter(term));
    let data = await usersApi
      .getUsera(currentPage, pageSize,term)
    //запрос на сервер данные на api.js урок 63, 7:00
    //baseURL: "https://social-network.samuraijs.com/api/1.0/",
    // .then((data:any) => {
    // response в api.js поменял на data 63
    dispatch(actions.toggleIsFetching(false));
    //выше крутилку убрал
    dispatch(actions.setusers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    //totalCount-на сервере число пользователей
    // });
  };
}; //End Thunk getUserThunkCreator
//--------------------------
//Thunk внизу follow
export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowInProgress(true, userId));
    //включаю disabled кнопки
    let data = await
      usersApi.followApi(userId)
    // userApi  запрос delete из api.js

    if (data.resultCode === 0) {
      dispatch(actions.followSuccess(userId));
      //записал значение в state
    }
    dispatch(actions.toggleFollowInProgress(false, userId));

    //выключаю disabled кнопки}
  };
}; //End Thunk follow
//--------------------------
//Thunk внизу unfollow
export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowInProgress(true, userId));
    //включаю disabled кнопки
    let data = await
      usersApi.unfollowApi(userId)
    // userApi получаю запрос из api.js
    if (data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId));
      //записал значение в state
    }
    dispatch(actions.toggleFollowInProgress(false, userId));
    //выключаю disabled кнопки}
  };
}; //End Thunk unfollow

export default usersReduser;

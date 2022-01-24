import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IS_FETCHING = "FOLLOWING_IS_FETCHING";
let initialState = {
  users: [],
  pageSize: 10, //сколько показывать юзеров
  totalUsersCount: 0, //сколько всего юзеров
  currentPage: 1, // выделен жирным номер страницы
  isFetching: false,
  followingInProgress: [],
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
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
    case UNFOLLOW:
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

    case SET_USERS:
      return {
        ...state,
        users: /*...state.users, появляются дубли*/ action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOWING_IS_FETCHING:
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
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setusers = (users) => ({ type: SET_USERS, users });
export const setcurrentpage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowInProgress = (isFetching, userId) => ({
  type: FOLLOWING_IS_FETCHING,
  isFetching,
  userId,
});
//Thunk внизу getUserThunkCreator
export const getUserThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    //внизу выделяю жирным цифру страница users
    dispatch(setcurrentpage(currentPage));
    usersApi
      .getUsera(currentPage, pageSize)
      //запрос на сервер данные на api.js урок 63, 7:00
      //baseURL: "https://social-network.samuraijs.com/api/1.0/",
      .then((data) => {
        // response в api.js поменял на data 63
        dispatch(toggleIsFetching(false));
        //выше крутилку убрал
        dispatch(setusers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        //totalCount-на сервере число пользователей
      });
  };
}; //End Thunk getUserThunkCreator
//--------------------------
//Thunk внизу follow
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));
    //включаю disabled кнопки
    usersApi.followApi(userId)
      // userApi  запрос delete из api.js
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
          //записал значение в state
        }
        dispatch(toggleFollowInProgress(false, userId));
      });
    //выключаю disabled кнопки}
  };
}; //End Thunk follow
//--------------------------
//Thunk внизу unfollow
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));
    //включаю disabled кнопки
    usersApi.unfollowApi(userId)
      // userApi получаю запрос из api.js
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
          //записал значение в state
        }
        dispatch(toggleFollowInProgress(false, userId));
      });
    //выключаю disabled кнопки}
  };
}; //End Thunk unfollow

export default usersReduser;

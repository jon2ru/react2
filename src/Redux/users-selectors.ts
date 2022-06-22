import { createSelector } from "reselect";
import { AppStateType } from "./new-store";

export const getUsers = (state:AppStateType) => {
    return state.usersPage.users;
}
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching;
}
export const getUserSuperSelector=createSelector(getUsers,getIsFetching,
    (users, isFetching)=>{
  return  users.filter(u=>true)
})
//createSelector-встроенная ф. в reselect
//getUsers,getIsFetching- простые селекторы и createselector 
//проверяет если они изменились,то отрисовыает
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage;
}
export const getFollowingInProgress = (state:AppStateType) => {
    return state.usersPage.followingInProgress;
}
export const getUserFilter = (state:AppStateType) => {
    return state.usersPage.filter;
}
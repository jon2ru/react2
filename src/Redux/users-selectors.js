import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getUserSuperSelector=createSelector(getUsers,getIsFetching,
    (users, isFetching)=>{
  return  users.filter(u=>true)
})
//createSelector-встроенная ф. в reselect
//getUsers,getIsFetching- простые селекторы и createselector 
//проверяет если они изменились,то отрисовыает
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
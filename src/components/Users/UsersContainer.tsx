import { connect } from "react-redux";
import UsersApiContainer, { MapdispatchPropsType, MapStatePropsType, ownPropsType } from "./UsersApiContainer";
import {
  unfollow,
  follow,
  getUserThunkCreator
} from "../../Redux/usersReduser";
import {compose} from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, 
  getPageSize, getTotalUsersCount, getUserFilter, getUserSuperSelector
 } from "../../Redux/users-selectors";
import { AppStateType } from "../../Redux/new-store";

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    users: getUserSuperSelector(state),
    // users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter:getUserFilter(state)
    };
};

/*let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid));
    },
    unfollow: (userid) => {
      dispatch(unfollowAC(userid));
    },
    setUsers: (users) => {
      dispatch(setusersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setcurrentpageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

 урок 58 убрал mapDispatchToProps*/
const UsersContainer = compose(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
    connect<MapStatePropsType,MapdispatchPropsType,ownPropsType,AppStateType>(
    mapStateToProps,{follow,unfollow,
      getUserThunkCreator})
      // toggleFollowInProgress,,setcurrentpage, удалил
)(UsersApiContainer);
export default UsersContainer;



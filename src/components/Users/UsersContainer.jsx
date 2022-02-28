import { connect } from "react-redux";
import UsersApiContainer from "./UsersApiContainer";
import {
  unfollow,
  follow,
  setcurrentpage,
  toggleFollowInProgress,
  getUserThunkCreator
} from "../../Redux/usersReduser";
import {compose} from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, 
  getPageSize, getTotalUsersCount, getUserSuperSelector
 } from "../../Redux/users-selectors";
/* let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    };
}; */
let mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    // users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
    connect(
    mapStateToProps,{follow,unfollow,setcurrentpage,
      toggleFollowInProgress,
      getUserThunkCreator})
)(UsersApiContainer);
export default UsersContainer;



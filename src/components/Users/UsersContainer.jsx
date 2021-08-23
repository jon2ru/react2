import { connect } from "react-redux";
import UsersApiContainer from "./UsersApiContainer";
import {
  unfollowAC,
  followAC,
  setusersAC,
  setcurrentpageAC,
  setTotalUsersCountAC,
} from "../../Redux/usersReduser";
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
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
  };
};
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);
export default UsersContainer;

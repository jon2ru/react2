import { connect } from "react-redux";
import UsersApiContainer from "./UsersApiContainer";
import {
  unfollow,
  follow,
  setusers,
  setcurrentpage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../Redux/usersReduser";
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
const UsersContainer = connect(
  mapStateToProps,{follow,unfollow,setusers,setcurrentpage,setTotalUsersCount,toggleIsFetching}
 
)(UsersApiContainer);
export default UsersContainer;

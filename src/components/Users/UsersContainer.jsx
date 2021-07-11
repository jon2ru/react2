import { connect } from "react-redux";
import Users from "./Users";
import { unfollowAC, followAC, setusersAC } from '../../Redux/usersReduser';
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};
export default connect(mapStateToProps,mapDispatchToProps)
(Users);

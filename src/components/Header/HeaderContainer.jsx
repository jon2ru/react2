import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/authReduser";
import Header from "./Header";
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
       withCredentials: true /* передать куку*/,
     })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let {email,login,id} = response.data.data;
          this.props.setAuthUserData(email,login,id);
        }
      });
  } //END componentDidMount
  render() {
    return <Header {...this.props} />;
  }
} //END HeaderContainer
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

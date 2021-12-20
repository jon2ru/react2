import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getAuthDataUser } from "../../Redux/authReduser";
import Header from "./Header";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthDataUser();
  } //END componentDidMount
  render() {
    return <Header {...this.props} />;
  }
} //END HeaderContainer
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, { getAuthDataUser })(HeaderContainer);
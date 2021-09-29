import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReduser";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`) // обратные кавычки на букве ё
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  } //end componentDidMount
  render() {
    return <Profile {...this.props} /*profile={this.props.profile}*/ />;
  }
} //end ProfileContainer
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);

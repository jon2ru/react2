import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReduser";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
   
    let userIdd= this.props.match.params.userId
    if (!userIdd){
      userIdd=2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userIdd) // обратные кавычки на букве ё
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
let urlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile })(urlDataContainer);

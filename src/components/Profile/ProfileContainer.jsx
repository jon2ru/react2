import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { profilesData } from "../../Redux/profileReduser";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
   
    let userIdd= this.props.match.params.userId
    if (!userIdd){
      userIdd=2;
    }
    this.props.profilesData(userIdd);
    //вызываю thunk из редюсера
  } //end componentDidMount
  render() {
    return <Profile {...this.props} /*profile={this.props.profile}*/ />;
  }
} //end ProfileContainer
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});
let urlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { profilesData })(urlDataContainer);

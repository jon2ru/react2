import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { profilesData } from "../../Redux/profileReduser";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
   
    let userIdd= this.props.match.params.userId
    /*когда вызывается withRouter из url метод match возвращает params-userId
    и получаю id юзера*/
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
  profile: state.profilePage.profile,
});
let urlDataContainer = withRouter(ProfileContainer)
let withRedirect= withAuthRedirect(urlDataContainer)
//withRouter получаю из url нужнцю часть
export default connect(mapStateToProps, { profilesData })(withRedirect);

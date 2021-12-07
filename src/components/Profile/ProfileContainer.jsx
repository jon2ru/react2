import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { profilesData } from "../../Redux/profileReduser";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

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
export default compose(
    connect(mapStateToProps,{ profilesData }),
withAuthRedirect,
//withRouter получаю из url нужнцю часть
    withRouter
)(ProfileContainer);
//возьми ProfileContainer и закинь его в withRouter--> withAuthRedirect,а потом результат в connect(mapStateToProps...

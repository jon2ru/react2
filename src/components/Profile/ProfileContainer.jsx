import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { profilesData, getStatus, updateUserStatus,savePhoto,saveProfile } from "../../Redux/profileReduser";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  // чтобы код не писать дважды ниже создам refreshProfile
  refreshProfile(){
    let userIdd = this.props.match.params.userId
    /*когда вызывается withRouter из url метод match возвращает params-userId
    и получаю id юзера*/
    if (!userIdd) {
      userIdd = this.props.authorizedUserId;
    }
   /*  if (!userIdd) {
      this.props.history.push("/login");
      когда жму кнопку вылогиниться нужно уйти из профиля,
      но вроде и так срабатывает withAuthRedirect,
       а это "програмный" редирект
    } */
    this.props.profilesData(userIdd);
    this.props.getStatus(userIdd);
    //вызываю thunk из редюсера
  }
  componentDidMount() {
    this.refreshProfile();
  } //end componentDidMount
  componentDidUpdate(prevProps,prevState,snapshot){
    if (this.props.match.params.userId !=prevProps.match.params.userId){
      this.refreshProfile();
    }
    // чтобы с чужого профиля переходить на свой при нажатии на profile
  }
  render() {
    return <Profile {...this.props}
              isOwner={!this.props.match.params.userId}
              // если нет userId
              status={this.props.status}
              updateUserStatus={this.props.updateUserStatus}
              profile={this.props.profile}/*profile={this.props.profile} -был заккоментирован*/ 
              savePhoto={this.props.savePhoto}/>
  }
} //end ProfileContainer
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, { profilesData, getStatus, updateUserStatus,savePhoto,saveProfile}),
  withAuthRedirect,
  //withRouter получаю из url нужную часть
  withRouter
)(ProfileContainer);
//возьми ProfileContainer и закинь его в withRouter--> withAuthRedirect,а 
// потом результат в connect(mapStateToProps...

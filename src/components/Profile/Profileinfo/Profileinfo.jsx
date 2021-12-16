
import Preloader from "../../common/Preloader/Preloader";
import classes from "./Profileinfo.module.css"
import ProfileStatus from "./ProfileStatus"
const Profileinfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
 // debugger
  return (
    <div>
      <img src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg" width="800" height="400"/>
      <div className={classes.descr}></div>
      <img src={props.profile.photos.large} />
      <ProfileStatus status={props.status}
      updateUserStatus={props.updateUserStatus}/>
      <div>avat+descr</div>
      <div>обо мне: {props.profile.aboutMe}</div>
      <div>ищешь работу?{props.profile.lookingForAJob== true ? 'Да': 'Нет'}</div>
      <div>
        какую хочешь работу? {props.profile.lookingForAJobDescription}
        </div>
    </div>
  );
};
export default Profileinfo;

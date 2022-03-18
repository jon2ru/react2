
import Preloader from "../../common/Preloader/Preloader";
import classes from "./Profileinfo.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/users.png";
const Profileinfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
  const onMainPhotoSelected =(e)=>{
    if(e.target.files.length){
      // если фото имеет длинну-не пустая
      props.savePhoto(e.target.files[0])
      // то возьми это фото
      console.log(props.savePhoto)
    }
  }
  return (
    <div>
      <img src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg" width="800" height="400"/>
      {/* пляж */}
      <div className={classes.descr}></div>
      <img src={props.profile.photos.large||userPhoto} className={classes.avatar}/>
      {props.isOwner &&<input type="file" onChange={onMainPhotoSelected}/>}
      {/* если есть isOwner покажи кнопку с выбором файла */}
      <ProfileStatusWithHooks status={props.status}
      updateUserStatus={props.updateUserStatus}/>
      <div>avat+descr</div>
      <div>Имя:{props.profile.fullName}</div>
      <div>обо мне: {props.profile.aboutMe}</div>
      <div>ищешь работу?{props.profile.lookingForAJob== false ? 'Да': 'Нет'}</div>
      <div>
        какую хочешь работу? {props.profile.lookingForAJobDescription}
        </div>
    </div>
  );
};
export default Profileinfo;

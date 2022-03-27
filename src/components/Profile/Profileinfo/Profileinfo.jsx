
import Preloader from "../../common/Preloader/Preloader";
import classes from "./Profileinfo.module.css"
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/users.png";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
const Profileinfo = (props) => {
  let [editMode,setEditMode]= useState(false)
//    деструктуризация массива
//    useState сидит в библиотеке react
//useState возвращает первым номером значение и 2м ф. 
// которая меняет это значение(1-editMode,2-setEditMode)
  if (!props.profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      // если фото имеет длинну-не пустая
      props.savePhoto(e.target.files[0])
      // то возьми это фото
      console.log(props.savePhoto)
    }
  }
  const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=>{
         setEditMode(false);
        });
        // async await не сработал
    }
  return (
    <div>
      <img src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg" width="800" height="400" />
      {/* пляж */}
      <div className={classes.descr}>
        <img src={props.profile.photos.large || userPhoto} className={classes.avatar} />
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        {/* если есть isOwner покажи кнопку с выбором файла */}
       {editMode?
       <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>:
      //  initialValues метод redux-form. При перезагрузке страницы ,
      //  чтобы сохранялись в input и textarea введенные значения
       <ProfileData goToEditMode={()=>{setEditMode(true)}} isOwner={props.isOwner} profile={props.profile} />}
        {/* тринарное выражение на верху */}
        <ProfileStatusWithHooks status={props.status}
          updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  );
}
const ProfileData = ({ profile,isOwner,goToEditMode }) => {
  return <div>
    {isOwner&&<div><button onClick={goToEditMode}>edit</button></div>}
    <div>avat+descr</div>
    <div>Имя:{profile.fullName}</div>
    <div>обо мне: {profile.aboutMe}</div>
    <div>ищешь работу?{profile.lookingForAJob == true ? 'Да' : 'Нет'}</div>
    <div>
      какую хочешь работу? {profile.lookingForAJobDescription}
    </div>
    <div>
      контакты:{Object.keys(profile.contacts).map(key => {
        // Object.keys(obj) – возвращает массив ключей.
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        // contactValue  пример: let abv={
        //  github: qwerty
        //     vk: trytry
        //     facebook: popop}
        //     abv[facebook] вернет popop
        // key={key} зачем не понял
      })}
    </div>
  </div>
}
const Contacts = ({ contactTitle, contactValue }) => {
  return <div className={classes.contact}>
    {contactTitle}:{contactValue}
  </div>
}

export default Profileinfo;

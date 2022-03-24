import React from "react";
import { reduxForm } from "redux-form";
import { createField, textarea,input } from "../../common/FormControls/FormControls";
const ProfileDataForm = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    <div>avat+descr</div>
    <div>Имя:{createField("Full name", "fullName", [], input)}</div>
    <div>обо мне:{createField("about me", "aboutMe", [], textarea)}</div>
    <div>ищешь работу?
    {createField("", "lookingForAJob", [], input,{type:"checkbox"})}</div>
    <div>
      какую хочешь работу? 
      {createField("Description", "lookingForAJobDescription", [], textarea)}
    </div>
    {/* <div>
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
    </div> */}
  </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormReduxForm;
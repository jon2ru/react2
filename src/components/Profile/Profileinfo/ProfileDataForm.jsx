import React from "react";
import styles from "../../common/FormControls/FormControls.module.css"
import classes from "./Profileinfo.module.css"
import { reduxForm } from "redux-form";
import { createField, textarea,input } from "../../common/FormControls/FormControls";
const ProfileDataForm = ({ handleSubmit,profile,error }) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    {error&&<div className={styles.formSummaryError}>
     {error}
    </div>}
    <div>avat+descr</div>
    <div>Имя:{createField("Full name", "fullName", [], input)}</div>
    <div>обо мне:{createField("about me", "aboutMe", [], textarea)}</div>
    <div>ищешь работу?
    {createField("", "lookingForAJob", [], input,{type:"checkbox"})}</div>
    <div>
      какую хочешь работу? 
      {createField("Description", "lookingForAJobDescription", [], textarea)}
    </div>
     <div>
      контакты:{Object.keys(profile.contacts).map(key => {
        // Object.keys(obj) – возвращает массив ключей.
        return <div key={key} className={classes.contact}>
          {key}:{createField(key, "contacts."+key, [], input)}
          {/* вывожу facebook, vk и другие */}
        </div>
       
      })}
    </div> 
  </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormReduxForm;
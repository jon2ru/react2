import React from "react";
const ProfileDataForm = ({ profile }) => {
    return <form>
    <div><button onClick={goToEditMode}>save</button></div>
    <div>avat+descr</div>
    <div>Имя:{profile.fullName}</div>
    <div>обо мне: {profile.aboutMe}</div>
    <div>ищешь работу?{profile.lookingForAJob == false ? 'Да' : 'Нет'}</div>
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
  </form>
}
export default ProfileDataForm;
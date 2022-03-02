import classes from "./Profileinfo.module.css"
import React, { useState } from "react";

const ProfileStatusWithHooks= (props) =>{
   let [editMode,setEditMode]= useState(false)
//    деструктуризация массива
//    useState сидит в библиотеке react
//useState возвращает первым номером значение и 2м ф. 
// которая меняет это значение(1-editMode,2-setEditMode)
let [status,setStatus]= useState(props.status)
// раздробил локальный стейт на 2 части
const activateEditMode = () => {
  setEditMode(true)
}
const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status);
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    // закидываю вводимые символы в props.status
}
            return (
            <div>{!editMode&&//если editMode в стейте=false ,то...
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status ||"no status"}</span>
                </div>
            }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} 
                        // при изменениии в input
                        value={status}
                         autoFocus={true}
                          onBlur={deactivateEditMode} />
                    </div>
                }
            </div>
        );
    
};
export default ProfileStatusWithHooks;

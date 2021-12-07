import classes from "./Profileinfo.module.css"
import React from "react";

class ProfileStatus extends React.Component {
    state= {editMode:true,
   title:'yo' }
    //локальный стейт
    activateEditMode() {
       this.setState (
           {editMode:true}
           );
                        };
    //setState -- метод React.Component
    //setState асинхронен
    deactivateEditMode() {
        this.setState (
            {editMode:false}
        );
    };
    //урок 71 фокус
    render(){
    return (
        <div>{ !this.state.editMode &&
            //если editMode в стейте=false ,то...
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
            }
         </div>
    );
    }
};
export default ProfileStatus;

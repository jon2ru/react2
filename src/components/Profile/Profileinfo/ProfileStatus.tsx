import classes from "./Profileinfo.module.css"
import React, { ChangeEvent } from "react";
//  отключен
//  отключен
//  отключен
//  отключен
//  отключен
//  отключен
type PropsType={
    status:string
    updateUserStatus:(status:string)=>void
}
type StateType={
    editMode:boolean
    status:string
}
class ProfileStatus extends React.Component<PropsType,StateType> {
    state = {
        editMode: true,
        status: this.props.status
    }
    //локальный стейт
    activateEditMode = () => {
        this.setState(
            { editMode: true }
        );
    };
    //setState -- метод React.Component
    //setState асинхронен
    deactivateEditMode = () => {
        this.setState(
            { editMode: false }
        );
        this.props.updateUserStatus(this.state.status);
        //взял status из локального state
    };
    //урок 71 фокус
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        // ChangeEvent импортировал из react for TypeScript
        this.setState(
            { status: e.currentTarget.value });
    }
    componentDidUpdate(prevProps:PropsType, prevState:StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                { status: this.props.status }
            );
        };
    }
    render() {
        return (
            <div>{!this.state.editMode &&
                //если editMode в стейте=false ,то...
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                </div>
            }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}/*хз так как value зафиксирован*/
                            autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
};
export default ProfileStatus;

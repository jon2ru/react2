import Dialogitem from "./Dialogitem/Dialogitem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validator/validators";
import { Textarea } from "../common/FormControls/FormControls";
const maxLength10=maxLengthCreator(8);
const Dialogs = (props) => {
  let state = props.dialogPages;
  let dialogsElements = state.dialogs2.map((d) => (
    <Dialogitem name={d.nname} id={d.id} avatar={d.avatar} />
  ));
  let messageElements = state.messages2.map((m) => (
    <Messages message={m.message} />
  ));
  const addNewMessage = (values) => {
    props.addDialogA(values.newDialog);//вызываю функцию из dialogsContainer;
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>{dialogsElements}</div>
      <div className={classes.dialog}>{messageElements}</div>
      <div className={classes.dialogsitem}>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newDialog" placeholder="введите"
          validate={[required,maxLength10]} />
      </div>
      <div>
        <button>Add dialog</button>
      </div>
    </form>
    /*
                onChange={onDialogChange}
                //убрал ещё до редаксформ ref={newDialogElement}
                value={newDialog}
                placeholder="введите"
    */
  )
};
const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(addMessageForm);
export default Dialogs;

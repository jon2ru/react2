import Dialogitem from "./Dialogitem/Dialogitem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import React from "react";
const Dialogs = (props) => {
  let dialogsElements = props.dialogs2.map((d) => (
    <Dialogitem name={d.nname} id={d.id} avatar={d.avatar} />
  ));
  let messageElements = props.messages2.map((m) => (
    <Messages message={m.message} />
  ));
  let newDialogElement = React.createRef();
  let addDialog = () => {
    let dialogx = newDialogElement.current.value;
    alert(dialogx);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>{dialogsElements}</div>
      <div className={classes.dialog}>{messageElements}</div>
      <div className={classes.dialogsitem}>
        <div>
          <textarea ref={newDialogElement}></textarea>
        </div>
        <div>
          <button onClick={addDialog}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

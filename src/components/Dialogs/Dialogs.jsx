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
    props.dispatch({type:'ADD-NEW-DIALOG'});//вызываю функцию
  };
  let onDialogChange = () => {
    let dialogyy = newDialogElement.current.value;
    props.dispatch({type:'UPDATE-DIALOGS',newDialogsNew:dialogyy});
    //передаю в state.js данные
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>{dialogsElements}</div>
      <div className={classes.dialog}>{messageElements}</div>
      <div className={classes.dialogsitem}>
        <div>
          <textarea
            onChange={onDialogChange}
            ref={newDialogElement}
            value={props.newDialog}
          />
        </div>
        <div>
          <button onClick={addDialog}>Add dialog</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

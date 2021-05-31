import Dialogitem from "./Dialogitem/Dialogitem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import React from "react";
const Dialogs = (props) => {
  let state=props.dialogPages;
 let  newDialog =state.newDialog
  let dialogsElements = state.dialogs2.map((d) => (
    <Dialogitem name={d.nname} id={d.id} avatar={d.avatar} />
  ));
  let messageElements = state.messages2.map((m) => (
    <Messages message={m.message} />
  ));
  // let newDialogElement = React.createRef();
  let addDialog = () => {
    props.addDialogA();//вызываю функцию
  };
  let onDialogChange = (e) => {
    let dialogyy = e.target.value;
    // получаю текст из textarea ref- убрал
    props.onDialogCha2(dialogyy);
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
            // ref={newDialogElement}
            value={newDialog}
            placeholder="введите"
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

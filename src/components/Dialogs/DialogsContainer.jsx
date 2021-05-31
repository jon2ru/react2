import React from "react";
import {
  addDialogActionCreator,
  onDialogChangeActionCreator,
} from "../../Redux/dialogReduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPages;
  
  let addDialog = () => {
    props.store.dispatch(addDialogActionCreator()); //вызываю функцию
  };
  let onDialogChange = (dialogyy) => {
    props.store.dispatch(onDialogChangeActionCreator(dialogyy));
    //передаю в state.js данные
  };
  return  <Dialogs 
    addDialogA ={addDialog}
    onDialogCha2  ={onDialogChange}
    dialogPages={state}
      /*dialogs2={state.dialogPages.dialogs2}
      messages2={state.dialogPages.messages2}
      newDialog={state.dialogPages.newDialog}*/
    />;
 
};

export default DialogsContainer;

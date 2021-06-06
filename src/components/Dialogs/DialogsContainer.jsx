import React from "react";
import {
  addDialogActionCreator,
  onDialogChangeActionCreator,
} from "../../Redux/dialogReduser";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import store from '../../Redux/State';

const DialogsContainer = () => {
  
  return  <StoreContext.Consumer>
    {
    (store) =>{
    let state = store.getState().dialogPages;
  
  let addDialog = () => {
    store.dispatch(addDialogActionCreator()); //вызываю функцию
  };
  let onDialogChange = (dialogyy) => {
   store.dispatch(onDialogChangeActionCreator(dialogyy));
    //передаю в state.js данные
  };
    return <Dialogs 
    addDialogA ={addDialog}
    onDialogCha2  ={onDialogChange}
    dialogPages={state}
      /*dialogs2={state.dialogPages.dialogs2}
      messages2={state.dialogPages.messages2}
      newDialog={state.dialogPages.newDialog}*/
    />;
     }
                      }
 </StoreContext.Consumer>
};

export default DialogsContainer;

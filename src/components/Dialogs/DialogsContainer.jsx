import React from "react";
import { connect } from "react-redux";
import {
  addDialogActionCreator,
  onDialogChangeActionCreator,
} from "../../Redux/dialogReduser";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
  return { dialogPages: state.dialogPages };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addDialogA: () => {
      dispatch(addDialogActionCreator());
    },
    onDialogCha2: (dialogyy) => {
      dispatch(onDialogChangeActionCreator(dialogyy));
    },
  };
};
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)
(Dialogs);
export default DialogsContainer;

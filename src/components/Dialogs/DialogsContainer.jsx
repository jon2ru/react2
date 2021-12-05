import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
let withRedirect= withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
  (withRedirect);
export default DialogsContainer;

import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addDialogActionCreator } from "../../Redux/dialogReduser";
import Dialogs from "./Dialogs";
import { compose } from "redux";
let mapStateToProps = (state) => {
  return { dialogPages: state.dialogPages };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addDialogA: (newDialog) => {
      dispatch(addDialogActionCreator(newDialog));
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  //возьми Dialogs и закинь его в withAuthRedirect,а потом результат в connect(mapStateToProps...
)(Dialogs)

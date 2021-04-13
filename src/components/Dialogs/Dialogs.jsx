import Dialogitem from "./Dialogitem/Dialogitem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
const Dialogs = (props) => {
  let dialogsElements = props.dialogs2.map((d) => (
    <Dialogitem name={d.name} id={d.id} />
  ));
  let messageElements = props.messages2.map((m) => (
    <Messages message={m.message} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>{dialogsElements}</div>
      <div className={classes.dialog}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;

import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
const Dialog = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Messages = (props) => {
  return <div className={classes.messages}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>
        <Dialog name="Dimich" id="1" />
        <Dialog name="Roma" id="2" />
        <Dialog name="Petiya" id="3" />
        <Dialog name="Igor" id="4" />
      </div>
      <div className={classes.dialog}>
        <Messages message="привет" />
        <Messages message="позвони мне" />
        <Messages message="напиши номер" />
      </div>
    </div>
  );
};

export default Dialogs;

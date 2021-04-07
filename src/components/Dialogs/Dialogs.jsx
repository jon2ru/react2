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
  let dialogsData = [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Petiya" },
    { id: 4, name: "Igor" },
  ];
  let messagesData = [
    { id: 1, message: "привет" },
    { id: 2, message: "позвони мне" },
    { id: 3, message: "напиши номер" },
  ];
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={classes.dialog}>
        <Messages message={messagesData[0].message} />
        <Messages message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;

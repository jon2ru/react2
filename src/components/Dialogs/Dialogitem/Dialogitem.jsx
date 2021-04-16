import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";
const Dialogitem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      <div className={classes.dialogsitem}>{props.avatar}</div>
    </div>
  );
};


export default Dialogitem;
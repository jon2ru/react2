import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
const Navitem = (props) => {
 
  return (
    <div className={classes.friends}>
      {props.name}
      {props.foto} 
    </div>
  );
};

export default Navitem;

import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
const Navitem = (props) => {
 
  return (
    <div className={classes.friends}>
     <div className={classes.nu}>{props.name}{props.foto}</div>
      {/* <div className={classes.mnu}>{props.name}{props.foto}</div>
     <div className={classes.pnu}>{props.name}{props.foto}</div>
      */}
     
    </div>
  );
};

export default Navitem;

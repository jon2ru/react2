import { NavLink } from "react-router-dom";
import classes from"./Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.activ}`} >
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink>
         {/* activeClassName стиль активной ссылки */}
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={`${classes.item} ${classes.activ}`} >
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;

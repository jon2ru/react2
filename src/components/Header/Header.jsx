import classes from"./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.item}>header</div>
      <div className={classes.loginBlock}>
        {props.isAuth? props.login:
      <NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

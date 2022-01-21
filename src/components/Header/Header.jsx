import classes from"./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.item}>header</div>
      <div className={classes.loginBlock}>
        {props.isAuth? <div>{props.login}-<button onClick={props.logout}>Log out</button></div>
        :<NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

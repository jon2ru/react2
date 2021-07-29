import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import Navitem from "./Navitem";
const Nav = (props) => {
  let navElements = props.friends.map((d) => (
    <Navitem name={d.nname} id={d.id} avatar={d.avatar} />
  ));
    let nifElements = props.sideavata.map((m) => (
      <Navitem foto={m.img2} />
    ));
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Dialogs
        </NavLink>
        {/* activeClassName стиль активной ссылки */}
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <NavLink to="/musik">Music</NavLink>
      </div>
      <div className={`${classes.item} ${classes.aert}`}>
        {/* 2 стиля для одного элемента перестало работать*/}
        <a>Settings</a>
      </div>
      <div> FRIENDS:</div>
      <div className={classes.navitem}>
        {navElements}
         {nifElements} 
      </div>
    </nav>
  );
};

export default Nav;

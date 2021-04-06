import classes from"./Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${classes.item} ${classes.activ}`} >
        <a href="/dialogs">Dialogs</a>
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

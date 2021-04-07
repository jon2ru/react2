import classes from "./Profileinfo.module.css";
const Profileinfo = () => {
  return (
    <div>
      <img src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg" width="800" height="400"/>
      <div className={classes.descr}>avat+descr</div>
    </div>
  );
};

export default Profileinfo;

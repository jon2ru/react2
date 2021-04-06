import classes from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>
        <div className={classes.dialog+ ' '+classes.active}>Dimich</div>
        <div className={classes.dialog}>Roma</div>
        <div className={classes.dialog}>Petiya</div>
        <div className={classes.dialog}>Igor</div>
      </div>
      <div className={classes.messages}>
      <div className={classes.messages}> привет</div>
      <div className={classes.messages}> позвони мне</div>
      <div className={classes.messages}> напиши номер</div>
   </div>
    </div>
  );
};

export default Dialogs;

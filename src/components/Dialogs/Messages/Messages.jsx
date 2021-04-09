import classes from "./../Dialogs.module.css";

const Messages = (props) => {
  return <div className={classes.messages}>{props.message}</div>;
};

export default Messages;

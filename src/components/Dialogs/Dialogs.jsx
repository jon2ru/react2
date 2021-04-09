import Dialogitem from "./Dialogitem/Dialogitem";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
<Dialogitem />
<Messages />
const Dialogs = (props) => {
  let dialogs2 = [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Petiya" },
    { id: 4, name: "Igor" },
  ];
  let messages2 = [
    { id: 1, message: "привет" },
    { id: 2, message: "позвони мне" },
    { id: 3, message: "напиши номер" },
  ];
  let dialogsElements = dialogs2.map((d) => 
    <Dialogitem name={d.name} id={d.id} />
  );
  let messageElements = messages2.map((m) => <Messages message={m.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsitem}>{dialogsElements}</div>
      <div className={classes.dialog}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;

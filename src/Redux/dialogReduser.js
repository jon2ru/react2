const ADD_NEW_DIALOG = "ADD-NEW-DIALOG";
let initialState = {
  dialogs2: [
    {
      id: 1,
      nname: "Dimich",
      avatar: (
        <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      ),
    },

    {
      id: 2,
      nname: "Roma",
      avatar: (
        <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      ),
    },
    {
      id: 3,
      nname: "Petiya",
      avatar: (
        <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      ),
    },
    {
      id: 4,
      nname: "Igor",
      avatar: (
        <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      ),
    },
  ],
  //newDialog: "",
  messages2: [
    { id: 1, message: "привет" },
    { id: 2, message: "позвони мне" },
    { id: 3, message: "напиши номер" },
  ],
};
const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DIALOG:
      return{
     ...state,
     dialogs2:[...state.dialogs2,{id: 5,
      nname: action.newDialog,
      avatar: (
        <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      )}], /* урок 32 */
     //newDialog: "" // стираю текст в textarea
      }
    default:
      return state;
  }
};
// если функция только возвращает значение то можно без return
export const addDialogActionCreator = (newDialog) =>
 ({ type: ADD_NEW_DIALOG,newDialog});
export default dialogReduser;

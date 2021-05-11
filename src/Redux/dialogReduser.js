const ADD_NEW_DIALOG = "ADD-NEW-DIALOG";
const UPDATE_DIALOGS = "UPDATE-DIALOGS";
const dialogReduser = (state, action) => {
  switch (action.type) {
    case ADD_NEW_DIALOG:
      let neewDialog7 = {
        id: 5,
        nname: state.newDialog,
        avatar: (
          <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
        ),
      };
      state.dialogs2.push(neewDialog7); /* урок 32 */
      state.newDialog = ""; // стираю текст в textarea
      return state;
    case UPDATE_DIALOGS:
      state.newDialog = action.newDialogsNew; //получаю побуквенно из state.js
      return state;
    default:
      return state;
  }
};
// если функция только возвращает значение то можно без return
export const addDialogActionCreator = () => ({ type: ADD_NEW_DIALOG });
export const onDialogChangeActionCreator = (dialogyy) => ({
  type: UPDATE_DIALOGS,
  newDialogsNew: dialogyy,
});
export default dialogReduser;

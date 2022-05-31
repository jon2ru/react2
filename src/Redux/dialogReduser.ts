import { BaseThunkType, InferActionsTypes } from "./new-store";

export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>
type dialogType = {
  id: number
  nname: string

}
type messageType = {
  id: number
  message: string
}

let initialState = {
  dialogs2: [
    {
      id: 1,
      nname: "Dimich",
      // avatar: (
      //   <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      // ),
    },

    {
      id: 2,
      nname: "Roma",
      // avatar: (
      //   <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      // ),
    },
    {
      id: 3,
      nname: "Petiya",
      // avatar: (
      //   <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      // ),
    },
    {
      id: 4,
      nname: "Igor",
      // avatar: (
      //   <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      // ),
    },
  ] as Array<dialogType>,
  //newDialog: "",
  messages2: [
    { id: 1, message: "привет" },
    { id: 2, message: "позвони мне" },
    { id: 3, message: "напиши номер" },
  ] as Array<messageType>
};
const dialogReduser = (state = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case "ADD_NEW_DIALOG":
      return {
        ...state,
        dialogs2: [...state.dialogs2, {
          id: 5,
          nname: action.newDialog,
          // avatar: (
          //   <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
          // )
        }], /* урок 32 */
        //newDialog: "" // стираю текст в textarea
      }
    default:
      return state;
  }
};
export const actions = {
  addDialogActionCreator: (newDialog: string) =>
    ({ type: "ADD_NEW_DIALOG", newDialog } as const)
}
export default dialogReduser;
/*если функция только возвращает значение то можно без ретюрн*/
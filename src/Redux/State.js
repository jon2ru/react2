const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_DIALOG = "ADD-NEW-DIALOG";
const UPDATE_DIALOGS = "UPDATE-DIALOGS";
let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "Как дела", count: 2 },
        { id: 2, message: "нормально", count: 5 },
      ],
      newPostText: "ww",
    },
    dialogPages: {
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
      newDialog: "ee",
      messages2: [
        { id: 1, message: "привет" },
        { id: 2, message: "позвони мне" },
        { id: 3, message: "напиши номер" },
      ],
    },
    sidebar: [
      {
        img2: (
          <img src="https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg" />
        ),
      },
      {
        img2: (
          <img src="https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg" />
        ),
      },
      {
        img2: (
          <img src="https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg" />
        ),
      },
    ],
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  //window.state = state;- не работает разобраться
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     //message -получаю значение напрямую из state
  //     count: 0,
  //   };
  //   this._state.profilePage.post.push(newPost);
  //   /* урок 32 newPost переменная чуть выше*/
  //   this._state.profilePage.newPostText = ""; // стираю текст в textarea
  //   this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
  // },
  // updatenewPost(newText) {
  //   /*функция для побуквенной
  // отрисовки при изменении в ul */
  //   this._state.profilePage.newPostText = newText; /* урок 34
  // тут запись текста в state*/
  // this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
  // },

  // addNewDialog() {
  //   let neewDialog7 = {
  //     id: 5,
  //     nname: this._state.dialogPages.newDialog,
  //     avatar: (
  //       <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
  //     ),
  //   };
  //   this._state.dialogPages.dialogs2.push(neewDialog7); /* урок 32 */
  //   this._state.dialogPages.newDialog = ""; // стираю текст в textarea
  //   this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
  // },
  // updateDialogs(newDialogsNew) {
  //   this._state.dialogPages.newDialog = newDialogsNew; //получаю побуквенно из state.js
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    //{type:' ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        //message -получаю значение напрямую из state
        count: 0,
      };
      this._state.profilePage.post.push(newPost);
      /* урок 32 newPost переменная чуть выше*/
      this._state.profilePage.newPostText = ""; // стираю текст в textarea
      this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      /*функция для побуквенной 
  отрисовки при изменении в ul */
      this._state.profilePage.newPostText =
        action.newText; /* урок 34 
  тут запись текста в state*/
      this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
    } else if (action.type === ADD_NEW_DIALOG) {
      let neewDialog7 = {
        id: 5,
        nname: this._state.dialogPages.newDialog,
        avatar: (
          <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
        ),
      };
      this._state.dialogPages.dialogs2.push(neewDialog7); /* урок 32 */
      this._state.dialogPages.newDialog = ""; // стираю текст в textarea
      this._callSubscriber(this._state); /* урок 33 отрисовываю заново */
    } else if (action.type === UPDATE_DIALOGS) {
      this._state.dialogPages.newDialog = action.newDialogsNew; //получаю побуквенно из state.js
      this._callSubscriber(this._state);
    }
  },
}; //end function store
export const addhhPostActionCreator = () => ({ type: "ADD-POST" });
export const onPostChangeActionCreator = (newtext5) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: newtext5,
});
// если функция только возвращает значение то можно без retrurn
export const addDialogActionCreator = () => ({ type: "ADD-NEW-DIALOG" });
export const onDialogChangeActionCreator = (dialogyy) => ({
  type: "UPDATE-DIALOGS",
  newDialogsNew: dialogyy,
});
export default store;

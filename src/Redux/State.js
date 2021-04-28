import { rerenderEntireTree } from "../Render";

let state = {
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
};
// <img src="https://i0.wp.com/andrey-eltsov.ru/wp-content/uploads/2018/02/SmailikSbor3.jpg" />
export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    //message -получаю значение напрямую из state
    count: 0,
  };
  state.profilePage.post.push(newPost); /* урок 32 */
  state.profilePage.newPostText = ""; // стираю текст в textarea
  rerenderEntireTree(state); /* урок 33 отрисовываю заново */
};
export let updatenewPost = (newText) => {
  /*функция для побуквенной 
  отрисовки при изменении в ul */
  state.profilePage.newPostText = newText; /* урок 34 
  тут запись текста в state*/
  rerenderEntireTree(state); /* урок 33 отрисовываю заново */
};

export let addNewDialog = () => {
  let neewDialog7 = {
    id: 5,
    nname: state.dialogPages.newDialog,
    avatar: (
<img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
    ),
  };
  state.dialogPages.dialogs2.push(neewDialog7); /* урок 32 */
  state.dialogPages.newDialog = ""; // стираю текст в textarea
  rerenderEntireTree(state); /* урок 33 отрисовываю заново */
};
export let updateDialogs = (newDialogsNew) => {
  state.dialogPages.newDialog = newDialogsNew; //получаю побуквенно из state.js
  rerenderEntireTree(state);
};

export default state;

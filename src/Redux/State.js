import { rerenderEntireTree } from "../Render";

let state = {
  profilePage: {
    post: [
      { id: 1, message: "Как дела", count: 2 },
      { id: 2, message: "нормально", count: 5 },
    ],
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
export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    count: 0,
  };
  state.profilePage.post.push(newPost); /* урок 32 */
  rerenderEntireTree(state);/* урок 33 отрисовываю заново */
};

export default state;

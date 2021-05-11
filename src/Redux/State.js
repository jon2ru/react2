import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";
import sidebarReduser from "./sidebarReduser ";
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

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogPages = dialogReduser(this._state.dialogPages, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
}; //end function store


export default store;

import React from "react";
// console.log(MyPosts);
import {
  addhhPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profileReduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state= props.store.getState()
  let addhhPost = () => {
    // let newtext = newPostElement.current.value; -перенес в state
    props.store.dispatch(addhhPostActionCreator());
     /*31,32 вызываю функцию? addPost
    в state.js */
    /* props.updatenewPost('');обнуляю значение в textarea 
    -перенес в state.js */
  };
  let onPostChange = (newtext5) => {
    let action = onPostChangeActionCreator(newtext5);
    //создал action для примера чтобы видеть процесс
    props.store.dispatch(action);
    //при изменении в textarea передаю данные в state.js
  };
  return <MyPosts addPost={addhhPost}
   updateNewPostText={onPostChange}
    post={state.profilePage.post}
    newPostText={state.profilePage.newPostText} />;
};
export default MyPostsContainer;

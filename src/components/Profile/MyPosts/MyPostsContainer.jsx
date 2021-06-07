import React from "react";
// console.log(MyPosts);
import {
  addhhPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profileReduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

/*const MyPostsContainer = () => {
  
  return (
    <StoreContext.Consumer>
       {
      (store)=> {
        let state = store.getState();
        let addhhPost = () => {
          // let newtext = newPostElement.current.value; -перенес в state
          store.dispatch(addhhPostActionCreator());
          /*31,32 вызываю функцию? addPost
          в state.js */
/* props.updatenewPost('');обнуляю значение в textarea 
          -перенес в state.js
           
        };
        let onPostChange = (newtext5) => {
          let action = onPostChangeActionCreator(newtext5);
          //создал action для примера чтобы видеть процесс
          store.dispatch(action);
          //при изменении в textarea передаю данные в state.js
                };
      return <MyPosts
        addPost={addhhPost}
        updateNewPostText={onPostChange}
        post={state.profilePage.post}
        newPostText={state.profilePage.newPostText}
      />
   }
    }
    </StoreContext.Consumer>
  );
};*/
let mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addhhPostActionCreator());
    },
    updateNewPostText: (newtext5) => {
      dispatch(onPostChangeActionCreator(newtext5));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

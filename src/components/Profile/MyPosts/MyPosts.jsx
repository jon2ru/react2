import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
// console.log(MyPosts);
const MyPosts = (props) => {

  let postElement = props.post.map((p) => (
    <Post message={p.message} count={p.count} />
  ));
  let newPostElement = React.createRef(); /* 31 реакт создай ссылку*/
  let addhhPost = () =>{
  // let newtext = newPostElement.current.value; -перенес в state
  props.addPost ();/*31,32 вызываю функцию? addPost
    в state.js */
    /* props.updatenewPost('');обнуляю значение в textarea 
    -перенес в state.js */
  };
  let onPostChange =()=>{
    let newtext5 = newPostElement.current.value;
    props.updatenewPost(newtext5);
    //при изменении в textarea передаю данные в state.js
  };
  return (
    <div className={classes.post}>
      <h2>My Post</h2>
      <div>
        <div>
          <textarea onChange={onPostChange}
           ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button  onClick={addhhPost}>Add post</button>
        </div>
      </div>
      <div className={classes.newpost}>{postElement}</div>
    </div>
  );
};

export default MyPosts;

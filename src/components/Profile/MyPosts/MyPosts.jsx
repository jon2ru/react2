import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
// console.log(MyPosts);

const MyPosts = (props) => {
  let postElement = props.post.map((p) => (
    <Post message={p.message} count={p.count} />
  ));
  let newPostElement = React.createRef(); /* 31 реакт создай ссылку*/
  let addPost = () =>{
  let newtext = newPostElement.current.value;
  props.addPost (newtext);//31,32
  newPostElement.current.value='';
  };
  return (
    <div className={classes.post}>
      <h2>My Post</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.newpost}>{postElement}</div>
    </div>
  );
};

export default MyPosts;

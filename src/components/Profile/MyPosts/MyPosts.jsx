import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validator/validators";
import { input } from "../../common/FormControls/FormControls";
// console.log(MyPosts);
const maxLength10=maxLengthCreator(10);
const MyPosts = (props) => {

  let postElement = props.post.map((p) => (
    <Post message={p.message} count={p.count} />
  ));
  let newPostElement = React.createRef(); /* 31 реакт создай ссылку*/
  let addhhPost = (values) => {
    // let newtext = newPostElement.current.value; -перенес в state
    props.addPost(values.newPostText);
    //props.dispatch(addhhPostActionCreator());
    /*31,32 вызываю функцию addPost
      в state.js */
    /* props.updatenewPost('');обнуляю значение в textarea 
    -перенес в state.js */
  };
  let onPostChange = () => {
    let newtext5 = newPostElement.current.value;
    props.updateNewPostText(newtext5);
    //let action=(onPostChangeActionCreator(newtext5))
    //создал action для примера чтобы видеть процесс
    //props.dispatch(action);
    //при изменении в textarea передаю данные в state.js
  };
  return (
    <div className={classes.post}>
      <h2>My Post</h2>
      <div>
        <PostReduxForm onSubmit={addhhPost}/>
      </div>
      <div className={classes.newpost}>{postElement}</div>
    </div>
  );
};
const myPostForm= (props) => {
  return(
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={input} name="newPostText" placeholder="введите" 
      validate={[required,maxLength10]} />
    </div>
    <div>
      <button >Add post</button>
    </div>
  </form>
  )
};
const PostReduxForm = reduxForm({ form: "myPostText" })(myPostForm);
export default MyPosts;

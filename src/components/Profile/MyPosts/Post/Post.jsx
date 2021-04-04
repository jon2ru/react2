import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://kurer-sreda.ru/wp-content/uploads/2020/06/1-48-800x663.png"/>
      
     {props.message}
      <div>
       <span>Like</span>
       </div>
    </div>
  );
};

export default Post;

import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG8.png" />
      {/* <img src="https://kurer-sreda.ru/wp-contenpt/uloads/2020/06/1-48-800x663.png" /> */}

      {props.message}
      <div>
        <span>Like {props.count}</span>
      </div>
    </div>
  );
};

export default Post;

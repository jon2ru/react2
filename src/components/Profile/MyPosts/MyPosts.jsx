import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// console.log(MyPosts);
const MyPosts = () => {
  return (
    <div className={classes.post}>
      <h2>My Post</h2>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
      </div>
      <div className={classes.newpost}>
     <Post message="Как дела?" count={2} />
     <Post message="нормально"count= {3}/>
       </div>
    </div>
  );
};

export default MyPosts;

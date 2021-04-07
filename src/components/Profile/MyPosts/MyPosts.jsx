import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// console.log(MyPosts);
const MyPosts = () => {
  let postData = [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ];
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
     <Post message={postData[0].message} count={postData[0].count}/>
     <Post message={postData[1].message} count={postData[1].count}/>
       </div>
    </div>
  );
};

export default MyPosts;

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// console.log(MyPosts);
const MyPosts = () => {
  let post = [
    { id: 1, message: "Как дела", count: 2 },
    { id: 2, message: "нормально", count: 5 },
  ];
  let postElement = post.map((p) => (
    <Post message={p.message} count={p.count} />
  ));
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
      {postElement}
      </div>
    </div>
  );
};

export default MyPosts;

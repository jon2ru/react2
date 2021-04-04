import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        </div>
      <div>New Post</div>
     <Post message="Как дела?" />
     <Post message="нормально" />
    </div>
  );
};

export default MyPosts;

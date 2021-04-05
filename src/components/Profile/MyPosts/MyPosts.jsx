import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// console.log(MyPosts);
const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        </div>
      <div>New Post</div>
     <Post message="Как дела?" count={2} />
     <Post message="нормально"count= {3}/>
    </div>
  );
};

export default MyPosts;

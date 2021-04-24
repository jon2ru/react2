import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import { addPost } from '../../Redux/State';
const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts post={props.post} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;

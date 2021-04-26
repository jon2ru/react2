import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
import { addPost } from '../../Redux/State';
const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts post={props.post1.post} newPostText={props.post1.newPostText} addPost={props.addPost2} updatenewPost={props.updatenewPost3}/>
    </div>
  );
};

export default Profile;

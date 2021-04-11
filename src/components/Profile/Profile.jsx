import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts post={props.post} />
    </div>
  );
};

export default Profile;

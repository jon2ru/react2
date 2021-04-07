import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
const Profile = () => {
  return (
    <div>
      <Profileinfo />
      <MyPosts />
    </div>
  );
};

export default Profile;

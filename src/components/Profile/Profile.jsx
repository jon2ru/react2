// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
//import store, { addPost } from '../../Redux/State';

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;

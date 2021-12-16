// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
//import store, { addPost } from '../../Redux/State';

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile} status={props.status}
      updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

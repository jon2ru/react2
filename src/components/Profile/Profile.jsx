// import classes from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";
//import store, { addPost } from '../../Redux/State';

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <Profileinfo isOwner={props.isOwner} 
      savePhoto={props.savePhoto}
      profile={props.profile} 
      status={props.status}
      updateUserStatus={props.updateUserStatus}
      saveProfile={props.saveProfile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

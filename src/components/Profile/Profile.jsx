import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.profile}>
      <img src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg" width="800" height="400"/>
      <div>avat+descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

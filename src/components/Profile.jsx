import classes from"./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.profile}>
      <img
        src="https://i.pinimg.com/originals/f5/39/b6/f539b6967cb0f250d4e05cc133a8c87d.jpg"
        width="800"
        height="400"
      />
      <div>avat+descr</div>
      <div>
        My Post
        <div>New Post</div>
      </div>
      <div className={classes.item}>
        Post1</div>
        <div className={classes.item}>
          >Post2</div>
    </div>
  );
};

export default Profile;

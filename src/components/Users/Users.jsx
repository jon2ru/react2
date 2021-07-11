import React from "react";
import styles from "./Users.module.css";
let Users = (props) => {
 let users=[
    {
      id: 1,
      photoUrl:
        "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
      followed: false,
      fullName: "Dmitry",
      status: "I am a boss",
      location: { city: "Tbilisi", cantry: "Georgia" },
    },
    {
      id: 2,
      photoUrl:
        "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
      followed: true,
      fullName: "Vova",
      status: "I am a driver",
      location: { city: "Vilnus", cantry: "Litva" },
    },
    {
      id: 3,
      photoUrl:
        "https://demotivation.ru/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg",
      followed: false,
      fullName: "Sergey",
      status: "I am a student",
      location: { city: "Kiev", cantry: "Ukraine" },
    },
    ] 
  if (props.users.length === 0) {
    props.setUsers(users);
    
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {
                u.followed ? (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )
                //тринарное выражение
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.cantry}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;

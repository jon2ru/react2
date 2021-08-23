import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";

let Users = (props) => {
  /* constructor(props) {
    super(props);
    axios
       } если constructor ничего не делает и 
       только отрисовывается через super, то его можно не писать*/

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }//end for
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={props.currentPage === p && styles.selectedPage}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
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
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.cantry"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
}; //end Users
export default Users;

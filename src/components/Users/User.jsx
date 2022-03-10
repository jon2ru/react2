import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import Pagination from "../common/paginator/Pagination";

let User = ({user,followingInProgress,follow,unfollow}) => {
  return (
        <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small !== null ? user.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {
                user.followed ? (
                    <button disabled={followingInProgress.some(id=>id===user.id)}
                    onClick={() => {
                      follow(user.id);
                      //вызываю thunk из редюсера, delete
                     } }
                    >Follow
                  </button>
                ) : (
                  <button disabled={followingInProgress.some(id=>id===user.id)}
                    onClick={() => {
                    unfollow(user.id);
                      //вызываю thunk из редюсера
                    } }
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
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.city"}</div>
              <div>{"user.location.cantry"}</div>
            </span>
          </span>
        </div>
  );
}; //end Users
export default User;

import React ,{FC}from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import Pagination from "../common/paginator/Pagination";
type PropsType={
  user:any
  followingInProgress:any
  follow:(userId:number)=>void
  unfollow:(userId:number)=>void
}
let User:React.FC<PropsType> = ({user,followingInProgress,follow,unfollow}) => {
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
                    <button disabled={followingInProgress.some((id:number)=>id===user.id)}
                    onClick={() => {
                      follow(user.id);
                      //вызываю thunk из редюсера, delete
                     } }
                    >Follow
                  </button>
                ) : (
                  <button disabled={followingInProgress.some((id:number)=>id===user.id)}
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

import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import  {followApi, unfollowApi} from "../../api/api"

let Users = (props) => {
  /* constructor(props) {
    super(props);
    axios
       } если constructor ничего не делает и 
       только отрисовывается через super, то его можно не писать*/

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //страниц=сколько всего юзеров/сколько показывать юзеров
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } //end for
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              //currentPage=выделяю жирным текущую страницу
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
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {
                u.followed ? (
                    <button disabled={props.followingInProgress.some(id=>id===u.id)}
                    onClick={() => {
                      props.toggleFollowInProgress(true,u.id);
                      axios.delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                        { withCredentials: true /* передать куку. пишется 2м параметром в delete,get*/,
                        headers:{'API-KEY': '66060485-250e-40e6-994f-36765b804827'}}
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      } 
                      props.toggleFollowInProgress(false,u.id); })
                     } }
                    >Follow
                  </button>
                ) : (
                  <button disabled={props.followingInProgress.some(id=>id===u.id)}
                    onClick={() => {
                      props.toggleFollowInProgress(true,u.id);
                      axios.post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                         {}, { withCredentials: true /* передать куку. пишется 3м параметром в post*/,
                           headers:{'API-KEY': '66060485-250e-40e6-994f-36765b804827'}}
                        )
                       .then((response) => {
                         if (response.data.resultCode === 0) {
                       props.unfollow(u.id);
                      }  
                      props.toggleFollowInProgress(false,u.id);})
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

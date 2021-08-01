import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/users.png";

class Users extends React.Component {
 /* constructor(props) {
    super(props);
    axios
       } если constructor ничего не делает и 
       только отрисовывается через super, то его можно не писать*/
  componentDidMount(){
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
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
                        this.props.follow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
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
  }
}
export default Users;

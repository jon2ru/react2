import React from "react";
import Pagination from "../common/paginator/Pagination";
import User from "./User";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged,
   ...props }) => {
  return (
    <div>
      <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
        pageSize={pageSize} totalItemsCount={totalUsersCount} />
        <div>
      {props.users.map((u) => <User user={u} key={u.id} 
      followingInProgress={props.followingInProgress}
        follow={props.follow} unfollow={props.unfollow} />
      )}
      </div>
    </div>
      )
}; //end Users
export default Users;

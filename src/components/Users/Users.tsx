import React from "react";
import { UserType } from "../../types/types";
import Pagination from "../common/paginator/Pagination";
import User from "./User";
type PropsType={
  totalUsersCount:number
  pageSize:number
 currentPage:number
  onPageChanged:()=>void //функция не возвращает ничего
  users:Array<UserType>
  followingInProgress:number
  follow:()=>void
  unfollow:()=>void

}

let Users:React.FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged,users,
   ...props }) => {
  return (
    <div>
      <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
        pageSize={pageSize} totalItemsCount={totalUsersCount} />
        <div>
      {props.users.map((u:any) => <User user={u} key={u.id} 
      followingInProgress={props.followingInProgress}
        follow={props.follow} unfollow={props.unfollow} />
      )}
      </div>
    </div>
      )
}; //end Users
export default Users;

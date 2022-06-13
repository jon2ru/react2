import React, { FC } from "react";
import { filterType } from "../../Redux/usersReduser";
import { UserType } from "../../types/types";
import Pagination from "../common/paginator/Pagination";
import User from "./User";
import UserSearchForm from "./UsersSearchForm";
type PropsType = {
  users: Array<UserType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  followingInProgress: number[]
  onPageChanged: (pageNumber: number) => void //функция не возвращает ничего
  onFilterChanged: (filter: filterType) => void 
  follow: (userId: number) => void
  unfollow: (userId: number) => void

}
let Users: FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users,
  ...props }) => {
  return <div>
      <UserSearchForm onFilterChanged={props.onFilterChanged}/>
      <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
        pageSize={pageSize} totalItemsCount={totalUsersCount} />
      <div>
        {users.map((u: any) => <User user={u} key={u.id}
          followingInProgress={props.followingInProgress}
          follow={props.follow} unfollow={props.unfollow} />
        )}
      </div>
    </div>
}; //end Users

export default Users;

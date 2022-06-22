import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from "../../Redux/users-selectors";
import { filterType, getUserThunkCreator,follow,unfollow } from "../../Redux/usersReduser";
import { UserType } from "../../types/types";
import Pagination from "../common/paginator/Pagination";
import User from "./User";
import UserSearchForm from "./UsersSearchForm";
type PropsType = {
//  followingInProgress: number[]
  // // onFilterChanged: (filter: filterType) => void 
  // follow: (userId: number) => void
  // unfollow: (userId: number) => void
}
export const Users: FC<PropsType> = () => {
  // ********************************************
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUserFilter)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)

  //  callback***********************************
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserThunkCreator(currentPage, pageSize, filter))
  }, [])

  const onPageChanged = (PageNumber: number) => {
    dispatch(getUserThunkCreator(PageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: filterType) => {
    dispatch(getUserThunkCreator(1, pageSize, filter))
  }
  const follow = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }
  // ******************************************** 
  return <div>
    <UserSearchForm onFilterChanged={onFilterChanged} />
    <Pagination onPageChanged={onPageChanged} currentPage={currentPage}
      pageSize={pageSize} totalItemsCount={totalUsersCount} />
    <div>
      {users.map((u: any) => <User user={u} key={u.id}
        followingInProgress={followingInProgress}
        follow={follow} unfollow={unfollow} />
      )}
    </div>
  </div>
}; //end Users

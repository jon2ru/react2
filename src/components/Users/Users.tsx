import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from "../../Redux/users-selectors";
import { filterType, getUserThunkCreator,follow1,unfollow1 } from "../../Redux/usersReduser";
import { UserType } from "../../types/types";
import Pagination from "../common/paginator/Pagination";
import User from "./User";
import UserSearchForm from "./UsersSearchForm";
import * as queryString from "querystring";
type PropsType = {
//  followingInProgress: number[]
  // // onFilterChanged: (filter: filterType) => void 
  // follow: (userId: number) => void
  // unfollow: (userId: number) => void
}
type QueryParamsType={
  term?:string,page?:string,friend?:string
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
  // *****************************
  // распарсю url
  useEffect(() => {
    const parsed= queryString.parse(history.location.search.substr(1)) as QueryParamsType
    // там спереди знак ? а это уберет первый символ substr(1)
  let actualPage = currentPage
  let actualFilter = filter
  if(!!parsed.page) actualPage=+parsed.page
  // + значит переведи в число
  if(!!parsed.term) actualFilter={...actualFilter, term:parsed.term as string}
   switch(parsed.friend){
    case "null":
      actualFilter={...actualFilter,friend:null}
      break;
    case "true":
      actualFilter={...actualFilter,friend:true}
      break;
    case "false":
      actualFilter={...actualFilter,friend:false}
      break;
    }
 
  dispatch(getUserThunkCreator(actualPage, pageSize, actualFilter))
  }, [])
  // ниже делаю url
  const history= useHistory()
   useEffect(() => {
    const query:QueryParamsType={}
    if (!!filter.term) query.term=filter.term
    if (filter.friend!==null) query.friend=String(filter.friend)
    if (currentPage!==1) query.page=String(currentPage)

     history.push({
       search:queryString.stringify(query),
       pathname:"/users"
     })
   },[filter,currentPage])

  const onPageChanged = (PageNumber: number) => {
    dispatch(getUserThunkCreator(PageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: filterType) => {
    dispatch(getUserThunkCreator(1, pageSize, filter))
  }
  const follow = (userId: number) => {
    dispatch(follow1(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollow1(userId))
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

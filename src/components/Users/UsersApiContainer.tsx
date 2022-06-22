import { FC } from "react";
import Preloader from "../common/Preloader/Preloader";
import { UserType } from "../../types/types";
import { filterType } from "../../Redux/usersReduser";
import { useSelector } from "react-redux";
import { getIsFetching } from "../../Redux/users-selectors";
import { Users } from "./Users";
//import {usersApi}  from "../../api/api";
// export type MapStatePropsType={
//   currentPage:number
//   pageSize:number
//   isFetching:boolean
//   totalUsersCount:number
//   users:UserType[]
//   followingInProgress: number[]
//   filter:filterType
// }
// export type MapdispatchPropsType={
//   follow:(userId:number)=>void
//   unfollow:(userId:number)=>void
//   getUserThunkCreator:(currentPage:number,pageSize:number,filter:filterType)=>void
// //   setcurrentpage:number
// // toggleFollowInProgress:any
// }
// export type ownPropsType={
//   pageTitle:string
// }
// type PropsType=MapStatePropsType&MapdispatchPropsType&ownPropsType
type usersPagePropsType={
  pageTitle:string
}
// }
export const UsersPage:FC<usersPagePropsType>=(props)=>{
  const isFetching=useSelector(getIsFetching)
  return (
    <>
    <h2>{props.pageTitle} </h2>
      {isFetching ? <Preloader /> : null}

      <Users
        // // totalUsersCount={this.props.totalUsersCount}
        // // pageSize={this.props.pageSize}
        // // currentPage={this.props.currentPage}
        // // users={props.users}
        // // onPageChanged={onPageChanged}
        // // onFilterChanged={onFilterChanged}
        // follow={props.follow}
        // unfollow={props.unfollow}
        // followingInProgress={props.followingInProgress}
      />
    </>
  );
}
// class UsersApiContainer extends React.Component<PropsType> {
  // componentDidMount() {
    // const {currentPage,pageSize,filter}=this.props
    // this.props.getUserThunkCreator(currentPage,pageSize,filter);
    /*this.props.toggleIsFetching(true);
    usersApi.getUsera(this.props.currentPage, this.props.pageSize)
  //запрос на сервер данные на api.js урок 63, 7:00
  //baseURL: "https://social-network.samuraijs.com/api/1.0/",
    .then((data) => {
         // response в api.js поменял на data 63
        this.props.toggleIsFetching(false);
        this.props.setusers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        //totalCount-на сервере число пользователей
      });*/
  // } //END componentDidMount
  // onPageChanged = (PageNumber:number) => {
  //   this.props.getUserThunkCreator(PageNumber, this.props.pageSize,this.props.filter);
  //   /*
  //   this.props.setcurrentpage(pageNumber);
  //   this.props.toggleIsFetching(true);
  //   usersApi.getUsera(pageNumber, this.props.pageSize).then((data) => {
  //     //запрос на сервер
  //     this.props.toggleIsFetching(false);
  //    this.props.setusers(data.items);
  //   });*/
  // }; // END onPageChanged
  // onFilterChanged=(filter:filterType)=>{
  //   this.props.getUserThunkCreator(1, this.props.pageSize,filter);
  // }
  // render() {
  //   return (
  //     <>
  //     <h2>{this.props.pageTitle} </h2>
  //       {this.props.isFetching ? <Preloader /> : null}

  //       <Users />
  //     </>
  //   );
  // } //end render
// } // end UsersApiContainer
// export default UsersApiContainer;

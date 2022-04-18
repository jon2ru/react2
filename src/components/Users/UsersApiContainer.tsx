import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UserType } from "../../types/types";
//import {usersApi}  from "../../api/api";
type PropsType={
  currentPage:number
  pageSize:number
  isFetching:boolean
  totalUsersCount:number
  users:Array<UserType>
  follow:()=>void
  unfollow:()=>void
  onPageChanged:()=>void
  followingInProgress:Array<number>

  getUserThunkCreator:(currentPage:number,pageSize:number)=>void
}
class UsersApiContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
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
  } //END componentDidMount
  onPageChanged = (pageNumber:number) => {
    this.props.getUserThunkCreator(pageNumber, this.props.pageSize);
    /*
    this.props.setcurrentpage(pageNumber);
    this.props.toggleIsFetching(true);
    usersApi.getUsera(pageNumber, this.props.pageSize).then((data) => {
      //запрос на сервер
      this.props.toggleIsFetching(false);
     this.props.setusers(data.items);
    });*/
  }; // END onPageChanged
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  } //end render
} // end UsersApiContainer
export default UsersApiContainer;

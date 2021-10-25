import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersApi}  from "../../api/api";
class UsersApiContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersApi.getUsera(this.props.currentPage, this.props.pageSize)
  //запрос на сервер данные на api.js урок 63, 7:00
  //baseURL: "https://social-network.samuraijs.com/api/1.0/",
    .then((data) => {
         // response в api.js поменял на data 63
        this.props.toggleIsFetching(false);
        this.props.setusers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        //totalCount-на сервере число пользователей
      });
  } //END componentDidMount
  onPageChanged = (pageNumber) => {
    this.props.setcurrentpage(pageNumber);
    this.props.toggleIsFetching(true);
    usersApi.getUsera(pageNumber, this.props.pageSize).then((data) => {
      //запрос на сервер
      this.props.toggleIsFetching(false);
     this.props.setusers(data.items);
    });
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
          debugger
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowInProgress={this.props.toggleFollowInProgress}
        />
      </>
    );
  } //end render
} // end UsersApiContainer
export default UsersApiContainer;

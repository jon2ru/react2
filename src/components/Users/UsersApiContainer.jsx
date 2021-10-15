import React from "react";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
class UsersApiContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      ) // обратные кавычки на букве ё
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setusers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        //totalCount-на сервере число пользователей
      });
  } //END componentDidMount
  onPageChanged = (pageNumber) => {
    this.props.setcurrentpage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setusers(response.data.items);
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
          unfollow={this.props.unfollow}
        />
      </>
    );
  } //end render
} // end UsersApiContainer
export default UsersApiContainer;

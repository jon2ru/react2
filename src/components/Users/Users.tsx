import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { UserType } from "../../types/types";
import Pagination from "../common/paginator/Pagination";
import User from "./User";
type PropsType = {
  users: Array<UserType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  followingInProgress: number[]
  onPageChanged: (pageNumber: number) => void //функция не возвращает ничего
  follow: (userId: number) => void
  unfollow: (userId: number) => void

}
let Users: FC<PropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users,
  ...props }) => {
  return <div>
      <UserSearchForm />
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
const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
} 
type userSerachFormType={
  term:string
}
//выше валидатор
const UserSearchForm = () => {
  const submit=(values:userSerachFormType, { setSubmitting }:{ setSubmitting:(isSubmitting:boolean )=>void})=>{

    setTimeout(() => {

      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);

    }, 400);
  }

  return <div>
    <Formik

      initialValues={{ term: ''}}

      validate={usersSearchFormValidate}
      onSubmit={submit}
       >

      {({ isSubmitting }) => (

        <Form>

          <Field type="text" name="term" />

          <button type="submit" disabled={isSubmitting}>

            Fiend

          </button>

        </Form>

      )}

    </Formik>

  </div>
}
export default Users;

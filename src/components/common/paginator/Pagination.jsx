import React from "react";
import styles from "./Paginator.module.css"

let Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //страниц=сколько всего юзеров/сколько показывать юзеров
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } //end for
  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && styles.selectedPage}
            //currentPage=выделяю жирным текущую страницу
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  )
};
//end Pagination
export default Pagination;

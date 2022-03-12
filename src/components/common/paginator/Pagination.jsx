import React,{useState} from "react";
import styles from "./Paginator.module.css"
import cn from "classnames";
//classnames Эта библиотека для простого условного объединения имен классов

let Pagination = ({totalItemsCount,pageSize, currentPage,onPageChanged,
   portionSize=10}) => {
  let pagesCount = Math.ceil(totalItemsCount /pageSize);
  //страниц=сколько всего юзеров/сколько показывать юзеров
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } //end for
  let portionCount=Math.ceil(pagesCount/portionSize)
  let [portionNumber,setPortionNumber]=useState(1);
  // useState-хук со старта порция 1 и 
  // функция setPortionNumber которая меняет номер порции
  let leftPortionPageNumber=(portionNumber-1)*portionSize+1
  let rightPortionPageNumber=portionNumber*portionSize
  return <div className={styles.paginator}>
{/* ниже показывай кнопку  PREV если portionNumber > 1 */}
  {portionNumber > 1 &&
  <button onClick={() =>{
    setPortionNumber(portionNumber-1)
  }}>PREV</button>}
   {pages
    .filter(p=> p>= leftPortionPageNumber&& p <= rightPortionPageNumber)
    .map((p) => {
        return (
          // <span
          //   className={currentPage === p && styles.selectedPage}
          //   //currentPage=выделяю жирным текущую страницу
          //   onClick={() => {
          //     onPageChanged(p);
          //   }}
          // >
          //   {p}
          // </span>
          <span className={ cn( {
            [styles.selectedPage] : currentPage === p },styles.pageNumber)}
            // если currentPage != p , то styles.selectedPage не применять- это 
            // библиотека classnames которая объединяет 2 класса selectedPage и pageNumber
            // pageNumber делает рамку, а selectedPage выделяет жирным текущую страницу
             //key={p}
             onClick={(e)=>{
              onPageChanged(p);
             }}
             >{p}</span>
        );
 } )}
 {portionCount >portionNumber&& <button onClick={() =>{
   setPortionNumber(portionNumber+1)
 }}>NEXT</button>}
    </div>
  
};
//end Pagination
export default Pagination;

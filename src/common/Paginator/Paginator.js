import React from 'react'
import s from './Paginator.module.css'
let Paginator = (props) =>{
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
        let pages = [

        ]
        for (let i = 1;i<= pagesCount; i++){
            pages.push(i)
        }
    return(
        <div>
            {pages.map(p =>{
                        return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChange(p);}}>{p}</span>
                    })}
        </div>
    )
}
export default Paginator
import React from 'react'
import s from './Users.module.css'
import Paginator from '../../common/Paginator/Paginator';
import User from './User.js/User';
let Users = (props) => {
    return (
        <div className={s.users}>

            <Paginator totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />

            <User
                users={props.users}
                unfollowThunk={props.unfollowThunk}
                followThunk={props.followThunk}
            />
        </div>
    )
}
export default Users
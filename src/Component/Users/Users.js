import React from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import *as axios from 'axios'
import { usersAPI } from '../../api/api';
import { follow, followThunk } from '../../Redux/users-reducer';
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
//{u.follow? <button onClick={()=>{
   //axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,
 //   headers:{
  //      'API-KEY' : '3df93c5c-81f2-4707-843a-1e9e1f64e8e6'
 //   }
 //  }).then(response=>{
 //      if(response.data.resultCode === 0){
 //          props.unfollow(u.id)
 //      }
 //  })
//}}>Unfollow</button> : <button onClick={()=>{
 //  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,
 //  headers:{
 //      'API-KEY' : '3df93c5c-81f2-4707-843a-1e9e1f64e8e6'
 //  }
//}).then(response=>{
   //    if(response.data.resultCode === 0){
   //        props.follow(u.id)
  //     }
//   })
//}}>Follow</button>}

export default Users
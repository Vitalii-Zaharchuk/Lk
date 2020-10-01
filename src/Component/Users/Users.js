import React from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import *as axios from 'axios'
import { usersAPI } from '../../api/api';
import { follow, followThunk } from '../../Redux/users-reducer';
let Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [

        ]
        for (let i = 1;i<= pagesCount; i++){
            pages.push(i)
        }
        debugger    
        
        return (
            <div className={s.users}>
                <div>
                    {pages.map(p =>{
                        return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChange(p);}}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div key={u.id} className={s.info}>
                <div >
                        <div className={s.iconFollow}>
                            <NavLink to={'/profile/' + u.id}><img src={u.photo} /></NavLink>
                            
                        </div>
                        <div className={s.follow}>
                        {u.follow? <button onClick={() =>{
                            props.unfollowThunk(u.id)
                        }}>Unfollow</button> : 
                        <button onClick={()=>{
                        props.followThunk(u.id)
                        }}>Follow</button>}
                        
                        </div>
                    </div>
                    <div className={s.nameStatus}>
                     <div>
                            <div>{u.name}</div> <div>{u.status}</div>
                    </div>
                        <div className={s.location}>
                            <div>{u.city}</div>
                            <div>{u.country}</div>
    
                        </div>
                    </div>
                </div>
    
    
                )}
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
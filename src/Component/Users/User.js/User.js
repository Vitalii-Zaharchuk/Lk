import React from 'react'
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
let User = (props) =>{
    return(
        <div>
            {props.users.map(u => <div key={u.id} className={s.info}>
                <div >
                    <div className={s.iconFollow}>
                        <NavLink to={'/profile/' + u.id}><img src={u.photo} /></NavLink>

                    </div>
                    <div className={s.follow}>
                        {u.follow ? <button onClick={() => {
                            props.unfollowThunk(u.id)
                        }}>Unfollow</button> :
                            <button onClick={() => {
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
export default User
import React from 'react'
import s from './Users.module.css'

let Users = (props) => {
    if(props.usersPage.users.length === 0){
        props.setUsers(
            [{id:1,photo:'https://blinmen.ru/wp-content/uploads/2011/09/user-profile.png',
    follow:true,name:'Dima',status:'I am looking a job',country:'USA',city:'Filadelfia'},
    {id:2,photo:'https://blinmen.ru/wp-content/uploads/2011/09/user-profile.png',
    follow:true,name:'Yra',status:'I am looking a job',country:'USA',city:'Filadelfia'},
    {id:3,photo:'https://blinmen.ru/wp-content/uploads/2011/09/user-profile.png',
    follow:true,name:'Igor',status:'I am looking a job',country:'USA',city:'Filadelfia'}
    ]
        )
    }
    return (
        <div className={s.users}>
            {props.usersPage.users.map(u => <div key={u.id} className={s.info}>
            <div >
                    <div className={s.iconFollow}>
                        <img src={u.photo} />
                    </div>
                    <div className={s.follow}>
                        {u.follow? <button onClick={()=>{props.follow(u.id)}}>Unfollow</button> 
                        : <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>}
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
export default Users
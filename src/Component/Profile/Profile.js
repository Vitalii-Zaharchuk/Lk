import React from 'react'
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe'
import MyPost from './MyPost/MyPost'
let Profile = (props) =>{
    
    return(
        <div className={s.profile}>
            <AboutMe/>
            <MyPost profilePage={props.state.profilePage}/>
        </div>
    )
}
export default Profile
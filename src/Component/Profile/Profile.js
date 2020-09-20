import React from 'react'
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe'

import MyPostContainer from './MyPost/MyPostContainer'
let Profile = (props) =>{
    
    return(
        <div className={s.profile}>
            <AboutMe/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}
export default Profile
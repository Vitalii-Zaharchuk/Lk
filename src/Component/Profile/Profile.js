import React from 'react'
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe'
import { Redirect } from 'react-router-dom';
import MyPostContainer from './MyPost/MyPostContainer'
let Profile = (props) =>{
    
    
    return(
        <div className={s.profile}>
            <AboutMe profile={props.profile} status={props.status} 
                        updateStatusThunk={props.updateStatusThunk}/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}
export default Profile
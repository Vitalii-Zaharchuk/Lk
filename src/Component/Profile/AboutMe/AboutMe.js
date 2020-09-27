import React from 'react'
import s from './AboutMe.module.css'
import ProfileStatus from './ProfileStatus'
let AboutMe = (props) =>{
    debugger
    if(!props.profile){
        return <h1>wef</h1>
    }
    return(
        <div className={s.aboutMe}>
            
            <div className={s.zastavka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5WVu-kUQPhpSAihzlDGXvLAEtkgixN1gcQg&usqp=CAU'/>
            </div>
            <div className={s.info}>
                <div  className={s.ava}>
                {props.profile.photos.small === null?
                <img src='https://lh3.googleusercontent.com/proxy/vUIKWJRSVTwsGtPm69khU1LPjrXm_5NYh2mtbeLUvk08wC-AxTBj-2NLRpSp9KMCDu165iriW0oOZhYy_4_NeFAAPo-JP3xtcvL6EunB_Qg'/> 
                : <img src={props.profile.photos.small}/>}
            
                </div>
                <div className={s.me}>
                {props.profile.fullName === null? <h1>Not name</h1>: <h1>{props.profile.fullName}</h1>}
                    
                    <h2>Madrid</h2>
                    <h2>22</h2>
                    <ProfileStatus status={props.status} 
                        updateStatusThunk={props.updateStatusThunk}/>
                </div>
            </div>
            
        </div>
    )
}
export default AboutMe
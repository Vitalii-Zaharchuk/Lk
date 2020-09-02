import React from 'react'
import s from './AboutMe.module.css'
let AboutMe = () =>{
    return(
        <div className={s.aboutMe}>
            <div className={s.zastavka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5WVu-kUQPhpSAihzlDGXvLAEtkgixN1gcQg&usqp=CAU'/>
            </div>
            <div className={s.info}>
                <div  className={s.ava}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkiyvPbpWyqRBwmDhxveBFLjtancIDOi3Dnw&usqp=CAU'/>
                </div>
                <div className={s.me}>
                    <h1>Bezus Igor</h1>
                    <h2>Madrid</h2>
                    <h2>22</h2>
                </div>
            </div>
        </div>
    )
}
export default AboutMe
import React from 'react'
import s from './Message.module.css'
import { NavLink } from 'react-router-dom';
let Message = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog' + props.id}>{props.name}</NavLink>
        )
    }
    let DialogElement = props.state.messagePage.dialogData.map(d =><DialogItem name={d.name} id={d.id}/>)
    return(
        <div className={s.message}>
            <div>
            {DialogElement}
            </div>
            <div className={s.dialog}>
                <div className={s.item}>Hello</div>
                <div className={s.item}>Hello</div>
                <div className={s.item}>Hello</div>
                <div className={s.item}>Hello</div>
                <textarea/>
                <button>Send</button>
            </div>
        </div>
    )

}
export default Message
import React from 'react'
import s from './Message.module.css'
import { NavLink } from 'react-router-dom';
import { addMessageAC, updateNewMessageTextAC } from '../../Redux/message-reducer';
let Message = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog' + props.id}>{props.name}</NavLink>
        )
    }
    let DialogElement = props.messagePage.dialogData.map(d =><DialogItem name={d.name} id={d.id}/>)
    let MessageItem = (props) =>{
        return(
        <div className={s.item} to={'/message' + props.id} >{props.message}</div>
        )
    }
    let MessageElement = props.messagePage.messageData.map(m=><MessageItem message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef()
    let addMessage = () =>{
        props.addMessage()
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }
    return(
        <div className={s.message}>
            <div>
            {DialogElement}
            </div>
            <div className={s.dialog}>
                {MessageElement}
                <textarea ref={newMessageElement} value={props.messagePage.newMessage} onChange={onMessageChange}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )

}
export default Message
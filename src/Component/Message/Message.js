import React from 'react'
import s from './Message.module.css'
import { NavLink,Redirect } from 'react-router-dom';
import { addMessageAC, updateNewMessageTextAC } from '../../Redux/message-reducer';
import { Field, reduxForm } from 'redux-form';
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
    let addMessageReduxForm = (value) =>{
         props.addMessage(value.addNewMessage)
    
    }
    
        
      

    
  
    return(
        <div className={s.message}>
            <div>
            {DialogElement}
            </div>
            <div className={s.dialog}>
                {MessageElement}
                <DialogReduxForm onSubmit={addMessageReduxForm}/>
            </div>
        </div>
    )

}
const DialogForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'addNewMessage'}/>
            <button>Send</button>
        </form>
    )
}
const DialogReduxForm = reduxForm({form:'dialog'})(DialogForm)
export default Message
//<textarea ref={newMessageElement} value={props.messagePage.newMessage} onChange={onMessageChange}/>
     //           <button onClick={addMessage}>Send</button>
import React from 'react'

import { addMessageAC, updateNewMessageTextAC } from '../../Redux/message-reducer';
import Message from './Message';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return{
        messagePage:state.messagePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage:() =>{
            dispatch(addMessageAC())
        },
        updateNewMessageText:(text) =>{
            let action = updateNewMessageTextAC(text)
            dispatch(action)
        }
    }
}
let MessageContainer = connect(mapStateToProps , mapDispatchToProps)(Message)
export default MessageContainer;
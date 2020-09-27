import React from 'react'

import { addMessageAC} from '../../Redux/message-reducer';
import Message from './Message';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from "react-router";
let MessageContainer = (props) =>{
    return(
        <div>
            <Message 
            messagePage={props.messagePage}
            addMessage={props.addMessage}
            />
        </div>
    )
}
let mapStateToProps = (state) =>{
    return{
        messagePage:state.messagePage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage:(addNewMessage) =>{
            dispatch(addMessageAC(addNewMessage))
        }
        
    }
}
let AuthRedirectComponent = withAuthRedirect(MessageContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect (mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent)
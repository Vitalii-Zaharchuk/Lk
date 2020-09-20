import React from 'react'
import { connect } from 'react-redux'

import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer'

import MyPost from './MyPost'


    
    
let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText:(text) =>{
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost:() =>{
            dispatch(addPostAC());
        }
    }
}
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps )(MyPost);
export default MyPostContainer;
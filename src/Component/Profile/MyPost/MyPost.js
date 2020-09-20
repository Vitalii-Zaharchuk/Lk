import React from 'react'

import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer'
import s from './MyPost.module.css'

let MyPost = (props) =>{
    
    let PostItem = (props) =>{
        return(
        <div to={'/post' + props.id}>{props.post}</div>
        )
    }
    let newPostElement = React.createRef()
    let PostElement = props.profilePage.post.map(p =><PostItem post={p.post} id={p.id}/>)
    let addPost = () =>{
        
        props.addPost()
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewPostTextAC(text))
    }
    return(
        <div className={s.myPost}>
            <h2>My post</h2>
            {PostElement}
            <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPost}></textarea>
            <button onClick={addPost}>Push</button>
        </div>
    )
}
export default MyPost
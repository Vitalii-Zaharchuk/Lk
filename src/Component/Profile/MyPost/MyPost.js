import React from 'react'
import s from './MyPost.module.css'

let MyPost = (props) =>{
    let PostItem = (props) =>{
        return(
        <div to={'/post' + props.id}>{props.post}</div>
        )
    }
    let PostElement = props.profilePage.post.map(p =><PostItem post={p.post} id={p.id}/>)
    return(
        <div className={s.myPost}>
            <h2>My post</h2>
            {PostElement}
            <textarea></textarea>
            <button>Push</button>
        </div>
    )
}
export default MyPost
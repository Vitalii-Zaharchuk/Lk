import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    post: [
        {id:1, post:'Godd'},
        {id:2, post:'Godd'},
        {id:3, post:'Godd'}
    ],
    newPost:'gf',
    profile:null,
    status:''
}
const profileReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 4,
                post:state.newPost
            }
            let stateCopy = {...state}
            stateCopy.post = [...state.post]
            stateCopy.post.push(newPost)
           // state.post.push(newPost)
            
            return stateCopy
        }    
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {
                ...state

            }
            stateCopy.newPost = action.newText
            
            return stateCopy
        }
        case SET_USERS_PROFILE:
            return{
                ...state,
                profile:action.profile
            } 
        case SET_STATUS:{
            return{
                ...state,
                status:action.status
            }  
        }        
        default:
            return state       
    }
       
}
export let addPostAC = () =>{
    return{
        type:'ADD-POST'
    }
}
export let updateNewPostTextAC = (newText) =>{
    return{
        type:'UPDATE-NEW-POST-TEXT',newText
    }
}
export let setUsersProfile = (profile) =>{
    return{
        type:'SET_USERS_PROFILE',profile
    }
}
export let setStatusAC = (status) =>{
    return{
        type:'SET_STATUS',status
    }
}
export const setStatusThunk = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
    .then(response=>{
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatusThunk = (status) => (dispatch)=>{
    profileAPI.updateStatus(status)
    .then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setStatusAC(status))
        }
    })
}
export default profileReducer;
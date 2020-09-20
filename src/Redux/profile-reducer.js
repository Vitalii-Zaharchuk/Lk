const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {
    post: [
        {id:1, post:'Godd'},
        {id:2, post:'Godd'},
        {id:3, post:'Godd'}
    ],
    newPost:'gf'
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
export default profileReducer;
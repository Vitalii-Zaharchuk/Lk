const FOLLOW ='FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
let initialState = {
    users:[]
    
}
let usersReducer = (state = initialState ,action) =>{
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return{...u,follow:true}
                        
                    }
                    return u
                })

            }
        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return{...u,follow:false}
                    }
                    return u
                })
            }  
        case SET_USERS:
            return{
                ...state,
                users:[...state.users,...action.users]
            }
         default:
             return state    
    }
}
export let followAC = (userId) =>{
    return{
        type:'FOLLOW',userId
    }
}
export let unfollowAC = (userId) =>{
    return{
        type:'UNFOLLOW',userId
    }
}
export let setUsersAC = (users) =>{
    return{
        type:'SET-USERS' ,users
    }
}
export default usersReducer
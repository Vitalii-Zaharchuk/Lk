import { usersAPI } from "../api/api"

const FOLLOW ='FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
let initialState = {
    users:[],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    
    
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
                users:action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage:action.currentPage
            }    
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount:action.totalUsersCount
            }    
         default:
             return state    
    }
}
export let follow = (userId) =>{
    return{
        type:'FOLLOW',userId
    }
}
export let unfollow = (userId) =>{
    return{
        type:'UNFOLLOW',userId
    }
}
export let setUsers = (users) =>{
    return{
        type:'SET-USERS' ,users
    }
}
export let setCurrentPage = (currentPage) =>{
    return{
        type:'SET-CURRENT-PAGE',currentPage
    }
}
export let setTotalUsersCount = (totalUsersCount) =>{
    return{
        type:'SET-TOTAL-USERS-COUNT',totalUsersCount
    }
}
export const getUsersThunk = (currentPage,pageSize)=>{
    return(dispatch) =>{
        usersAPI.getUsers(currentPage,pageSize).then(data =>{
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const followThunk = (userId) =>{
    return (dispatch) =>{
        usersAPI.follow(userId).then(data=>{
            if(data.resultCode === 0){
                dispatch(follow(userId))
            }
        })
    }
}
export const unfollowThunk = (userId) =>{
    return (dispatch)=>{
        usersAPI.unfollow(userId).then(data=>{
            if(data.resultCode === 0){
                dispatch(unfollow(userId));
            }
        })
    }
}
export default usersReducer
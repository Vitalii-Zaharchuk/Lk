import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
let initialState = {
    id:null,
    login:null,
    email:null,
    
    isAuth:false
}
let authReducer = (state = initialState,action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
                
            }
        default: 
        return state    
    }
}

export let setUserData = (id,email,login,isAuth) =>{
    return{
        type:'SET_USER_DATA',payload:{id,email,login,isAuth}
    }
}
export const authMeThunk = () =>{
    return (dispatch) =>{
        return authAPI.me()
        .then(response =>{
            if(response.data.resultCode === 0){
                let {id,email,login} = response.data.data
                dispatch(setUserData(id,email,login,true))
            }
        })
    }
}
export const loginThunk = (email,password,rememberMe) =>{
    return (dispatch) =>{
        authAPI.login(email,password,rememberMe)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(authMeThunk())
            }
            else{
                let messages = response.data.messages.length > 0?
                response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{email:messages}))
            }
        })
    }
}
export const logoutThunk = () =>{
    return (dispatch) =>{
        authAPI.logout()
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(authMeThunk(null,null,null,false))
            }
        })
    }
}
export default authReducer
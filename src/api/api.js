import *as axios from 'axios'
import { setUserData } from '../Redux/auth-reducer'
const instunce = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY": "17342be6-466e-4833-9107-a0b5d7c39767"
    }
})
export const getUsers = (currentPage,pageSize) =>{
    return instunce.get(`users?page=${currentPage}&count=${pageSize}`
    ,{withCredentials:true})
    .then(response=>{
        return response.data
    })
}
export const usersAPI = {
    getUsers(currentPage,pageSize){
        return instunce.get(`users?page=${currentPage}&count=${pageSize}`
        ,{withCredentials:true})
        .then(response=>{
            return response.data
        })
    },
    follow(userId){
        return  instunce.post(`follow/${userId}`,{}
       )
       .then(response=>{
        return response.data
    })
        
    },
    unfollow(userId){
        return instunce.delete(`follow/${userId}`
       )
       .then(response=>{
        return response.data
    })
    }
    
}
export const profileAPI = {
    getStatus(userId){
        return instunce.get('profile/status' + userId)
    },
    updateStatus(status){
        return instunce.put('profile/status',{status:status})
    }
}
export const authAPI ={
    me(){
        return instunce.get('auth/me')
    },
    login(email,password,rememberMe){
        return instunce.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instunce.delete(`auth/login`)
    }
   
}
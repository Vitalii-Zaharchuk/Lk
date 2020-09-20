import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../Redux/users-reducer'
import Users from './Users'
import s from './Users.module.css'
let mapStateToProps = (state) =>{
    return{
        usersPage:state.usersPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) =>{
            dispatch(setUsersAC(users))
        }
    }
}
let UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer
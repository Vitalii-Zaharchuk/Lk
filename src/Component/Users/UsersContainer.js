import React from 'react'
import { connect } from 'react-redux'
import {  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, getUsersThunk, followThunk,unfollowThunk } from '../../Redux/users-reducer'
import Users from './Users'
class UsersContainer extends React.Component{
    componentDidMount(){
        
            this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)
            
        
    }
    onPageChange = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunk(pageNumber,this.props.pageSize)
    }
    render(){

        
        return (
            <Users usersPage={this.props.usersPage}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk}
                    
            />            
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        usersPage:state.usersPage,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

export default  connect (mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,getUsersThunk,followThunk,unfollowThunk})(UsersContainer)

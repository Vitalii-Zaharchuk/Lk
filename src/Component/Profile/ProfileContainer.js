import *as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setStatusThunk, setUsersProfile, updateStatusThunk } from '../../Redux/profile-reducer'
import { withRouter } from "react-router";
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component{
    componentDidMount(){
        
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9017
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response=>{
            this.props.setUsersProfile(response.data)
        })
        this.props.setStatusThunk(userId)
    }
    render(){
        return(
            <div>
                <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatusThunk={this.props.updateStatusThunk}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth,
        status:state.profilePage.status

    }
    
}


export default compose(
    connect (mapStateToProps,{setUsersProfile,setStatusThunk,updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

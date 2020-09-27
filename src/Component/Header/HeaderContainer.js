import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Header from './Header';
import *as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../Redux/auth-reducer';
class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(response=>{
        if(response.data.resultCode === 0){
            let{id,email,login} = response.data.data;
            this.props.setUserData(id,email,login)
        }
        })
    }
    render(){
        return(
            <div className={s.header}>  
                    <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    />
              
            </div>
        )
    }
}
let mapStateToProps = (state) =>{
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
export default connect(mapStateToProps,{setUserData})(HeaderContainer)

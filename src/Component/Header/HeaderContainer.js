  
import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Header from './Header';
import *as axios from 'axios';
import { connect } from 'react-redux';
import { authMeThunk, setUserData ,logoutThunk} from '../../Redux/auth-reducer';
class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authMeThunk()
        
    
    }
    render(){
        return(
            <div className={s.header}>  
                    <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    logoutThunk={this.props.logoutThunk}
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

export default connect(mapStateToProps,{authMeThunk,logoutThunk})(HeaderContainer)

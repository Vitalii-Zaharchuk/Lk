import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { loginThunk } from '../../Redux/auth-reducer'
import s from './Login.module.css'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
let Login = (props) =>{
    
    const onSubmit = (formData) =>{
        props.loginThunk(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return(
        <div className={s.login}>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) =>{
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{loginThunk})(Login)
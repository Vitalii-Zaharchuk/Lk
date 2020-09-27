import React from 'react'
import { reduxForm } from 'redux-form'
import s from './Login.module.css'
import LoginForm from './LoginForm'
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
let Login = () =>{
    const onSubmit = (formData) =>{
        console.log('s')
    }
    return(
        <div className={s.login}>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;
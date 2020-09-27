import React from 'react'
import { Field } from 'redux-form';
let LoginForm = (props) =>{
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
            <div>
                 <Field component={'input'} name={'login'} placeholder={'Login'}/>
                
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
                
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'checkbox'}/> remember me
                 
            </div>
            <div>
                <button>Login</button>
            </div>
            </form>
             
        </div>
    )
}
export default LoginForm;
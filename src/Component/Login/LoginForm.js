import React from 'react'
import { Field } from 'redux-form';
import { Textarea } from '../../common/FormControl';
import { required } from '../../utils/validator/validators';
let LoginForm = (props) =>{
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
            <div>
                 <Field component={Textarea} name={'email'} placeholder={'email'} validate={[required]}/>
                
            </div>
            <div>
                <Field component={Textarea} name={'password'} placeholder={'Password'}  type={'password'}/>
                
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'checkbox'}/> remember me
                 
            </div>
                {props.error && <div>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
            </form>
             
        </div>
    )
}
export default LoginForm;
import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
let Header = (props) =>{
   
    return(
        <div className={s.header}>  
                <div className={s.logo}>
                <h1>Lk</h1>
                </div>
                
                
                <div className={s.loginBlock}>
                
                    {props.isAuth?
                    <div>{props.login}  <button onClick={props.logoutThunk}>LogOut</button>  </div>: <NavLink to={'/login'}>Login</NavLink>}
                    
                </div>
          
        </div>
    )
}
export default Header
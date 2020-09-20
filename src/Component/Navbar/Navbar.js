import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
let Navbar = () =>{
    return(
        <div className={s.navbar}>
            
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/message'>Message</NavLink>
            </div>
            <div>
                <NavLink to='/users'>Users</NavLink>
            </div>
            
        </div>
    )
}
export default Navbar
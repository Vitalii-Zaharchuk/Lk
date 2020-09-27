import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import { Route } from 'react-router-dom';

import Message from './Component/Message/Message';
import MessageContainer from './Component/Message/MessageContainer';

import UsersContainer from './Component/Users/UsersContainer';
import ProfileContainer from './Component/Profile/ProfileContainer';
import HeaderContainer from './Component/Header/HeaderContainer';
import Login from './Component/Login/Login';
function App(props) {
  
  return (
    
    <div className="App">
        <HeaderContainer/>
        <div className='info'>
          
          <Navbar/>
          <Route path='/profile/:userId?' render={() =><ProfileContainer store={props.store}/>}/>
          <Route path='/message' render={()=><MessageContainer store={props.store}/>}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
          <Route path='/login' render={()=><Login/>}/>
        </div>
    </div>
    
  );
}

export default App;

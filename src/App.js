import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import { Route } from 'react-router-dom';

import Message from './Component/Message/Message';
import MessageContainer from './Component/Message/MessageContainer';

import UsersContainer from './Component/Users/UsersContainer';
function App(props) {
  
  return (
    
    <div className="App">
        <Header/>
        <div className='info'>
          
          <Navbar/>
          <Route path='/profile' render={() =><Profile store={props.store}/>}/>
          <Route path='/message' render={()=><MessageContainer store={props.store}/>}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
          
        </div>
    </div>
    
  );
}

export default App;

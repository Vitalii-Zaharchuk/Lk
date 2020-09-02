import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import { Route } from 'react-router-dom';
import {  BrowserRouter } from 'react-router-dom';
import Message from './Component/Message/Message';
function App(props) {
  debugger
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <div className='info'>
          
          <Navbar/>
          <Route path='/profile' render={() =><Profile state={props.state}/>}/>
          <Route path='/message' render={()=><Message state={props.state}/>}/>
          
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

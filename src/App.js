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
import { connect } from 'react-redux';
import { authMeThunk } from './Redux/auth-reducer';
import { compose } from 'redux';
import { initializedAPPThunk } from './Redux/app-reducer';

  
 

class App extends React.Component{
  componentDidMount(){
    this.props.initializedAPPThunk()
    

}
  render(){
    if(!this.props.initialized){
      return <h1>Gf</h1>
    }
    return (
    
      <div className="App">
          <HeaderContainer/>
          <div className='info'>
            
            <Navbar/>
            <Route path='/profile/:userId?' render={() =><ProfileContainer />}/>
            <Route path='/message' render={()=><MessageContainer />}/>
            <Route path='/users' render={()=><UsersContainer/>}/>
            <Route path='/login' render={()=><Login/>}/>
          </div>
      </div>
      
    );
  }
}
let mapStateToProps = (state) =>{
  return{
    initialized:state.app.initialized
  }
}
export default  compose(
  connect(mapStateToProps,{initializedAPPThunk})
)(App)

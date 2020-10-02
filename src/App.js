import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route } from 'react-router-dom';
import HeaderContainer from './Component/Header/HeaderContainer';
import Login from './Component/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializedAPPThunk } from './Redux/app-reducer';
const MessageContainer = React.lazy(() => import('./Component/Message/MessageContainer'))
const ProfileContainer = React.lazy(() => import('./Component/Profile/ProfileContainer'))
const UsersContainer = React.lazy(()=> import('./Component/Users/UsersContainer'))  
 

class App extends React.Component{
  componentDidMount(){
    this.props.initializedAPPThunk()
    

}
  render(){
    
    return (
    
      <div className="App">
          <HeaderContainer/>
          <div className='info'>
            
            <Navbar/>
            <Route path='/profile/:userId?' render={() =>{
              return <React.Suspense fallback={<div>Login ...</div>}>
                <ProfileContainer/>
              </React.Suspense>
            }}/>
            <Route path='/message' render={()=>{
              return <React.Suspense fallback={<div>Login...</div>}>
                <MessageContainer/>
              </React.Suspense>
            }}/>
            <Route path='/users' render={()=>{
              return <React.Suspense fallback={<div>Loading...</div>}>
                <UsersContainer/>
              </React.Suspense>
            }}/>
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

import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './auth-reducer';
import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
let reducers = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store;
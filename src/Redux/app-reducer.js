
import { authMeThunk } from "./auth-reducer"

const SET_INITIALZED = 'SET_INITIALZED'
let initialState = {
    initialized:false
}
let appReducer = (state = initialState,action)=>{
    switch(action.type){
        case SET_INITIALZED:
            return{
                ...state,
                initialized:true
            }
        default:
            return state
    }
}
export const initializedSuccess = () =>{
    return{
        type:'SET_INITIALZED'
    }
}
export const initializedAPPThunk = () =>{
    return (dispatch) =>{
        let promise = dispatch(authMeThunk())
        Promise.all([promise]).
        then(()=>{
            dispatch(initializedSuccess())
        })
    }
}
export default appReducer
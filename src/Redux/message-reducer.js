const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {
    dialogData:[
        {id:1 , name:'Andriy'},
        {id:2 , name:'Igor'},
        {id:3 , name:'Sasha'},
        {id:4 , name:'Dima'}
    ],
    messageData: [
        {id:1, message:'Hello'},
        {id:2, message:'Bad'},
        {id:3, message:'All'},
        {id:4, message:'good'}
    ],
    newMessage:'ds'
}
const messageReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id:5,
                message:state.newMessage
                }
                let stateCopy = {...state,
                    messageData:[...state.messageData]
                }
                stateCopy.messageData.push(newMessage)
                
                return stateCopy
            }       
         case UPDATE_NEW_MESSAGE_TEXT:{
             let stateCopy = {
                 ...state
             }
            stateCopy.newMessage = action.newText;
            
            return stateCopy
            
         }   
         default:
            return state     
    }
}
export let addMessageAC = () =>{
    return{
        type:'ADD-MESSAGE'
    }
}
export let updateNewMessageTextAC = (newText) =>{
    return{
        type:'UPDATE-NEW-MESSAGE-TEXT',newText
    }
}
export default messageReducer
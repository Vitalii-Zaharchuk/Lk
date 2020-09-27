const ADD_MESSAGE = 'ADD-MESSAGE'


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
    ]
    
}
const messageReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id:5,
                message:action.addNewMessage
                }
                return{
                    ...state,
                    messageData:[...state.messageData,newMessage]
                
                }
                
            }       
         
         default:
            return state     
    }
}
export let addMessageAC = (addNewMessage) =>{
    return{
        type:'ADD-MESSAGE',addNewMessage
    }
}


export default messageReducer
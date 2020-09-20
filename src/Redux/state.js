import messageReducer from "./message-reducer"
import profileReducer from './profile-reducer'

let store = {
    _state:{
        profilePage:{
            post: [
                {id:1, post:'Godd'},
                {id:2, post:'Godd'},
                {id:3, post:'Godd'}
            ],
            newPost:'gf'
        },
        messagePage:{
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
    },
    getState(){
        return this._state
    },
    rerenderEntireTree  () {
        console.log('efde')
    },
    subscribe  (observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = messageReducer(this._state.messagePage,action)
        this.rerenderEntireTree(this._state)
    }
    
    

}




export default store;
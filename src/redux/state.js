import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'Hi, how are you?', likeCounter: 12 },
                { message: 'It\'s my first post', likeCounter: 15 }
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                { id: 'id1', name: 'Alexander' },
                { id: 'id2', name: 'Anna' },
                { id: 'id3', name: 'Ivan' },
                { id: 'id4', name: 'Oleg' },
                { id: 'id5', name: 'Dmitriy' },
                { id: 'id6', name: 'Ekaterina' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' }
            ],
            newMessageBody: ''
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer   // pattern observer 
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store
window.store = store   //temporarily
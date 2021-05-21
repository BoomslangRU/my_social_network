const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'


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
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
        this._state.profilePage.newPostText = ''
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addMessage() {
        let body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.messages.push({ id: 6, message: body })
        this._callSubscriber(this._state)
        this._state.dialogsPage.newMessageBody = ''
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageBody = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer   // pattern observer 
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            this._addPost()
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._updateNewPostText(action.newText)
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._updateNewMessageText(action.body)
        } else if (action.type === 'SEND_MESSAGE') {
            this._addMessage()
        }
    }
}

export const addPostActionCreation = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreation = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreation = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
})



export default store

window.store = store   //temporarily
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
            ]
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
        this._callSubscriber()
        this._state.profilePage.newPostText = ''
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer   // pattern observer 
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
    }
}

export default store

window.store = store   //temporarily
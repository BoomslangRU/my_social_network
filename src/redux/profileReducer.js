const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        { message: 'Hi, how are you?', likeCounter: 12 },
        { message: 'It\'s my first post', likeCounter: 15 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            let stateCopy = { ...state }
            stateCopy.posts = { ...state.posts }
            debugger
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case (UPDATE_NEW_POST_TEXT): {
            let stateCopy = { ...state }
            stateCopy.newPostText = { ...state.newPostText }
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreation = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreation = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer
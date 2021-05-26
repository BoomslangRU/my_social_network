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
        case (ADD_POST):
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case (UPDATE_NEW_POST_TEXT):
            return ({                //VS Code throws an error if without parentheses
                ...state,
                newPostText: action.newText
            })
        default:
            return state
    }
}

export const addPostActionCreation = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreation = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer
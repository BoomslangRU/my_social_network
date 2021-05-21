const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case (ADD_POST):
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case (UPDATE_NEW_POST_TEXT):
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreation = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreation = (text) => ({
    type: 'UPDATE_NEW_POST_TEXT', newText: text
})

export default profileReducer
import { ProfileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_TEXT_STATUS = 'SET_TEXT_STATUS'

const initialState = {
    posts: [
        { message: 'Hi, how are you?', likeCounter: 12 },
        { message: 'It\'s my first post', likeCounter: 15 }
    ],
    newPostText: '',
    profile: null,
    usersStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText }
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        case SET_TEXT_STATUS:
            return { ...state, usersStatus: action.text }
        default:
            return state
    }
}

// Action Creations
const setTextStatus = (text) => ({ type: SET_TEXT_STATUS, text })
const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const addPostActionCreation = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreation = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


// Thunk Creation
export const getProfile = (userID) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}
export const getTextStatus = (userID) => {
    return (dispatch) => {
        ProfileAPI.getUserStatus(userID)
            .then(data => {
                dispatch(setTextStatus(data))
            })
    }
}
export const updateTextStatus = (text) => {
    return (dispatch) => {
        ProfileAPI.updateUserStatus(text)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setTextStatus(text))
                }
            })
    }
}

export default profileReducer
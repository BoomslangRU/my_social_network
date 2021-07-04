import { ProfileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'profileReducer/SET_USERS_PROFILE'
const SET_TEXT_STATUS = 'profilePage/SET_TEXT_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCounter: 12 },
        { id: 2, message: 'It\'s my first post', likeCounter: 15 }
    ],
    profile: null,
    usersStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postText,
                likeCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        case SET_TEXT_STATUS:
            return { ...state, usersStatus: action.text }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id !== action.postID) }
        default:
            return state
    }
}

// Action Creations
const setTextStatus = (text) => ({ type: SET_TEXT_STATUS, text })
const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const onAddPost = (postText) => ({ type: ADD_POST, postText })
export const deletePost = (postID) => ({ type: DELETE_POST, postID })


// Thunk Creation
export const getProfile = (userID) => async (dispatch) => {
    const response = await ProfileAPI.getProfile(userID)
    dispatch(setUsersProfile(response))
}
export const getTextStatus = (userID) => async (dispatch) => {
    const response = await ProfileAPI.getUserStatus(userID)
    dispatch(setTextStatus(response))
}
export const updateTextStatus = (text) => async (dispatch) => {
    const response = await ProfileAPI.updateUserStatus(text)
    if (response.resultCode === 0) {
        dispatch(setTextStatus(text))
    }
}

export default profileReducer
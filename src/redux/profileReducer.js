import { ProfileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'profileReducer/SET_USERS_PROFILE'
const SET_TEXT_STATUS = 'profilePage/SET_TEXT_STATUS'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_PHOTO_SUCCESS = 'profilePage/SET_PHOTO_SUCCESS'
const SET_GLOBAL_ERROR = 'profilePage/SET_GLOBAL_ERROR'

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCounter: 12 },
        { id: 2, message: 'It\'s my first post', likeCounter: 15 }
    ],
    profile: null,
    usersStatus: '',
    globalError: 'test text error'
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
        case SET_GLOBAL_ERROR:
            return { ...state, globalError: action.error }
        case SET_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos.data.photos } }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id !== action.postID) }
        default:
            return state
    }
}

// Action Creators
const setTextStatus = (text) => ({ type: SET_TEXT_STATUS, text })
const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
const setPhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos })
export const setGlobalError = (error) => ({ type: SET_GLOBAL_ERROR, error })
export const onAddPost = (postText) => ({ type: ADD_POST, postText })
export const deletePost = (postID) => ({ type: DELETE_POST, postID })


// Thunk Creators
export const getProfile = (userID) => async (dispatch) => {
    const response = await ProfileAPI.getProfile(userID)
    dispatch(setUsersProfile(response))
}
export const getTextStatus = (userID) => async (dispatch) => {
    const response = await ProfileAPI.getUserStatus(userID)
    dispatch(setTextStatus(response))
}
export const updateTextStatus = (text) => async (dispatch) => {
    try {
        const response = await ProfileAPI.updateUserStatus(text)
        if (response.resultCode === 0) {
            dispatch(setTextStatus(text))
        }
    } catch (error) {
        dispatch(setGlobalError(error))
    }
}
export const savePhoto = (filePhoto) => async (dispatch) => {
    const response = await ProfileAPI.savePhoto(filePhoto)
    if (response.resultCode === 0) {
        dispatch(setPhotoSuccess(response))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await ProfileAPI.saveProfile(profile)
    if (response.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        return Promise.reject(response.messages[0])
    }
}

export default profileReducer
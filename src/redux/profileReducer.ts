import { ProfileAPI } from '../api/api'
import { photosType, postsType, profileType } from '../types/types'

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
	] as Array<postsType>,
	profile: null as profileType | null,
	usersStatus: '',
	globalError: null
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
			return { ...state, profile: { ...state.profile, photos: action.photos.data.photos } as profileType }
		case DELETE_POST:
			return { ...state, posts: state.posts.filter(p => p.id !== action.postID) }
		default:
			return state
	}
}

// Action Creators
type setTextStatusActionType = {
	type: typeof SET_TEXT_STATUS
	text: string
}
type setUsersProfileActionType = {
	type: typeof SET_USERS_PROFILE
	profile: null | profileType
}
type setPhotoSuccessActionType = {
	type: typeof SET_PHOTO_SUCCESS
	photos: null | photosType
}
export type setGlobalErrorActionType = {
	type: typeof SET_GLOBAL_ERROR
	error: string
}
export type onAddPostActionType = {
	type: typeof ADD_POST
	postText: string
}
export type deletePostActionType = {
	type: typeof DELETE_POST
	postID: number
}

const setTextStatus = (text: string)
	: setTextStatusActionType => ({ type: SET_TEXT_STATUS, text })
const setUsersProfile = (profile: null | profileType)
	: setUsersProfileActionType => ({ type: SET_USERS_PROFILE, profile })
const setPhotoSuccess = (photos: null | photosType)
	: setPhotoSuccessActionType => ({ type: SET_PHOTO_SUCCESS, photos })
export const setGlobalError = (error: string)
	: setGlobalErrorActionType => ({ type: SET_GLOBAL_ERROR, error })
export const onAddPost = (postText: string)
	: onAddPostActionType => ({ type: ADD_POST, postText })
export const deletePost = (postID: number)
	: deletePostActionType => ({ type: DELETE_POST, postID })


// Thunk Creators
export const getProfile = (userID: number) => async (dispatch: any) => {
	try {
		const response = await ProfileAPI.getProfile(userID)
		dispatch(setUsersProfile(response))
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const getTextStatus = (userID: number) => async (dispatch: any) => {
	try {
		const response = await ProfileAPI.getUserStatus(userID)
		dispatch(setTextStatus(response))
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const updateTextStatus = (text: string) => async (dispatch: any) => {
	try {
		const response = await ProfileAPI.updateUserStatus(text)
		if (response.resultCode === 0) {
			dispatch(setTextStatus(text))
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const savePhoto = (filePhoto: any) => async (dispatch: any) => {
	try {
		const response = await ProfileAPI.savePhoto(filePhoto)
		if (response.resultCode === 0) {
			dispatch(setPhotoSuccess(response))
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
	try {
		const userId = getState().auth.id
		const response = await ProfileAPI.saveProfile(profile)
		if (response.resultCode === 0) {
			dispatch(getProfile(userId))
		} else {
			return Promise.reject(response.messages[0])
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}

export default profileReducer
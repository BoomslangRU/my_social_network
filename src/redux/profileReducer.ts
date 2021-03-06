import { ThunkAction } from 'redux-thunk'
import { resultCodeEnum } from '../api/api'
import { ProfileAPI } from '../api/profileAPI'
import { photosType, postsType, profileType } from '../types/types'
import { RootStore } from './storeRedux'


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
	globalError: null as string | null,
	usersStatus: ''
}
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: actionsTypes): initialStateType => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
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
			debugger
			return { ...state, profile: { ...state.profile, photos: action.photos } as profileType }
		case DELETE_POST:
			return { ...state, posts: state.posts.filter(p => p.id !== action.postID) }
		default:
			return state
	}
}

// Action Creators
type actionsTypes = setTextStatusActionType | setUsersProfileActionType | setPhotoSuccessActionType
	| setGlobalErrorActionType | onAddPostActionType | deletePostActionType

type setTextStatusActionType = {
	type: typeof SET_TEXT_STATUS
	text: string
}
const setTextStatus = (text: string)
	: setTextStatusActionType => ({ type: SET_TEXT_STATUS, text })

type setUsersProfileActionType = {
	type: typeof SET_USERS_PROFILE
	profile: profileType
}
const setUsersProfile = (profile: profileType)
	: setUsersProfileActionType => ({ type: SET_USERS_PROFILE, profile })

type setPhotoSuccessActionType = {
	type: typeof SET_PHOTO_SUCCESS
	photos: photosType
}
const setPhotoSuccess = (photos: photosType)
	: setPhotoSuccessActionType => ({ type: SET_PHOTO_SUCCESS, photos })

export type setGlobalErrorActionType = {
	type: typeof SET_GLOBAL_ERROR
	error: string | null
}
export const setGlobalError = (error: string | null)
	: setGlobalErrorActionType => ({ type: SET_GLOBAL_ERROR, error })

export type onAddPostActionType = {
	type: typeof ADD_POST
	postText: string
}
export const onAddPost = (postText: string)
	: onAddPostActionType => ({ type: ADD_POST, postText })

export type deletePostActionType = {
	type: typeof DELETE_POST
	postID: number
}
export const deletePost = (postID: number)
	: deletePostActionType => ({ type: DELETE_POST, postID })


// Thunk Creators
type thunkAction = ThunkAction<Promise<void>, RootStore, unknown, actionsTypes>

export const getProfile = (userID: number): thunkAction => async (dispatch) => {
	try {
		const data = await ProfileAPI.getProfile(userID)
		dispatch(setUsersProfile(data))
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const getTextStatus = (userID: number): thunkAction => async (dispatch) => {
	try {
		const data = await ProfileAPI.getUserStatus(userID)
		dispatch(setTextStatus(data))
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const updateTextStatus = (text: string): thunkAction => async (dispatch) => {
	try {
		const data = await ProfileAPI.updateUserStatus(text)
		if (data.resultCode === resultCodeEnum.Success) {
			dispatch(setTextStatus(text))
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const savePhoto = (filePhoto: any): thunkAction => async (dispatch) => {
	try {
		const data = await ProfileAPI.savePhoto(filePhoto)
		if (data.resultCode === resultCodeEnum.Success) {
			dispatch(setPhotoSuccess(data.data.photos))
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}
export const saveProfile = (profile: profileType): thunkAction => async (dispatch, getState: any) => {
	try {
		const userId = getState().auth.id
		const data = await ProfileAPI.saveProfile(profile)
		if (data.resultCode === resultCodeEnum.Success) {
			dispatch(getProfile(userId))
		} else {
			return Promise.reject(data.messages[0])
		}
	} catch (error: any) {
		dispatch(setGlobalError(error.message))
	}
}

export default profileReducer